// achievements.js - Achievement System

import { state } from './state.js';
import { showToast } from './utils.js';
import { knots } from './src/js/data.js';

function countTags(l, tag) {
    return l.filter(id => {
        const knot = knots.find(k => k.id === id);
        return knot && knot.tags.includes(tag);
    }).length;

}

const achievementsDef = [
    { id: 'a1', title: 'Novice Tyger', desc: 'Learn 1 knot', condition: (l) => l.length >= 1, icon: '🪢' },
    { id: 'a2', title: 'Beginner', desc: 'Learn 5 knots', condition: (l) => l.length >= 5, icon: '🥉' },
    { id: 'a3', title: 'Intermediate', desc: 'Learn 15 knots', condition: (l) => l.length >= 15, icon: '🥈' },
    { id: 'a4', title: 'Advanced', desc: 'Learn 30 knots', condition: (l) => l.length >= 30, icon: '🥇' },
{ id: 'a5', title: 'Master', desc: 'Learn ALL knots!', condition: (l) => l.length >= knots.length, icon: '👑' },
    { id: 'a6', title: 'Sailing Pro', desc: 'Learn 5 Sailing knots', condition: (l) => countTags(l, 'sailing') >= 5, icon: '⛵' },
    { id: 'a7', title: 'Climber', desc: 'Learn 5 Climbing knots', condition: (l) => countTags(l, 'climbing') >= 5, icon: '🧗' },
    { id: 'a8', title: 'Hitch Wizard', desc: 'Learn 5 Hitches', condition: (l) => countTags(l, 'hitch') >= 5, icon: '🧙' },
    { id: 'a9', title: 'Quiz Ace', desc: '100% Quiz score', condition: () => state.quiz.highScore === 10, icon: '⭐' }
];

function checkAchievements() {
    let newUnlocks = 0;
    achievementsDef.forEach(ach => {
        if (!state.achievements.includes(ach.id) && ach.condition(state.learned)) {
            state.achievements.push(ach.id);
            showToast(`🏆 Unlocked: ${ach.title}!`);
            // Trigger confetti at achievements modal position
            const modal = document.getElementById('achievementsModal');
            const rect = modal ? modal.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2 };
            confetti.explode(rect.left + rect.width / 2, rect.top + rect.height / 2, 150);
            newUnlocks++;
        }
    });
    if (newUnlocks > 0) {
        localStorage.setItem('knot_achievements', JSON.stringify(state.achievements));
    }
}

function renderAchievements(container = document.getElementById('achievementsList')) {
    if (!container) return;
    const unlocked = state.achievements;
    container.innerHTML = achievementsDef.map(ach => `
        <div class="achievement-card ${unlocked.includes(ach.id) ? 'unlocked' : ''}" role="img" aria-label="${unlocked.includes(ach.id) ? 'Unlocked' : 'Locked'} ${ach.title}">
            <div class="ach-icon" aria-hidden="true">${ach.icon}</div>
            <div class="ach-title">${ach.title}</div>
            <div class="ach-desc">${ach.desc}</div>
        </div>
    `).join('');
}

export { achievementsDef, checkAchievements, renderAchievements };

