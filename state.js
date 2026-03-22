// state.js - State Management Module
// Exports state object and persistence methods

let state = {
    learned: JSON.parse(localStorage.getItem('knot_learned')) || [],
    favorites: JSON.parse(localStorage.getItem('knot_favs')) || [],
    achievements: JSON.parse(localStorage.getItem('knot_achievements')) || [],
    theme: localStorage.getItem('knot_theme') || 'light',
    quiz: {
        score: 0,
        attempts: 0,
        highScore: localStorage.getItem('knot_quiz_high') || 0
    }
};

function saveState() {
    localStorage.setItem('knot_learned', JSON.stringify(state.learned));
    localStorage.setItem('knot_favs', JSON.stringify(state.favorites));
    localStorage.setItem('knot_achievements', JSON.stringify(state.achievements));
    localStorage.setItem('knot_theme', state.theme);
    localStorage.setItem('knot_quiz_high', state.quiz.highScore);
}

function updateLearned(id, add = true) {
    if (add) {
        if (!state.learned.includes(id)) {
            state.learned.push(id);
            saveState();
            return true;
        }
    } else {
        const index = state.learned.indexOf(id);
        if (index > -1) {
            state.learned.splice(index, 1);
            saveState();
            return true;
        }
    }
    return false;
}

function updateFavorites(id, add = true) {
    if (add) {
        if (!state.favorites.includes(id)) {
            state.favorites.push(id);
        } else {
            const index = state.favorites.indexOf(id);
            state.favorites.splice(index, 1);
        }
    }
    saveState();
}

function updateTheme(newTheme) {
    state.theme = newTheme;
    saveState();
    document.documentElement.setAttribute('data-theme', newTheme);
}

export { state, updateLearned, updateFavorites, updateTheme, saveState };

