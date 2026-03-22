// utils.js - Utility Functions

export function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

export function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

export function throttle(fn, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            fn.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

export function formatDifficulty(difficulty) {
    const colors = {
        'Beginner': '#4ade80',
        'Intermediate': '#facc15', 
        'Advanced': '#ef4444'
    };
    return `<span class="difficulty-badge" style="--color: ${colors[difficulty] || '#6b7280'}">${difficulty}</span>`;
}

export function pluralize(count, singular, plural = singular + 's') {
    return count === 1 ? singular : plural;
}

// Smooth scroll to element
export function scrollToElement(element, behavior = 'smooth') {
    element.scrollIntoView({ behavior, block: 'center' });
}

// Copy to clipboard
export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied!');
    });
}

