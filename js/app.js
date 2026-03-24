// WhatKnot Main App Logic v1.0
// UI management, search/filter/sort, detail panel

import { knots, totalKnots } from './knots-complete.js';
import { game, RANKS, ACHIEVEMENTS } from './gamification.js';

class App {
  constructor() {
    this.currentFilters = { difficulty: 'All', tags: [], search: '' };
    this.sortBy = 'name';
    this.showFavorites = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.renderKnotGrid();
    this.updateHUD();
  }

  bindEvents() {
    // Intro screen
    // document.getElementById('begin-btn').onclick = () => {
      // document.getElementById('intro-screen').style.display = 'none';
      // document.getElementById('app').classList.add('show');
    // };

    // Search
    document.getElementById('search-input').oninput = (e) => {
      this.currentFilters.search = e.target.value.toLowerCase();
      this.renderKnotGrid();
    };

    // Sidebar toggle (mobile)
    document.getElementById('sidebar-toggle').onclick = () => {
      document.getElementById('sidebar').classList.toggle('show');
    };

    // Filters
    document.querySelectorAll('.diff-filter').forEach(btn => {
      btn.onclick = () => this.setDifficultyFilter(btn.dataset.diff);
    });

    // Tags
    document.querySelectorAll('.tag-filter').forEach(btn => {
      btn.onclick = () => this.toggleTag(btn.dataset.tag);
    });

    // Sort
    document.getElementById('sort-select').onchange = (e) => {
      this.sortBy = e.target.value;
      this.renderKnotGrid();
    };

    // Theme toggle
    document.getElementById('theme-toggle').onclick = () => {
      const isLight = document.documentElement.dataset.theme === 'light';
      document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
      this.themeToggleButton.textContent = isLight ? '☀️ Light' : '🌑 Dark';
    };
    this.themeToggleButton = document.getElementById('theme-toggle');
    this.themeToggleButton.textContent = document.documentElement.dataset.theme === 'light' ? '🌑 Dark' : '☀️ Light';
  };

  setDifficultyFilter(diff) {
    document.querySelectorAll('.diff-filter').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-diff="${diff}"]`).classList.add('active');
    this.currentFilters.difficulty = diff;
    this.renderKnotGrid();
  }

  toggleTag(tag) {
    const idx = this.currentFilters.tags.indexOf(tag);
    if (idx > -1) {
      this.currentFilters.tags.splice(idx, 1);
      document.querySelector(`[data-tag="${tag}"]`).classList.remove('active');
    } else {
      this.currentFilters.tags.push(tag);
      document.querySelector(`[data-tag="${tag}"]`).classList.add('active');
    }
    this.renderKnotGrid();
  }

  getFilteredKnots() {
    return knots.filter(knot => {
      // Search
      if (this.currentFilters.search && 
          !knot.name.toLowerCase().includes(this.currentFilters.search)) return false;
      
      // Difficulty
      if (this.currentFilters.difficulty !== 'All' && knot.difficulty !== this.currentFilters.difficulty) return false;
      
      // Tags
      if (this.currentFilters.tags.length && !knot.tags.some(t => this.currentFilters.tags.includes(t))) return false;
      
      // Favorites (learned)
      if (this.showFavorites && !game.learned.has(knot.id)) return false;
      
      return true;
    }).sort(this.getSortFn());
  }

  getSortFn() {
    const sorts = {
      name: (a, b) => a.name.localeCompare(b.name),
      difficulty: (a, b) => a.difficulty.localeCompare(b.difficulty),
      xp: (a, b) => b.xp - a.xp,
      learned: (a, b) => (game.learned.has(b.id) ? -1 : 1)
    };
    return sorts[this.sortBy];
  }

  renderKnotGrid() {
    const filtered = this.getFilteredKnots();
    const grid = document.getElementById('knot-grid');
    grid.innerHTML = filtered.map(knot => this.createKnotCard(knot)).join('');
    
    // Update counts
    document.getElementById('knot-count').textContent = `${filtered.length} knots`;
    
    // Bind card clicks
    grid.querySelectorAll('.knot-card').forEach((card, i) => {
      card.onclick = () => this.showDetail(filtered[i]);
    });
    
    this.updateStats();
  }

  createKnotCard(knot) {
    const isLearned = game.learned.has(knot.id);
    const tagsHtml = knot.tags.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join('');
    return `
      <div class="knot-card ${isLearned ? 'learned' : ''}" data-id="${knot.id}">
        <div class="knot-header">
          <div class="knot-difficulty diff-${knot.difficulty.toLowerCase()}">${knot.difficulty}</div>
          <div class="knot-name">${knot.name}</div>
          <div class="knot-tags">${tagsHtml}</div>
        </div>
        <div class="knot-footer">
          <span>${knot.steps.length} steps</span>
          <span class="knot-xp">${knot.xp} XP</span>
        </div>
      </div>
    `;
  }

  showDetail(knot) {
    document.getElementById('detail-panel').innerHTML = this.createDetailHtml(knot);
    document.getElementById('detail-panel').classList.add('show');
    
    // Learn button
    const learnBtn = document.getElementById('learn-btn');
    if (game.learned.has(knot.id)) {
      learnBtn.textContent = '✅ Learned';
      learnBtn.disabled = true;
    } else {
      learnBtn.onclick = () => {
        game.learnKnot(knot.id);
        this.renderKnotGrid();
        this.updateHUD();
      };
    }
  }

  createDetailHtml(knot) {
    const stepsHtml = knot.steps.map((step, i) => 
      `<div class="step">${i+1}. ${step}</div>`
    ).join('');
    
    return `
      <div class="detail-header">
        <button class="detail-close" onclick="app.hideDetail()">×</button>
        <div class="knot-difficulty diff-${knot.difficulty.toLowerCase()}">${knot.difficulty}</div>
        <h1>${knot.name}</h1>
        <p><strong>Uses:</strong> ${knot.uses}</p>
      </div>
      <div class="detail-steps">
        ${stepsHtml}
        <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
          <button id="learn-btn" style="width: 100%; padding: 1rem; background: var(--accent-green); color: #000; border: none; border-radius: var(--border-radius); font-weight: 600; cursor: pointer;">
            Learn Knot (+${knot.xp} XP)
          </button>
          ${knot.notes ? `<p style="margin-top: 1rem; font-style: italic; color: var(--text-muted);"><strong>Notes:</strong> ${knot.notes}</p>` : ''}
        </div>
      </div>
    `;
  }

  hideDetail() {
    document.getElementById('detail-panel').classList.remove('show');
  }

  updateHUD() {
    // Rank
    document.getElementById('hud-rank-icon').textContent = game.getCurrentRank().icon;
    document.getElementById('hud-rank').textContent = game.getCurrentRank().name;
    document.getElementById('hud-xp').textContent = `${game.xp} XP`;
    
    // Progress
    const learnedCount = game.learned.size;
    document.getElementById('hud-learned').textContent = `${learnedCount} / ${totalKnots}`;
    document.getElementById('hud-pct').textContent = `${Math.round((learnedCount/totalKnots)*100)}% Complete`;
    
    // Bars
    const nextRankXP = RANKS[game.rank + 1]?.xpRequired - game.xp || 0;
    document.getElementById('hud-next').textContent = `${nextRankXP} XP to ${RANKS[game.rank + 1]?.name}`;
    document.getElementById('rank-progress-bar').style.width = `${Math.min(100, (game.xp / RANKS[game.rank + 1]?.xpRequired || 1) * 100)}%`;
    document.getElementById('learned-progress-bar').style.width = `${(learnedCount/totalKnots)*100}%`;
  }

  updateStats() {
    const byDiff = { Beginner: 0, Intermediate: 0, Advanced: 0 };
    knots.forEach(k => {
      if (game.learned.has(k.id)) byDiff[k.difficulty]++;
    });
    
    document.getElementById('stat-beginner').textContent = `${byDiff.Beginner} / ${knots.filter(k => k.difficulty === 'Beginner').length}`;
    document.getElementById('stat-intermediate').textContent = `${byDiff.Intermediate} / ${knots.filter(k => k.difficulty === 'Intermediate').length}`;
    document.getElementById('stat-advanced').textContent = `${byDiff.Advanced} / ${knots.filter(k => k.difficulty === 'Advanced').length}`;
  }
}

// Global app instance
const app = new App();

// Expose for detail panel
window.app = app;
