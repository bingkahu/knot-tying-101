const state = {
    learned: [],
    favorites: [],
    achievements: [],
    quiz: { highScore: 0, questions: 0 },
    theme: 'light',
    search: '',
    filter: { difficulty: 'all', tag: 'all' },
    sort: 'alpha'
};

// Load from localStorage
function loadState() {
    const saved = localStorage.getItem('knot_state');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.learned = parsed.learned || [];
        state.favorites = parsed.favorites || [];
        state.achievements = parsed.achievements || [];
        state.quiz.highScore = parsed.quiz.highScore || 0;
    }
    state.theme = localStorage.getItem('knot_theme') || 'light';
}

// Save to localStorage
function saveState() {
    localStorage.setItem('knot_state', JSON.stringify({
        learned: state.learned,
        favorites: state.favorites,
        achievements: state.achievements,
        quiz: state.quiz
    }));
    localStorage.setItem('knot_theme', state.theme);
}

loadState();

export { state, loadState, saveState };

