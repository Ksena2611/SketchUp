// ==================== DATA PROJEKTŮ ====================
const projects = [
    {
        before: "projects/1-before.jpg",
        after: "projects/1-after.jpg",
        beforeDesc: "Tento projekt byl vytvořen pomocí programu SketchUp, kde vidíme první patro domu.",
        afterDesc: "Projekt byl vygenerován pomocí Gemini."
    },
    {
        before: "projects/2-before.jpg",
        after: "projects/2-after.jpg",
        beforeDesc: "Druhé patro domu bylo vytvořeno pomocí programu SketchUp.",
        afterDesc: "Projekt byl vygenerován pomocí Gemini."
    },
    {
        before: "projects/3-before.jpg",
        after: "projects/3-after.jpg",
        beforeDesc: "Rozvržení elektriky pomocí programů SketchUp a Paint.",
        afterDesc: "Projekt byl vygenerován pomocí Gemini."
    },
    {
        before: "projects/4-before.jpg",
        after: "projects/4-after.jpg",
        beforeDesc: "Rozvržení elektriky pomocí programů SketchUp a Paint, 2. patro.",
        afterDesc: "Projekt byl vygenerován pomocí Gemini."
    },
    {
        before: "projects/5-before.jpg",
        after: "projects/5-after.jpg",
        beforeDesc: "Plánování kanalizace v domě pomocí programu SketchUp, 1. patro.",
        afterDesc: "Projekt byl vygenerován pomocí Gemini."
    },
    {
        before: "projects/6-before.jpg",
        after: "projects/6-after.jpg",
        beforeDesc: "Plánování kanalizace v domě pomocí programu SketchUp, 2. patro.",
        afterDesc: "Projekt byl vygenerován pomocí Gemini."
    },
    {
        before: "projects/7-before.jpg",
        after: "projects/7-after.jpg",
        beforeDesc: "Navržený projekt přední části domu pomocí programu SketchUp.",
        afterDesc: "Reálná fotografie realizovaného projektu."
    },
    {
        before: "projects/8-before.jpg",
        after: "projects/8-after.jpg",
        beforeDesc: "Navržený projekt zadní části domu pomocí programu SketchUp.",
        afterDesc: "Reálná fotografie realizovaného projektu."
    },
    {
        before: "projects/9-before.jpg",
        after: "projects/9-after.jpg",
        beforeDesc: "Navržený projekt pravé části domu pomocí programu SketchUp.",
        afterDesc: "Reálná fotografie realizovaného projektu."
    },
    {
        before: "projects/10-before.jpg",
        after: "projects/10-after.jpg",
        beforeDesc: "Navržený projekt levé části domu pomocí programu SketchUp.",
        afterDesc: "Reálná fotografie realizovaného projektu."
    }
];

let currentIndex = 0;

// ==================== DOM ELEMENTY ====================
const introScreen = document.getElementById('introScreen');
const book = document.getElementById('book');
const openBtn = document.getElementById('openBtn');

const beforeImg = document.getElementById('beforeImg');
const afterImg = document.getElementById('afterImg');
const beforeDesc = document.getElementById('beforeDesc');
const afterDesc = document.getElementById('afterDesc');

const backToIntroBtn = document.getElementById('backToIntro');
const prevBtn = document.getElementById('prevProject');
const nextBtn = document.getElementById('nextProject');

// Modal pro zvětšení obrázku
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

// ==================== FUNKCE ====================
function loadProject(index) {
    const p = projects[index];
    beforeImg.src = p.before;
    afterImg.src = p.after;
    beforeDesc.textContent = p.beforeDesc;
    afterDesc.textContent = p.afterDesc;
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    loadProject(currentIndex);
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    loadProject(currentIndex);
}

function openBook() {
    introScreen.style.opacity = '0';
    setTimeout(() => {
        introScreen.style.display = 'none';
        book.style.display = 'flex';
        setTimeout(() => {
            book.classList.add('show');
            loadProject(currentIndex);
        }, 100);
    }, 800);
}

function returnToIntro() {
    book.classList.remove('show');
    setTimeout(() => {
        book.style.display = 'none';
        introScreen.style.display = 'flex';
        introScreen.style.opacity = '1';
    }, 600);
}

// Zvětšení obrázku na celou obrazovku
function openModal(src) {
    modalImage.src = src;
    modal.style.display = 'flex';
}

// ==================== EVENT LISTENERY ====================
openBtn.addEventListener('click', openBook);
backToIntroBtn.addEventListener('click', returnToIntro);
prevBtn.addEventListener('click', prevProject);
nextBtn.addEventListener('click', nextProject);

// Kliknutí na obrázky pro zvětšení
beforeImg.addEventListener('click', () => openModal(beforeImg.src));
afterImg.addEventListener('click', () => openModal(afterImg.src));

// Zavření modalu
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Ovládání klávesami
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex' && e.key === 'Escape') {
        modal.style.display = 'none';
    }
    if (book.style.display === 'flex') {
        if (e.key === 'Escape') returnToIntro();
        if (e.key === 'ArrowLeft') prevProject();
        if (e.key === 'ArrowRight') nextProject();
    }
});

// Chyba při načítání obrázků
beforeImg.onerror = () => beforeImg.src = 'https://via.placeholder.com/600x400?text=BEFORE';
afterImg.onerror = () => afterImg.src = 'https://via.placeholder.com/600x400?text=STALO';

console.log('%cProjekt SketchUp načten ✨', 'color: #d4b88a; font-family: Cinzel;');