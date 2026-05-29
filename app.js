/* =============================================
   ASTRALIS — Application Logic
   Zodiac data, dynamic rendering, interactions
   ============================================= */

const zodiacData = {
    ariete: {
        name: 'Ariete',
        dates: '21 Mar – 19 Apr',
        glyph: '♈',
        image: 'assets/zodiac/ariete.png',
        mantra: 'Coraggio',
        forecast: [
            'La giornata si accende con un\'energia dirompente, Andrea. Il tuo spirito pionieristico ti spinge verso nuove conquiste, sfidando limiti che credevi insuperabili. Un incontro inaspettato nel primo pomeriggio potrebbe rivelare un\'alleanza strategica.',
            'Lascia che la tua audacia naturale guidi le decisioni importanti. Il fuoco interiore che ti anima oggi è raro e prezioso: usalo per costruire, non per distruggere. La sera porta serenità e consapevolezza.'
        ],
        vitality: '94%',
        affinitySign: 'Leone',
        affinityDesc: 'Passione travolgente',
        luck: 4,
        luckDesc: 'Slancio vincente',
        career: 'Leadership'
    },
    toro: {
        name: 'Toro',
        dates: '20 Apr – 20 Mag',
        glyph: '♉',
        image: 'assets/zodiac/toro.png',
        mantra: 'Stabilità',
        forecast: [
            'La mattina si apre con una sensazione di solidità interiore, Andrea. Ogni passo che fai oggi costruisce fondamenta durature. Un progetto che sembrava arenato riprende slancio grazie alla tua perseveranza innata e alla capacità di vedere il valore nel tempo.',
            'Il pomeriggio porta dolcezza nelle relazioni. Venere ti avvolge in un manto di grazia e sensualità, rendendo ogni interazione più profonda e autentica. Concediti momenti di piacere semplice.'
        ],
        vitality: '87%',
        affinitySign: 'Vergine',
        affinityDesc: 'Sintonia naturale',
        luck: 4,
        luckDesc: 'Terreno fertile',
        career: 'Consolidamento'
    },
    gemelli: {
        name: 'Gemelli',
        dates: '21 Mag – 20 Giu',
        glyph: '♊',
        image: 'assets/zodiac/gemelli.png',
        mantra: 'Comunicazione',
        forecast: [
            'La tua mente è un caleidoscopio di idee brillanti oggi, Andrea. Mercurio amplifica la tua naturale eloquenza, trasformando ogni conversazione in un\'opportunità. Un messaggio inatteso potrebbe cambiare la prospettiva su una situazione lavorativa.',
            'La sera invita al dialogo intimo. Condividi i tuoi pensieri più profondi con chi sa ascoltare: le parole giuste al momento giusto possono costruire ponti indistruttibili. La dualità che ti caratterizza trova oggi il suo equilibrio.'
        ],
        vitality: '91%',
        affinitySign: 'Acquario',
        affinityDesc: 'Connessione mentale',
        luck: 3,
        luckDesc: 'Intuizioni rapide',
        career: 'Networking'
    },
    cancro: {
        name: 'Cancro',
        dates: '21 Giu – 22 Lug',
        glyph: '♋',
        image: 'assets/zodiac/cancro.png',
        mantra: 'Intuizione',
        forecast: [
            'La Luna, tua governatrice, illumina sentieri nascosti questa mattina, Andrea. La tua sensibilità diventa un radar infallibile per cogliere ciò che gli altri non vedono. Un\'emozione repressa emerge, portando con sé la chiave per una guarigione profonda.',
            'Il pomeriggio è un nido di creatività e calore. Proteggi il tuo spazio interiore dalle influenze esterne e lascia che l\'ispirazione fluisca naturalmente. La sera porta riconciliazione e tenerezza nelle relazioni più care.'
        ],
        vitality: '85%',
        affinitySign: 'Scorpione',
        affinityDesc: 'Legame profondo',
        luck: 5,
        luckDesc: 'Onde favorevoli',
        career: 'Creatività'
    },
    leone: {
        name: 'Leone',
        dates: '23 Lug – 22 Ago',
        glyph: '♌',
        image: 'assets/zodiac/leone.png',
        mantra: 'Magnetismo',
        forecast: [
            'Il Sole, tuo astro guida, ti incorona di luce regale questa mattina, Andrea. La tua presenza magnetica attira opportunità e ammiratori. Un palcoscenico inaspettato si presenta: è il momento di brillare senza riserve e mostrare al mondo il tuo talento unico.',
            'Nel pomeriggio la generosità diventa la tua arma più potente. Condividere il tuo fuoco con gli altri non ti indebolisce, ti amplifica. La sera porta riconoscimenti meritati e momenti di orgoglio autentico.'
        ],
        vitality: '96%',
        affinitySign: 'Sagittario',
        affinityDesc: 'Fuoco creativo',
        luck: 4,
        luckDesc: 'Corona dorata',
        career: 'Performance'
    },
    vergine: {
        name: 'Vergine',
        dates: '23 Ago – 22 Set',
        glyph: '♍',
        image: 'assets/zodiac/vergine.png',
        mantra: 'Perfezione',
        forecast: [
            'La tua mente analitica è in stato di grazia questa mattina, Andrea. Ogni dettaglio racconta una storia, ogni schema rivela un\'opportunità nascosta. Un progetto complesso si semplifica sotto il tuo sguardo metodico, portando risultati che stupiscono anche te.',
            'Il pomeriggio invita a rilassare il controllo. La perfezione non è rigidità ma fluida adattabilità. Una passeggiata nella natura potrebbe ispirare soluzioni eleganti a problemi apparentemente irrisolvibili. La sera porta ordine e soddisfazione.'
        ],
        vitality: '88%',
        affinitySign: 'Capricorno',
        affinityDesc: 'Solida complicità',
        luck: 3,
        luckDesc: 'Dettagli preziosi',
        career: 'Ottimizzazione'
    },
    bilancia: {
        name: 'Bilancia',
        dates: '23 Set – 22 Ott',
        glyph: '♎',
        image: 'assets/zodiac/bilancia.png',
        mantra: 'Armonia',
        forecast: [
            'L\'equilibrio diventa la tua superpotenza questa mattina, Andrea. Dove gli altri vedono conflitto, tu trovi sintesi. Una situazione diplomatica delicata si risolve grazie alla tua capacità innata di vedere entrambi i lati, portando pace e nuove possibilità.',
            'Venere intensifica il tuo fascino naturale nel pomeriggio. L\'estetica e la bellezza non sono superficialità ma linguaggio dell\'anima. La sera è perfetta per coltivare relazioni che nutrono il tuo bisogno di connessione autentica e raffinata.'
        ],
        vitality: '86%',
        affinitySign: 'Gemelli',
        affinityDesc: 'Equilibrio perfetto',
        luck: 4,
        luckDesc: 'Bilancio positivo',
        career: 'Diplomazia'
    },
    scorpione: {
        name: 'Scorpione',
        dates: '23 Ott – 21 Nov',
        glyph: '♏',
        image: 'assets/zodiac/scorpione.png',
        mantra: 'Trasformazione',
        forecast: [
            'Senti il bisogno di scavare a fondo nelle situazioni, Andrea. Nulla sfugge al tuo sguardo acuto questa mattina. Un segreto o un enigma lavorativo viene finalmente svelato grazie alla tua intuizione profonda, portando chiarezza e nuove opportunità.',
            'La giornata favorisce l\'introspezione e la connessione con la tua força interiore. Non temere i cambiamenti, abbracciali come parte della tua evoluzione personale.'
        ],
        vitality: '89%',
        affinitySign: 'Cancro',
        affinityDesc: 'Legame profondo',
        luck: 5,
        luckDesc: 'Indizi preziosi',
        career: 'Investigazione'
    },
    sagittario: {
        name: 'Sagittario',
        dates: '22 Nov – 21 Dic',
        glyph: '♐',
        image: 'assets/zodiac/sagittario.png',
        mantra: 'Avventura',
        forecast: [
            'L\'orizzonte si espande senza limiti questa mattina, Andrea. Giove amplifica la tua sete di conoscenza e il desiderio di superare ogni confine. Un\'opportunità di viaggio o formazione si materializza, promettendo crescita e nuove prospettive illuminanti.',
            'Il pomeriggio porta entusiasmo contagioso. La tua visione ottimistica trasforma le sfide in avventure, ispirando chi ti circonda. La sera è ideale per pianificare il prossimo grande passo verso la realizzazione dei tuoi sogni più audaci.'
        ],
        vitality: '93%',
        affinitySign: 'Ariete',
        affinityDesc: 'Avventura condivisa',
        luck: 4,
        luckDesc: 'Freccia precisa',
        career: 'Espansione'
    },
    capricorno: {
        name: 'Capricorno',
        dates: '22 Dic – 19 Gen',
        glyph: '♑',
        image: 'assets/zodiac/capricorno.png',
        mantra: 'Ambizione',
        forecast: [
            'Saturno conferma la tua disciplina incrollabile questa mattina, Andrea. Ogni sacrificio passato comincia a dare i suoi frutti. Una posizione di responsabilità si profila all\'orizzonte, riconoscendo il tuo impegno costante e la tua integrità professionale.',
            'Il pomeriggio invita a bilanciare ambizione e affetti. La montagna che scali non ha valore se la vetta è solitaria. Condividi i tuoi successi con chi ti ha sostenuto. La sera porta una gratificazione profonda e meritata.'
        ],
        vitality: '90%',
        affinitySign: 'Toro',
        affinityDesc: 'Alleanza duratura',
        luck: 3,
        luckDesc: 'Costruzione solida',
        career: 'Strategia'
    },
    acquario: {
        name: 'Acquario',
        dates: '20 Gen – 18 Feb',
        glyph: '♒',
        image: 'assets/zodiac/acquario.png',
        mantra: 'Innovazione',
        forecast: [
            'Un lampo di genialità attraversa la tua mente questa mattina, Andrea. Urano stimola la tua natura visionaria, portando idee che sembrano venire dal futuro. Un approccio non convenzionale a un problema familiare rivela soluzioni che nessuno aveva considerato.',
            'Il pomeriggio favorisce le connessioni con anime affini. La tua unicità è un magnete per chi cerca autenticità. La sera è perfetta per sperimentare, creare e rompere gli schemi con eleganza rivoluzionaria.'
        ],
        vitality: '88%',
        affinitySign: 'Bilancia',
        affinityDesc: 'Visione comune',
        luck: 4,
        luckDesc: 'Onde quantiche',
        career: 'Innovazione'
    },
    pesci: {
        name: 'Pesci',
        dates: '19 Feb – 20 Mar',
        glyph: '♓',
        image: 'assets/zodiac/pesci.png',
        mantra: 'Empatia',
        forecast: [
            'Le correnti cosmiche ti trasportano in acque profonde e rivelatrici questa mattina, Andrea. Nettuno amplifica la tua sensibilità artistica e la capacità di percepire ciò che resta invisibile agli altri. Un sogno ricorrente potrebbe contenere un messaggio importante.',
            'Il pomeriggio è un\'immersione nella creatività pura. Ogni gesto diventa poesia, ogni pensiero una melodia. La sera invita alla contemplazione e al perdono: lascia andare ciò che non serve più e abbraccia la fluidità del cambiamento.'
        ],
        vitality: '82%',
        affinitySign: 'Scorpione',
        affinityDesc: 'Profondità emotiva',
        luck: 5,
        luckDesc: 'Marea crescente',
        career: 'Ispirazione'
    }
};

// ─── State ───────────────────────────────────────
let currentSignKey = localStorage.getItem('astralis_sign') || 'scorpione';
let currentUserName = localStorage.getItem('astralis_name') || 'Andrea';

// ─── DOM Elements ────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const els = {
    device: $('#device'),
    zodiacArt: $('#zodiac-art'),
    topCard: $('#top-card'),
    mantraTitle: $('#mantra-title'),
    mantraSubtitle: $('#mantra-subtitle'),
    forecastText1: $('#forecast-text-1'),
    forecastText2: $('#forecast-text-2'),
    contentPanel: $('#content-panel'),

    // Info modules
    affinityValue: $('#affinity-value'),
    vitalityValue: $('#vitality-value'),
    luckStars: $('#luck-stars'),
    luckDesc: $('#luck-desc'),
    careerValue: $('#career-value'),

    // Navigation
    tabOggi: $('#tab-oggi'),
    tabProfilo: $('#tab-profilo'),
    viewOggi: $('#view-oggi'),
    viewProfilo: $('#view-profilo'),

    // Sign picker
    sheetBackdrop: $('#sheet-backdrop'),
    signSheet: $('#sign-sheet'),
    signsGrid: $('#signs-grid'),

    // Profile
    inputName: $('#input-name'),
    selectSign: $('#select-sign'),
    profileName: $('#profile-name'),
    profSun: $('#prof-sun'),
    profMoon: $('#prof-moon'),
    profAsc: $('#prof-asc'),
};

// ─── Utilities ───────────────────────────────────
function formatText(text, name) {
    return text.replace(/Andrea/g, name);
}

function getFormattedDate() {
    const opts = { weekday: 'long', day: 'numeric', month: 'long' };
    const d = new Date().toLocaleDateString('it-IT', opts);
    return d.charAt(0).toUpperCase() + d.slice(1);
}

// ─── Rendering ───────────────────────────────────
function renderSign(signKey, animate = true) {
    const sign = ZODIAC_SIGNS[signKey];
    if (!sign) return;

    currentSignKey = signKey;
    localStorage.setItem('astralis_sign', signKey);

    // — Image crossfade —
    if (animate) {
        const oldImg = els.zodiacArt;
        const newImg = document.createElement('img');
        newImg.src = sign.image;
        newImg.alt = sign.name;
        newImg.className = 'zodiac-art zodiac-art-enter';
        newImg.draggable = false;
        els.topCard.insertBefore(newImg, els.topCard.querySelector('.top-card-overlay'));

        oldImg.classList.add('fading');
        newImg.addEventListener('animationend', () => {
            oldImg.src = sign.image;
            oldImg.alt = sign.name;
            oldImg.classList.remove('fading');
            newImg.remove();
        }, { once: true });
    } else {
        els.zodiacArt.src = sign.image;
        els.zodiacArt.alt = sign.name;
    }

    // — Mantra title —
    if (animate) {
        els.mantraTitle.style.opacity = '0';
        setTimeout(() => {
            els.mantraTitle.textContent = sign.mantra;
            els.mantraTitle.style.opacity = '1';
        }, 200);
    } else {
        els.mantraTitle.textContent = sign.mantra;
    }

    // (Zodiac glyph is now displayed as the illustration, no small circle glyph needed)

    // — Forecast text —
    els.forecastText1.textContent = formatText(sign.forecast[0], currentUserName);
    els.forecastText2.textContent = formatText(sign.forecast[1], currentUserName);

    // — Info modules —
    els.affinityValue.textContent = `${sign.affinitySign}: ${sign.affinityDesc}`;
    els.vitalityValue.textContent = sign.vitality;
    els.careerValue.textContent = sign.career;
    els.luckDesc.textContent = sign.luckDesc;

    // Stars
    renderStars(sign.luck);

    // — Profile tab —
    els.profSun.textContent = sign.name;
    els.selectSign.value = signKey;

    // Update sign sheet active state
    $$('.sign-pick-card').forEach(card => {
        card.classList.toggle('active', card.dataset.sign === signKey);
    });
}

function renderStars(count) {
    const starSvg = '<svg class="mini-star __CLASS__" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += starSvg.replace('__CLASS__', i <= count ? 'active' : '');
    }
    els.luckStars.innerHTML = html;
}

// ─── Sign Picker Sheet ──────────────────────────
function buildSignsGrid() {
    els.signsGrid.innerHTML = '';
    Object.entries(ZODIAC_SIGNS).forEach(([key, sign]) => {
        const card = document.createElement('button');
        card.className = 'sign-pick-card' + (key === currentSignKey ? ' active' : '');
        card.dataset.sign = key;
        card.innerHTML = `
            <span class="sign-pick-glyph">${sign.glyph}</span>
            <span class="sign-pick-name">${sign.name}</span>
            <span class="sign-pick-dates">${sign.dates}</span>
        `;
        card.addEventListener('click', () => {
            renderSign(key, true);
            closeSheet();
        });
        els.signsGrid.appendChild(card);
    });
}

function openSheet() {
    buildSignsGrid();
    els.sheetBackdrop.classList.add('visible');
    els.signSheet.classList.add('open');
    els.signSheet.setAttribute('aria-hidden', 'false');
}

function closeSheet() {
    els.sheetBackdrop.classList.remove('visible');
    els.signSheet.classList.remove('open');
    els.signSheet.setAttribute('aria-hidden', 'true');
}

// ─── Navigation ─────────────────────────────────
function switchTab(tab) {
    const isOggi = tab === 'oggi';

    els.tabOggi.classList.toggle('active', isOggi);
    els.tabProfilo.classList.toggle('active', !isOggi);

    els.viewOggi.classList.toggle('active', isOggi);
    els.viewProfilo.classList.toggle('active', !isOggi);
}

// ─── Event Bindings ─────────────────────────────
function bindEvents() {
    // Top card (Zodiac Illustration) opens sign picker
    els.topCard.addEventListener('click', openSheet);
    els.topCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openSheet();
        }
    });

    // Sheet backdrop closes
    els.sheetBackdrop.addEventListener('click', closeSheet);

    // Navigation tabs
    els.tabOggi.addEventListener('click', () => switchTab('oggi'));
    els.tabProfilo.addEventListener('click', () => switchTab('profilo'));

    // Profile: name input
    els.inputName.addEventListener('input', (e) => {
        currentUserName = e.target.value.trim() || 'Andrea';
        localStorage.setItem('astralis_name', currentUserName);
        els.profileName.textContent = currentUserName;

        // Update forecast text with new name
        const sign = ZODIAC_SIGNS[currentSignKey];
        els.forecastText1.textContent = formatText(sign.forecast[0], currentUserName);
        els.forecastText2.textContent = formatText(sign.forecast[1], currentUserName);
    });

    // Profile: sign select
    els.selectSign.addEventListener('change', (e) => {
        renderSign(e.target.value, false);
    });

    // Swipe down to close sheet
    let touchStartY = 0;
    els.signSheet.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    els.signSheet.addEventListener('touchmove', (e) => {
        const diff = e.touches[0].clientY - touchStartY;
        if (diff > 60) {
            closeSheet();
        }
    }, { passive: true });
}

// ─── Initialization ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Restore saved state
    els.inputName.value = currentUserName;
    els.profileName.textContent = currentUserName;

    // Set pseudo-random moon/asc for profile
    els.profMoon.textContent = currentSignKey === 'scorpione' ? 'Toro' : 'Scorpione';
    els.profAsc.textContent = currentSignKey === 'scorpione' ? 'Bilancia' : 'Sagittario';

    // Render initial sign (no animation on first load)
    renderSign(currentSignKey, false);

    // Bind all events
    bindEvents();
});

// ─── Service Worker Registration ────────────────
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.warn('SW registration failed:', err));
    });
}
