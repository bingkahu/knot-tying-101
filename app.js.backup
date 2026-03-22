// --- STATE MANAGEMENT ---
let state = {
    learned: JSON.parse(localStorage.getItem('knot_learned')) || [],
    favorites: JSON.parse(localStorage.getItem('knot_favs')) || [],
    theme: localStorage.getItem('knot_theme') || 'light'
};

// --- DOM ELEMENTS ---
const knotGrid = document.getElementById('knotGrid');
const searchInput = document.getElementById('searchInput');
const difficultyFilter = document.getElementById('difficultyFilter');
const tagFilter = document.getElementById('tagFilter');
const sortOption = document.getElementById('sortOption');
const themeToggle = document.getElementById('themeToggle');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');
const knotsLearnedCount = document.getElementById('knotsLearnedCount');

// Modal Elements
const knotModal = document.getElementById('knotModal');
const closeModalBtn = document.getElementById('closeModal');
const modalFavBtn = document.getElementById('modalFavBtn');
const markLearnedBtn = document.getElementById('markLearnedBtn');

// Achievement Elements
const achievementsBtn = document.getElementById('achievementsBtn');
const achievementsModal = document.getElementById('achievementsModal');
const closeAchieveModal = document.getElementById('closeAchieveModal');
const achievementsList = document.getElementById('achievementsList');
const toast = document.getElementById('toast');

let currentKnotId = null;

// --- ACHIEVEMENTS DATA ---
const achievementsDef = [
    { id: 'a1', title: 'Novice Tyger', desc: 'Learn 1 knot', condition: (l) => l.length >= 1, icon: '🪢' },
    { id: 'a2', title: 'Beginner', desc: 'Learn 5 knots', condition: (l) => l.length >= 5, icon: '🥉' },
    { id: 'a3', title: 'Intermediate', desc: 'Learn 15 knots', condition: (l) => l.length >= 15, icon: '🥈' },
    { id: 'a4', title: 'Advanced', desc: 'Learn 30 knots', condition: (l) => l.length >= 30, icon: '🥇' },
    { id: 'a5', title: 'Master', desc: 'Learn ALL knots!', condition: (l) => l.length >= knotsData.length, icon: '👑' },
    { id: 'a6', title: 'Sailing Pro', desc: 'Learn 5 Sailing knots', condition: (l) => countTags(l, 'sailing') >= 5, icon: '⛵' },
    { id: 'a7', title: 'Climber', desc: 'Learn 5 Climbing knots', condition: (l) => countTags(l, 'climbing') >= 5, icon: '🧗' },
    { id: 'a8', title: 'Hitch Wizard', desc: 'Learn 5 Hitches', condition: (l) => countTags(l, 'hitch') >= 5, icon: '🧙' }
];

function countTags(learnedIds, tag) {
    return learnedIds.filter(id => {
        const knot = knotsData.find(k => k.id === id);
        return knot && knot.tags.includes(tag);
    }).length;
}

// --- INITIALIZATION ---
function init() {
    applyTheme(state.theme);
    renderGrid();
    updateProgress();
    renderAchievements();

    // Event Listeners
    searchInput.addEventListener('input', renderGrid);
    difficultyFilter.addEventListener('change', renderGrid);
    tagFilter.addEventListener('change', renderGrid);
    sortOption.addEventListener('change', renderGrid);

    themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('knot_theme', state.theme);
        applyTheme(state.theme);
    });

    closeModalBtn.addEventListener('click', () => knotModal.classList.remove('active'));
    knotModal.addEventListener('click', (e) => { if(e.target === knotModal) knotModal.classList.remove('active'); });

    modalFavBtn.addEventListener('click', toggleFavorite);
    markLearnedBtn.addEventListener('click', toggleLearned);

    achievementsBtn.addEventListener('click', () => achievementsModal.classList.add('active'));
    closeAchieveModal.addEventListener('click', () => achievementsModal.classList.remove('active'));
    achievementsModal.addEventListener('click', (e) => { if(e.target === achievementsModal) achievementsModal.classList.remove('active'); });
}

// --- RENDERING LOGIC ---
function renderGrid() {
    const term = searchInput.value.toLowerCase();
    const diff = difficultyFilter.value;
    const tag = tagFilter.value;
    const sort = sortOption.value;

    let filtered = knotsData.filter(knot => {
        const matchesTerm = knot.name.toLowerCase().includes(term) || knot.description.toLowerCase().includes(term);
        const matchesDiff = diff === 'all' || knot.difficulty === diff;
        const matchesTag = tag === 'all' || knot.tags.includes(tag);
        return matchesTerm && matchesDiff && matchesTag;
    });

    filtered.sort((a, b) => {
        if (sort === 'alpha') return a.name.localeCompare(b.name);
        if (sort === 'difficulty') {
            const order = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
            return order[a.difficulty] - order[b.difficulty];
        }
        if (sort === 'status') {
            const aL = state.learned.includes(a.id) ? 1 : 0;
            const bL = state.learned.includes(b.id) ? 1 : 0;
            return bL - aL;
        }
    });

    knotGrid.innerHTML = filtered.map(knot => {
        const isLearned = state.learned.includes(knot.id);
        const isFav = state.favorites.includes(knot.id);
        return `
            <div class="knot-card ${isLearned ? 'learned' : ''}" onclick="openModal('${knot.id}')">
                <div style="display:flex; justify-content:space-between;">
                    <h3 class="card-title">${knot.name}</h3>
                    <span style="font-size:1.2rem;">${isFav ? '❤️' : ''}</span>
                </div>
                <div style="margin-bottom: 0.5rem;">
                    <span class="badge ${knot.difficulty.toLowerCase()}">${knot.difficulty}</span>
                    ${knot.tags.slice(0, 2).map(t => `<span class="badge tag">${t}</span>`).join('')}
                </div>
                <p class="card-desc">${knot.description}</p>
            </div>
        `;
    }).join('');
}

function openModal(id) {
    const knot = knotsData.find(k => k.id === id);
    if (!knot) return;
    currentKnotId = id;

    document.getElementById('modalTitle').innerText = knot.name;
    document.getElementById('modalDesc').innerText = knot.description;
    
    document.getElementById('modalBadges').innerHTML = `
        <span class="badge ${knot.difficulty.toLowerCase()}">${knot.difficulty}</span>
        ${knot.tags.map(t => `<span class="badge tag">${t}</span>`).join('')}
    `;

    document.getElementById('modalSteps').innerHTML = knot.steps.map(step => `<li>${step}</li>`).join('');
    document.getElementById('modalUses').innerText = knot.uses;
    document.getElementById('modalMistakes').innerText = knot.mistakes;
    document.getElementById('modalSafety').innerText = knot.safety;
    document.getElementById('modalVars').innerText = knot.variations;

    updateModalButtons();
    knotModal.classList.add('active');
}

function updateModalButtons() {
    const isLearned = state.learned.includes(currentKnotId);
    const isFav = state.favorites.includes(currentKnotId);

    markLearnedBtn.innerText = isLearned ? "✓ Learned (Click to Unmark)" : "Mark as Learned";
    markLearnedBtn.className = isLearned ? "primary-btn learned" : "primary-btn";
    
    modalFavBtn.innerText = isFav ? "❤️" : "🤍";
    modalFavBtn.classList.toggle('active', isFav);
}

// --- INTERACTIONS ---
function toggleLearned() {
    if (state.learned.includes(currentKnotId)) {
        state.learned = state.learned.filter(id => id !== currentKnotId);
    } else {
        state.learned.push(currentKnotId);
        showToast("Marked as learned! Great job! 🎉");
    }
    localStorage.setItem('knot_learned', JSON.stringify(state.learned));
    updateModalButtons();
    updateProgress();
    renderGrid();
    checkAchievements();
}

function toggleFavorite() {
    if (state.favorites.includes(currentKnotId)) {
        state.favorites = state.favorites.filter(id => id !== currentKnotId);
    } else {
        state.favorites.push(currentKnotId);
    }
    localStorage.setItem('knot_favs', JSON.stringify(state.favorites));
    updateModalButtons();
    renderGrid();
}

function updateProgress() {
    const count = state.learned.length;
    const total = knotsData.length;
    const percent = Math.round((count / total) * 100);
    
    progressBar.style.width = `${percent}%`;
    progressPercent.innerText = percent;
    knotsLearnedCount.innerText = count;
}

// --- ACHIEVEMENTS ---
function checkAchievements() {
    const unlocked = JSON.parse(localStorage.getItem('knot_achievements')) || [];
    let newUnlock = false;

    achievementsDef.forEach(ach => {
        if (!unlocked.includes(ach.id) && ach.condition(state.learned)) {
            unlocked.push(ach.id);
            showToast(`🏆 Achievement Unlocked: ${ach.title}!`);
            newUnlock = true;
        }
    });

    if (newUnlock) {
        localStorage.setItem('knot_achievements', JSON.stringify(unlocked));
        renderAchievements();
    }
}

function renderAchievements() {
    const unlocked = JSON.parse(localStorage.getItem('knot_achievements')) || [];
    achievementsList.innerHTML = achievementsDef.map(ach => `
        <div class="achievement-card ${unlocked.includes(ach.id) ? 'unlocked' : ''}">
            <div class="ach-icon">${ach.icon}</div>
            <div class="ach-title">${ach.title}</div>
            <div class="ach-desc">${ach.desc}</div>
        </div>
    `).join('');
}

// --- UTILS ---
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.innerText = theme === 'light' ? '🌙' : '☀️';
}

function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// Boot up
window.addEventListener('DOMContentLoaded', init);
