// =====================
// PROJECT DATA
// =====================
const projects = {
  'llm-eval': {
    badge: 'AI / LLM Testing',
    badgeClass: 'badge-purple',
    title: 'llm-qa-eval-framework',
    desc: 'A purpose-built framework for evaluating LLM outputs at scale and monitoring model quality over time.',
    focus: [
      'Prompt accuracy validation across curated test sets',
      'Hallucination detection and response-risk scoring',
      'Regression checks across model and prompt versions',
      'Automated evaluations in CI pipelines'
    ],
    stack: ['TypeScript', 'GitHub Actions', 'Claude API'],
    github: 'https://github.com/nageshkumar-gh'
  },
  'playwright-suite': {
    badge: 'UI Testing',
    badgeClass: 'badge-blue',
    title: 'playwright-framework',
    desc: 'UI test automation platform built with Playwright & TypeScript, targeting OrangeHRM, a real-world HR management application. Tests run locally, in Docker, and inside a Kubernetes cluster via GitHub Actions CI/CD',
    focus: [
      'Scalable Playwright architecture using TypeScript',
      'Reusable fixtures and test utilities for faster authoring',
      'Cross-environment execution: local, Docker, and Kubernetes',
      'GitHub Actions CI/CD integration for automated test runs'
    ],
    stack: ['Playwright', 'TypeScript', 'UI Automation', 'Docker', 'Kubernetes', 'CI/CD'],
    github: 'https://github.com/nageshkumar-gh/playwright-framework'
  },
  'api-platform': {
    badge: 'API Testing',
    badgeClass: 'badge-blue',
    title: 'restassured-api-testing-platform',
    desc: 'An API testing platform focused on scalable RestAssured suites, reusable request patterns, and contract validation.',
    focus: [
      'Endpoint validation for positive and negative scenarios',
      'Schema and payload integrity checks',
      'Environment-specific base configuration support',
      'Actionable test reports for API quality gates'
    ],
    stack: ['RestAssured', 'Java', 'API Automation'],
    github: 'https://github.com/nageshkumar-gh'
  },
  'bdd-framework': {
    badge: 'BDD',
    badgeClass: 'badge-purple',
    title: 'bdd-cucumber-framework',
    desc: 'A behavior-driven testing framework that maps business requirements directly into executable scenarios.',
    focus: [
      'Readable Gherkin scenarios for business and QA alignment',
      'Step-definition reuse across features',
      'BDD workflow integration with automated test runs',
      'Improved requirement traceability'
    ],
    stack: ['Cucumber', 'BDD', 'Gherkin'],
    github: 'https://github.com/nageshkumar-gh'
  },
  'qa-strategy': {
    badge: 'QA Leadership',
    badgeClass: 'badge-amber',
    title: 'qa-strategy-and-metrics-toolkit',
    desc: 'A toolkit for quality strategy planning, test health monitoring, and KPI-driven QA leadership decisions.',
    focus: [
      'Test strategy templates for multiple delivery models',
      'Quality metric definitions and tracking views',
      'Release readiness indicators and risk signals',
      'Leadership-level reporting support'
    ],
    stack: ['Quality Metrics', 'QA Strategy', 'Leadership'],
    github: 'https://github.com/nageshkumar-gh'
  },
  'cicd-testing': {
    badge: 'CI/CD Ownership',
    badgeClass: 'badge-blue',
    title: 'ci-cd-testing-pipelines',
    desc: 'CI/CD-oriented testing pipelines that enforce quality gates and speed up release confidence.',
    focus: [
      'Automated test stages wired into deployment flow',
      'Pipeline quality gates for build promotion',
      'Parallel test orchestration for faster feedback',
      'Failure diagnostics for rapid triage'
    ],
    stack: ['GitHub Actions', 'CI/CD', 'Quality Gates'],
    github: 'https://github.com/nageshkumar-gh'
  }
};

const experiences = {
  'testlead-nlt': {
    badge: 'Leadership',
    badgeClass: 'badge-blue',
    title: 'Test Lead - NLT Singapore',
    desc: 'Led QA delivery for enterprise applications and drove automation adoption across the team.',
    focus: [
      'Defined QA strategy and sprint-level quality goals',
      'Scaled Selenium and API automation coverage',
      'Integrated automated checks into CI/CD pipelines',
      'Coordinated test planning and release sign-off with stakeholders'
    ],
    stack: ['Selenium / Java', 'RestAssured', 'CI/CD', 'Leadership']
  },
  'testlead-vf': {
    badge: 'Leadership',
    badgeClass: 'badge-purple',
    title: 'Test Lead - Vodafone UK',
    desc: 'Managed a QA function focused on API and integration quality for high-impact releases.',
    focus: [
      'Led a team of testers across agile delivery streams',
      'Built reusable automation assets for API test cycles',
      'Improved test reliability and reporting visibility',
      'Partnered with developers to shorten defect turnaround time'
    ],
    stack: ['RestAssured', 'TestNG', 'Postman', 'API Testing']
  },
  'senior-ste': {
    badge: 'Senior Role',
    badgeClass: 'badge-amber',
    title: 'Senior Software Test Engineer',
    desc: 'Designed and maintained robust automation suites with a strong focus on quality gates and mentoring.',
    focus: [
      'Built maintainable UI and API automation frameworks',
      'Improved regression coverage and reduced manual effort',
      'Reviewed test design quality and coding standards',
      'Mentored engineers on debugging and root-cause analysis'
    ],
    stack: ['Selenium / Java', 'RestAssured', 'Test Design', 'Mentoring']
  },
  ste: {
    badge: 'Core QA',
    badgeClass: 'badge-blue',
    title: 'Software Test Engineer',
    desc: 'Delivered high-quality test execution across functional and integration areas in agile releases.',
    focus: [
      'Prepared and executed detailed test cases',
      'Performed integration and regression testing',
      'Tracked defects with clear reproduction evidence',
      'Collaborated with developers during issue triage'
    ],
    stack: ['Functional Testing', 'Integration Testing', 'Defect Tracking', 'Documentation']
  },
  'test-associate': {
    badge: 'Early Career',
    badgeClass: 'badge-purple',
    title: 'Test Associate',
    desc: 'Supported the QA lifecycle through thorough test execution and disciplined defect reporting.',
    focus: [
      'Executed smoke and sanity test cycles',
      'Logged and verified defects using tracking tools',
      'Maintained traceability between requirements and tests',
      'Supported release readiness checks with senior QA members'
    ],
    stack: ['Smoke Testing', 'Bug Reporting', 'Test Execution', 'QA Fundamentals']
  }
};

const badgeStyles = {
  'badge-purple': 'background:#f3f0ff;color:#5b21b6;',
  'badge-blue':   'background:#eff6ff;color:#1d4ed8;',
  'badge-amber':  'background:#fffbeb;color:#92400e;'
};

// =====================
// MODAL
// =====================
const overlay = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(key) {
  const p = projects[key];
  if (!p) return;
  const badgeStyle = badgeStyles[p.badgeClass] || '';
  const featureItems = p.focus.map(f => '<li>' + f + '</li>').join('');
  const stackItems = p.stack.map(s => '<span>' + s + '</span>').join('');
  modalContent.innerHTML =
    '<span class="modal-badge" style="' + badgeStyle + '">' + p.badge + '</span>' +
    '<h2>' + p.title + '</h2>' +
    '<p class="modal-desc">' + p.desc + '</p>' +
    '<div class="modal-section-title">What this project focuses on</div>' +
    '<ul class="modal-features">' + featureItems + '</ul>' +
    '<div class="modal-section-title">Tech stack</div>' +
    '<div class="modal-stack">' + stackItems + '</div>' +
    '<div class="modal-actions">' +
    '<a href="' + p.github + '" target="_blank" class="btn btn-primary">View on GitHub &rarr;</a>' +
    '<button class="btn btn-outline" onclick="closeModal()">Close</button>' +
    '</div>';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openExperienceModal(key) {
  const e = experiences[key];
  if (!e) return;
  const badgeStyle = badgeStyles[e.badgeClass] || '';
  const featureItems = e.focus.map(f => '<li>' + f + '</li>').join('');
  const stackItems = e.stack.map(s => '<span>' + s + '</span>').join('');
  modalContent.innerHTML =
    '<span class="modal-badge" style="' + badgeStyle + '">' + e.badge + '</span>' +
    '<h2>' + e.title + '</h2>' +
    '<p class="modal-desc">' + e.desc + '</p>' +
    '<div class="modal-section-title">Key responsibilities</div>' +
    '<ul class="modal-features">' + featureItems + '</ul>' +
    '<div class="modal-section-title">Skills used</div>' +
    '<div class="modal-stack">' + stackItems + '</div>' +
    '<div class="modal-actions">' +
    '<button class="btn btn-outline" onclick="closeModal()">Close</button>' +
    '</div>';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});

document.querySelectorAll('.exp-card[data-exp]').forEach(card => {
  card.addEventListener('click', () => openExperienceModal(card.dataset.exp));
});

document.querySelectorAll('.project-card .github-icon').forEach(link => {
  link.addEventListener('click', (e) => e.stopPropagation());
});

modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// =====================
// MOBILE NAV
// =====================
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// =====================
// ACTIVE NAV ON SCROLL
// =====================
const links = document.querySelectorAll('.nav-links a');

const anchors = Array.from(links)
  .map(l => ({ link: l, id: l.getAttribute('href').replace('#', ''), el: document.getElementById(l.getAttribute('href').replace('#', '')) }))
  .filter(a => a.el)
  .sort((a, b) => a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);

function updateActiveNav() {
  const navHeight = document.querySelector('nav')?.offsetHeight || 52;
  const scrollY = window.scrollY;
  const atBottom = scrollY + window.innerHeight >= document.body.scrollHeight - 10;
  let activeId = atBottom ? anchors[anchors.length - 1].id : null;
  if (!atBottom) {
    const threshold = navHeight + Math.round(window.innerHeight * 0.25);
    anchors.forEach(({ id, el }) => {
      if (el.getBoundingClientRect().top <= threshold) activeId = id;
    });
  }
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

const style = document.createElement('style');
style.textContent = '.nav-links a.active { color: var(--accent); }';
document.head.appendChild(style);

// =====================
// THEME TOGGLE
// =====================
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'preferred-theme';

const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
const sunIcon  = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;

function setTheme(mode) {
  document.body.classList.toggle('dark-mode', mode === 'dark');
  const icon = document.getElementById('themeIcon');
  if (themeToggle && icon) {
    icon.innerHTML = mode === 'dark' ? moonIcon : sunIcon;
    themeToggle.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'dark' || savedTheme === 'light') {
  setTheme(savedTheme);
} else {
  setTheme('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });
}

// =====================
// NAV PROGRESS BAR
// =====================
const navProgress = document.getElementById('navProgress');
function runNavProgress() {
  if (!navProgress) return;
  navProgress.classList.remove('running');
  void navProgress.offsetWidth; // force reflow to restart animation
  navProgress.classList.add('running');
}
document.querySelectorAll('.nav-links a, .logo').forEach(link => {
  link.addEventListener('click', runNavProgress);
});

// =====================
// PROJECTS NAV LINK — custom scroll offset
// =====================
document.querySelector('a[href="#projects"]')?.addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.getElementById('projects');
  if (!target) return;
  const navHeight = document.querySelector('nav')?.offsetHeight || 52;
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
  window.scrollTo({ top, behavior: 'smooth' });
});

// =====================
// BACK TO TOP
// =====================
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 300);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// =====================
// SCROLL FADE IN (staggered)
// =====================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 80) + 'ms';
  card.classList.add('card-hidden');
  fadeObserver.observe(card);
});

document.querySelectorAll('.exp-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 80) + 'ms';
  card.classList.add('card-hidden');
  fadeObserver.observe(card);
});
