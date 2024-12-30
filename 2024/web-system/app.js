/**
 * Core Application Controller - 2024 Engineering Release
 * Author: Early Pajo (EARL146)
 */
class ApplicationController {
    constructor() {
        this.theme = localStorage.getItem('app_theme') || 'dark';
        this.initEventListeners();
    }

    initEventListeners() {
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggleTheme());
        }

        const loginBtn = document.getElementById('loginModalBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showAuthModal());
        }

        console.info('[AppController] Initialized successfully. Version: 2024.4.1');
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('app_theme', this.theme);
        document.body.dataset.theme = this.theme;
        console.log(`[Theme] Switched to ${this.theme}`);
    }

    showAuthModal() {
        alert('Authentication Portal 2024 - Secure Session Active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new ApplicationController();
});
