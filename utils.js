// utils.js - Utility Functions

// Debounce for search input
function debounce(fn, delay = 300) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Toast notification
const toast = document.getElementById('toast');
function showToast(msg, type = 'success') {
    toast.textContent = msg;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 4000);
}

// Escape HTML for XSS safety
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Update progress bar
function updateProgressBar() {
    const count = state.learned.length;
    const total = knotsData.length;
    const percent = Math.round((count / total) * 100);
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressPercent').textContent = percent;
    document.getElementById('knotsLearnedCount').textContent = count;
}

// Tag count helper
function countTags(tag) {
    return state.learned.filter(id => {
        const knot = knotsData.find(k => k.id === id);
        return knot && knot.tags.includes(tag);
    }).length;
}

export { debounce, showToast, escapeHtml, updateProgressBar, countTags };

