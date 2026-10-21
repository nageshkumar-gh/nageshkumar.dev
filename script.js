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
  // 'qa-strategy': {
  //   badge: 'QA Leadership',
  //   badgeClass: 'badge-amber',
  //   title: 'qa-strategy-and-metrics-toolkit',
  //   desc: 'A toolkit for quality strategy planning, test health monitoring, and KPI-driven QA leadership decisions.',
  //   focus: [
  //     'Test strategy templates for multiple delivery models',
  //     'Quality metric definitions and tracking views',
  //     'Release readiness indicators and risk signals',
  //     'Leadership-level reporting support'
  //   ],
  //   stack: ['Quality Metrics', 'QA Strategy', 'Leadership'],
  //   github: 'https://github.com/nageshkumar-gh'
  // },
  // 'cicd-testing': {
  //   badge: 'CI/CD Ownership',
  //   badgeClass: 'badge-blue',
  //   title: 'ci-cd-testing-pipelines',
  //   desc: 'CI/CD-oriented testing pipelines that enforce quality gates and speed up release confidence.',
  //   focus: [
  //     'Automated test stages wired into deployment flow',
  //     'Pipeline quality gates for build promotion',
  //     'Parallel test orchestration for faster feedback',
  //     'Failure diagnostics for rapid triage'
  //   ],
  //   stack: ['GitHub Actions', 'CI/CD', 'Quality Gates'],
  //   github: 'https://github.com/nageshkumar-gh'
  // }
};

const experiences = {
  'programware-lead': {
    badge: 'Leadership',
    badgeClass: 'badge-blue',
    title: 'Lead QA Automation Engineer - Programware',
    desc: 'Leading QA automation strategy for microservice changes, championing shift-left testing and CI-driven quality gates.',
    focus: [
      'Championed Shift-Left testing by using API mocking (WireMock, Postman) to build and execute automated tests in parallel with active development',
      'Automated front-end and back-end flows using Playwright and Unix scripting, achieving 80% regression and 50% progression test coverage',
      'Triaged and escalated critical defects, running cross-functional sessions with developers, designers, and domain experts to drive fixes to closure',
      'Analysed user story requirements to identify test scenarios and coverage during capacity planning and test prep'
    ],
    stack: ['Playwright', 'WireMock', 'Postman', 'Unix Scripting', 'Shift-Left']
  },
  'lead-test-engineer': {
    badge: 'Leadership',
    badgeClass: 'badge-purple',
    title: 'Lead Test Engineer - Accenture (Client: Vodafone UK)',
    desc: 'Owned end-to-end test strategy, planning, execution, automation, and go-live support across standalone projects for Vodafone UK.',
    focus: [
      'Prevented revenue leakage by identifying a defect allowing 100% discounted usage during active credit breaches, raising a strategic CR',
      'Prevented billing defects from reaching production across 4 consecutive releases with zero rollback-related incidents',
      'Produced Early Live Support test plans for 8+ urgent post-release hotfixes and rollbacks per release, ensuring zero P1 defects after go-live',
      'Led small teams of 2-3 across 5 standalone projects: application upgrade, cloud infrastructure change, data migration, GDPR data purging, and commercial launch'
    ],
    stack: ['Test Strategy', 'Billing Systems', 'Release Risk Assessment', 'Team Lead']
  },
  'senior-qa-engineer': {
    badge: 'Senior Role',
    badgeClass: 'badge-amber',
    title: 'Senior QA Engineer - Accenture (Client: NLT Singapore)',
    desc: 'Built BDD automation frameworks and backend validation scripts, integrating them into CI workflows.',
    focus: [
      'Built BDD automation frameworks using Cucumber, TestNG, Selenium, and Serenity, integrated with CI for sanity and regression testing',
      'Developed Unix shell scripts to automate backend batch job execution and DB output validation, cutting a 3-day ETL cycle down to 1 day',
      'Identified an Oracle product limitation affecting tax adjustments and validated a workaround that enabled a smooth go-live',
      'Maintained execution dashboards in HPQC and Azure DevOps, providing real-time visibility to stakeholders'
    ],
    stack: ['Cucumber / BDD', 'Selenium / Serenity', 'Unix Shell Scripting', 'Azure DevOps']
  },
  'qa-engineer': {
    badge: 'Core QA',
    badgeClass: 'badge-blue',
    title: 'QA Engineer - Accenture',
    desc: 'Delivered functional, regression, and integration testing across Siebel CRM and billing platforms.',
    focus: [
      'Validated backend batch resilience through failover testing, missing upstream file scenarios, and retry logic validation',
      'Delivered functional, regression, and integration testing across Siebel CRM and billing platforms, building strong domain expertise',
      'Performed impact analysis to optimise regression scope based on change requests and production incidents'
    ],
    stack: ['Failover Testing', 'Siebel CRM', 'Regression Testing', 'Impact Analysis']
  },
  'qa-associate': {
    badge: 'Early Career',
    badgeClass: 'badge-purple',
    title: 'QA Associate - Accenture',
    desc: 'Supported the QA lifecycle through thorough test execution and disciplined defect reporting.',
    focus: [
      'Executed manual and automated testing for CRM workflows, order journeys, and billing systems across Siebel and Unix interfaces',
      'Logged, tracked, and triaged defects in Jira, ensuring SLA compliance and timely developer resolution'
    ],
    stack: ['Manual Testing', 'CRM Workflows', 'Jira', 'QA Fundamentals']
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
  if (e.key === 'Escape') {
    closeModal();
    closeContactModal();
  }
});

// =====================
// CONTACT MODAL
// =====================
// Get a free access key at https://web3forms.com (enter the inbox email you want messages sent to).
// The key only allows sending to that inbox, so it is safe to publish; your email address is never exposed.
const WEB3FORMS_ACCESS_KEY = 'f53fcdda-ad06-4c03-9b0b-3a1fa28e5524';

const contactOverlay = document.getElementById('contactModal');
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
const contactSubmit = document.getElementById('contactSubmit');
let contactLastFocus = null;

function openContactModal() {
  contactLastFocus = document.activeElement;
  contactOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('contactName').focus();
}

function closeContactModal() {
  if (!contactOverlay.classList.contains('open')) return;
  contactOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (contactLastFocus) contactLastFocus.focus();
}

function setContactStatus(text, type) {
  contactStatus.textContent = text;
  contactStatus.className = 'form-status' + (type ? ' ' + type : '');
}

function validateContactForm() {
  let valid = true;
  contactForm.querySelectorAll('input[required], textarea[required]').forEach(field => {
    const ok = field.value.trim() !== '' && field.checkValidity();
    field.closest('.form-field').classList.toggle('invalid', !ok);
    if (!ok && valid) field.focus();
    valid = valid && ok;
  });
  return valid;
}

document.querySelectorAll('[data-open-contact]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
  });
});

document.getElementById('contactModalClose').addEventListener('click', closeContactModal);
document.getElementById('contactCancel').addEventListener('click', closeContactModal);

contactOverlay.addEventListener('click', (e) => {
  if (e.target === contactOverlay) closeContactModal();
});

contactForm.addEventListener('input', (e) => {
  const field = e.target.closest('.form-field');
  if (field) field.classList.remove('invalid');
});

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateContactForm()) {
    setContactStatus('Please fill in your name, a valid email and a message.', 'error');
    return;
  }

  const fields = contactForm.elements;
  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const message = fields.message.value.trim();

  contactSubmit.disabled = true;
  contactSubmit.textContent = 'Sending…';
  setContactStatus('');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'Portfolio message from ' + name,
        from_name: 'nageshkumar.dev',
        name: name,
        email: email,
        replyto: email,
        message: message,
        botcheck: fields.botcheck.checked
      })
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
    contactForm.reset();
    setContactStatus('Thanks, ' + name + '! Your message has been sent. I\'ll be in touch soon.', 'success');
  } catch (err) {
    setContactStatus('Sorry, something went wrong. Please try again or reach me on LinkedIn.', 'error');
  } finally {
    contactSubmit.disabled = false;
    contactSubmit.textContent = 'Send message';
  }
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
