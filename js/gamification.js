// WhatKnot Gamification System v1.0
// XP, Ranks, Achievements, Progress Tracking

import { knots } from './knots.js';

const RANKS = [
  { name: 'Recruit', icon: '◈', xpRequired: 0 },
  { name: 'Scout', icon: '◆', xpRequired: 100 },
  { name: 'Ranger', icon: '●', xpRequired: 250 },
  { name: 'Pathfinder', icon: '⬣', xpRequired: 500 },
  { name: 'Survival Expert', icon: '⬡', xpRequired: 900 },
  { name: 'Field Master', icon: '⬠', xpRequired: 1400 }
];

const ACHIEVEMENTS = [
  { id: 'first-knot', name: 'Trailblazer', desc: 'Learn your first knot', xp: 25 },
  { id: '10-knots', name: 'Rope Wrangler', desc: 'Master 10 knots', xp: 50 },
  { id: 'beginner', name: 'Foundation Built', desc: 'Complete all Beginner knots', xp: 100 },
  { id: 'intermediate', name: 'Intermediate Operator', desc: 'Complete Intermediate', xp: 200 },
  { id: 'master', name: 'Master of Knots', desc: 'Learn all 55 knots', xp: 500 },
  // ... 8 more achievements
];

class Gamification {
  constructor() {
    this.xp = 0;
    this.learned = new Set();
    this.achievements = new Set();
    this.rank = 0;
    this.load();
    this.checkAchievements();
  }

  addXP(amount, knotId) {
    this.xp += amount;
    this.learned.add(knotId);
    this.checkRankUp();
    this.checkAchievements();
    this.save();
    return amount;
  }

  learnKnot(knotId) {
    if (!this.learned.has(knotId)) {
      const knot = knots.find(k => k.id === knotId);
      if (knot) {
        const xpGain = this.addXP(knot.xp, knotId);
        // Show XP popup
        this.showXPPopup(xpGain, knot.name);
      }
    }
  }

  checkRankUp() {
    const newRank = RANKS.findIndex((r, i) => this.xp >= r.xpRequired && i > this.rank);
    if (newRank > this.rank) {
      this.rank = newRank;
      this.showRankUp();
    }
  }

  checkAchievements() {
    ACHIEVEMENTS.forEach(ach => {
      if (!this.achievements.has(ach.id) && false) { // stubbed checkAchievement
        this.achievements.add(ach.id);
        // Show achievement popup
      }
    });
  }

  checkAchievement(id) {
    switch(id) {
      case 'first-knot': return this.learned.size > 0;
      case '10-knots': return this.learned.size >= 10;
      case 'beginner': return knots.filter(k => k.difficulty === 'Beginner').length === knots.filter(k => k.difficulty === 'Beginner' && this.learned.has(k.id)).length;
      default: return false;
    }
  }

  getCurrentRank() {
    return RANKS[this.rank];
  }

  save() {
    localStorage.setItem('whatknot-save', JSON.stringify({
      xp: this.xp,
      learned: Array.from(this.learned),
      achievements: Array.from(this.achievements),
      rank: this.rank
    }));
  }

  load() {
    const save = localStorage.getItem('whatknot-save');
    if (save) {
      const data = JSON.parse(save);
      this.xp = data.xp || 0;
      this.learned = new Set(data.learned || []);
      this.achievements = new Set(data.achievements || []);
      this.rank = data.rank || 0;
    }
  }

  // UI Updates (called from app.js)
  updateHUD() {
    // Update rank display, progress bars, etc.
  }

  showXPPopup(xp, knotName) {
    // Animate +{xp} XP popup
  }

  showRankUp() {
    // Congrats animation
  }
}

export const game = new Gamification();
export { RANKS, ACHIEVEMENTS };
