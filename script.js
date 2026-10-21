document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initMobileMenu();
    initThemeToggle();
    initHeroTyping();
    initProjects();
    initSkillBars();
    initCopyEmail();
    initContactForm();
    initRippleEffect();
    initScrollAnimations();
});

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, icon = 'fa-solid fa-check') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${icon}" style="color: var(--accent-primary);"></i> <span>${message}</span>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3600);
}

// ==========================================================================
// THEME TOGGLE (DARK / LIGHT MODE)
// ==========================================================================
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (!toggleBtn || !themeIcon) return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function setLightMode(isLight) {
        if (isLight) {
            document.body.classList.add('light-mode');
            themeIcon.className = 'fa-regular fa-moon';
        } else {
            document.body.classList.remove('light-mode');
            themeIcon.className = 'fa-regular fa-sun';
        }
    }

    // Default to dark unless user explicitly chose light before
    const initialLight = savedTheme === 'light';
    setLightMode(initialLight);

    toggleBtn.addEventListener('click', function () {
        const isCurrentlyLight = document.body.classList.contains('light-mode');
        const newLightState = !isCurrentlyLight;
        setLightMode(newLightState);
        localStorage.setItem('theme', newLightState ? 'light' : 'dark');
        showToast(newLightState ? 'Switched to Light Theme' : 'Switched to Dark Theme', newLightState ? 'fa-regular fa-moon' : 'fa-regular fa-sun');
    });
}

// ==========================================================================
// NAVIGATION & SCROLLSPY
// ==========================================================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Navbar background blur on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.25)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Active Section Observer
    if (sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
}

// ==========================================================================
// MOBILE NAVIGATION DRAWER
// ==========================================================================
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('mobileNavOverlay');
    const closeBtn = document.getElementById('mobileDrawerClose');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer || !overlay) return;

    function openMenu() {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// ==========================================================================
// HERO TYPING EFFECT
// ==========================================================================
function initHeroTyping() {
    const tagline = document.getElementById('heroTagline');
    if (!tagline) return;

    const roles = [
        "Full Stack Developer",
        "AI Agent Developer",
        "Software Engineer"
    ];

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let isDeleting = true;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            tagline.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            tagline.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 90;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 2500);
}

// ==========================================================================
// PROJECTS SECTION (TABS, GRID, PAGINATION)
// ==========================================================================
function initProjects() {
    const tabsContainer = document.getElementById('projectTabs');
    const gridContainer = document.getElementById('projectsGrid');
    const showMoreBtn = document.getElementById('projectsShowMore');

    if (!tabsContainer || !gridContainer) return;

    const INITIAL_VISIBLE = 8;
    const STEP = 8;
    const state = {
        category: 'all',
        visible: INITIAL_VISIBLE
    };

    const categories = window.PROJECT_CATEGORIES || [];
    const projects = window.PROJECTS || [];

    const catMap = new Map();
    categories.forEach(c => catMap.set(c.id, c));

    function getFiltered() {
        if (state.category === 'all') return projects;
        return projects.filter(p => p.category === state.category);
    }

    function createPlaceholder(project, cat) {
        const thumb = document.createElement('div');
        thumb.className = 'project-thumb project-thumb--placeholder';

        const icon = document.createElement('i');
        icon.className = (cat && cat.icon) ? cat.icon : 'fa-solid fa-code';
        icon.setAttribute('aria-hidden', 'true');

        const nameSpan = document.createElement('span');
        nameSpan.className = 'placeholder-label';
        nameSpan.textContent = project.name;

        thumb.appendChild(icon);
        thumb.appendChild(nameSpan);
        return thumb;
    }

    function createThumb(project) {
        const cat = catMap.get(project.category);
        const repoUrl = `https://github.com/Giancyril/${encodeURIComponent(project.name)}`;

        const thumbLink = document.createElement('a');
        thumbLink.className = 'project-thumb-link';
        thumbLink.href = repoUrl;
        thumbLink.target = '_blank';
        thumbLink.rel = 'noopener noreferrer';
        thumbLink.setAttribute('aria-label', `View ${project.name} repository on GitHub`);
        thumbLink.setAttribute('tabindex', '-1');

        if (!project.image) {
            thumbLink.appendChild(createPlaceholder(project, cat));
            return thumbLink;
        }

        const thumb = document.createElement('div');
        thumb.className = 'project-thumb';

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = `${project.name} Screenshot`;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.width = 640;
        img.height = 360;

        img.addEventListener('error', function () {
            const placeholder = createPlaceholder(project, cat);
            thumb.replaceWith(placeholder);
        }, { once: true });

        thumb.appendChild(img);
        thumbLink.appendChild(thumb);
        return thumbLink;
    }

    function renderGrid() {
        gridContainer.innerHTML = '';
        const filtered = getFiltered();
        const visibleList = filtered.slice(0, state.visible);
        const fragment = document.createDocumentFragment();

        visibleList.forEach((project, index) => {
            const repoUrl = `https://github.com/Giancyril/${encodeURIComponent(project.name)}`;

            const card = document.createElement('article');
            card.className = 'project-card is-entering';
            card.style.setProperty('--i', index);

            card.appendChild(createThumb(project));

            const body = document.createElement('div');
            body.className = 'project-card-body';

            const meta = document.createElement('div');
            meta.className = 'project-meta';

            const cat = catMap.get(project.category);
            const catBadge = document.createElement('span');
            catBadge.className = 'project-category-badge';
            catBadge.innerHTML = `<i class="${cat ? cat.icon : 'fa-solid fa-tag'}" aria-hidden="true"></i> <span>${cat ? cat.label : project.category}</span>`;
            meta.appendChild(catBadge);

            const metaLink = document.createElement('a');
            metaLink.className = 'project-meta-link';
            metaLink.href = repoUrl;
            metaLink.target = '_blank';
            metaLink.rel = 'noopener noreferrer';
            metaLink.setAttribute('aria-label', `Open ${project.name} on GitHub`);
            metaLink.setAttribute('title', 'View Source on GitHub');
            metaLink.innerHTML = '<i class="fa-brands fa-github" aria-hidden="true"></i>';
            meta.appendChild(metaLink);

            body.appendChild(meta);

            const title = document.createElement('h3');
            title.className = 'project-card-title';
            const titleLink = document.createElement('a');
            titleLink.href = repoUrl;
            titleLink.target = '_blank';
            titleLink.rel = 'noopener noreferrer';
            titleLink.textContent = project.name;
            title.appendChild(titleLink);
            body.appendChild(title);

            const desc = document.createElement('p');
            desc.className = 'project-card-desc';
            desc.textContent = project.description;
            body.appendChild(desc);

            if (project.tags && project.tags.length > 0) {
                const tagsWrap = document.createElement('div');
                tagsWrap.className = 'project-tags';
                project.tags.slice(0, 4).forEach(tag => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'tech-tag';
                    tagSpan.textContent = tag;
                    tagsWrap.appendChild(tagSpan);
                });
                body.appendChild(tagsWrap);
            }

            const footer = document.createElement('div');
            footer.className = 'project-card-footer';

            const btn = document.createElement('a');
            btn.className = 'project-link-btn';
            btn.href = repoUrl;
            btn.target = '_blank';
            btn.rel = 'noopener noreferrer';
            btn.innerHTML = '<span>View Repository</span> <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
            footer.appendChild(btn);

            body.appendChild(footer);

            card.appendChild(body);
            fragment.appendChild(card);
        });

        gridContainer.appendChild(fragment);
    }

    function updateShowMore() {
        if (!showMoreBtn) return;
        const filtered = getFiltered();
        const remaining = filtered.length - state.visible;
        if (remaining > 0) {
            showMoreBtn.hidden = false;
            showMoreBtn.textContent = `Show more projects (${remaining} remaining)`;
        } else {
            showMoreBtn.hidden = true;
        }
    }

    function selectTab(categoryId, focusTab = false) {
        state.category = categoryId;
        state.visible = INITIAL_VISIBLE;

        const tabs = tabsContainer.querySelectorAll('.project-tab');
        tabs.forEach(tab => {
            const match = tab.dataset.category === categoryId;
            tab.setAttribute('aria-selected', match ? 'true' : 'false');
            tab.tabIndex = match ? 0 : -1;
            if (match && focusTab) {
                tab.focus();
            }
        });

        renderGrid();
        updateShowMore();
    }

    function renderTabs() {
        tabsContainer.innerHTML = '';
        const tabDefs = [
            { id: 'all', label: 'All', count: projects.length },
            ...categories.map(c => ({
                id: c.id,
                label: c.label,
                count: projects.filter(p => p.category === c.id).length
            }))
        ];

        const fragment = document.createDocumentFragment();
        tabDefs.forEach(tab => {
            const tabBtn = document.createElement('button');
            tabBtn.type = 'button';
            tabBtn.className = 'project-tab';
            tabBtn.setAttribute('role', 'tab');
            tabBtn.setAttribute('id', `tab-${tab.id}`);
            tabBtn.setAttribute('aria-controls', 'projectsGrid');
            tabBtn.dataset.category = tab.id;
            const isActive = tab.id === state.category;
            tabBtn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            tabBtn.tabIndex = isActive ? 0 : -1;
            tabBtn.innerHTML = `${tab.label} <span class="tab-count">${tab.count}</span>`;

            tabBtn.addEventListener('click', () => {
                selectTab(tab.id, false);
            });

            fragment.appendChild(tabBtn);
        });

        tabsContainer.appendChild(fragment);

        tabsContainer.addEventListener('keydown', (e) => {
            const tabs = Array.from(tabsContainer.querySelectorAll('.project-tab'));
            const currentIndex = tabs.findIndex(tab => tab === document.activeElement);
            if (currentIndex === -1) return;

            let nextIndex = null;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                nextIndex = (currentIndex + 1) % tabs.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            } else if (e.key === 'Home') {
                e.preventDefault();
                nextIndex = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                nextIndex = tabs.length - 1;
            }

            if (nextIndex !== null) {
                const nextTab = tabs[nextIndex];
                selectTab(nextTab.dataset.category, true);
            }
        });
    }

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
            state.visible += STEP;
            renderGrid();
            updateShowMore();
        });
    }

    renderTabs();
    renderGrid();
    updateShowMore();
}

// ==========================================================================
// SKILL PROGRESS BARS ANIMATION
// ==========================================================================
function initSkillBars() {
    const skillFills = document.querySelectorAll('.skill-progress-fill');
    if (skillFills.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.getAttribute('data-width');
                if (targetWidth) {
                    entry.target.style.width = targetWidth;
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    skillFills.forEach(fill => observer.observe(fill));
}

// ==========================================================================
// ONE-CLICK COPY EMAIL
// ==========================================================================
function legacyCopy(text, onSuccess, onFail) {
    try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.top = '-9999px';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (ok) onSuccess(); else onFail();
    } catch (e) {
        onFail();
    }
}

function initCopyEmail() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const emailAddress = document.getElementById('emailAddress');

    if (!copyBtn || !emailAddress) return;

    copyBtn.addEventListener('click', function () {
        const textToCopy = emailAddress.textContent.trim();

        function onCopySuccess() {
            showToast('Email copied to clipboard!', 'fa-solid fa-copy');
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
            }, 2500);
        }

        function onCopyFail() {
            showToast('Could not copy — please copy manually: ' + textToCopy, 'fa-solid fa-triangle-exclamation');
        }

        // Try modern Clipboard API first, fall back to legacy execCommand
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(textToCopy).then(onCopySuccess).catch(() => {
                legacyCopy(textToCopy, onCopySuccess, onCopyFail);
            });
        } else {
            legacyCopy(textToCopy, onCopySuccess, onCopyFail);
        }
    });
}

// ==========================================================================
// CONTACT FORM SUBMISSION
// ==========================================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const subject = `Portfolio Inquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        window.open(`mailto:mijaresgiancyril@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);

        showToast('Opening email client...', 'fa-regular fa-paper-plane');
        form.reset();
    });
}

// ==========================================================================
// BUTTON RIPPLE EFFECT
// ==========================================================================
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-submit');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            const rect = button.getBoundingClientRect();
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - rect.left - radius}px`;
            circle.style.top = `${e.clientY - rect.top - radius}px`;
            circle.classList.add('ripple');

            const existingRipple = button.querySelector('.ripple');
            if (existingRipple) existingRipple.remove();

            button.appendChild(circle);

            circle.addEventListener('animationend', () => {
                circle.remove();
            }, { once: true });
        });
    });
}

// ==========================================================================
// SCROLL REVEAL ANIMATIONS
// ==========================================================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-header, .experience-card, .skill-item, .contact-info-card, .contact-form-container');
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}