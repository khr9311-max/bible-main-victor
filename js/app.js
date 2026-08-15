/**
 * 말씀 성경 통합 포털 (Bible Hub) - App Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Theme Management (Dark / Light)
    initTheme();

    // 3. Daily Scripture Widget
    initDailyVerse();

    // 4. Copy & Share Handlers
    initCopyAndShare();

    // 5. Modal Handlers (KakaoPay & Share)
    initModals();
});

/* =========================================================
   Theme Management
   ========================================================= */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');

    // Retrieve saved theme or system preference
    const savedTheme = localStorage.getItem('bible_hub_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('bible_hub_theme', newTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeIcon) {
            themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
            if (window.lucide) lucide.createIcons();
        }
    }
}

/* =========================================================
   Daily Grace Scripture Widget
   ========================================================= */
let currentVerseIndex = 0;

function initDailyVerse() {
    if (typeof BIBLE_VERSES === 'undefined' || !BIBLE_VERSES.length) return;

    // Pick verse based on day of year for stability, but allow random shuffle
    const dayOfYear = getDayOfYear();
    currentVerseIndex = dayOfYear % BIBLE_VERSES.length;
    renderVerse(currentVerseIndex);

    const refreshBtn = document.getElementById('btn-refresh-verse');
    const copyVerseBtn = document.getElementById('btn-copy-verse');

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            currentVerseIndex = (currentVerseIndex + 1) % BIBLE_VERSES.length;
            renderVerse(currentVerseIndex);
            showToast('새로운 말씀을 불러왔습니다 ✨');
        });
    }

    if (copyVerseBtn) {
        copyVerseBtn.addEventListener('click', () => {
            const verse = BIBLE_VERSES[currentVerseIndex];
            const textToCopy = `[오늘의 말씀] ${verse.text} (${verse.reference})\n말씀성경 허브: ${window.location.origin}`;
            copyToClipboard(textToCopy, '말씀 구절이 복사되었습니다 📋');
        });
    }
}

function renderVerse(index) {
    const verse = BIBLE_VERSES[index];
    if (!verse) return;

    const verseTextEl = document.getElementById('daily-verse-text');
    const verseRefEl = document.getElementById('daily-verse-ref');
    const verseEngEl = document.getElementById('daily-verse-eng');
    const verseCatEl = document.getElementById('daily-verse-cat');

    if (verseTextEl) verseTextEl.textContent = `"${verse.text}"`;
    if (verseRefEl) verseRefEl.textContent = verse.reference;
    if (verseEngEl) verseEngEl.textContent = verse.english || '';
    if (verseCatEl) verseCatEl.textContent = verse.category || '오늘의 말씀';
}

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

/* =========================================================
   Copy & Share System
   ========================================================= */
function initCopyAndShare() {
    // Quick copy URL buttons on cards
    const quickCopyButtons = document.querySelectorAll('.quick-copy-btn');
    quickCopyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetUrl = btn.getAttribute('data-url');
            const title = btn.getAttribute('data-title') || '서비스 링크';
            if (targetUrl) {
                copyToClipboard(targetUrl, `${title} 링크가 복사되었습니다! 🔗`);
            }
        });
    });

    // Global Header Share Button
    const headerShareBtn = document.getElementById('btn-share-hub');
    if (headerShareBtn) {
        headerShareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: '말씀 성경 통합 포털 (Bible Hub)',
                    text: '말씀성경, 72구절 암송, 로마서 8장 암송, 성경구절 챗봇을 한곳에서 만나보세요!',
                    url: window.location.href
                }).catch(() => {
                    // User canceled or failed, fallback to copy
                    copyToClipboard(window.location.href, '포털 주소가 복사되었습니다! 📋');
                });
            } else {
                copyToClipboard(window.location.href, '포털 주소가 복사되었습니다! 📋');
            }
        });
    }
}

function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMessage);
        }).catch(() => {
            fallbackCopyText(text, successMessage);
        });
    } else {
        fallbackCopyText(text, successMessage);
    }
}

function fallbackCopyText(text, successMessage) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(successMessage);
    } catch (err) {
        showToast('복사에 실패했습니다. 수동으로 복사해주세요.');
    }
    document.body.removeChild(textarea);
}

/* =========================================================
   Modal Management
   ========================================================= */
function initModals() {
    const openSponsorBtns = document.querySelectorAll('.open-sponsor-modal');
    const sponsorModal = document.getElementById('modal-kakaopay');
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn, [data-close-modal]');

    openSponsorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (sponsorModal) sponsorModal.classList.add('active');
        });
    });

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) modal.classList.remove('active');
        });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

/* =========================================================
   Toast Notification System
   ========================================================= */
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="check-circle-2" style="width:16px;height:16px;color:#10b981;"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}
