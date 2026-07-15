/* ============================================
   AKADEMI BELAJAR — Multi Course
   Script Redesign — Premium Mobile App
   ============================================ */

// =============================================
// COURSES REGISTRY
// =============================================
const COURSES = {};
const COURSE_LIST = [];

function registerCourse(course) {
  COURSES[course.id] = course;
  COURSE_LIST.push(course);
}
registerCourse(COURSE_IMK);
registerCourse(COURSE_AI);
registerCourse(COURSE_TOEFL);

function getCurrentCourse() { return COURSES[state.currentCourse] || COURSE_IMK; }
function getMateri(courseId, materiId) {
  const c = COURSES[courseId];
  if (!c) return null;
  function find(items) {
    for (const m of items) {
      if (m.id === materiId) return m;
      if (m.children) {
        const found = find(m.children);
        if (found) return found;
      }
    }
    return null;
  }
  return find(c.materiData);
}
function getMateriCurrent(id) { return getMateri(state.currentCourse, id); }

function getMateriItems() {
  const course = getCurrentCourse();
  let items = course.materiData;
  for (const id of state.materiPath) {
    const parent = items.find(m => m.id === id);
    if (parent && parent.children) {
      items = parent.children;
    } else {
      break;
    }
  }
  return items;
}

function getLeafMateriItems() {
  const course = getCurrentCourse();
  function findLeaves(items) {
    let leaves = [];
    for (const m of items) {
      if (m.children && m.children.length > 0) {
        leaves = leaves.concat(findLeaves(m.children));
      } else {
        leaves.push(m);
      }
    }
    return leaves;
  }
  return findLeaves(course.materiData);
}

function getQuizItems() {
  const course = getCurrentCourse();
  function findQuizItems(items) {
    let result = [];
    for (const m of items) {
      if (m.quiz && m.quiz.length > 0) {
        result.push(m);
      }
      if (m.children && m.children.length > 0) {
        result = result.concat(findQuizItems(m.children));
      }
    }
    return result;
  }
  return findQuizItems(course.materiData);
}

// =============================================
// DATA: Quotes & Mascot Messages
// =============================================
const QUOTES = [
  { icon: '🔥', text: 'Sedikit lagi kamu pasti bisa! Semangat!' },
  { icon: '📚', text: 'Belajar hari ini, nilai A besok.' },
  { icon: '💪', text: 'Jangan menyerah! Usaha tidak mengkhianati hasil.' },
  { icon: '🌟', text: 'Setiap menit belajarmu adalah investasi.' },
  { icon: '🎯', text: 'Fokus pada tujuan, bukan hambatan.' },
  { icon: '🚀', text: 'Kamu lebih kuat dari yang kamu kira!' },
  { icon: '🏆', text: 'Juara sejati tidak pernah berhenti belajar.' },
  { icon: '✨', text: 'Percayalah proses, nikmati perjalanannya.' },
  { icon: '🎓', text: 'UAS tinggal sebentar, kejar nilaimu!' }
];

const MASCOT_MSGS = [
  'Semangat belajarnya! 🥰',
  'Kamu hebat! Lanjutkan! 💪',
  'Aku bangga sama kamu! 🌟',
  'Dikit lagi, pasti bisa! 🔥',
  'Belajar itu menyenangkan! ✨',
  'Kamu pasti dapat nilai A! 🎓',
  'Jangan lupa istirahat ya! 🥰',
  'Wih, pinter banget! 🧠',
  'Sipaa Cantikkk semangat! 💖'
];

// =============================================
// STATE
// =============================================
let state = {
  currentView: 'landing',
  currentCourse: 'imk',
  materiPath: [],
  currentFlashcardSubject: 0,
  currentFlashcardIndex: 0,
  flashcardFlipped: false,
  currentQuizSubject: 0,
  currentQuizIndex: 0,
  quizAnswered: false,
  quizScore: 0,
  quizFinished: false,
  darkMode: false,
  courseProgress: {},
  xp: 0,
  badges: [],
  flashcardUseCount: 0,
  quizCompletedCount: 0,
  memorizationCards: [],
  memorizationIndex: 0,
  searchQuery: '',
  quizSubjectDone: {}
};

// =============================================
// XP & LEVEL SYSTEM
// =============================================
const LEVEL_THRESHOLDS = [0, 200, 500, 1000, 2000, 3500];

function getLevel(xp) {
  let lv = 1;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) { lv = i + 1; break; }
  }
  return lv;
}

function getLevelProgress(xp) {
  const lv = getLevel(xp);
  const current = LEVEL_THRESHOLDS[lv - 1] || 0;
  const next = LEVEL_THRESHOLDS[lv] || current + 1000;
  return { current, next, xp, percent: Math.min(100, Math.round(((xp - current) / (next - current)) * 100)) };
}

function addXP(amount) {
  state.xp += amount;
  saveState();
  updateXpBar();
}

// =============================================
// BADGES
// =============================================
const ALL_BADGES = [
  { id: 'first', icon: '🎓', name: 'First Step', desc: 'Selesaikan materi pertama', check: s => { let c = 0; Object.values(s.courseProgress).forEach(p => { c += Object.keys(p.materiDone || {}).length; }); return c >= 1; } },
  { id: 'star', icon: '🌟', name: 'Star Student', desc: 'Selesaikan semua materi', check: s => { let total = 0; let done = 0; COURSE_LIST.forEach(co => { total += countLeafMateri(co.materiData); const p = s.courseProgress[co.id]; if (p) done += Object.keys(p.materiDone || {}).length; }); return total > 0 && done >= total; } },
  { id: 'quiz', icon: '🧠', name: 'Quiz Master', desc: 'Selesaikan semua quiz', check: s => s.quizCompletedCount >= totalMateriCount() },
  { id: 'flashcard', icon: '🔥', name: 'Flashcard Fan', desc: 'Gunakan flashcard 5x', check: s => s.flashcardUseCount >= 5 },
  { id: 'dedicated', icon: '💪', name: 'Dedicated', desc: 'Capai Level 5', check: s => getLevel(s.xp) >= 5 }
];

function totalMateriCount() {
  let c = 0;
  COURSE_LIST.forEach(co => {
    function countLeaves(items) {
      for (const m of items) {
        if (m.children && m.children.length > 0) countLeaves(m.children);
        else c++;
      }
    }
    countLeaves(co.materiData);
  });
  return c;
}

function countLeafMateri(items) {
  let c = 0;
  for (const m of items) {
    if (m.children && m.children.length > 0) c += countLeafMateri(m.children);
    else c++;
  }
  return c;
}

function checkBadges() {
  ALL_BADGES.forEach(b => {
    if (!state.badges.includes(b.id) && b.check(state)) {
      state.badges.push(b.id);
      saveState();
      showToast(b.icon + ' Badge: ' + b.name, '🎉');
      createMiniConfetti();
    }
  });
}

// =============================================
// PER-COURSE PROGRESS HELPERS
// =============================================
function getCourseProgress(courseId) {
  if (!state.courseProgress[courseId]) {
    state.courseProgress[courseId] = { materiDone: {}, quizSubjectDone: {}, flashcardUseCount: 0, quizCompletedCount: 0 };
  }
  return state.courseProgress[courseId];
}

function getCurrentCourseProgress() { return getCourseProgress(state.currentCourse); }

function isMateriDoneInCourse(courseId, materiId) {
  const p = getCourseProgress(courseId);
  return !!p.materiDone[materiId];
}

function isMateriDone(materiId) { return isMateriDoneInCourse(state.currentCourse, materiId); }

function getCourseProgressStats(courseId) {
  const course = COURSES[courseId];
  if (!course) return { total: 0, done: 0, percent: 0 };
  const p = getCourseProgress(courseId);
  const total = countLeafMateri(course.materiData);
  const done = Object.keys(p.materiDone || {}).length;
  return { total, done, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
}

function getTotalProgress() {
  let total = 0, done = 0;
  COURSE_LIST.forEach(co => {
    total += co.materiData.length;
    const p = state.courseProgress[co.id];
    if (p) done += Object.keys(p.materiDone || {}).length;
  });
  return { total, done, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
}

// =============================================
// LOCALSTORAGE (with migration from v2)
// =============================================
const STORAGE_KEY = 'akademi_belajar_v3';
const OLD_KEY = 'akademi_imk_v2';

function loadState() {
  try {
    // Try new format first
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const p = JSON.parse(saved);
      applySavedState(p);
      return;
    }
    // Migrate from old format
    const old = localStorage.getItem(OLD_KEY);
    if (old) {
      const p = JSON.parse(old);
      // Build course progress from old data
      const courseProgress = {};
      // IMK: map old progress directly
      const imkProgress = { materiDone: p.progress || {}, quizSubjectDone: p.quizSubjectDone || {}, flashcardUseCount: p.flashcardUseCount || 0, quizCompletedCount: p.quizCompletedCount || 0 };
      courseProgress.imk = imkProgress;
      // AI: empty
      courseProgress.ai = { materiDone: {}, quizSubjectDone: {}, flashcardUseCount: 0, quizCompletedCount: 0 };
      state.courseProgress = courseProgress;
      state.darkMode = p.darkMode || false;
      state.xp = p.xp || 0;
      state.badges = p.badges || [];
      state.flashcardUseCount = p.flashcardUseCount || 0;
      state.quizCompletedCount = p.quizCompletedCount || 0;
      state.quizSubjectDone = p.quizSubjectDone || {};
      saveState();
      localStorage.removeItem(OLD_KEY);
      return;
    }
    // Fresh install
    initFreshState();
  } catch(e) { initFreshState(); }
}

function initFreshState() {
  state.courseProgress = {};
  COURSE_LIST.forEach(co => {
    state.courseProgress[co.id] = { materiDone: {}, quizSubjectDone: {}, flashcardUseCount: 0, quizCompletedCount: 0 };
  });
}

function applySavedState(p) {
  state.darkMode = p.darkMode || false;
  state.currentCourse = p.currentCourse || 'imk';
  state.courseProgress = p.courseProgress || {};
  state.xp = p.xp || 0;
  state.badges = p.badges || [];
  state.flashcardUseCount = p.flashcardUseCount || 0;
  state.quizCompletedCount = p.quizCompletedCount || 0;
  state.quizSubjectDone = p.quizSubjectDone || {};
  // Ensure all courses exist in progress
  COURSE_LIST.forEach(co => {
    if (!state.courseProgress[co.id]) {
      state.courseProgress[co.id] = { materiDone: {}, quizSubjectDone: {}, flashcardUseCount: 0, quizCompletedCount: 0 };
    }
  });
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      darkMode: state.darkMode,
      currentCourse: state.currentCourse,
      courseProgress: state.courseProgress,
      xp: state.xp,
      badges: state.badges,
      flashcardUseCount: state.flashcardUseCount,
      quizCompletedCount: state.quizCompletedCount,
      quizSubjectDone: state.quizSubjectDone
    }));
  } catch(e) {}
}

// =============================================
// HELPERS
// =============================================
function $(s) { return document.querySelector(s); }
function $$(s) { return document.querySelectorAll(s); }

function getRandomQuote() { return QUOTES[Math.floor(Math.random() * QUOTES.length)]; }
function getRandomMascotMsg() { return MASCOT_MSGS[Math.floor(Math.random() * MASCOT_MSGS.length)]; }
function shuffleArray(a) { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }

// =============================================
// VIEW SWITCHING
// =============================================
function showView(viewId) {
  $$('.view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById('view-' + viewId);
  if (view) { view.classList.add('active'); }
  state.currentView = viewId;
  updateNav();
  updateHeader();
  updateFloatingBtn();
  updateMascot();
}

function updateNav() {
  $$('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === state.currentView));
}

function updateHeader() {
  const title = document.getElementById('header-title');
  const back = document.getElementById('header-back');
  const views = {
    landing: 'Akademi Belajar', dashboard: '📚 Pilih Mata Kuliah', materi: '📚 Materi', detail: 'Detail',
    flashcard: '🧠 Flash Card', quiz: '📝 Quiz', settings: '⚙ Pengaturan',
    quick: '⚡ 5 Menit', memorization: '📇 Hafalan'
  };
  const inDetail = state.currentView === 'detail';
  title.textContent = views[state.currentView] || 'Akademi Belajar';
  back.classList.toggle('visible', inDetail);
}

function updateFloatingBtn() {
  const btn = document.getElementById('floating-btn');
  btn.style.display = (state.currentView === 'landing' || state.currentView === 'dashboard' || state.currentView === 'materi' || state.currentView === 'detail' || state.currentView === 'flashcard' || state.currentView === 'quiz') ? 'flex' : 'none';
}

function updateXpBar() {
  const p = getLevelProgress(state.xp);
  document.getElementById('level-num').textContent = getLevel(state.xp);
  document.getElementById('xp-fill').style.width = p.percent + '%';
  document.getElementById('xp-label').textContent = state.xp + ' XP';
  checkBadges();
}

// =============================================
// DASHBOARD NAVIGATION
// =============================================
function goToDashboard() {
  renderDashboardView();
  showView('dashboard');
}

function selectCourse(courseId) {
  state.currentCourse = courseId;
  state.materiPath = [];
  saveState();
  renderMateriList();
  showView('materi');
}

// =============================================
// TOAST
// =============================================
function showToast(icon, text, duration) {
  duration = duration || 3000;
  const toast = document.getElementById('toast');
  document.getElementById('toast-icon').textContent = typeof icon === 'string' && icon.includes(' ') ? icon.split(' ')[0] : icon;
  document.getElementById('toast-text').textContent = text;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), duration);
}

// =============================================
// MASCOT
// =============================================
function updateMascot() {
  const el = document.getElementById('mascot');
  const speech = document.getElementById('mascot-speech');
  const msg = getRandomMascotMsg();
  speech.textContent = msg;
  speech.style.display = 'block';
  clearTimeout(el._st);
  el._st = setTimeout(() => { speech.style.display = 'none'; }, 4000);
}

function tapMascot() {
  const speech = document.getElementById('mascot-speech');
  const msg = getRandomMascotMsg();
  speech.textContent = msg;
  speech.style.display = 'block';
  speech.style.animation = 'none';
  speech.offsetHeight;
  speech.style.animation = 'speechIn 0.3s ease';
  clearTimeout(window._mt);
  window._mt = setTimeout(() => { speech.style.display = 'none'; }, 4000);
}

// =============================================
// ILLUSTRATIONS
// =============================================
function getIllustration(courseId, materiId) {
  const course = COURSES[courseId];
  if (!course || !course.illustrations) return '';
  // Try to find illustration for this specific materia
  if (course.illustrations[materiId]) return course.illustrations[materiId];
  // Fallback: try the course's own illustration
  if (course.illustrations[courseId]) return course.illustrations[courseId];
  return '';
}

// =============================================
// DASHBOARD VIEW
// =============================================
function renderDashboardView() {
  const container = document.getElementById('course-cards');
  container.innerHTML = COURSE_LIST.map((course, idx) => {
    const stats = getCourseProgressStats(course.id);
    const gradientClass = course.id === 'imk' ? 'course-card-imk' : course.id === 'toefl' ? 'course-card-toefl' : 'course-card-ai';
    const delay = idx * 0.15;
    return `
      <div class="course-card ${gradientClass}" style="animation-delay:${delay}s" onclick="handleCourseClick(event, '${course.id}')">
        <div class="course-card-inner">
          <div class="course-card-svg">
            ${getIllustration(course.id, course.id)}
          </div>
          <div class="course-card-title">
            <span class="course-card-icon-big">${course.icon}</span>
            ${course.title}
          </div>
          <div class="course-card-desc">${course.description}</div>
          <div class="course-card-badge">
            ${course.materiData.length > 0 ? '📚 ' + countLeafMateri(course.materiData) + ' Materi' : '📚 Materi akan ditambahkan'}
          </div>
          <div class="course-card-progress">
            <div class="course-card-progress-label">
              <span>Progress Belajar</span>
              <span>${stats.percent}%</span>
            </div>
            <div class="course-card-progress-bar">
              <div class="course-card-progress-fill" style="width:${stats.percent}%"></div>
            </div>
          </div>
          <button class="course-card-btn" onclick="event.stopPropagation();selectCourse('${course.id}')">
            📖 Mulai Belajar
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function handleCourseClick(event, courseId) {
  // Create ripple
  const card = event.currentTarget;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = card.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
  card.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
  // Navigate after ripple
  setTimeout(() => selectCourse(courseId), 200);
}

// =============================================
// LANDING VIEW
// =============================================
function renderLandingView() {
  const p = getTotalProgress();
  document.getElementById('hero-greeting').textContent = getRandomMascotMsg();
  document.getElementById('hero-progress-done').textContent = p.done;
  document.getElementById('hero-progress-total').textContent = p.total;
  document.getElementById('hero-progress-fill').style.width = p.percent + '%';
  document.getElementById('hero-progress-pct').textContent = p.percent + '%';

  document.getElementById('stat-materi').textContent = p.done;
  document.getElementById('stat-xp').textContent = state.xp;
  document.getElementById('stat-level').textContent = getLevel(state.xp);

  renderBadges();
}

function renderBadges() {
  const row = document.getElementById('badges-row');
  row.innerHTML = ALL_BADGES.map(b => `
    <div class="badge-item">
      <div class="badge-icon ${state.badges.includes(b.id) ? 'earned' : 'locked'}">${state.badges.includes(b.id) ? b.icon : '🔒'}</div>
      <div class="badge-name">${b.name}</div>
    </div>
  `).join('');
}

// =============================================
// MATERI LIST (per course)
// =============================================
function renderMateriList() {
  const course = getCurrentCourse();
  const grid = document.getElementById('materi-grid');
  const subtitle = document.getElementById('materi-subtitle');

  const items = getMateriItems();
  const hasPath = state.materiPath.length > 0;

  if (hasPath) {
    const parent = state.materiPath[state.materiPath.length - 1];
    const parentItem = getMateriCurrent(parent);
    subtitle.textContent = parentItem ? parentItem.title : course.title;
  } else {
    subtitle.textContent = 'Pilih materi ' + course.title + ' yang ingin dipelajari';
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:48px 16px;">
        <div style="font-size:64px;margin-bottom:16px;">${course.illustrations[course.id] || ''}</div>
        <div style="font-size:24px;font-weight:700;margin-bottom:8px;">${course.icon} ${course.title}</div>
        <div style="font-size:14px;color:var(--text-muted);line-height:1.6;margin-bottom:4px;">Tunggu materi ${course.title} ditambahkan.</div>
        <div style="font-size:13px;color:var(--text-muted);">Seluruh sistem (quiz, flashcard, progress, timer) sudah siap digunakan.</div>
      </div>
    `;
    return;
  }

  let html = '';

  if (hasPath) {
    html += `<div style="grid-column:1/-1;margin-bottom:8px;">
      <button class="btn btn-outline btn-sm" onclick="navigateBack()" style="border-radius:12px;">← Kembali</button>
    </div>`;
  }

  html += items.map((m, i) => {
    const done = isMateriDone(m.id);
    const hasChildren = m.children && m.children.length > 0;
    const gradients = {
      primary: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
      secondary: 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
      accent: 'linear-gradient(135deg, #F59E0B, #F97316)',
      green: 'linear-gradient(135deg, #22C55E, #16A34A)',
      pink: 'linear-gradient(135deg, #EC4899, #DB2777)',
      tosca: 'linear-gradient(135deg, #14B8A6, #0D9488)',
      orange: 'linear-gradient(135deg, #F97316, #EA580C)',
      blue: 'linear-gradient(135deg, #1D4ED8, #3B82F6)'
    };
    const clickAction = hasChildren ? `navigateInto('${m.id}')` : `openDetail('${m.id}')`;
    return `
      <div class="mcard" onclick="${clickAction}" style="animation-delay:${i * 0.06}s">
        <span class="mcard-icon">${m.icon}</span>
        <div class="mcard-title">${m.title}</div>
        <div class="mcard-sub">${m.subtitle || ''}</div>
        ${done ? '<span class="mcard-check">✅</span>' : ''}
        <div class="mcard-gradient" style="background:${gradients[m.color] || gradients.primary}"></div>
      </div>
    `;
  }).join('');

  grid.innerHTML = html;
}

function navigateInto(id) {
  state.materiPath.push(id);
  renderMateriList();
}

function navigateBack() {
  state.materiPath.pop();
  renderMateriList();
}

// =============================================
// DETAIL VIEW (per course)
// =============================================
function openDetail(id) {
  state.currentMateri = id;
  renderDetailView(id);
  showView('detail');
}

function renderDetailView(id) {
  const course = getCurrentCourse();
  const m = getMateriCurrent(id);
  if (!m) return;
  const done = isMateriDone(id);
  const container = document.getElementById('detail-container');

  let html = `
    <div class="detail-hero">
      <div class="illustration-wrap">${getIllustration(state.currentCourse, m.id)}</div>
      <span class="detail-icon-big">${m.icon}</span>
      <div class="detail-title-big">${m.title}</div>
      <div class="detail-sub">${m.subtitle}</div>
    </div>
    <div class="detail-actions">
      <button class="btn ${done ? 'btn-green' : 'btn-primary'}" id="btn-paham" style="border-radius:16px;">
        ${done ? '✅ Sudah Paham' : '📖 Tandai Selesai'}
      </button>
    </div>
    <div class="stagger" id="detail-sections">
  `;

  m.sections.forEach((sec, i) => {
    const typeMap = {
      pengertian: 'card-pengertian', tujuan: 'card-tujuan',
      contoh: 'card-contoh', tips: 'card-tips',
      ringkasan: 'card-ringkasan', info: 'card-info'
    };
    const cls = typeMap[sec.type] || 'card-info';

    html += `<div class="info-card ${cls}" style="animation-delay:${i * 0.05}s">`;
    html += `<span class="card-icon">${sec.icon}</span>`;
    html += `<div class="card-title">${sec.title}</div>`;

    if (sec.content) {
      html += `<div class="card-text">${sec.content.replace(/\n/g, '<br>')}</div>`;
    }
    if (sec.checklist) {
      html += `<ul class="checklist">${sec.checklist.map(c => `<li>${c}</li>`).join('')}</ul>`;
    }
    if (sec.bullet) {
      html += `<ul class="bullet-list">${sec.bullet.map(b => `<li>${b}</li>`).join('')}</ul>`;
    }
    if (sec.items) {
      html += `<ul class="bullet-list">${sec.items.map(it => `<li>${it}</li>`).join('')}</ul>`;
    }

    html += `</div>`;
  });

  html += `</div></div>`;
  container.innerHTML = html;

  document.getElementById('btn-paham').addEventListener('click', function() {
    if (!isMateriDone(id)) {
      markMateriDone(id);
      this.innerHTML = '✅ Sudah Paham';
      this.className = 'btn btn-green';
      this.style.borderRadius = '16px';
    }
  });
}

function markMateriDone(id) {
  const cp = getCurrentCourseProgress();
  if (cp.materiDone[id]) return;
  cp.materiDone[id] = true;
  addXP(50);
  saveState();
  updateLandingProgress();
  renderMateriList();
  renderDetailView(id);
  showToast('✅', 'Materi selesai! +50 XP 🔥');
  createMiniConfetti();
  checkAllDone();
  checkBadges();
}

function updateLandingProgress() {
  const p = getTotalProgress();
  const doneEl = document.getElementById('hero-progress-done');
  const totalEl = document.getElementById('hero-progress-total');
  const fillEl = document.getElementById('hero-progress-fill');
  const pctEl = document.getElementById('hero-progress-pct');
  if (doneEl && totalEl && fillEl && pctEl) {
    doneEl.textContent = p.done; totalEl.textContent = p.total;
    fillEl.style.width = p.percent + '%'; pctEl.textContent = p.percent + '%';
  }
  const sm = document.getElementById('stat-materi');
  if (sm) sm.textContent = p.done;
}

function checkAllDone() {
  const p = getTotalProgress();
  if (p.done === p.total && p.total > 0) {
    document.getElementById('achievement-text').textContent = 'Kamu menyelesaikan semua materi! Luar biasa! 💪🔥';
    showAchievement();
  }
}

// =============================================
// FLASHCARD VIEW (per course)
// =============================================
function renderFlashcardView() {
  const items = getLeafMateriItems();
  if (state.currentFlashcardSubject >= items.length) state.currentFlashcardSubject = 0;
  renderFcTabs();
  renderFcCard();
}

function renderFcTabs() {
  const course = getCurrentCourse();
  const c = document.getElementById('fc-tabs');
  const items = getLeafMateriItems();
  if (items.length === 0) {
    c.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted)">Belum ada flashcard untuk mata kuliah ini</div>';
    return;
  }
  c.innerHTML = items.map((m, i) =>
    `<button class="fc-tab ${i === state.currentFlashcardSubject ? 'active' : ''}" onclick="switchFc(${i})">${m.icon} ${m.short}</button>`
  ).join('');
}

function switchFc(i) {
  state.currentFlashcardSubject = i;
  state.currentFlashcardIndex = 0;
  state.flashcardFlipped = false;
  renderFlashcardView();
}

function renderFcCard() {
  const items = getLeafMateriItems();
  if (items.length === 0) {
    const box = document.getElementById('fc-box');
    box.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Belum ada flashcard</div>';
    document.getElementById('fc-counter').textContent = '0/0';
    document.getElementById('fc-prev').disabled = true;
    document.getElementById('fc-next').disabled = true;
    return;
  }
  const m = items[state.currentFlashcardSubject];
  const cards = m.flashcards;
  const idx = state.currentFlashcardIndex;
  const total = cards.length;

  document.getElementById('fc-counter').textContent = total > 0 ? `${idx+1}/${total}` : '0/0';
  document.getElementById('fc-prev').disabled = idx === 0;
  document.getElementById('fc-next').disabled = idx === total - 1;

  const box = document.getElementById('fc-box');
  if (total === 0) {
    box.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Tidak ada kartu</div>';
    return;
  }
  const card = cards[idx];
  box.className = 'fc-card' + (state.flashcardFlipped ? ' flipped' : '');
  box.innerHTML = `
    <div class="fc-inner" onclick="flipFc()">
      <div class="fc-front">
        <span class="fc-front-icon">❓</span>
        <div class="fc-front-q">${card.q}</div>
        <div class="fc-front-hint">👆 Tap untuk jawaban</div>
      </div>
      <div class="fc-back">
        <div class="fc-back-a">${card.a}</div>
      </div>
    </div>
  `;
}

function flipFc() {
  state.flashcardFlipped = !state.flashcardFlipped;
  document.getElementById('fc-box')?.classList.toggle('flipped');
  if (state.flashcardFlipped) {
    state.flashcardUseCount++;
    saveState();
    checkBadges();
  }
}

function fcPrev() {
  if (state.currentFlashcardIndex > 0) {
    state.currentFlashcardIndex--;
    state.flashcardFlipped = false;
    renderFcCard();
  }
}

function fcNext() {
  const course = getCurrentCourse();
  if (course.materiData.length === 0) return;
  const m = course.materiData[state.currentFlashcardSubject];
  if (state.currentFlashcardIndex < m.flashcards.length - 1) {
    state.currentFlashcardIndex++;
    state.flashcardFlipped = false;
    renderFcCard();
  }
}

function shuffleFc() {
  const course = getCurrentCourse();
  if (course.materiData.length === 0) return;
  const m = course.materiData[state.currentFlashcardSubject];
  m.flashcards = shuffleArray(m.flashcards);
  state.currentFlashcardIndex = 0;
  state.flashcardFlipped = false;
  renderFcCard();
  showToast('🔀', 'Diacak!');
}

// =============================================
// QUIZ VIEW (per course)
// =============================================
function renderQuizView() {
  const items = getQuizItems();
  if (state.currentQuizSubject >= items.length) state.currentQuizSubject = 0;
  renderQuizTabs();
  renderQuiz();
}

function renderQuizTabs() {
  const c = document.getElementById('quiz-tabs');
  const items = getQuizItems();
  if (items.length === 0) {
    c.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted)">Belum ada quiz untuk mata kuliah ini</div>';
    return;
  }
  c.innerHTML = items.map((m, i) =>
    `<button class="quiz-tab ${i === state.currentQuizSubject ? 'active' : ''}" onclick="switchQuiz(${i})">${m.icon} ${m.short}</button>`
  ).join('');
}

function switchQuiz(i) {
  state.currentQuizSubject = i;
  state.currentQuizIndex = 0;
  state.quizAnswered = false;
  state.quizScore = 0;
  state.quizFinished = false;
  renderQuiz();
  renderQuizTabs();
}

function renderQuiz() {
  const items = getQuizItems();
  const c = document.getElementById('quiz-inner');

  if (items.length === 0) {
    c.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Belum ada quiz untuk mata kuliah ini</div>';
    return;
  }

  const m = items[state.currentQuizSubject];
  const qs = m.quiz;

  if (state.quizFinished) {
    const total = qs.length;
    const pct = total > 0 ? Math.round((state.quizScore / total) * 100) : 0;
    const emojis = ['📚', '💪', '🌟', '🏆'];
    const msgs = ['Ayo belajar lagi!', 'Masih perlu belajar.', 'Bagus! Tingkatkan!', 'Sempurna!'];
    const idx = pct >= 100 ? 3 : pct >= 80 ? 2 : pct >= 50 ? 1 : 0;
    if (pct >= 80) {
      const cp = getCurrentCourseProgress();
      cp.quizCompletedCount = (cp.quizCompletedCount || 0) + 1;
      cp.quizSubjectDone[m.id] = true;
      state.quizCompletedCount = (state.quizCompletedCount || 0) + 1;
      saveState();
      checkBadges();
    }
    c.innerHTML = `
      <div class="quiz-result">
        <span class="quiz-result-icon">${emojis[idx]}</span>
        <div class="quiz-result-title">Quiz Selesai!</div>
        <div class="quiz-result-score">${state.quizScore}/${total}</div>
        <div class="quiz-result-detail">${msgs[idx]}</div>
        <button class="btn btn-primary" onclick="resetQuiz()" style="border-radius:16px;">🔄 Ulang</button>
      </div>
    `;
    if (pct >= 80) createMiniConfetti();
    return;
  }

  const q = qs[state.currentQuizIndex];
  const total = qs.length;
  const pct = total > 0 ? ((state.currentQuizIndex) / total) * 100 : 0;
  const letters = ['A', 'B', 'C', 'D'];

  c.innerHTML = `
    <div class="quiz-progress-card">
      <div class="quiz-prog-row">
        <span>Soal ${state.currentQuizIndex + 1}/${total}</span>
        <span>Skor: ${state.quizScore}</span>
      </div>
      <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-qcard">
      <div class="quiz-qnum">PERTANYAAN ${state.currentQuizIndex + 1}</div>
      <div class="quiz-qtext">${q.q.replace(/\n/g, '<br>')}</div>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt" data-idx="${i}" onclick="answerQuiz(${i})">
            <span class="quiz-opt-letter">${letters[i]}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-explain" id="quiz-explain">
        <strong>💡 Penjelasan:</strong> ${q.explanation}
      </div>
    </div>
    ${state.currentQuizIndex < total - 1
      ? '<button class="btn btn-ghost btn-block" id="btn-quiz-next" style="display:none;border-radius:16px;margin-top:8px;" onclick="nextQuiz()">➡ Soal Berikutnya</button>'
      : '<button class="btn btn-ghost btn-block" id="btn-quiz-next" style="display:none;border-radius:16px;margin-top:8px;" onclick="finishQuiz()">📊 Lihat Hasil</button>'
    }
  `;
}

function answerQuiz(idx) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const items = getQuizItems();
  if (items.length === 0) return;
  const m = items[state.currentQuizSubject];
  const q = m.quiz[state.currentQuizIndex];
  const correct = q.answer;

  $$('.quiz-opt').forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === correct) opt.classList.add('correct');
    if (i === idx && idx !== correct) opt.classList.add('wrong');
  });

  if (idx === correct) { state.quizScore++; showToast('✅', 'Benar! 👍'); }
  else showToast('❌', 'Yuk simak penjelasannya!');

  document.getElementById('quiz-explain').classList.add('show');
  document.getElementById('btn-quiz-next').style.display = 'flex';
}

function nextQuiz() {
  state.currentQuizIndex++;
  state.quizAnswered = false;
  renderQuiz();
}

function finishQuiz() {
  state.quizFinished = true;
  if (state.quizScore >= 4) addXP(30);
  renderQuiz();
}

function resetQuiz() {
  state.currentQuizIndex = 0;
  state.quizAnswered = false;
  state.quizScore = 0;
  state.quizFinished = false;
  renderQuiz();
}

// =============================================
// SETTINGS VIEW
// =============================================
function renderSettingsView() {
  document.getElementById('darkmode-toggle').classList.toggle('active', state.darkMode);
  document.getElementById('settings-xp').textContent = state.xp;
  document.getElementById('settings-level').textContent = getLevel(state.xp);
  document.getElementById('settings-badges').textContent = state.badges.length + '/' + ALL_BADGES.length;
}

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
  saveState();
  renderSettingsView();
  const btn = document.getElementById('header-darkmode');
  if (btn) btn.textContent = state.darkMode ? '☀️' : '🌙';
  showToast(state.darkMode ? '🌙' : '☀️', state.darkMode ? 'Mode gelap' : 'Mode terang');
}

function resetProgress() {
  if (confirm('Yakin reset semua progress? Data tidak bisa dikembalikan.')) {
    state.courseProgress = {};
    COURSE_LIST.forEach(co => {
      state.courseProgress[co.id] = { materiDone: {}, quizSubjectDone: {}, flashcardUseCount: 0, quizCompletedCount: 0 };
    });
    state.xp = 0; state.badges = [];
    state.flashcardUseCount = 0; state.quizCompletedCount = 0;
    state.quizSubjectDone = {};
    saveState();
    updateLandingProgress(); renderMateriList(); updateXpBar(); renderBadges();
    showToast('🔄', 'Progress direset!');
  }
}

// =============================================
// TIMER (POMODORO)
// =============================================
let timerState = { running: false, paused: false, minutes: 25, seconds: 0, interval: null, original: 25 };

function openTimer() { document.getElementById('timer-modal').classList.add('show'); updateTimerDisplay(); }
function closeTimer() { document.getElementById('timer-modal').classList.remove('show'); }

function updateTimerDisplay() {
  const d = document.getElementById('timer-num');
  const l = document.getElementById('timer-label');
  if (d) d.textContent = String(timerState.minutes).padStart(2,'0') + ':' + String(timerState.seconds).padStart(2,'0');
  if (l) l.textContent = timerState.running ? (timerState.paused ? '⏸ Dijeda' : '⏳ Belajar...') : '⏱ Siap!';
}

function startTimer() {
  if (timerState.running && !timerState.paused) return;
  if (timerState.paused) { timerState.paused = false; timerState.interval = setInterval(tickTimer, 1000); updateTimerDisplay(); return; }
  timerState.running = true; timerState.paused = false;
  timerState.interval = setInterval(tickTimer, 1000);
  updateTimerDisplay();
}

function pauseTimer() {
  if (!timerState.running || timerState.paused) return;
  timerState.paused = true; clearInterval(timerState.interval);
  updateTimerDisplay();
}

function resetTimer() {
  clearInterval(timerState.interval);
  timerState.running = false; timerState.paused = false;
  timerState.minutes = timerState.original; timerState.seconds = 0;
  timerState.interval = null; updateTimerDisplay();
}

function tickTimer() {
  if (timerState.seconds === 0) {
    if (timerState.minutes === 0) {
      clearInterval(timerState.interval); timerState.running = false; timerState.paused = false;
      updateTimerDisplay(); showToast('🎉', 'Waktu selesai! Istirahat!'); createMiniConfetti();
      return;
    }
    timerState.minutes--; timerState.seconds = 59;
  } else timerState.seconds--;
  updateTimerDisplay();
}

function setTimerPreset(minutes) {
  if (timerState.running) return;
  timerState.original = minutes; timerState.minutes = minutes; timerState.seconds = 0;
  updateTimerDisplay();
  $$('.timer-pre').forEach(el => el.classList.toggle('active', parseInt(el.dataset.min) === minutes));
}

// =============================================
// SEARCH
// =============================================
function openSearch() {
  document.getElementById('search-overlay').classList.add('show');
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML =
    '<div class="search-empty"><span style="font-size:48px;display:block;margin-bottom:12px;">🔍</span><div style="font-weight:600;margin-bottom:4px;">Cari materi</div><div style="font-size:13px;color:var(--text-muted)">Ketik kata kunci</div></div>';
  document.getElementById('search-input').focus();
}

function closeSearch() { document.getElementById('search-overlay').classList.remove('show'); }

function doSearch(q) {
  const c = document.getElementById('search-results');
  const query = q.toLowerCase().trim();
  if (!query) { c.innerHTML = '<div class="search-empty"><span style="font-size:48px;display:block;margin-bottom:12px;">🔍</span><div style="font-weight:600;margin-bottom:4px;">Cari materi</div></div>'; return; }

  const results = [];
  COURSE_LIST.forEach(co => {
    function searchItems(items) {
      items.forEach(m => {
        const match = m.title.toLowerCase().includes(query) || (m.subtitle && m.subtitle.toLowerCase().includes(query)) ||
          (m.sections && m.sections.some(s => (s.title && s.title.toLowerCase().includes(query)) || (s.content && s.content.toLowerCase().includes(query))));
        if (match) results.push({ courseId: co.id, courseTitle: co.title, courseIcon: co.icon, ...m });
        if (m.children) searchItems(m.children);
      });
    }
    searchItems(co.materiData);
  });

  if (results.length === 0) {
    c.innerHTML = '<div class="search-empty"><span style="font-size:48px;display:block;margin-bottom:12px;">🔍</span><div style="font-weight:600;margin-bottom:4px;">Tidak ditemukan</div><div style="font-size:13px;color:var(--text-muted)">Coba kata kunci lain</div></div>';
    return;
  }
  c.innerHTML = results.map(r =>
    `<div class="search-item" onclick="selectCourseAndOpen('${r.courseId}','${r.id}');closeSearch();">
      <div class="search-item-title">${r.courseIcon} ${r.courseTitle} — ${r.title}</div>
      <div class="search-item-sub">${r.subtitle}</div>
    </div>`
  ).join('');
}

function selectCourseAndOpen(courseId, materiId) {
  state.currentCourse = courseId;
  state.materiPath = [];
  saveState();
  renderMateriList();
  openDetail(materiId);
}

// =============================================
// SUMMARY
// =============================================
function openSummary() {
  const course = getCurrentCourse();
  const ringkasan = course.ringkasan || [];
  const c = document.getElementById('summary-content');
  if (ringkasan.length === 0) {
    c.innerHTML = '<div style="text-align:center;padding:30px;color:var(--text-muted)">Belum ada ringkasan untuk mata kuliah ini</div>';
  } else {
    c.innerHTML =
      '<div style="text-align:center;margin-bottom:16px;"><span style="font-size:48px;">⭐</span><div style="font-size:20px;font-weight:700;margin-top:8px;">Ringkasan ' + course.title + '</div></div>' +
      ringkasan.map(r => `<div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid var(--border-color);font-size:14px;color:var(--text-secondary);line-height:1.6;"><span style="font-size:20px;flex-shrink:0;">${r.icon}</span><span>${r.text}</span></div>`).join('');
  }
  document.getElementById('summary-modal').classList.add('show');
}
function closeSummary() { document.getElementById('summary-modal').classList.remove('show'); }

// =============================================
// QUICK LEARNING
// =============================================
function openQuick() {
  const course = getCurrentCourse();
  const ringkasan = course.ringkasan || [];
  const container = document.getElementById('quick-container');
  if (ringkasan.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Belum ada ringkasan untuk mata kuliah ini</div>';
  } else {
    container.innerHTML = ringkasan.map((r, i) =>
      `<div class="quick-item" style="animation-delay:${i * 0.08}s">
        <span class="quick-item-icon">${r.icon}</span>
        <div class="quick-item-text">${r.text}</div>
      </div>`
    ).join('');
  }
  showView('quick');
}

// =============================================
// MEMORIZATION
// =============================================
function openMemorization() {
  const all = [];
  COURSE_LIST.forEach(co => {
    function collectFlashcards(items) {
      items.forEach(m => {
        if (m.flashcards) m.flashcards.forEach(fc => all.push({ icon: co.icon, q: fc.q, a: fc.a, subject: m.title, course: co.title }));
        if (m.children) collectFlashcards(m.children);
      });
    }
    collectFlashcards(co.materiData);
  });
  if (all.length === 0) {
    showToast('📇', 'Belum ada kartu untuk dihafal');
    return;
  }
  state.memorizationCards = shuffleArray(all);
  state.memorizationIndex = 0;
  renderMemo();
  showView('memorization');
}

function renderMemo() {
  const cards = state.memorizationCards;
  const idx = state.memorizationIndex;
  const c = document.getElementById('memo-container');
  if (cards.length === 0) {
    c.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Tidak ada kartu</div>';
    return;
  }
  const cur = cards[idx];
  c.innerHTML = `
    <div style="text-align:center;margin-bottom:12px;">
      <div style="font-size:13px;color:var(--text-muted)">Geser atau tap tombol</div>
    </div>
    <div class="memo-card" id="memo-card" onclick="memoFlip()">
      <span class="memo-card-icon">${cur.icon}</span>
      <div class="memo-card-text" id="memo-text">${cur.q}</div>
      <span class="memo-card-label">👆 Tap lihat jawaban</span>
    </div>
    <div class="memo-counter">${idx + 1} / ${cards.length}</div>
    <div style="display:flex;justify-content:center;gap:12px;">
      <button class="btn btn-outline btn-sm" onclick="memoPrev()">👈</button>
      <button class="btn btn-primary btn-sm" onclick="memoFlip()">👆 Balik</button>
      <button class="btn btn-outline btn-sm" onclick="memoNext()">👉</button>
    </div>
  `;
}

function memoFlip() {
  const card = document.getElementById('memo-card');
  const text = document.getElementById('memo-text');
  const label = card?.querySelector('.memo-card-label');
  const cur = state.memorizationCards[state.memorizationIndex];
  if (!card || !cur) return;
  if (card.dataset.flipped === 'true') {
    card.dataset.flipped = 'false';
    text.textContent = cur.q;
    if (label) label.textContent = '👆 Tap lihat jawaban';
    card.style.background = ''; card.style.color = '';
  } else {
    card.dataset.flipped = 'true';
    text.textContent = cur.a;
    if (label) label.textContent = '👆 Tap kembali';
    card.style.background = 'var(--gradient-primary)'; card.style.color = 'white';
  }
}

function memoNext() {
  if (state.memorizationIndex < state.memorizationCards.length - 1) {
    state.memorizationIndex++;
    renderMemo();
  } else showToast('🎉', 'Semua selesai!');
}

function memoPrev() {
  if (state.memorizationIndex > 0) {
    state.memorizationIndex--;
    renderMemo();
  }
}

// =============================================
// CONFETTI
// =============================================
function createMiniConfetti() {
  const c = document.getElementById('confetti-container');
  const colors = ['#4F46E5','#06B6D4','#F59E0B','#22C55E','#EF4444','#EC4899','#FFF8E7'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'confetti';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = '-10px';
    p.style.width = (Math.random() * 8 + 4) + 'px';
    p.style.height = (Math.random() * 8 + 4) + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    p.style.animationDuration = (Math.random() * 2 + 2) + 's';
    p.style.animationDelay = (Math.random() * 0.5) + 's';
    c.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }
}

// =============================================
// ACHIEVEMENT
// =============================================
function showAchievement() {
  document.getElementById('achievement-overlay').classList.add('show');
  createMiniConfetti();
  setTimeout(createMiniConfetti, 500);
}
function closeAchievement() { document.getElementById('achievement-overlay').classList.remove('show'); }

// =============================================
// NAVIGATION
// =============================================
function navigateTo(v) {
  if (v === 'dashboard') { renderDashboardView(); showView('dashboard'); }
  else if (v === 'materi') { renderMateriList(); showView('materi'); }
  else if (v === 'flashcard') { renderFlashcardView(); showView('flashcard'); }
  else if (v === 'quiz') { renderQuizView(); showView('quiz'); }
  else if (v === 'settings') { renderSettingsView(); showView('settings'); }
}

function goBack() {
  if (state.currentView === 'detail') { renderMateriList(); showView('materi'); }
  else if (state.currentView === 'materi' && state.materiPath.length > 0) { navigateBack(); }
  else if (state.currentView === 'quick' || state.currentView === 'memorization') showView('dashboard');
}

// =============================================
// INIT
// =============================================
function init() {
  loadState();

  if (state.darkMode) document.documentElement.setAttribute('data-theme', 'dark');
  const darkBtn = document.getElementById('header-darkmode');
  if (darkBtn) darkBtn.textContent = state.darkMode ? '☀️' : '🌙';

  // Event listeners
  document.getElementById('search-input').addEventListener('input', function() { doSearch(this.value); });
  document.getElementById('search-input').addEventListener('keydown', function(e) { if (e.key === 'Escape') closeSearch(); });

  // Render
  renderLandingView();
  updateXpBar();
  showView('landing');

  // Set timer presets
  setTimerPreset(25);

  // Status bar time
  function updateTime() {
    const d = new Date();
    document.getElementById('status-time').textContent =
      String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
  }
  updateTime();
  setInterval(updateTime, 30000);

  // Show welcome quote
  setTimeout(() => {
    const q = getRandomQuote();
    showToast(q.icon, q.text, 4000);
  }, 800);
}

// Run
document.addEventListener('DOMContentLoaded', function() {
  try { init(); }
  catch(e) { console.error('Init error:', e); }
});
