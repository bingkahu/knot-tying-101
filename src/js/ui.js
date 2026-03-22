import { knots } from './data.js';
import { state, updateLearned, updateFavorites, updateTheme } from './state.js';
import { showToast, debounce, escapeHtml, updateProgressBar } from './utils.js';
import { checkAchievements, renderAchievements } from '../achievements.js';
import { confetti } from './confetti.js';

let currentFilter = { search: '', difficulty: 'all', tag: 'all', sort: 'alpha' };
let currentKnotId = null;

function initUI() {
    updateTheme(state.theme);
    updateProgressBar();
    checkAchievements();
    setupEventListeners();
    renderKnots();
    renderAchievements();
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        updateTheme(state.theme === 'dark' ? 'light' : 'dark');
    });

    // Achievements button
    document.getElementById('achievementsBtn').addEventListener('click', () => {
        const modal = document.getElementById('achievementsModal');
        modal.classList.add('show');
        renderAchievements();
    });

    // Search and filters
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debounce(handleSearch, 300));

    ['difficultyFilter', 'tagFilter', 'sortOption'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            currentFilter[id.replace('Filter', '')] = document.getElementById(id).value;
            renderKnots();
        });
    });

    // Modal events
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('achievementsModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('show');
    });
    document.getElementById('closeAchieveModal').addEventListener('click', () => {
        document.getElementById('achievementsModal').classList.remove('show');
    });
}

function handleSearch() {
    currentFilter.search = document.getElementById('searchInput').value.toLowerCase();
    renderKnots();
}

function closeModal() {
    document.getElementById('knotModal').classList.remove('show');
    currentKnotId = null;
}

function renderKnots(filteredKnots = getFilteredKnots()) {
    const grid = document.getElementById('knotGrid');
    grid.innerHTML = filteredKnots.map(knot => createKnotCard(knot)).join('');
}

function getFilteredKnots() {
    return knots.filter(knot => {
        const matchesSearch = knot.name.toLowerCase().includes(currentFilter.search) || 
                              knot.desc.toLowerCase().includes(currentFilter.search);
        const matchesDifficulty = currentFilter.difficulty === 'all' || knot.difficulty === currentFilter.difficulty;
        const matchesTag = currentFilter.tag === 'all' || knot.tags.includes(currentFilter.tag);
        return matchesSearch && matchesDifficulty && matchesTag;
    }).sort((a, b) => {
        switch (currentFilter.sort) {
            case 'difficulty':
                return a.difficulty.localeCompare(b.difficulty);
            case 'status':
                const learnedA = state.learned.includes(a.id) ? 0 : 1;
                const learnedB = state.learned.includes(b.id) ? 0 : 1;
                return learnedA - learnedB;
            default:
                return a.name.localeCompare(b.name);
        }
    });
}

function createKnotCard(knot) {
    const isLearned = state.learned.includes(knot.id);
    const isFav = state.favorites.includes(knot.id);
    const tagsHtml = knot.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    return `
        <div class="knot-card" data-knot="${knot.id}" tabindex="0">
            <div class="card-header">
                <div class="difficulty-badge">${knot.difficulty}</div>
                <div class="card-actions">
                    <button class="fav-btn ${isFav ? 'active' : ''}" data-action="fav" aria-label="${isFav ? 'Remove from' : 'Add to'} favorites">❤️</button>
                    <button class="learned-btn ${isLearned ? 'active' : ''}" data-action="learned" aria-label="${isLearned ? 'Unmark as' : 'Mark as'} learned">✓</button>
                </div>
            </div>
            <h3>${escapeHtml(knot.name)}</h3>
            <p>${escapeHtml(knot.desc)}</p>
            <div class="card-tags">${tagsHtml}</div>
        </div>
    `;
}

function showKnotModal(knotId) {
    const knot = knots.find(k => k.id === knotId);
    if (!knot) return;

    document.getElementById('modalTitle').textContent = knot.name;
    document.getElementById('modalDesc').innerHTML = escapeHtml(knot.desc);
    document.getElementById('modalBadges').innerHTML = `<span class="difficulty-badge">${knot.difficulty}</span> ${knot.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}`;
    document.getElementById('modalSteps').innerHTML = knot.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('');
    
    ['uses', 'mistakes', 'safety', 'vars'].forEach(field => {
        const el = document.getElementById('modal' + field.charAt(0).toUpperCase() + field.slice(1));
        el.textContent = knot[field] || 'N/A';
    });

    document.getElementById('markLearnedBtn').textContent = state.learned.includes(knot.id) ? 'Mark as Not Learned' : 'Mark as Learned';
    document.getElementById('modalFavBtn').textContent = state.favorites.includes(knot.id) ? '💖' : '🤍';
    document.getElementById('modalFavBtn').className = `fav-btn ${state.favorites.includes(knot.id) ? 'active' : ''}`;

    currentKnotId = knot.id;
    document.getElementById('knotModal').classList.add('show');
}

document.addEventListener('click', (e) => {
    const card = e.target.closest('.knot-card');
    if (card) {
        showKnotModal(card.dataset.knot);
        return;
    }

    const btn = e.target.closest('[data-action]');
    if (btn) {
        const knotId = btn.closest('[data-knot]')?.dataset.knot || currentKnotId;
        if (!knotId) return;

        const knot = knots.find(k => k.id === knotId);
        if (!knot) return;

        const action = btn.dataset.action;
        if (action === 'learned') {
            const wasLearned = state.learned.includes(knotId);
            if (updateLearned(knotId, !wasLearned)) {
                btn.classList.toggle('active');
                updateProgressBar();
                checkAchievements();
                showToast(wasLearned ? 'Forgotten 😢' : 'Learned! 🎉');
            }
        } else if (action === 'fav') {
            updateFavorites(knotId, !state.favorites.includes(knotId));
            btn.classList.toggle('active');
            document.getElementById('modalFavBtn')?.classList.toggle('active');
            document.getElementById('modalFavBtn')?.textContent = state.favorites.includes(knotId) ? '💖' : '🤍';
        }
    }
});

export { initUI };

