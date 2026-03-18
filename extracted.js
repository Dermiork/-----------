
    // =======================
    // Быстрая персонализация:
    // =======================
    const HER_NAME = "Солнышко";          // <-- имя девушки
    const YOUR_NAME = "Твой буська)";
    const AUTHOR_NAME = "Андрей";             // <-- подпись (можно имя)
    const MET_DATE = "2026-02-09";        // <-- дата знакомства (YYYY-MM-DD) или любая важная дата

    // Текст, который будет печататься:
    const MAIN_TEXT = [
      "Солнышко, с днём рождения…",
      "",
      "Мы вместе совсем недавно, но ты уже успела стать моим любимым «сегодня».",
      "Мне нравится в тебе всё: твоя романтика, твой стиль, твой характер —",
      "и то, как ты умеешь делать обычные вещи особенными.",
      "",
      "Я хочу, чтобы сегодня ты чувствовала это максимально ясно:",
      "ты важна. ты желанна. ты невероятно красивая.",
      "",
      "И да…",
      "когда мы увидимся, я заберу у тебя не один настоящий поцелуй 😏💋"
    ].join("\n");

// =======================
    // Логика страницы:
    // =======================
    const herNameEl = document.getElementById("herName");
    const countText = document.getElementById("countText");
    const revealBtn = document.getElementById("revealBtn");
    const revealFast = document.getElementById("revealFast");
    const revealBox = document.getElementById("revealBox");
    const typedEl = document.getElementById("typed");
    const signatureEl = document.getElementById("signature");
    const openGift = document.getElementById("openGift");
    const copyLink = document.getElementById("copyLink");
    const toggleMusic = document.getElementById("toggleMusic");
    const beautyBtn = document.getElementById("beautyBtn");
    const birthdayMusic = document.getElementById("birthdayMusic");
    const marchMusic = document.getElementById("marchMusic");
    const launchScreen = document.getElementById("launchScreen");
    const moodText = document.getElementById("moodText");
    const sparkleBtn = document.getElementById("sparkleBtn");
    const openMiniGift = document.getElementById("openMiniGift");
    const miniGiftBox = document.getElementById("miniGiftBox");
    const enableMotionBtn = document.getElementById("enableMotionBtn");
    const motionPrompt = document.getElementById("motionPrompt");
    const closeMotionPrompt = document.getElementById("closeMotionPrompt");
    const laterMotionBtn = document.getElementById("laterMotionBtn");
    const openLibraryBookBtn = document.getElementById("openLibraryBookBtn");
    const libraryImportStubBtn = document.getElementById("libraryImportStubBtn");
    const cyclesList = document.getElementById("cyclesList");
    const cycleInfo = document.getElementById("cycleInfo");
    const volumesList = document.getElementById("volumesList");
    const readerHeader = document.getElementById("readerHeader");
    const readerContent = document.getElementById("readerContent");
    const continueReadingBtn = document.getElementById('continueReadingBtn');
    const readerFontSize = document.getElementById("readerFontSize");
    const readerWidth = document.getElementById("readerWidth");
    const readerThemeBtn = document.getElementById("readerThemeBtn");
    const readerChapterCounter = document.getElementById('readerChapterCounter');
    const backToVolumesBtn = document.getElementById('backToVolumesBtn');
    const readerFontSelect = document.getElementById('readerFontSelect');
    const readerLineHeightSelect = document.getElementById('readerLineHeightSelect');
    const readerDensitySelect = document.getElementById('readerDensitySelect');
    const readerOverlayProgressPercent = document.getElementById('readerOverlayProgressPercent');
    const readerOverlayProgressFill = document.getElementById('readerOverlayProgressFill');
    const readerProgressLabel = document.getElementById('readerProgressLabel');
    const toggleChapterMenuBtn = document.getElementById('toggleChapterMenuBtn');
    const readerChapterMenu = document.getElementById('readerChapterMenu');
    const readerChapterMenuList = document.getElementById('readerChapterMenuList');
    const openReaderOverlayBtn = document.getElementById('openReaderOverlayBtn');
    const closeReaderOverlayBtn = document.getElementById('closeReaderOverlayBtn');
    const readerOverlay = document.getElementById('readerOverlay');
    const readerViewport = document.getElementById('readerViewport');
    const readerModeSelect = document.getElementById('readerModeSelect');
    const readerPageNav = document.getElementById('readerPageNav');
    const prevScreenPageBtn = document.getElementById('prevScreenPageBtn');
    const nextScreenPageBtn = document.getElementById('nextScreenPageBtn');
    const readerEndActions = document.getElementById('readerEndActions');
    const endPrevChapterBtn = document.getElementById('endPrevChapterBtn');
    const endNextChapterBtn = document.getElementById('endNextChapterBtn');
    const readerCardTitle = document.getElementById('readerCardTitle');
    const readerCardText = document.getElementById('readerCardText');
    const toggleEditorModeBtn = document.getElementById('toggleEditorModeBtn');
    const readerToolbar = document.querySelector('#readerOverlay .reader-toolbar');
    const readerOverlayBody = document.querySelector('#readerOverlay .reader-overlay__body');
    const readerOverlayHeader = document.querySelector('#readerOverlay .reader-overlay__header');
    const toggleReaderSettingsPanelBtn = document.getElementById('toggleReaderSettingsPanelBtn');
    const readerMetaVolume = document.getElementById('readerMetaVolume');
    const readerMetaChapter = document.getElementById('readerMetaChapter');
    const readerMetaCounter = document.getElementById('readerMetaCounter');
    const readerProgressMetaLeft = document.getElementById('readerProgressMetaLeft');
    const readerUiToggleFab = document.getElementById('readerUiToggleFab');
    const READER_FAB_STORAGE_KEY = 'readerUiToggleFabPosition';
    const readerPagedPage = document.getElementById('readerPagedPage');
    const readerPageTapZones = document.getElementById('readerPageTapZones');
    const readerPageTapPrev = document.getElementById('readerPageTapPrev');
    const readerPageTapNext = document.getElementById('readerPageTapNext');
    const libraryData = {
  cycles: [
    {
      id: "cycle-1",
      title: "Средь теней собора и лунного трона",
      description: "Наш главный цикл — мрачный, красивый и очень родной.",
      volumes: [
        {
          id: "volume-1",
          title: "Том 1",
          chapters: [
            {
              id: "chapter-1",
              title: "Пролог",
              content: `
                <h4>Пролог</h4>
                <p>В сумеречном свете высоких окон собора тени ложились на каменный пол длинными полосами.</p>
                <p>Тишина здесь всегда казалась живой, будто стены помнили больше, чем должны были помнить.</p>
                <p>И именно здесь начиналась история, которую невозможно было забыть.</p>
              `
            },
            {
              id: "chapter-2",
              title: "Глава 1",
              content: `
                <h4>Глава 1</h4>
                <p>Ночь опускалась на дворец медленно, будто не желая тревожить тех, кто прятал свои чувства за холодной вежливостью.</p>
                <p>Она стояла у высокого окна и молча смотрела на лунный свет, разлитый по мраморному двору.</p>
                <p>Ей казалось, что впереди неизбежно что-то изменится.</p>
              `
            }
          ]
        },
        {
          id: "volume-2",
          title: "Том 2",
          chapters: [
            {
              id: "chapter-3",
              title: "Глава 1",
              content: `
                <h4>Том 2 — Глава 1</h4>
                <p>Иногда новая часть истории начинается не со слов, а с ощущения, что прежний мир уже не удержать прежним.</p>
                <p>Тени стали глубже, а чувства — опаснее.</p>
              `
            }
          ]
        }
      ]
    },
    {
      id: "cycle-2",
      title: "Наши маленькие истории",
      description: "Нежные зарисовки, короткие сцены и всё, что хочется сохранить.",
      volumes: [
        {
          id: "volume-3",
          title: "Том 1",
          chapters: [
            {
              id: "chapter-4",
              title: "Первая заметка",
              content: `
                <h4>Первая заметка</h4>
                <p>Иногда счастье — это просто возможность сохранить маленький момент, чтобы вернуться к нему позже.</p>
              `
            }
          ]
        }
      ]
    }
  ]
};

let selectedCycleId = libraryData.cycles[0]?.id || null;
let selectedVolumeId = libraryData.cycles[0]?.volumes[0]?.id || null;
let selectedChapterId = libraryData.cycles[0]?.volumes[0]?.chapters[0]?.id || null;
const READER_SETTINGS_KEY = "libraryReaderSettings";
const READER_PROGRESS_KEY = "libraryReaderProgress";
const READER_SCROLL_KEY = "libraryReaderScroll";
const READER_CHAPTER_PROGRESS_KEY = "libraryReaderChapterProgress";
const READER_VIEW_KEY = 'readerViewSettings';

let readerViewState = {
  isOpen: false,
  mode: 'scroll',
  editorMode: false,
  uiVisible: false,
  currentPage: 0,
  totalPages: 1,
  pagedPages: []
};

let readerFabDragState = {
  active: false,
  moved: false,
  startX: 0,
  startY: 0,
  offsetX: 0,
  offsetY: 0
};

let fabDragging = false;
let fabOffsetX = 0;
let fabOffsetY = 0;

const chapterDrafts = {};

let readerSettings = {
  fontSize: 18,
  width: 'medium',
  warmTheme: false,
  fontFamily: 'serif',
  lineHeight: '1.7',
  density: 'cozy'
};

function saveReaderViewState() {
  localStorage.setItem(READER_VIEW_KEY, JSON.stringify({
    mode: readerViewState.mode
  }));
}

function loadReaderViewState() {
  try {
    const saved = JSON.parse(localStorage.getItem(READER_VIEW_KEY));
    if (!saved) return;

    if (saved.mode === 'scroll' || saved.mode === 'paged') {
      readerViewState.mode = saved.mode;
    }
  } catch (error) {
    console.warn('Не удалось загрузить режим чтения', error);
  }
}

function openReaderOverlay() {
  if (!readerOverlay || !selectedChapterId) {
    showToast('Сначала выбери главу ♥');
    return;
  }

  readerViewState.isOpen = true;
  readerOverlay.hidden = false;
  document.body.classList.add('reader-overlay-open');

  syncReaderModeUI();
  updateReaderEndActions();
  updateReaderCard();

  requestAnimationFrame(() => {
    setReaderUIVisible(false);
  });
}

function closeReaderOverlay() {
  if (!readerOverlay) return;

  readerViewState.isOpen = false;
  readerOverlay.hidden = true;
  document.body.classList.remove('reader-overlay-open');
  closeReaderChapterMenu();
  setReaderUIVisible(false);
}

function syncReaderModeUI() {
  if (readerModeSelect) {
    readerModeSelect.value = readerViewState.mode;
  }

  requestAnimationFrame(() => {
    updatePagedReaderLayout();
  });

  updateReaderEndActions();
}

function setReaderUIVisible(visible) {
  readerViewState.uiVisible = Boolean(visible);

  if (!readerOverlay) return;

  readerOverlay.classList.toggle('ui-hidden', !readerViewState.uiVisible);
}

function toggleReaderUI() {
  setReaderUIVisible(!readerViewState.uiVisible);
}

function updateReaderCard() {
  const cycle = getSelectedCycle();
  const volume = getSelectedVolume(cycle);
  const chapter = getSelectedChapter(volume);

  if (!readerCardTitle || !readerCardText) return;

  if (!cycle || !volume || !chapter) {
    readerCardTitle.textContent = 'Читалка';
    readerCardText.textContent = 'Выбери главу, чтобы открыть её в полноэкранной читалке.';
    return;
  }

  readerCardTitle.textContent = `${volume.title} · ${chapter.title}`;
  readerCardText.textContent = `Откроется в полноэкранном режиме${readerViewState.mode === 'paged' ? ' · постраничное чтение' : ' · скролл-режим'}`;
}

function updateActiveTab(pageId, btn = null) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(button => button.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
    return;
  }

const pageOrder = ['homePage', 'birthdayPage', 'marchPage', 'libraryPage'];
  const index = pageOrder.indexOf(pageId);

  if (index !== -1 && buttons[index]) {
    buttons[index].classList.add('active');
  }
}

function syncReaderOverlayPanelsOffset() {
  if (!readerOverlay || !readerOverlayHeader) return;

  const headerRect = readerOverlayHeader.getBoundingClientRect();
  const overlayRect = readerOverlay.getBoundingClientRect();

  const bottomOffset = headerRect.bottom - overlayRect.top;
  readerOverlay.style.setProperty('--reader-header-bottom', `${bottomOffset}px`);
}

function updateMusicButton() {
  const currentMusic = getCurrentMusic();
  toggleMusic.textContent = currentMusic && !currentMusic.paused ? "♫ on" : "♫";
}

function stopAllMusic(reset = false) {
  [birthdayMusic, marchMusic].forEach(music => {
    music.pause();
    if (reset) music.currentTime = 0;
  });
}

function playMusicForPage(pageId, forceAutoplay = false) {
  stopAllMusic(true);

  let targetMusic = null;

  if (pageId === "birthdayPage") targetMusic = birthdayMusic;
  if (pageId === "marchPage") targetMusic = marchMusic;

  if (!targetMusic) {
    updateMusicButton();
    return;
  }

  if (forceAutoplay || musicStarted) {
    targetMusic.play().catch(() => {});
  }

  updateMusicButton();
}

function showPage(pageId, btn = null) {
  const currentPage = document.querySelector('.page.active');
  const nextPage = document.getElementById(pageId);

  if (!nextPage) return;
  window.scrollTo({
  top: 0,
  behavior: "smooth"
});
  if (currentPage === nextPage) {
    updateActiveTab(pageId, btn);
    return;
  }

  updateActiveTab(pageId, btn);

  if (currentPage) {
    currentPage.classList.add('is-leaving');
    currentPage.classList.remove('active');
  }

  requestAnimationFrame(() => {
    nextPage.classList.add('active');
  });

  setTimeout(() => {
    document.querySelectorAll('.page.is-leaving').forEach(page => {
      page.classList.remove('is-leaving');
    });
  }, 420);

  playMusicForPage(pageId, false);
}

function getCurrentMusic() {
  const activePage = document.querySelector('.page.active');

  if (activePage?.id === "birthdayPage") return birthdayMusic;
  if (activePage?.id === "marchPage") return marchMusic;
  return null;
}
function hideLaunchScreen() {
  launchScreen?.classList.add("hide");
}
const SWEET_TEXTS = [
  "Ты сейчас заслуживаешь самый нежный поцелуй в лобик ♥",
  "Напоминание: ты очень красивая. Да, прямо сейчас тоже.",
  "Пусть этот день будет к тебе мягким, как мои мысли о тебе.",
  "Иногда мне просто хочется смотреть на тебя и улыбаться.",
  "Ты умеешь делать мир уютнее одним только своим существованием.",
  "Это страничка официально сообщает: ты солнышко.",
  "Твоя улыбка — это самый короткий путь к моему хорошему настроению.",
  "Иногда мне кажется, что ты создана из солнечного света и капли магии.",
  "Ты заслуживаешь того, чтобы о тебе заботились так же сильно, как ты о других.",
  "Официальное уведомление: уровень твоей милоты сегодня превысил все нормы.",
  "Твои мысли — это целая вселенная, в которой безумно интересно гулять.",
  "Просто хотел сказать, что мир стал чуточку уютнее, когда в нем появилась ты.",
  "Ты — та самая песня, которую хочется ставить на повтор бесконечно.",
  "Пусть этот вечер обнимет тебя так же нежно, как мои мысли о тебе.",
  "В тебе есть особенный свет, который помогает мне не теряться в темноте.",
  "Ты выглядишь невероятно, когда искренне чему-то удивляешься.",
  "Напоминание: ты очень важная. Да, для меня — особенно.",
  "Твоя доброта — это суперсила, даже если ты сама её не замечаешь.",
  "Иногда достаточно просто знать, что ты где-то есть, чтобы на душе стало легче.",
  "Ты умеешь превращать самый обычный день в маленькое приключение.",
  "Пусть твои сны сегодня будут такими же сладкими, как твой смех.",
  "Ты заслуживаешь самых теплых слов и самых искренних объятий.",
  "Твой голос — это лучшее завершение любого, даже самого сложного дня.",
  "Ты — причина, по которой я прямо сейчас улыбаюсь, вспоминая тебя.",
  "В тебе столько глубины, что в ней хочется тонуть снова и снова.",
  "Ты — это про уют, про тепло и про веру в то, что всё будет хорошо.",
  "Напоминание: ты красива в любом своем состоянии и настроении.",
  "Твоя искренность — это самая редкая и ценная вещь, которую я встречал.",
  "Ты — ходячее вдохновение, даже когда просто пьешь кофе в пижаме.",
  "Эта строчка официально сообщает: я очень рад, что мы знакомы.",
  "Пусть завтрашний день будет к тебе так же благосклонен, как ты к людям.",
  "Ты умеешь согревать одним своим присутствием в сети.",
  "Просто береги себя, ладно? Ты слишком ценная, чтобы поступать иначе."
];

function showToast(text) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function getSelectedCycle() {
  return libraryData.cycles.find(cycle => cycle.id === selectedCycleId) || null;
}

function getSelectedVolume(cycle) {
  return cycle?.volumes.find(volume => volume.id === selectedVolumeId) || null;
}

function getSelectedChapter(volume) {
  return volume?.chapters.find(chapter => chapter.id === selectedChapterId) || null;
}

function getCurrentChapterDraftKey() {
  const cycle = getSelectedCycle();
  const volume = getSelectedVolume(cycle);
  const chapter = getSelectedChapter(volume);

  if (!cycle || !volume || !chapter) return null;
  return `${cycle.id}::${volume.id}::${chapter.id}`;
}

function getCurrentChapterObject() {
  const cycle = getSelectedCycle();
  const volume = getSelectedVolume(cycle);
  return getSelectedChapter(volume);
}

function getCurrentEditorValue() {
  const draftKey = getCurrentChapterDraftKey();
  const chapter = getCurrentChapterObject();

  if (!chapter) return '';

  if (draftKey && typeof chapterDrafts[draftKey] === 'string') {
    return chapterDrafts[draftKey];
  }

  return chapter.content || '';
}

function setCurrentEditorValue(value) {
  const draftKey = getCurrentChapterDraftKey();
  if (!draftKey) return;

  chapterDrafts[draftKey] = value;
}


function syncEditorModeUI() {
  const isEditor = Boolean(readerViewState.editorMode);

  if (readerOverlay) {
    readerOverlay.classList.toggle('is-editor', isEditor);
  }

  if (readerContent) {
    readerContent.hidden = false;
    readerContent.contentEditable = isEditor ? 'true' : 'false';
    readerContent.setAttribute('spellcheck', isEditor ? 'true' : 'false');
    readerContent.setAttribute('data-editor-mode', isEditor ? 'on' : 'off');
  }

  if (toggleEditorModeBtn) {
    toggleEditorModeBtn.textContent = isEditor ? '✓' : '✎';
    toggleEditorModeBtn.classList.toggle('is-active', isEditor);
    toggleEditorModeBtn.setAttribute(
      'aria-label',
      isEditor ? 'Выйти из режима редактора' : 'Открыть режим редактора'
    );
    toggleEditorModeBtn.title = isEditor ? 'Выйти из режима редактора' : 'Открыть режим редактора';
  }

  if (readerUiToggleFab) {
  readerUiToggleFab.hidden = !isEditor;
}

  if (isEditor) {
    requestAnimationFrame(() => {
      restoreReaderFabPosition();
    });
  }

  if (isEditor) {
    closeReaderChapterMenu();
    if (readerToolbar) readerToolbar.hidden = true;

    requestAnimationFrame(() => {
      readerContent?.focus();
    });
  } else {
    if (readerContent) {
      setCurrentEditorValue(readerContent.innerHTML);
    }
  }
  requestAnimationFrame(() => {
    updatePagedReaderLayout();
  });

  updateReaderEndActions();
}

function renderCycles() {
  if (!cyclesList) return;

  cyclesList.innerHTML = "";

  libraryData.cycles.forEach(cycle => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cycle-card" + (cycle.id === selectedCycleId ? " active" : "");
    btn.innerHTML = `
      <div class="cycle-title">${cycle.title}</div>
      <div class="cycle-desc">${cycle.description}</div>
    `;

    btn.addEventListener("click", () => {
      selectedCycleId = cycle.id;
      selectedVolumeId = cycle.volumes[0]?.id || null;
      selectedChapterId = cycle.volumes[0]?.chapters[0]?.id || null;
      renderLibrary();
    });

    cyclesList.appendChild(btn);
  });
}

function renderCycleInfo(cycle) {
  if (!cycleInfo) return;

  if (!cycle) {
    cycleInfo.innerHTML = `
      <h2>О цикле</h2>
      <p>Выбери цикл слева, чтобы открыть тома и главы.</p>
    `;
    return;
  }

  const volumesCount = cycle.volumes.length;
  const chaptersCount = cycle.volumes.reduce((sum, volume) => sum + volume.chapters.length, 0);

  cycleInfo.innerHTML = `
    <h2>${cycle.title}</h2>
    <p>${cycle.description}</p>
    <p><strong>Томов:</strong> ${volumesCount}</p>
    <p><strong>Глав:</strong> ${chaptersCount}</p>
  `;
}

function renderVolumes(cycle) {
  if (!volumesList) return;

  if (!cycle) {
    volumesList.innerHTML = `<p>Тома и главы появятся здесь.</p>`;
    return;
  }

  volumesList.innerHTML = cycle.volumes.map(volume => {
    const chaptersHtml = volume.chapters.map(chapter => `
      <button
        type="button"
        class="chapter-btn ${chapter.id === selectedChapterId ? "active" : ""}"
        data-volume-id="${volume.id}"
        data-chapter-id="${chapter.id}"
      >
        ${chapter.title}
      </button>
    `).join("");

    return `
      <div class="volume-card">
        <div class="volume-head">${volume.title}</div>
        <div class="chapter-list">
          ${chaptersHtml}
        </div>
      </div>
    `;
  }).join("");

  volumesList.querySelectorAll(".chapter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedVolumeId = btn.dataset.volumeId;
      selectedChapterId = btn.dataset.chapterId;
      renderLibrary();
    });
  });
}

function updateReaderProgressUI(percent) {
  if (isPagedReaderMode()) {
    const total = Math.max(1, readerViewState.totalPages || 1);
    const current = Math.min(total, (readerViewState.currentPage || 0) + 1);
    const safePercent =
      total <= 1
        ? 100
        : Math.max(0, Math.min(100, Math.round(((current - 1) / (total - 1)) * 100)));

    if (readerOverlayProgressPercent) {
      readerOverlayProgressPercent.textContent = `${safePercent}%`;
    }

    if (readerOverlayProgressFill) {
      readerOverlayProgressFill.style.width = `${safePercent}%`;
    }

    if (readerProgressMetaLeft) {
      const cycle = getSelectedCycle();
      const volume = getSelectedVolume(cycle);
      const chapter = getSelectedChapter(volume);

      const volumeTitle = volume?.title || 'Том';
      const chapterTitle = chapter?.title || 'Глава';

      readerProgressMetaLeft.innerHTML = `
        <span>${volumeTitle}</span>
        <span>${chapterTitle}</span>
        <span>Страница ${current} из ${total}</span>
      `;
    }

    return;
  }

  const safePercent = Math.max(0, Math.min(100, Math.round(percent || 0)));

  if (readerOverlayProgressPercent) {
    readerOverlayProgressPercent.textContent = `${safePercent}%`;
  }

  if (readerOverlayProgressFill) {
    readerOverlayProgressFill.style.width = `${safePercent}%`;
  }
}

function getCurrentChapterProgressKey() {
  const cycle = getSelectedCycle();
  const volume = getSelectedVolume(cycle);

  if (!cycle || !volume || !selectedChapterId) return null;

  return `${cycle.id}::${volume.id}::${selectedChapterId}`;
}

function saveChapterProgress() {
  const progressKey = getCurrentChapterProgressKey();
  if (!progressKey) return;

  const payload = {
    key: progressKey,
    cycleId: getSelectedCycle()?.id || null,
    volumeId: selectedVolumeId,
    chapterId: selectedChapterId,
    percent: Math.round(getReaderScrollPercent())
  };

  localStorage.setItem(READER_CHAPTER_PROGRESS_KEY, JSON.stringify(payload));
}

function restoreChapterProgress() {
  const progressKey = getCurrentChapterProgressKey();

  if (!progressKey) {
    updateReaderProgressUI(0);
    return;
  }

  try {
    const saved = JSON.parse(localStorage.getItem(READER_CHAPTER_PROGRESS_KEY));

    if (!saved || saved.key !== progressKey) {
      updateReaderProgressUI(0);
      return;
    }

    updateReaderProgressUI(saved.percent || 0);
  } catch (error) {
    updateReaderProgressUI(0);
  }
}

function getAllChaptersWithMeta(cycle) {
  if (!cycle || !Array.isArray(cycle.volumes)) return [];

  const result = [];

  cycle.volumes.forEach((volume) => {
    (volume.chapters || []).forEach((chapter) => {
      result.push({
        volume,
        chapter
      });
    });
  });

  return result;
}

function renderReaderChapterMenu(cycle) {
  if (!readerChapterMenuList) return;

  const volume = getSelectedVolume(cycle);
  const chapter = getSelectedChapter(volume);

  if (!cycle || !volume || !chapter) {
    readerChapterMenuList.innerHTML = `
      <div class="reader-chapter-menu-empty">Сначала выбери главу, чтобы открыть оглавление тома.</div>
    `;
    return;
  }

  const chapters = volume.chapters || [];

  readerChapterMenuList.innerHTML = chapters.map((item, index) => `
    <button
      type="button"
      class="reader-chapter-menu-item ${item.id === chapter.id ? 'active' : ''}"
      data-volume-id="${volume.id}"
      data-chapter-id="${item.id}"
    >
      <span class="reader-chapter-menu-index">${index + 1}.</span>
      <span class="reader-chapter-menu-title">${item.title}</span>
    </button>
  `).join('');
}

function openChapterByGlobalIndex(cycle, targetIndex) {
  const allChapters = getAllChaptersWithMeta(cycle);
  const target = allChapters[targetIndex];

  if (!target) return;

  selectedVolumeId = target.volume.id;
  selectedChapterId = target.chapter.id;

  renderVolumes(cycle);
  renderReader(cycle);
}

function openReaderChapter(volumeId, chapterId) {
  const cycle = getSelectedCycle();
  if (!cycle || !Array.isArray(cycle.volumes)) return;

  const volume = cycle.volumes.find(v => v.id === volumeId);
  if (!volume || !Array.isArray(volume.chapters)) return;

  const chapter = volume.chapters.find(ch => ch.id === chapterId);
  if (!chapter) return;

  selectedVolumeId = volumeId;
  selectedChapterId = chapterId;

  closeReaderChapterMenu();

  renderLibrary();
  updateContinueReadingButton();

  if (readerViewport) {
    readerViewport.scrollTop = 0;
  }

  requestAnimationFrame(() => {
    updateReaderProgressUI(getReaderScrollPercent());
    saveReaderProgress();
    saveReaderScroll();
    saveChapterProgress();
    updateReaderEndActions();
  });
}

function syncReaderEndButtons(cycle) {
  const { prev, next } = getAdjacentReaderTargets(cycle);

  if (endPrevChapterBtn) {
    endPrevChapterBtn.hidden = !prev;
    endPrevChapterBtn.disabled = !prev;
  }

  if (endNextChapterBtn) {
    endNextChapterBtn.hidden = !next;
    endNextChapterBtn.disabled = !next;
  }
}

function openChapterById(chapterId) {
  const chapters = getAllChaptersFlat();
  const target = chapters.find(item => item.chapterId === chapterId);

  if (!target) return;

  openReaderChapter(target.volumeId, target.chapterId);
}

function updateReaderChapterCounter(cycle) {
  if (!readerChapterCounter) return;

  const volume = getSelectedVolume(cycle);
  const chapter = getSelectedChapter(volume);

  if (!cycle || !volume || !chapter) {
    readerChapterCounter.textContent = 'Глава 0 из 0';
    return;
  }

  const chapters = volume.chapters || [];
  const currentIndex = chapters.findIndex(item => item.id === chapter.id);

  if (currentIndex === -1) {
    readerChapterCounter.textContent = 'Глава 0 из 0';
    return;
  }

  readerChapterCounter.textContent = `Глава ${currentIndex + 1} из ${chapters.length}`;
}

function updateReaderMeta(cycle) {
  const volume = getSelectedVolume(cycle);
  const chapter = getSelectedChapter(volume);

  if (!readerMetaVolume || !readerMetaChapter || !readerMetaCounter) return;

  if (!cycle || !volume || !chapter) {
    readerMetaVolume.textContent = 'Том';
    readerMetaChapter.textContent = 'Глава';
    readerMetaCounter.textContent = 'Глава 0 из 0';
    return;
  }

  const chapters = Array.isArray(volume.chapters) ? volume.chapters : [];
  const currentIndex = chapters.findIndex(item => item.id === chapter.id);

  readerMetaVolume.textContent = volume.title || 'Том';
  readerMetaChapter.textContent = chapter.title || 'Глава';
  readerMetaCounter.textContent = `Глава ${currentIndex + 1} из ${chapters.length}`;
}

function renderReader(cycle) {
  if (!readerHeader || !readerContent) return;

  const volume = getSelectedVolume(cycle);
  const chapter = getSelectedChapter(volume);

  if (!cycle || !volume || !chapter) {
    readerHeader.innerHTML = `
      <h3>Читалка</h3>
      <p class="reader-subtext">Выбери главу, чтобы начать читать.</p>
    `;

    readerContent.innerHTML = `<p>Здесь будет открываться текст выбранной главы.</p>`;

    if (readerPagedPage) {
  readerPagedPage.hidden = true;
  readerPagedPage.innerHTML = '';
}

    updateReaderChapterCounter(null);
    updateReaderMeta(null);
    updateReaderProgressUI(0);
    renderReaderChapterMenu(null);
    closeReaderChapterMenu();
    applyReaderSettings();
    updateReaderCard();
    syncReaderEndButtons(null);

    if (readerEndActions) {
      readerEndActions.hidden = true;
    }

    return;
  }

  readerHeader.innerHTML = `
    <h3>${cycle.title}</h3>
  `;

  readerContent.innerHTML = renderChapterContent(getCurrentEditorValue());

  if (readerPagedPage) {
  readerPagedPage.hidden = true;
  readerPagedPage.innerHTML = '';
}

if (isPagedReaderMode()) {
  buildPagedPagesFromChapter();
  renderCurrentPagedPage();
}

  updateReaderChapterCounter(cycle);
  updateReaderMeta(cycle);
  renderReaderChapterMenu(cycle);
  applyReaderSettings();
  updateReaderCard();
  syncReaderEndButtons(cycle);

  restoreReaderScroll();
  restoreChapterProgress();

  requestAnimationFrame(() => {
    updateReaderProgressUI(getReaderScrollPercent());
    saveReaderProgress();
    updateContinueReadingButton();
    updateReaderEndActions();
    syncEditorModeUI();
    requestAnimationFrame(() => {
});
  });
}

function renderChapterContent(content) {
  return content || "";
}

function renderLibrary() {
  const cycle = getSelectedCycle();
  renderCycles();
  renderCycleInfo(cycle);
  renderVolumes(cycle);
  renderReader(cycle);
}

function getAllChaptersFlat() {
  const cycle = getSelectedCycle();
  if (!cycle || !Array.isArray(cycle.volumes)) return [];

  const result = [];

  cycle.volumes.forEach(volume => {
    if (!Array.isArray(volume.chapters)) return;

    volume.chapters.forEach(chapter => {
      result.push({
        volumeId: volume.id,
        chapterId: chapter.id
      });
    });
  });

  return result;
}

function toggleReaderChapterMenu() {

  syncReaderOverlayPanelsOffset();

  if (!readerChapterMenu) return;

  const willOpen = readerChapterMenu.hidden;

  if (willOpen) {
    readerChapterMenu.hidden = false;
    if (readerToolbar) readerToolbar.hidden = true;
    if (readerOverlay) readerOverlay.classList.remove('ui-hidden');
  } else {
    readerChapterMenu.hidden = true;
  }
}

function goToAdjacentChapter(direction) {
  const cycle = getSelectedCycle();
  const { prev, next } = getAdjacentReaderTargets(cycle);

  const target = direction < 0 ? prev : next;
  if (!target) return;

  openReaderChapter(target.volumeId, target.chapterId);
}

function applyReaderStylesToElement(element) {
  if (!element) return;

  element.style.fontSize = `${readerSettings.fontSize}px`;

  element.classList.remove("width-narrow", "width-medium", "width-wide");
  element.classList.add(`width-${readerSettings.width}`);

  element.classList.toggle("is-warm", readerSettings.warmTheme);

  const fontMap = {
    serif: '"Merriweather", "Georgia", serif',
    sans: '"Inter", "Segoe UI", sans-serif'
  };

  element.style.fontFamily = fontMap[readerSettings.fontFamily] || fontMap.serif;
  element.style.lineHeight = readerSettings.lineHeight || "1.7";
  element.style.padding = readerSettings.density === "compact" ? "18px" : "28px";
}

function applyReaderSettings() {
  if (readerFontSize) readerFontSize.value = String(readerSettings.fontSize);
  if (readerWidth) readerWidth.value = readerSettings.width;
  if (readerFontSelect) readerFontSelect.value = readerSettings.fontFamily;
  if (readerLineHeightSelect) readerLineHeightSelect.value = readerSettings.lineHeight;
  if (readerDensitySelect) readerDensitySelect.value = readerSettings.density;

  applyReaderStylesToElement(readerContent);

  if (readerThemeBtn) {
    readerThemeBtn.textContent = readerSettings.warmTheme ? "Обычная тема" : "Тёплая тема";
  }
}

function saveReaderSettings() {
  localStorage.setItem(READER_SETTINGS_KEY, JSON.stringify(readerSettings));
}

function loadReaderSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(READER_SETTINGS_KEY));
    if (!saved) return;

    readerSettings = {
      ...readerSettings,
      ...saved
    };
    readerSettings.fontFamily = readerSettings.fontFamily || 'serif';
    readerSettings.lineHeight = readerSettings.lineHeight || '1.7';
    readerSettings.density = readerSettings.density || 'cozy';
  } catch (error) {
    console.warn("Не удалось загрузить настройки читалки", error);
  }
}

function saveReaderProgress() {
const payload = {
  selectedCycleId,
  selectedVolumeId,
  selectedChapterId,
  chapterTitle: getSelectedChapter(getSelectedVolume(getSelectedCycle()))?.title || "",
  volumeTitle: getSelectedVolume(getSelectedCycle())?.title || ""
};

  localStorage.setItem(READER_PROGRESS_KEY, JSON.stringify(payload));
}

function saveReaderScroll() {
  if (!readerViewport || !selectedChapterId) return;

  const payload = {
    chapterId: selectedChapterId,
    scrollTop: readerViewport.scrollTop
  };

  localStorage.setItem(READER_SCROLL_KEY, JSON.stringify(payload));
}

function restoreReaderScroll() {
  if (!readerViewport || !selectedChapterId) return;

  try {
    const saved = JSON.parse(localStorage.getItem(READER_SCROLL_KEY));
    if (!saved) return;
    if (saved.chapterId !== selectedChapterId) return;

    requestAnimationFrame(() => {
      readerViewport.scrollTop = saved.scrollTop || 0;
      updateReaderEndActions();
    });
  } catch (error) {
    console.warn("Не удалось восстановить позицию чтения", error);
  }
}

function getReaderScrollPercent() {
  if (!readerViewport) return 0;

  const maxScroll = readerViewport.scrollHeight - readerViewport.clientHeight;
  if (maxScroll <= 0) return 100;

  return Math.max(0, Math.min(100, (readerViewport.scrollTop / maxScroll) * 100));
}

function scrollReaderByViewport(direction) {
  if (!readerViewport) return;

  const step = Math.max(180, Math.floor(readerViewport.clientHeight * 0.9));
  readerViewport.scrollBy({
    top: step * direction,
    behavior: 'smooth'
  });

  requestAnimationFrame(() => {
    setTimeout(() => {
      updateReaderProgressUI(getReaderScrollPercent());
      saveChapterProgress();
      saveReaderScroll();
      updateReaderEndActions();
    }, 220);
  });
}

function updateReaderEndActions() {
  if (
    !readerEndActions ||
    !readerViewport ||
    !readerContent ||
    !selectedChapterId ||
    readerViewState.editorMode
  ) {
    if (readerEndActions) readerEndActions.hidden = true;
    return;
  }

  if (isPagedReaderMode()) {
    const isLastPage = readerViewState.currentPage >= Math.max(0, readerViewState.totalPages - 1);
    readerEndActions.hidden = !isLastPage;
    return;
  }

  const contentBottom = readerContent.offsetTop + readerContent.offsetHeight;
  const viewportBottom = readerViewport.scrollTop + readerViewport.clientHeight;
  const reachedEnd = viewportBottom >= contentBottom - 24;

  readerEndActions.hidden = !reachedEnd;
}

function loadReaderProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(READER_PROGRESS_KEY));
    if (!saved) return;

    const savedCycle = libraryData.cycles.find(cycle => cycle.id === saved.selectedCycleId);
    if (!savedCycle) return;

    const savedVolume = savedCycle.volumes.find(volume => volume.id === saved.selectedVolumeId);
    if (!savedVolume) return;

    const savedChapter = savedVolume.chapters.find(chapter => chapter.id === saved.selectedChapterId);
    if (!savedChapter) return;

    selectedCycleId = savedCycle.id;
    selectedVolumeId = savedVolume.id;
    selectedChapterId = savedChapter.id;
  } catch (error) {
    console.warn("Не удалось загрузить прогресс чтения", error);
  }
}

function updateContinueReadingButton() {
  if (!continueReadingBtn) return;

  try {
    const saved = JSON.parse(localStorage.getItem(READER_PROGRESS_KEY));

    if (!saved || !saved.selectedCycleId || !saved.selectedVolumeId || !saved.selectedChapterId) {
      continueReadingBtn.hidden = true;
      return;
    }

    const volumeText = saved.volumeTitle || "Том";
    const chapterText = saved.chapterTitle || "Глава";

    continueReadingBtn.hidden = false;
    continueReadingBtn.textContent = `Продолжить чтение — ${volumeText} • ${chapterText}`;
  } catch (error) {
    continueReadingBtn.hidden = true;
  }
}

function openReaderChapterMenu() {
  if (!readerChapterMenu) return;

  const cycle = getSelectedCycle();
  renderReaderChapterMenu(cycle);
  readerChapterMenu.hidden = false;

  if (toggleChapterMenuBtn) {
    toggleChapterMenuBtn.textContent = 'Скрыть главы';
  }
}

function closeReaderChapterMenu() {
  if (!readerChapterMenu) return;
  readerChapterMenu.hidden = true;
}

function getAdjacentReaderTargets(cycle) {
  if (!cycle || !Array.isArray(cycle.volumes)) {
    return { prev: null, next: null };
  }

  const volumeIndex = cycle.volumes.findIndex(volume => volume.id === selectedVolumeId);
  if (volumeIndex === -1) {
    return { prev: null, next: null };
  }

  const volume = cycle.volumes[volumeIndex];
  const chapterIndex = (volume.chapters || []).findIndex(chapter => chapter.id === selectedChapterId);
  if (chapterIndex === -1) {
    return { prev: null, next: null };
  }

  let prev = null;
  let next = null;

  if (chapterIndex > 0) {
    const prevChapter = volume.chapters[chapterIndex - 1];
    prev = {
      volumeId: volume.id,
      chapterId: prevChapter.id
    };
  } else if (volumeIndex > 0) {
    const prevVolume = cycle.volumes[volumeIndex - 1];
    const prevChapter = prevVolume?.chapters?.[prevVolume.chapters.length - 1];

    if (prevVolume && prevChapter) {
      prev = {
        volumeId: prevVolume.id,
        chapterId: prevChapter.id
      };
    }
  }

  if (chapterIndex < volume.chapters.length - 1) {
    const nextChapter = volume.chapters[chapterIndex + 1];
    next = {
      volumeId: volume.id,
      chapterId: nextChapter.id
    };
  } else if (volumeIndex < cycle.volumes.length - 1) {
    const nextVolume = cycle.volumes[volumeIndex + 1];
    const nextChapter = nextVolume?.chapters?.[0];

    if (nextVolume && nextChapter) {
      next = {
        volumeId: nextVolume.id,
        chapterId: nextChapter.id
      };
    }
  }

  return { prev, next };
}

sparkleBtn?.addEventListener("click", () => {
  const text = SWEET_TEXTS[Math.floor(Math.random() * SWEET_TEXTS.length)];
  if (moodText) moodText.textContent = text;
  burstHearts(12);
});

openMiniGift?.addEventListener("click", () => {
  miniGiftBox?.classList.add("show");
  burstHearts(18);
  showToast("Для тебя — просто так ♥");

  if (openMiniGift) {
    openMiniGift.disabled = true;
    openMiniGift.textContent = "Уже открыто ♥";
  }
});

openLibraryBookBtn?.addEventListener("click", () => {
  loadReaderProgress();
  renderLibrary();
  showToast("Открываю нашу историю ♥");
});

libraryImportStubBtn?.addEventListener("click", () => {
  showToast("Импорт документа добавим следующим этапом 📚");
});

readerFontSize?.addEventListener("change", () => {
  readerSettings.fontSize = Number(readerFontSize.value);
  applyReaderSettings();
  saveReaderSettings();
});

readerWidth?.addEventListener("change", () => {
  readerSettings.width = readerWidth.value;
  applyReaderSettings();
  saveReaderSettings();
});

readerThemeBtn?.addEventListener("click", () => {
  readerSettings.warmTheme = !readerSettings.warmTheme;
  applyReaderSettings();
  saveReaderSettings();
});

readerFontSelect?.addEventListener('change', (event) => {
  readerSettings.fontFamily = event.target.value;
  saveReaderSettings();
  applyReaderSettings();
});

readerLineHeightSelect?.addEventListener('change', (event) => {
  readerSettings.lineHeight = event.target.value;
  saveReaderSettings();
  applyReaderSettings();
});

readerDensitySelect?.addEventListener('change', (event) => {
  readerSettings.density = event.target.value;
  saveReaderSettings();
  applyReaderSettings();
});

document.addEventListener('DOMContentLoaded', () => {
  loadReaderSettings();
  loadReaderProgress();

  loadReaderViewState();
  syncReaderModeUI();
  updateReaderCard();

  updateContinueReadingButton();
  renderLibrary();

  updateActiveTab('homePage');
  showPage('homePage');

  if (isStandalone) {
    setTimeout(hideLaunchScreen, 900);
  } else {
    setTimeout(hideLaunchScreen, 1200);
  }
});


const isStandalone =
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone === true;

if (isStandalone) {
  document.body.classList.add("standalone");
}

function hideMotionPrompt(save = true) {
  motionPrompt?.classList.remove("show");
  motionPrompt?.setAttribute("aria-hidden", "true");

  if (save) {
    localStorage.setItem(MOTION_PROMPT_HIDDEN_KEY, "1");
  }
}

function showMotionPrompt(save = false) {
  const isIosTipHidden = localStorage.getItem(IOS_TIP_STORAGE_KEY) === "1";
  if (!isIosTipHidden) return;

  motionPrompt?.classList.add("show");
  motionPrompt?.setAttribute("aria-hidden", "false");

  if (save) {
    localStorage.setItem(MOTION_PROMPT_HIDDEN_KEY, "0");
  }
}
    function celebrateMotionEnabled() {
  const wrap = document.querySelector(".wrap");

  wrap?.classList.remove("magic-shake");
  void wrap?.offsetWidth;
  wrap?.classList.add("magic-shake");

  burstHearts(26);
  showToast("Теперь телефон может отвечать на твои движения ♥");

  setTimeout(() => {
    wrap?.classList.remove("magic-shake");
  }, 450);
}

function startMusicWithDelay(delayMs = 2200, targetVol = 0.22) {
  const currentMusic = getCurrentMusic();
  if (!currentMusic || musicStarted) return;

  musicStarted = true;
  currentMusic.volume = 0;

  currentMusic.play().catch(() => {
    musicStarted = false;
    return;
  });

  setTimeout(() => {
    let v = 0;
    const step = 0.008;
    const tickMs = 120;

    const fade = setInterval(() => {
      v = Math.min(targetVol, v + step);
      currentMusic.volume = v;

      if (v >= targetVol) clearInterval(fade);
    }, tickMs);
  }, delayMs);
}



    // Hearts ✨
    const heartsLayer = document.getElementById("hearts");
    function spawnHeart(x=null, y=null){
      if(!heartsLayer) return;
      const h = document.createElement("div");
      h.className = "h";
      h.textContent = "❤";
      const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const left = (x === null) ? Math.random()*vw : x;
      const top  = (y === null) ? vh - 24 : y;
      const dx = (Math.random()*140 - 70).toFixed(0) + "px";
      const size = (14 + Math.random()*16).toFixed(0) + "px";
      h.style.left = left + "px";
      h.style.top = top + "px";
      h.style.setProperty("--dx", dx);
      h.style.fontSize = size;
      heartsLayer.appendChild(h);
      setTimeout(()=> h.remove(), 2800);
    }
    function burstHearts(count=18){
      const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const cx = vw * (0.5 + (Math.random()*0.08 - 0.04));
      const cy = vh * 0.78;
      for(let i=0;i<count;i++){
        setTimeout(()=> spawnHeart(cx + (Math.random()*80-40), cy + (Math.random()*20-10)), i*35);
      }
    }

    // ===== Hearts follow finger =====
let lastHeartAt = 0;
function heartTrail(x, y){
  const now = Date.now();
  if (now - lastHeartAt < 70) return; // ограничение частоты
  lastHeartAt = now;
  spawnHeart(x, y);
}

document.addEventListener("pointermove", (e) => {
  // на телефоне pointermove тоже работает, но иногда лучше touchmove
  if (e.pointerType === "mouse") return; // на ПК не спамим
  heartTrail(e.clientX, e.clientY);
}, {passive:true});

document.addEventListener("touchmove", (e) => {
  const t = e.touches && e.touches[0];
  if (!t) return;
  heartTrail(t.clientX, t.clientY);
}, {passive:true});


    herNameEl.textContent = HER_NAME;

    function daysSince(dateStr){
      const d = new Date(dateStr + "T00:00:00");
      const now = new Date();
      const diff = now - d;
      if (isNaN(diff)) return null;
      return Math.max(0, Math.floor(diff / (1000*60*60*24)));
    }

    const ds = daysSince(MET_DATE);
    if (ds === null) {
      countText.textContent = "Я думаю о тебе: бесконечно.";
    } else {
      countText.textContent = `Я думаю о тебе уже ${ds} дн. (и это только начало)`;
    }

    let typing = false;
    function typewrite(text, speed=18){
      if (typing) return;
      typing = true;
      revealBox.classList.add("show");
      typedEl.textContent = "";
      signatureEl.textContent = "";
      let i = 0;
      const tick = () => {
        typedEl.textContent = text.slice(0, i);
        i++;
        if (i <= text.length){
          setTimeout(tick, speed);
        } else {
          typing = false;
          signatureEl.textContent = `— ${YOUR_NAME} ♥`;
        }
      };
      tick();
    }

    function showInstant(text){
      revealBox.classList.add("show");
      typedEl.textContent = text;
      signatureEl.textContent = `— ${YOUR_NAME} ♥`;
      typing = false;
    }

    revealBtn.addEventListener("click", () => { burstHearts(14); typewrite(MAIN_TEXT); });
    revealFast.addEventListener("click", () => { burstHearts(10); showInstant(MAIN_TEXT); });
openGift.addEventListener("click", () => {
  musicStarted = true;
  startMusicWithDelay(2200, 0.22);
  burstHearts(22);
  document.getElementById("questBox")?.classList.add("show");
  document.getElementById("messageBlock").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  typewrite(MAIN_TEXT);
});

    copyLink.addEventListener("click", async () => {
      const msg = `С днём рождения, ${HER_NAME}! ♥\\n\\n${MAIN_TEXT}\\n\\n— ${YOUR_NAME}`;
      try{
        await navigator.clipboard.writeText(msg);
        copyLink.textContent = "Скопировано!";
        setTimeout(()=> copyLink.textContent="Копировать", 1400);
      }catch(e){
        alert("Не удалось скопировать. Можно выделить текст вручную 🙂");
      }
    });

    let musicOn = false;
    // Нежный фон: иногда “всплывает” сердечко
    setInterval(() => spawnHeart(), 9500);

toggleMusic.addEventListener("click", async () => {
  const currentMusic = getCurrentMusic();

  try {
    if (!currentMusic) return;

    if (currentMusic.paused) {
      musicStarted = true;
      await currentMusic.play();
    } else {
      stopAllMusic(false);
    }

    updateMusicButton();
  } catch (e) {
    alert("Музыка не загрузилась 🙂");
  }
});
let motionEnabled = false;
let motionHandlerAttached = false;
let lastShakeTime = 0;

async function enableMotionAccess() {
  try {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      const result = await DeviceMotionEvent.requestPermission();

      if (result !== "granted") {
        showToast("Доступ к движению не разрешён");
        return;
      }
    }

startShakeListener();
motionEnabled = true;
localStorage.setItem(MOTION_ENABLED_KEY, "1");
hideMotionPrompt(true);

if (enableMotionBtn) {
  enableMotionBtn.disabled = true;
  enableMotionBtn.textContent = "Включено ♥";
}

celebrateMotionEnabled();

return true;

  } catch (e) {
    console.error(e);
    showToast("Не удалось включить тряску");
    return false;
  }
}

function startShakeListener() {
  if (motionHandlerAttached) return;
  motionHandlerAttached = true;

  window.addEventListener("devicemotion", handleShake, { passive: true });
}

function handleShake(event) {
  const now = Date.now();
  if (now - lastShakeTime < 1400) return;

  const acc = event.accelerationIncludingGravity || event.acceleration;
  if (!acc) return;

  const x = Math.abs(acc.x || 0);
  const y = Math.abs(acc.y || 0);
  const z = Math.abs(acc.z || 0);

  const total = x + y + z;

  if (total > 45) {
    lastShakeTime = now;
    burstHearts(30);
    showToast("Ты растрясла моё сердце ❤️");
  }
}

enableMotionBtn?.addEventListener("click", enableMotionAccess);

    function showSecret(){
  const secret = document.getElementById("secretText");
  const hug = document.getElementById("hugText");

  if (hug) hug.classList.remove("show");
  if (secret) secret.classList.add("show");
}

function showHug(){
  const secret = document.getElementById("secretText");
  const hug = document.getElementById("hugText");

  if (secret) secret.classList.remove("show");
  if (hug) hug.classList.add("show");
}
const globalIosTip = document.getElementById("globalIosTip");
const closeIosTip = document.getElementById("closeIosTip");
const showIosTip = document.getElementById("showIosTip");

const IOS_TIP_STORAGE_KEY = "iosTipHidden";
const MOTION_PROMPT_HIDDEN_KEY = "motionPromptHidden";
const MOTION_ENABLED_KEY = "motionEnabled";
function hideIosTip(save = true) {
  globalIosTip?.classList.add("hidden");
  showIosTip?.classList.add("visible");

  if (save) {
    localStorage.setItem(IOS_TIP_STORAGE_KEY, "1");
  }
}

function showIosTipBlock(save = true) {
  globalIosTip?.classList.remove("hidden");
  showIosTip?.classList.remove("visible");

  if (save) {
    localStorage.setItem(IOS_TIP_STORAGE_KEY, "0");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const isIosTipHidden = localStorage.getItem(IOS_TIP_STORAGE_KEY) === "1";
  const motionWasEnabled = localStorage.getItem(MOTION_ENABLED_KEY) === "1";
  const motionPromptHidden = localStorage.getItem(MOTION_PROMPT_HIDDEN_KEY) === "1";

  if (isIosTipHidden) {
    hideIosTip(false);
  } else {
    showIosTipBlock(false);
  }

  if (motionWasEnabled) {
    motionEnabled = true;
    startShakeListener();
    hideMotionPrompt(false);

    if (enableMotionBtn) {
      enableMotionBtn.disabled = true;
      enableMotionBtn.textContent = "Включено ♥";
    }

    return;
  }

  if (!isIosTipHidden) {
    hideMotionPrompt(false);
    return;
  }

  if (!motionPromptHidden) {
    setTimeout(() => showMotionPrompt(false), 650);
  } else {
    hideMotionPrompt(false);
  }
});

closeIosTip?.addEventListener("click", () => {
  hideIosTip(true);

  const motionWasEnabled = localStorage.getItem(MOTION_ENABLED_KEY) === "1";
  const motionPromptHidden = localStorage.getItem(MOTION_PROMPT_HIDDEN_KEY) === "1";

  if (!motionWasEnabled && !motionPromptHidden) {
    setTimeout(() => showMotionPrompt(false), 650);
  }
});

showIosTip?.addEventListener("click", () => {
  hideMotionPrompt(false);
  showIosTipBlock(true);
});
    closeMotionPrompt?.addEventListener("click", () => {
  hideMotionPrompt(true);
});

laterMotionBtn?.addEventListener("click", () => {
  hideMotionPrompt(true);
});

enableMotionBtn?.addEventListener("click", async () => {
const enabled = await enableMotionAccess();

  if (enabled) {
    motionEnabled = true;
    localStorage.setItem(MOTION_ENABLED_KEY, "1");
    startShakeListener();
    hideMotionPrompt(true);

    if (enableMotionBtn) {
      enableMotionBtn.disabled = true;
      enableMotionBtn.textContent = "Включено ♥";
    }

    showToast("Магия включена ♥");
  }
});

updateMusicButton();
updateActiveTab("homePage");

readerChapterMenuList?.addEventListener('click', (event) => {
  const button = event.target.closest('.reader-chapter-menu-item');
  if (!button) return;

  const { chapterId } = button.dataset;

  openChapterById(chapterId);
  closeReaderChapterMenu();
});

continueReadingBtn?.addEventListener('click', () => {
  loadReaderProgress();
  renderLibrary();

  requestAnimationFrame(() => {
    const readerBlock = document.querySelector('.reader-panel, .library-reader, .reader-section');
    if (readerBlock) {
      readerBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

openReaderOverlayBtn?.addEventListener('click', () => {
  if (!selectedChapterId) {
    showToast('Сначала выбери главу ♥');
    return;
  }

  openReaderOverlay();
});

readerOverlay?.addEventListener('click', (event) => {
  if (event.target.classList.contains('reader-overlay__backdrop')) {
    closeReaderOverlay();
  }
});

readerModeSelect?.addEventListener('change', () => {
  readerViewState.mode = readerModeSelect.value === 'paged' ? 'paged' : 'scroll';
  saveReaderViewState();
  resetPagedReaderState();
  syncReaderModeUI();

  showToast(
    readerViewState.mode === 'paged'
      ? 'Включён режим страниц ♥'
      : 'Включён режим скролла ♥'
  );
});

prevScreenPageBtn?.addEventListener('click', () => {
  scrollReaderByViewport(-1);
});

nextScreenPageBtn?.addEventListener('click', () => {
  scrollReaderByViewport(1);
});

endPrevChapterBtn?.addEventListener('click', () => {
  goToAdjacentChapter(-1);
});

endNextChapterBtn?.addEventListener('click', () => {
  goToAdjacentChapter(1);
});

document.getElementById('pagedPrevChapterBtn')?.addEventListener('click', () => {
  goToAdjacentChapter(-1);
});

document.getElementById('pagedNextChapterBtn')?.addEventListener('click', () => {
  goToAdjacentChapter(1);
});

toggleEditorModeBtn?.addEventListener('click', () => {
  if (!selectedChapterId) {
    showToast('Сначала выбери главу ♥');
    return;
  }

  readerViewState.editorMode = !readerViewState.editorMode;
  syncEditorModeUI();

  showToast(
    readerViewState.editorMode
      ? 'Редактирование главы включено ✍️'
      : 'Редактирование главы выключено ♥'
  );
});

readerViewport?.addEventListener('scroll', () => {
  updateReaderProgressUI(getReaderScrollPercent());
  saveReaderScroll();
  saveChapterProgress();
  updateReaderEndActions();
});

readerViewport?.addEventListener('click', (event) => {
  const clickedControl = event.target.closest(
  'button, select, label, input, textarea, .reader-toolbar, .reader-chapter-menu, .reader-end-actions, .reader-ui-toggle-fab, .reader-page-tap-zone'
);

  if (clickedControl) return;
  if (!readerOverlay) return;

  if (readerViewState.editorMode) {
    return;
  }

  const hiddenNow = readerOverlay.classList.contains('ui-hidden');
  setReaderUIVisible(hiddenNow);
});

function toggleReaderSettingsPanel() {

  syncReaderOverlayPanelsOffset();

  if (!readerToolbar) return;

  const shouldOpen = readerToolbar.hidden;

  if (shouldOpen) {
    readerToolbar.hidden = false;

    if (readerChapterMenu) {
      readerChapterMenu.hidden = true;
    }

    if (readerOverlay) {
      readerOverlay.classList.remove('ui-hidden');
    }
  } else {
    readerToolbar.hidden = true;
  }
}

function toggleReaderChaptersPanel() {
  if (!readerChapterMenu) return;

  const shouldOpen = readerChapterMenu.hidden;

  if (shouldOpen) {
    readerChapterMenu.hidden = false;
    if (readerToolbar) readerToolbar.hidden = true;
    readerOverlay?.classList.remove('ui-hidden');
  } else {
    readerChapterMenu.hidden = true;
  }
}

backToVolumesBtn?.addEventListener('click', (event) => {
  event.stopPropagation();
  closeReaderOverlay();

  requestAnimationFrame(() => {
    const volumesBlock = document.querySelector('.library-volumes');
    if (volumesBlock) {
      volumesBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

toggleReaderSettingsPanelBtn?.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleReaderSettingsPanel();
});

readerProgressMetaLeft?.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleReaderChapterMenu();
});

readerProgressMetaLeft?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleReaderChapterMenu();
  }
});

readerContent?.addEventListener('input', () => {
  if (!readerViewState.editorMode) return;
  setCurrentEditorValue(readerContent.innerHTML);
});

readerUiToggleFab?.addEventListener('click', (event) => {
  if (readerFabDragState.moved) {
    event.preventDefault();
    readerFabDragState.moved = false;
    return;
  }

  if (!readerOverlay) return;

  const hiddenNow = readerOverlay.classList.contains('ui-hidden');
  setReaderUIVisible(hiddenNow);
});

requestAnimationFrame(() => {
  if (readerUiToggleFab && readerOverlay) {
    restoreReaderFabPosition();
  }
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getReaderFabBounds() {
  if (!readerOverlay || !readerUiToggleFab) return null;

  const overlayRect = readerOverlay.getBoundingClientRect();
  const fabRect = readerUiToggleFab.getBoundingClientRect();

  const minLeft = 8;
  const minTop = 8;
  const maxLeft = Math.max(minLeft, overlayRect.width - fabRect.width - 8);
  const maxTop = Math.max(minTop, overlayRect.height - fabRect.height - 8);

  return { overlayRect, fabRect, minLeft, minTop, maxLeft, maxTop };
}

function saveReaderFabPosition(left, top) {
  try {
    localStorage.setItem(READER_FAB_STORAGE_KEY, JSON.stringify({ left, top }));
  } catch (error) {}
}

function applyReaderFabPosition(left, top) {
  if (!readerUiToggleFab) return;

  readerUiToggleFab.style.left = `${left}px`;
  readerUiToggleFab.style.top = `${top}px`;
  readerUiToggleFab.style.right = 'auto';
  readerUiToggleFab.style.bottom = 'auto';
}

function restoreReaderFabPosition() {
  if (!readerUiToggleFab || !readerOverlay) return;

  const bounds = getReaderFabBounds();
  if (!bounds) return;

  try {
    const raw = localStorage.getItem(READER_FAB_STORAGE_KEY);
    if (!raw) return;

    const parsed = JSON.parse(raw);
    if (
      typeof parsed.left !== 'number' ||
      typeof parsed.top !== 'number'
    ) {
      return;
    }

    const left = clamp(parsed.left, bounds.minLeft, bounds.maxLeft);
    const top = clamp(parsed.top, bounds.minTop, bounds.maxTop);
    applyReaderFabPosition(left, top);
  } catch (error) {}
}

function resetReaderFabDefaultPosition() {
  if (!readerUiToggleFab || !readerOverlay) return;

  const overlayRect = readerOverlay.getBoundingClientRect();
  const fabRect = readerUiToggleFab.getBoundingClientRect();

  const left = overlayRect.width - fabRect.width - 14;
  const top = overlayRect.height - fabRect.height - 82 - parseFloat(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)') || 0);

  applyReaderFabPosition(
    Math.max(8, left),
    Math.max(8, top)
  );
}

function startReaderFabDrag(clientX, clientY) {
  if (!readerUiToggleFab) return;

  const rect = readerUiToggleFab.getBoundingClientRect();
  const overlayRect = readerOverlay?.getBoundingClientRect();
  if (!overlayRect) return;

  readerFabDragState.active = true;
  readerFabDragState.moved = false;
  readerFabDragState.startX = clientX;
  readerFabDragState.startY = clientY;
  readerFabDragState.offsetX = clientX - rect.left;
  readerFabDragState.offsetY = clientY - rect.top;
}

function moveReaderFab(clientX, clientY) {
  if (!readerFabDragState.active || !readerUiToggleFab || !readerOverlay) return;

  const bounds = getReaderFabBounds();
  if (!bounds) return;

  const rawLeft = clientX - bounds.overlayRect.left - readerFabDragState.offsetX;
  const rawTop = clientY - bounds.overlayRect.top - readerFabDragState.offsetY;

  const left = clamp(rawLeft, bounds.minLeft, bounds.maxLeft);
  const top = clamp(rawTop, bounds.minTop, bounds.maxTop);

  if (
    Math.abs(clientX - readerFabDragState.startX) > 4 ||
    Math.abs(clientY - readerFabDragState.startY) > 4
  ) {
    readerFabDragState.moved = true;
  }

  applyReaderFabPosition(left, top);
}

function endReaderFabDrag() {
  if (!readerFabDragState.active || !readerUiToggleFab) return;

  readerFabDragState.active = false;

  const left = parseFloat(readerUiToggleFab.style.left || '0');
  const top = parseFloat(readerUiToggleFab.style.top || '0');
  saveReaderFabPosition(left, top);
}

readerUiToggleFab?.addEventListener('pointerdown', (e) => {
  fabDragging = true;

  const rect = readerUiToggleFab.getBoundingClientRect();

  fabOffsetX = e.clientX - rect.left;
  fabOffsetY = e.clientY - rect.top;

  readerUiToggleFab.setPointerCapture(e.pointerId);
});

window.addEventListener('pointermove', (e) => {
  if (!fabDragging) return;

  const overlay = document.getElementById('readerOverlay');
  if (!overlay) return;

  const rect = overlay.getBoundingClientRect();

  let left = e.clientX - rect.left - fabOffsetX;
  let top = e.clientY - rect.top - fabOffsetY;

  readerUiToggleFab.style.left = left + 'px';
  readerUiToggleFab.style.top = top + 'px';

  readerUiToggleFab.style.right = 'auto';
  readerUiToggleFab.style.bottom = 'auto';
});

window.addEventListener('pointerup', () => {
  fabDragging = false;
});

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isPagedReaderMode() {
  return readerViewState.mode === 'paged' && !readerViewState.editorMode;
}

function resetPagedReaderState() {
  readerViewState.currentPage = 0;
  readerViewState.totalPages = 1;
  readerViewState.pagedPages = [];
}


function htmlToStructuredBlocksForPaging(html) {
  const temp = document.createElement('div');
  temp.innerHTML = String(html || '');

  const blocks = [];

  Array.from(temp.children).forEach((node) => {
    const tag = node.tagName?.toLowerCase();

    if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4') {
      const text = (node.textContent || '').trim();
      if (text) {
        blocks.push({
          type: 'heading',
          text
        });
      }
      return;
    }

    if (tag === 'p') {
      const text = (node.textContent || '').trim();
      if (text) {
        blocks.push({
          type: 'paragraph',
          text
        });
      }
      return;
    }

    const text = (node.textContent || '').trim();
    if (text) {
      blocks.push({
        type: 'paragraph',
        text
      });
    }
  });

  return blocks;
}

function buildPagedPagesFromBlocks(blocks) {
  if (!readerPagedPage || !readerViewport) return [];

  const viewportHeight = readerViewport.clientHeight;
  if (!viewportHeight) {
    return blocks.map(block => {
      if (block.type === 'heading') return `<h4>${block.text}</h4>`;
      return `<p>${block.text}</p>`;
    });
  }

  // Use computed styles to get actual padding values
  const viewportStyle = window.getComputedStyle(readerViewport);
  const paddingTop = parseFloat(viewportStyle.paddingTop) || 18;
  const paddingBottom = parseFloat(viewportStyle.paddingBottom) || 118;
  const paddingLeft = parseFloat(viewportStyle.paddingLeft) || 12;
  const paddingRight = parseFloat(viewportStyle.paddingRight) || 12;

  // Available height = viewport height minus its own padding, minus small buffer
  const availableHeight = viewportHeight - paddingTop - paddingBottom;
  const safeHeight = Math.max(160, availableHeight - 12);

  // Content width = viewport width minus its horizontal padding
  const contentWidth = readerViewport.clientWidth - paddingLeft - paddingRight;

  const measure = document.createElement('div');
  measure.className = `reader-content ${readerSettings?.warmTheme ? 'is-warm' : ''}`;
  measure.style.position = 'absolute';
  measure.style.visibility = 'hidden';
  measure.style.pointerEvents = 'none';
  measure.style.left = '-99999px';
  measure.style.top = '0';
  measure.style.width = `${Math.min(contentWidth, 760)}px`;
  measure.style.maxWidth = '760px';
  measure.style.boxSizing = 'border-box';
  measure.style.overflow = 'hidden';

  document.body.appendChild(measure);

  // Apply current reader settings (font size, line height, padding, etc.)
  applyReaderStylesToElement(measure);

  const pages = [];
  let currentHtml = '';

  function wrapBlock(block) {
    if (block.type === 'heading') {
      return `<h4>${block.text}</h4>`;
    }
    return `<p>${block.text}</p>`;
  }

  function fits(html) {
    measure.innerHTML = html;
    return measure.scrollHeight <= safeHeight;
  }

  function splitParagraphToFit(paragraphText, currentPageHtml) {
  const rawWords = paragraphText.split(/\s+/).filter(Boolean);
  const words = [];

  for (let i = 0; i < rawWords.length; i++) {
    if (/^[-—–]$/.test(rawWords[i]) && rawWords[i + 1]) {
      words.push(`${rawWords[i]} ${rawWords[i + 1]}`);
      i++;
    } else {
      words.push(rawWords[i]);
    }
  }

  let fitted = '';
  let remainderStart = 0;

  for (let i = 0; i < words.length; i++) {
    const candidate = fitted ? `${fitted} ${words[i]}` : words[i];
    const html = currentPageHtml + `<p>${candidate}</p>`;

    if (fits(html)) {
      fitted = candidate;
      remainderStart = i + 1;
    } else {
      break;
    }
  }

  if (!fitted) {
    fitted = words[0] || '';
    remainderStart = 1;
  }

  let fittedWords = fitted.split(/\s+/).filter(Boolean);
  let remainderWords = words.slice(remainderStart);

  const MIN_REMAINDER_WORDS = 5;

  if (remainderWords.length > 0 && remainderWords.length < MIN_REMAINDER_WORDS) {
    while (
      fittedWords.length > MIN_REMAINDER_WORDS &&
      remainderWords.length < MIN_REMAINDER_WORDS
    ) {
      remainderWords.unshift(fittedWords.pop());
    }
  }

  while (
    fittedWords.length > 1 &&
    /^[-—–]$/.test(fittedWords[fittedWords.length - 1])
  ) {
    remainderWords.unshift(fittedWords.pop());
  }

  fitted = fittedWords.join(' ');

  return {
    fitted,
    remainder: remainderWords.join(' ').trim()
  };
}

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const blockHtml = wrapBlock(block);

    if (!currentHtml) {
      if (fits(blockHtml)) {
        currentHtml = blockHtml;
        continue;
      }

      if (block.type === 'paragraph') {
        let rest = block.text;

        while (rest) {
          const { fitted, remainder } = splitParagraphToFit(rest, '');

          if (remainder) {
            pages.push(`<p>${fitted}</p>`);
            rest = remainder;
          } else {
            currentHtml = `<p>${fitted}</p>`;
            rest = '';
          }
        }

        continue;
      }

      pages.push(blockHtml);
      continue;
    }

    const candidateHtml = currentHtml + blockHtml;

    if (fits(candidateHtml)) {
      currentHtml = candidateHtml;
      continue;
    }

    if (block.type === 'paragraph') {
      let rest = block.text;

      const firstSplit = splitParagraphToFit(rest, currentHtml);

      if (firstSplit.fitted) {
        pages.push(currentHtml + `<p>${firstSplit.fitted}</p>`);
        rest = firstSplit.remainder;
      } else {
        pages.push(currentHtml);
      }

      currentHtml = '';

      while (rest) {
        const { fitted, remainder } = splitParagraphToFit(rest, '');

        if (remainder) {
          pages.push(`<p>${fitted}</p>`);
          rest = remainder;
        } else {
          currentHtml = `<p>${fitted}</p>`;
          rest = '';
        }
      }

      continue;
    }

    pages.push(currentHtml);
    currentHtml = blockHtml;
  }

  if (currentHtml) {
    pages.push(currentHtml);
  }

  document.body.removeChild(measure);

  return pages.length ? pages : ['<p>Пустая страница</p>'];
}

function buildPagedPagesFromChapter() {
  const cycle = getSelectedCycle();
  const volume = getSelectedVolume(cycle);
  const chapter = getSelectedChapter(volume);

  if (!chapter) {
    readerViewState.pagedPages = [];
    readerViewState.currentPage = 0;
    readerViewState.totalPages = 1;
    return;
  }

  const chapterHtml = renderChapterContent(getCurrentEditorValue());
  const chapterBlocks = htmlToStructuredBlocksForPaging(chapterHtml);
  const chapterPages = buildPagedPagesFromBlocks(chapterBlocks);

  readerViewState.pagedPages = chapterPages;
  readerViewState.totalPages = Math.max(1, chapterPages.length);
  readerViewState.currentPage = Math.min(
    readerViewState.currentPage || 0,
    readerViewState.totalPages - 1
  );
}

function renderCurrentPagedPage() {
  if (!readerPagedPage) return;

  const pagedChapterNav = document.getElementById('readerPagedChapterNav');
  const pagedPrevBtn = document.getElementById('pagedPrevChapterBtn');
  const pagedNextBtn = document.getElementById('pagedNextChapterBtn');

  if (!isPagedReaderMode()) {
    readerPagedPage.hidden = true;
    readerPagedPage.innerHTML = '';

    if (readerEndActions) readerEndActions.hidden = true;
    if (pagedChapterNav) pagedChapterNav.hidden = true;

    return;
  }

  const pages = Array.isArray(readerViewState.pagedPages)
    ? readerViewState.pagedPages
    : [];

  const html = pages[readerViewState.currentPage] || '<p>Пустая страница</p>';
  const isLastPage = readerViewState.currentPage >= Math.max(0, readerViewState.totalPages - 1);
  const isFirstPage = readerViewState.currentPage === 0;

  readerPagedPage.hidden = false;
  readerPagedPage.innerHTML = `
    <div class="reader-content ${readerSettings?.warmTheme ? 'is-warm' : ''} ${isLastPage ? 'reader-content--paged-last' : ''}">
      ${html}
    </div>
  `;

  // Always hide the scroll-mode end actions in paged mode (they're cut off by overflow:hidden)
  if (readerEndActions) readerEndActions.hidden = true;

  // Show paged chapter nav in the progress bar area on the last page
  if (pagedChapterNav) {
    const cycle = getSelectedCycle();
    const { prev, next } = getAdjacentReaderTargets(cycle);

    pagedChapterNav.hidden = !isLastPage;

    if (pagedPrevBtn) {
      pagedPrevBtn.hidden = !prev;
      pagedPrevBtn.disabled = !prev;
    }
    if (pagedNextBtn) {
      pagedNextBtn.hidden = !next;
      pagedNextBtn.disabled = !next;
    }
  }

  updateReaderProgressUI();
}

function goToReaderPage(pageIndex) {
  if (!isPagedReaderMode()) return;

  const maxPage = Math.max(0, readerViewState.totalPages - 1);
  const nextPage = Math.max(0, Math.min(pageIndex, maxPage));

  readerViewState.currentPage = nextPage;
  renderCurrentPagedPage();
}

function goToAdjacentReaderPage(direction) {
  goToReaderPage(readerViewState.currentPage + direction);
}

function updatePagedReaderLayout() {
  if (!readerOverlay) return;

  const pagedActive = isPagedReaderMode();

  readerOverlay.classList.toggle('is-paged', pagedActive);

  if (readerPageTapZones) {
    readerPageTapZones.hidden = !pagedActive;
    readerPageTapZones.style.pointerEvents = pagedActive ? 'auto' : 'none';
  }

    if (!pagedActive) {
    if (readerPagedPage) {
      readerPagedPage.hidden = true;
      readerPagedPage.innerHTML = '';
    }

    if (readerContent) {
      readerContent.hidden = false;
    }

    updateReaderProgressUI(getReaderScrollPercent ? getReaderScrollPercent() : 0);
    return;
  }

  buildPagedPagesFromChapter();
  renderCurrentPagedPage();
}

prevScreenPageBtn?.addEventListener('click', () => {
  if (isPagedReaderMode()) {
    goToAdjacentReaderPage(-1);
    return;
  }

  scrollReaderByViewport(-1);
});

nextScreenPageBtn?.addEventListener('click', () => {
  if (isPagedReaderMode()) {
    goToAdjacentReaderPage(1);
    return;
  }

  scrollReaderByViewport(1);
});

readerPageTapPrev?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!isPagedReaderMode()) return;
  goToAdjacentReaderPage(-1);
});

readerPageTapNext?.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!isPagedReaderMode()) return;
  goToAdjacentReaderPage(1);
});


renderLibrary();

window.addEventListener("load", () => {
  setTimeout(hideLaunchScreen, 900);
});

setTimeout(hideLaunchScreen, 2200);

window.addEventListener('resize', syncReaderOverlayPanelsOffset);

// ============================================================
// MODAL HELPERS
// ============================================================
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('show');
  el.removeAttribute('aria-hidden');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('show');
  el.setAttribute('aria-hidden', 'true');
}

// Close modals on backdrop click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ============================================================
// EXPORT FUNCTIONS
// ============================================================

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1000);
}

function downloadBinaryFile(filename, arrayBuffer) {
  const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1000);
}

function htmlToPlainParagraphs(html) {
  const div = document.createElement('div');
  div.innerHTML = html || '';
  const result = [];
  div.querySelectorAll('p, h1, h2, h3, h4').forEach(el => {
    const text = (el.textContent || '').trim();
    if (text) result.push({ tag: el.tagName.toLowerCase(), text });
  });
  if (!result.length) {
    const text = (div.textContent || '').trim();
    if (text) result.push({ tag: 'p', text });
  }
  return result;
}

// --- FB2 Export ---
function buildFb2Xml(title, authorName, chapters) {
  const esc = s => String(s || '').replace(/&/g,'&amp;').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"');

  const sectionsXml = chapters.map(ch => {
    const paras = htmlToPlainParagraphs(ch.content);
    const bodyLines = paras.map(p => {
      if (p.tag === 'h1' || p.tag === 'h2' || p.tag === 'h3' || p.tag === 'h4') {
        return `    <title><p>${esc(p.text)}</p></title>`;
      }
      return `    <p>${esc(p.text)}</p>`;
    }).join('\n');
    return `  <section>\n    <title><p>${esc(ch.title)}</p></title>\n${bodyLines}\n  </section>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<FictionBook xmlns="http://www.gribuser.ru/xml/fictionbook/2.0" xmlns:l="http://www.w3.org/1999/xlink">
  <description>
    <title-info>
      <genre>prose_contemporary</genre>
      <author><first-name>${esc(authorName)}</first-name></author>
      <book-title>${esc(title)}</book-title>
      <lang>ru</lang>
    </title-info>
  </description>
  <body>
${sectionsXml}
  </body>
</FictionBook>`;
}

function exportAsFb2(scope) {
  const cycle = getSelectedCycle();
  if (!cycle) { showToast('Сначала выбери цикл ♥'); return; }

  let chapters = [];
  let title = cycle.title;

  if (scope === 'chapter') {
    const volume = getSelectedVolume(cycle);
    const chapter = getSelectedChapter(volume);
    if (!chapter) { showToast('Сначала выбери главу ♥'); return; }
    const draftKey = `${cycle.id}::${volume.id}::${chapter.id}`;
    const content = chapterDrafts[draftKey] || chapter.content || '';
    chapters = [{ title: chapter.title, content }];
    title = chapter.title;
  } else if (scope === 'volume') {
    const volume = getSelectedVolume(cycle);
    if (!volume) { showToast('Сначала выбери том ♥'); return; }
    chapters = volume.chapters.map(ch => {
      const draftKey = `${cycle.id}::${volume.id}::${ch.id}`;
      return { title: ch.title, content: chapterDrafts[draftKey] || ch.content || '' };
    });
    title = `${cycle.title} — ${volume.title}`;
  } else {
    cycle.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        const draftKey = `${cycle.id}::${vol.id}::${ch.id}`;
        chapters.push({ title: ch.title, content: chapterDrafts[draftKey] || ch.content || '' });
      });
    });
  }

  const xml = buildFb2Xml(title, AUTHOR_NAME, chapters);
  const safeName = title.replace(/[^\w\sа-яёА-ЯЁ]/gi, '').trim().replace(/\s+/g, '_') || 'export';
  downloadFile(`${safeName}.fb2`, xml, 'application/xml');
  showToast('FB2 файл скачан ♥');
  closeModal('exportModal');
}

// --- DOCX Export ---
async function exportAsDocx(scope) {
  if (typeof JSZip === 'undefined') {
    showToast('JSZip не загружен, попробуй позже');
    return;
  }

  const cycle = getSelectedCycle();
  if (!cycle) { showToast('Сначала выбери цикл ♥'); return; }

  let chapters = [];
  let title = cycle.title;

  if (scope === 'chapter') {
    const volume = getSelectedVolume(cycle);
    const chapter = getSelectedChapter(volume);
    if (!chapter) { showToast('Сначала выбери главу ♥'); return; }
    const draftKey = `${cycle.id}::${volume.id}::${chapter.id}`;
    chapters = [{ title: chapter.title, content: chapterDrafts[draftKey] || chapter.content || '' }];
    title = chapter.title;
  } else if (scope === 'volume') {
    const volume = getSelectedVolume(cycle);
    if (!volume) { showToast('Сначала выбери том ♥'); return; }
    chapters = volume.chapters.map(ch => {
      const draftKey = `${cycle.id}::${volume.id}::${ch.id}`;
      return { title: ch.title, content: chapterDrafts[draftKey] || ch.content || '' };
    });
    title = `${cycle.title} — ${volume.title}`;
  } else {
    cycle.volumes.forEach(vol => {
      vol.chapters.forEach(ch => {
        const draftKey = `${cycle.id}::${vol.id}::${ch.id}`;
        chapters.push({ title: ch.title, content: chapterDrafts[draftKey] || ch.content || '' });
      });
    });
  }

  const docXml = buildDocxXml(title, chapters);
  const zip = new JSZip();

  zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`);

  zip.folder('_rels').file('.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`);

  zip.folder('word').file('document.xml', docXml);

  zip.folder('word/_rels').file('document.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
</Relationships>`);

  const arrayBuffer = await zip.generateAsync({ type: 'arraybuffer' });
  const safeName = title.replace(/[^\w\sа-яёА-ЯЁ]/gi, '').trim().replace(/\s+/g, '_') || 'export';
  downloadBinaryFile(`${safeName}.docx`, arrayBuffer);
  showToast('DOCX файл скачан ♥');
  closeModal('exportModal');
}

function buildDocxXml(title, chapters) {
  const esc = s => String(s || '').replace(/&/g,'&amp;').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"');

  const wParagraphs = [];

  // Title
  wParagraphs.push(`
    <w:p>
      <w:pPr><w:pStyle w:val="Heading1"/></w:pPr>
      <w:r><w:t>${esc(title)}</w:t></w:r>
    </w:p>`);

  chapters.forEach(ch => {
    // Chapter heading
    wParagraphs.push(`
    <w:p>
      <w:pPr><w:pStyle w:val="Heading2"/></w:pPr>
      <w:r><w:t>${esc(ch.title)}</w:t></w:r>
    </w:p>`);

    const paras = htmlToPlainParagraphs(ch.content);
    paras.forEach(p => {
      if (p.tag === 'h1' || p.tag === 'h2' || p.tag === 'h3' || p.tag === 'h4') {
        wParagraphs.push(`
    <w:p>
      <w:pPr><w:pStyle w:val="Heading3"/></w:pPr>
      <w:r><w:t>${esc(p.text)}</w:t></w:r>
    </w:p>`);
      } else {
        wParagraphs.push(`
    <w:p>
      <w:pPr><w:spacing w:line="360" w:lineRule="auto"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="24"/></w:rPr><w:t xml:space="preserve">${esc(p.text)}</w:t></w:r>
    </w:p>`);
      }
    });
  });

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    ${wParagraphs.join('')}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>`;
}

// Export modal event listeners
document.getElementById('exportModalClose')?.addEventListener('click', () => closeModal('exportModal'));
document.getElementById('readerExportBtn')?.addEventListener('click', () => {
  const scope = document.getElementById('exportScopeSelect');
  if (scope) scope.value = 'chapter';
  openModal('exportModal');
});
document.getElementById('libraryExportBtn')?.addEventListener('click', () => {
  const scope = document.getElementById('exportScopeSelect');
  if (scope) scope.value = 'cycle';
  openModal('exportModal');
});
document.getElementById('exportFb2Btn')?.addEventListener('click', () => {
  const scope = document.getElementById('exportScopeSelect')?.value || 'cycle';
  exportAsFb2(scope);
});
document.getElementById('exportDocxBtn')?.addEventListener('click', () => {
  const scope = document.getElementById('exportScopeSelect')?.value || 'cycle';
  exportAsDocx(scope);
});

// ============================================================
// IMPORT FUNCTIONS
// ============================================================

let importedChapters = [];
let importedBookTitle = '';

function openImportModal() {
  importedChapters = [];
  importedBookTitle = '';
  const step1 = document.getElementById('importStep1');
  const step2 = document.getElementById('importStep2');
  const fileInput = document.getElementById('importFileInput');
  if (step1) step1.hidden = false;
  if (step2) step2.hidden = true;
  if (fileInput) fileInput.value = '';
  populateImportDestSelect();
  openModal('importModal');
}

function populateImportDestSelect() {
  const sel = document.getElementById('importDestSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="new-cycle">Создать новый цикл</option>';
  libraryData.cycles.forEach(cycle => {
    const opt = document.createElement('option');
    opt.value = `cycle::${cycle.id}`;
    opt.textContent = `Добавить в: ${cycle.title}`;
    sel.appendChild(opt);
  });
}

function updateImportDestFields() {
  const sel = document.getElementById('importDestSelect');
  const newCycleFields = document.getElementById('importNewCycleFields');
  const existingFields = document.getElementById('importExistingVolumeFields');
  if (!sel) return;

  const isNew = sel.value === 'new-cycle';
  if (newCycleFields) newCycleFields.hidden = !isNew;
  if (existingFields) existingFields.hidden = isNew;

  if (!isNew) {
    const cycleId = sel.value.replace('cycle::', '');
    const cycle = libraryData.cycles.find(c => c.id === cycleId);
    const volSel = document.getElementById('importVolumeSelect');
    if (volSel && cycle) {
      volSel.innerHTML = cycle.volumes.map(v =>
        `<option value="${v.id}">${v.title}</option>`
      ).join('');
    }
  }
}

document.getElementById('importDestSelect')?.addEventListener('change', updateImportDestFields);
document.getElementById('importAddModeSelect')?.addEventListener('change', () => {
  const mode = document.getElementById('importAddModeSelect')?.value;
  const newVolField = document.getElementById('importNewVolumeNameField');
  if (newVolField) newVolField.hidden = (mode === 'append-volume');
});

async function parseImportFile(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith('.fb2')) {
    return await parseFb2File(file);
  } else if (name.endsWith('.docx')) {
    return await parseDocxFile(file);
  }
  throw new Error('Неподдерживаемый формат файла');
}

async function parseFb2File(file) {
  const text = await file.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'application/xml');

  const bookTitleEl = doc.querySelector('book-title');
  const bookTitle = bookTitleEl?.textContent?.trim() || file.name.replace('.fb2', '');

  const sections = doc.querySelectorAll('body > section');
  const chapters = [];

  sections.forEach((section, idx) => {
    const titleEl = section.querySelector(':scope > title');
    const chapterTitle = titleEl?.textContent?.trim() || `Глава ${idx + 1}`;

    const contentParts = [];
    section.querySelectorAll(':scope > p, :scope > subtitle, :scope > epigraph').forEach(el => {
      const tag = el.tagName.toLowerCase();
      const text = el.textContent?.trim();
      if (!text) return;
      if (tag === 'subtitle') {
        contentParts.push(`<h4>${escapeHtml(text)}</h4>`);
      } else {
        contentParts.push(`<p>${escapeHtml(text)}</p>`);
      }
    });

    // If no direct p elements, get all text
    if (!contentParts.length) {
      const text = section.textContent?.trim();
      if (text) contentParts.push(`<p>${escapeHtml(text)}</p>`);
    }

    chapters.push({ title: chapterTitle, content: contentParts.join('\n') });
  });

  // If no sections found, treat whole body as one chapter
  if (!chapters.length) {
    const body = doc.querySelector('body');
    const text = body?.textContent?.trim() || '';
    if (text) {
      chapters.push({ title: bookTitle, content: `<p>${escapeHtml(text)}</p>` });
    }
  }

  return { title: bookTitle, chapters };
}

async function parseDocxFile(file) {
  if (typeof JSZip === 'undefined') throw new Error('JSZip не загружен');

  const arrayBuffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(arrayBuffer);

  const docXmlFile = zip.file('word/document.xml');
  if (!docXmlFile) throw new Error('Не найден word/document.xml');

  const docXmlText = await docXmlFile.async('string');
  const parser = new DOMParser();
  const doc = parser.parseFromString(docXmlText, 'application/xml');

  const bookTitle = file.name.replace(/\.docx$/i, '');
  const chapters = [];
  let currentChapter = null;

  const paragraphs = doc.querySelectorAll('p');

  paragraphs.forEach(p => {
    const styleEl = p.querySelector('pStyle');
    const styleVal = styleEl?.getAttribute('val') || '';
    const isHeading = /^heading/i.test(styleVal) || styleVal === '1' || styleVal === '2' || styleVal === '3';

    // Get text from all runs
    const runs = p.querySelectorAll('r');
    let text = '';
    runs.forEach(r => {
      const t = r.querySelector('t');
      if (t) text += t.textContent || '';
    });
    text = text.trim();
    if (!text) return;

    if (isHeading) {
      if (currentChapter) chapters.push(currentChapter);
      currentChapter = { title: text, content: '' };
    } else {
      if (!currentChapter) {
        currentChapter = { title: bookTitle, content: '' };
      }
      currentChapter.content += `<p>${escapeHtml(text)}</p>\n`;
    }
  });

  if (currentChapter) chapters.push(currentChapter);

  // If no chapters detected, split by double newlines
  if (!chapters.length) {
    const allText = doc.textContent?.trim() || '';
    const parts = allText.split(/\n{2,}/).filter(Boolean);
    parts.forEach((part, i) => {
      chapters.push({ title: `Часть ${i + 1}`, content: `<p>${escapeHtml(part.trim())}</p>` });
    });
  }

  return { title: bookTitle, chapters };
}

function showImportStep2(result) {
  importedChapters = result.chapters;
  importedBookTitle = result.title;

  const step1 = document.getElementById('importStep1');
  const step2 = document.getElementById('importStep2');
  const fileInfo = document.getElementById('importFileInfo');
  const chapterList = document.getElementById('importChapterList');
  const newCycleName = document.getElementById('importNewCycleName');

  if (step1) step1.hidden = true;
  if (step2) step2.hidden = false;

  if (fileInfo) {
    fileInfo.innerHTML = `<b>${escapeHtml(result.title)}</b> — обнаружено глав: <b>${result.chapters.length}</b>`;
  }

  if (newCycleName) newCycleName.value = result.title;

  if (chapterList) {
    chapterList.innerHTML = result.chapters.map((ch, i) => `
      <div class="modal-chapter-item">
        <input type="checkbox" id="importCh${i}" checked data-idx="${i}" />
        <label for="importCh${i}" style="flex:1;cursor:pointer;">${escapeHtml(ch.title)}</label>
      </div>
    `).join('');
  }

  updateImportDestFields();
}

function getSelectedImportChapters() {
  const checkboxes = document.querySelectorAll('#importChapterList input[type="checkbox"]');
  const selected = [];
  checkboxes.forEach(cb => {
    if (cb.checked) {
      const idx = parseInt(cb.dataset.idx);
      if (!isNaN(idx) && importedChapters[idx]) {
        selected.push(importedChapters[idx]);
      }
    }
  });
  return selected;
}

function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
}

function confirmImport() {
  const selectedChapters = getSelectedImportChapters();
  if (!selectedChapters.length) {
    showToast('Выбери хотя бы одну главу ♥');
    return;
  }

  const destSel = document.getElementById('importDestSelect');
  const destValue = destSel?.value || 'new-cycle';

  if (destValue === 'new-cycle') {
    // Create new cycle
    const cycleName = document.getElementById('importNewCycleName')?.value?.trim() || importedBookTitle || 'Новый цикл';
    const cycleDesc = document.getElementById('importNewCycleDesc')?.value?.trim() || '';
    const volumeName = document.getElementById('importNewVolumeName')?.value?.trim() || 'Том 1';

    const newCycleId = generateId('cycle');
    const newVolumeId = generateId('volume');

    const newChapters = selectedChapters.map((ch, i) => ({
      id: generateId('chapter'),
      title: ch.title,
      content: ch.content
    }));

    const newCycle = {
      id: newCycleId,
      title: cycleName,
      description: cycleDesc || `Импортировано из "${importedBookTitle}"`,
      volumes: [{
        id: newVolumeId,
        title: volumeName,
        chapters: newChapters
      }]
    };

    libraryData.cycles.push(newCycle);
    selectedCycleId = newCycleId;
    selectedVolumeId = newVolumeId;
    selectedChapterId = newChapters[0]?.id || null;

  } else {
    // Add to existing cycle
    const cycleId = destValue.replace('cycle::', '');
    const cycle = libraryData.cycles.find(c => c.id === cycleId);
    if (!cycle) { showToast('Цикл не найден'); return; }

    const addMode = document.getElementById('importAddModeSelect')?.value || 'new-volume';

    if (addMode === 'new-volume') {
      const volumeName = document.getElementById('importExistingNewVolumeName')?.value?.trim()
        || `Том ${cycle.volumes.length + 1}`;

      const newVolumeId = generateId('volume');
      const newChapters = selectedChapters.map(ch => ({
        id: generateId('chapter'),
        title: ch.title,
        content: ch.content
      }));

      cycle.volumes.push({
        id: newVolumeId,
        title: volumeName,
        chapters: newChapters
      });

      selectedCycleId = cycleId;
      selectedVolumeId = newVolumeId;
      selectedChapterId = newChapters[0]?.id || null;

    } else {
      // append-volume: add chapters to selected volume
      const volSel = document.getElementById('importVolumeSelect');
      const volumeId = volSel?.value;
      const volume = cycle.volumes.find(v => v.id === volumeId);
      if (!volume) { showToast('Том не найден'); return; }

      const newChapters = selectedChapters.map(ch => ({
        id: generateId('chapter'),
        title: ch.title,
        content: ch.content
      }));

      volume.chapters.push(...newChapters);

      selectedCycleId = cycleId;
      selectedVolumeId = volumeId;
      selectedChapterId = newChapters[0]?.id || null;
    }
  }

  closeModal('importModal');
  renderLibrary();
  showToast(`Импортировано ${selectedChapters.length} глав ♥`);
}

// Import modal event listeners
document.getElementById('importModalClose')?.addEventListener('click', () => closeModal('importModal'));
document.getElementById('importModalClose2')?.addEventListener('click', () => closeModal('importModal'));
document.getElementById('libraryImportBtn')?.addEventListener('click', openImportModal);

document.getElementById('importParseBtn')?.addEventListener('click', async () => {
  const fileInput = document.getElementById('importFileInput');
  const file = fileInput?.files?.[0];
  if (!file) { showToast('Выбери файл ♥'); return; }

  const btn = document.getElementById('importParseBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Разбираю...'; }

  try {
    const result = await parseImportFile(file);
    showImportStep2(result);
  } catch (e) {
    showToast('Ошибка разбора файла: ' + e.message);
    console.error(e);
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = 'Разобрать файл'; }
  }
});

document.getElementById('importBackBtn')?.addEventListener('click', () => {
  const step1 = document.getElementById('importStep1');
  const step2 = document.getElementById('importStep2');
  if (step1) step1.hidden = false;
  if (step2) step2.hidden = true;
});

document.getElementById('importConfirmBtn')?.addEventListener('click', confirmImport);

// ============================================================
// FIREBASE REAL-TIME SYNC
// ============================================================

const FIREBASE_CONFIG_KEY = 'firebaseConfig';
let firebaseApp = null;
let firebaseDb = null;
let syncEnabled = false;
let syncUserId = null;
let syncIgnoreNextUpdate = false;

function getSyncUserId() {
  let id = localStorage.getItem('syncUserId');
  if (!id) {
    id = 'user-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('syncUserId', id);
  }
  return id;
}

function loadFirebaseConfig() {
  try {
    const raw = localStorage.getItem(FIREBASE_CONFIG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveFirebaseConfig(cfg) {
  localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(cfg));
}

function updateSyncStatusUI(status, text) {
  const badge = document.getElementById('syncStatusBadge');
  const statusText = document.getElementById('syncStatusText');
  const infoText = document.getElementById('syncStatusInfoText');

  const labels = {
    connected: 'синхр.',
    syncing: 'синхр...',
    error: 'ошибка',
    offline: 'офлайн',
    disabled: 'офлайн'
  };

  const label = text || labels[status] || status;

  if (badge) {
    badge.hidden = (status === 'disabled');
    badge.className = `sync-status sync-status--${status}`;
  }
  if (statusText) statusText.textContent = label;
  if (infoText) infoText.textContent = label === 'офлайн' ? 'не настроено' : label;
}

function initFirebaseSync(config) {
  if (!config || !config.apiKey || !config.databaseURL) {
    updateSyncStatusUI('disabled');
    return false;
  }

  try {
    // Check if already initialized
    if (firebaseApp) {
      try { firebase.app(); } catch(e) {}
    }

    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp(config);
    } else {
      firebaseApp = firebase.app();
    }

    firebaseDb = firebase.database();
    syncEnabled = true;
    syncUserId = getSyncUserId();

    updateSyncStatusUI('connected', 'подключено');

    // Start listening for remote changes
    listenForRemoteChanges();

    return true;
  } catch (e) {
    console.error('Firebase init error:', e);
    updateSyncStatusUI('error', 'ошибка подключения');
    return false;
  }
}

function listenForRemoteChanges() {
  if (!firebaseDb) return;

  firebaseDb.ref('library/chapters').on('value', (snapshot) => {
    if (syncIgnoreNextUpdate) {
      syncIgnoreNextUpdate = false;
      return;
    }

    const data = snapshot.val();
    if (!data) return;

    Object.entries(data).forEach(([rawKey, value]) => {
      if (!value || value.updatedBy === syncUserId) return;
      const draftKey = rawKey.replace(/__/g, '::');
      if (value.content !== undefined) {
        chapterDrafts[draftKey] = value.content;
      }
    });

    if (readerViewState.isOpen && readerContent) {
      readerContent.innerHTML = renderChapterContent(getCurrentEditorValue());
      if (isPagedReaderMode()) {
        buildPagedPagesFromChapter();
        renderCurrentPagedPage();
      }
    }

    updateSyncStatusUI('connected', 'синхр.');
  });
}

function pushChapterToFirebase() {
  if (!syncEnabled || !firebaseDb) return;

  const draftKey = getCurrentChapterDraftKey();
  if (!draftKey) return;

  const content = getCurrentEditorValue();
  const safeKey = draftKey.replace(/::/g, '__').replace(/[.#$[\]]/g, '_');

  updateSyncStatusUI('syncing', 'синхр...');
  syncIgnoreNextUpdate = true;

  firebaseDb.ref(`library/chapters/${safeKey}`).set({
    content,
    updatedAt: Date.now(),
    updatedBy: syncUserId
  }).then(() => {
    updateSyncStatusUI('connected', 'синхр.');
  }).catch((e) => {
    console.error('Firebase push error:', e);
    updateSyncStatusUI('error', 'ошибка');
    syncIgnoreNextUpdate = false;
  });
}

function disconnectFirebase() {
  if (firebaseDb) {
    try { firebaseDb.ref('library/chapters').off(); } catch(e) {}
  }
  syncEnabled = false;
  firebaseDb = null;
  firebaseApp = null;
  updateSyncStatusUI('disabled');
  localStorage.removeItem(FIREBASE_CONFIG_KEY);
}

// ── Sync modal handlers ──────────────────────────────────────
document.getElementById('syncModalClose')?.addEventListener('click', () => closeModal('syncModal'));

document.getElementById('readerSyncBtn')?.addEventListener('click', () => {
  const cfg = loadFirebaseConfig();
  if (cfg) {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
    set('fbApiKey',      cfg.apiKey);
    set('fbAuthDomain',  cfg.authDomain);
    set('fbDatabaseURL', cfg.databaseURL);
    set('fbProjectId',   cfg.projectId);
    set('fbAppId',       cfg.appId);
  }
  const badge = document.getElementById('syncStatusBadge');
  if (badge) badge.hidden = false;
  openModal('syncModal');
});

document.getElementById('syncSaveBtn')?.addEventListener('click', () => {
  const get = id => document.getElementById(id)?.value?.trim() || '';
  const config = {
    apiKey:       get('fbApiKey'),
    authDomain:   get('fbAuthDomain'),
    databaseURL:  get('fbDatabaseURL'),
    projectId:    get('fbProjectId'),
    appId:        get('fbAppId')
  };

  if (!config.apiKey || !config.databaseURL) {
    showToast('Заполни apiKey и databaseURL ♥');
    return;
  }

  saveFirebaseConfig(config);
  const ok = initFirebaseSync(config);

  if (ok) {
    const badge = document.getElementById('syncStatusBadge');
    if (badge) badge.hidden = false;
    showToast('Firebase подключён ♥');
    closeModal('syncModal');
  } else {
    showToast('Ошибка подключения к Firebase');
  }
});

document.getElementById('syncDisconnectBtn')?.addEventListener('click', () => {
  disconnectFirebase();
  const badge = document.getElementById('syncStatusBadge');
  if (badge) badge.hidden = true;
  showToast('Синхронизация отключена');
  closeModal('syncModal');
});

// Auto-init Firebase on load if config was saved previously
document.addEventListener('DOMContentLoaded', () => {
  const cfg = loadFirebaseConfig();
  if (cfg && cfg.apiKey && cfg.databaseURL) {
    initFirebaseSync(cfg);
    const badge = document.getElementById('syncStatusBadge');
    if (badge) badge.hidden = false;
  }
});

// Push to Firebase when editor content changes (debounced 1.8 s)
let syncPushTimer = null;
readerContent?.addEventListener('input', () => {
  if (!readerViewState.editorMode || !syncEnabled) return;
  clearTimeout(syncPushTimer);
  syncPushTimer = setTimeout(pushChapterToFirebase, 1800);
});

// ── beautyBtn ────────────────────────────────────────────────
beautyBtn?.addEventListener('click', () => {
  burstHearts(20);
  showToast('Ты самая красивая! ♥');
});

// ── musicStarted flag ────────────────────────────────────────
let musicStarted = false;

  