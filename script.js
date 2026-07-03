const TYPOLOGIES = {
  attaches: {
    label: 'Les attaches',
    color: '#E8C547',
    text: 'Ce qui te relie aux autres,\nou ce qui t\'en éloigne.\nLes liens qu\'on noue\nsans le dire, l\'isolement\nqu\'on vit sans\nle montrer.'
  },
  marees: {
    label: 'Les marées',
    color: '#7B9FE0',
    text: 'L\'endroit que tu connais\ndifféremment selon\nla saison,\nl\'heure,\nla météo.\nCe qui va au-delà\ndes frontières.'
  },
  invisibles: {
    label: 'Les invisibles',
    color: '#D4608A',
    text: 'Ce que tu sais\net qui reste méconnu.\nL\'endroit dont\ntu n\'as jamais vu le nom\nsur une carte.'
  },
  communs: {
    label: 'Les communs',
    color: '#72C47A',
    text: 'La mémoire partagée,\nles rituels et habitudes\nqui reviennent,\nqui résistent.\nCe qu\'on fait ensemble\net ce qu\'on ne veut\npas perdre.'
  }
};

const CONTRIB_INVITES = {
  attaches: 'Racontez une habitude,\nun souvenir, quelque chose\nqui vous relie à cet endroit.',
  marees: 'Racontez un endroit qui change,\nque vous vivez différemment\nselon le moment.',
  invisibles: 'Racontez un endroit méconnu,\nun secret du territoire\nque vous souhaitez partager.',
  communs: 'Racontez un rituel, une tradition,\nquelque chose que vous faites\nensemble depuis toujours.'
};

// Coordonnées placées selon la carte fondvf.png (1024×1267px)
// x,y en % de la taille naturelle de l'image
const DEPOSITS = [

  // ── LES ATTACHES ────────────────────────────────────────────
  { x:57, y:52, typo:'attaches', text:'« Le marché du lundi matin, de Lesneven : boutiques, commerces ambulants, rencontres, balade, relation sociale »', author:'Aurélie', lieu:'Lesneven', photo:'marchelesneven.jpeg', w:220, h:165 },
  { x:57, y:55, typo:'attaches', text:'« La gare routière de Lesneven qui dessert les communes environnantes »', author:'Gilles Corlosquet', lieu:'Lesneven', photo:null, w:180, h:135 },
  { x:58, y:53, typo:'attaches', text:'« Le marché hebdomadaire de Lesneven chaque lundi. Très fréquenté l\'été. »', author:'Sandrine Oblet', lieu:'Lesneven', photo:null, w:180, h:135 },
  { x:55, y:54, typo:'attaches', text:'« Stade de football de Lesneven pour son énergie et ses fervents supporters »', author:'Glen', lieu:'Lesneven', photo:'footlesneven2.jpeg', w:240, h:160 },
  { x:59, y:57, typo:'attaches', text:'« Les liens noués à la boutique de la Croix rouge à Lesneven, tenues par des bénévoles »', author:'Nathalie', lieu:'Lesneven', photo:null, w:180, h:135 },
  { x:56, y:55, typo:'attaches', text:'« Club de Football du RC Lesnevien — Entraide, Solidarité, Bénévoles et joie de vivre »', author:'Louison Villers', lieu:'Lesneven', photo:'footlesneven.jpg', w:190, h:280 },
  { x:55, y:56, typo:'attaches', text:'« Les bars de Lesneven. Les bars dans lesquels je retrouve mes amis de jeunesses »', author:'Louison Villers', lieu:'Lesneven', photo:null, w:180, h:135 },
  { x:56, y:45, typo:'attaches', text:'« Salle de Kerjézéquel sur Lesneven. On y retrouve beaucoup d\'évènements : spectacle de gymnastique et de patin, don du sang, forum des métiers, musique. »', author:'Nathalie', lieu:'Lesneven', photo:null, w:200, h:150 },
  { x:38, y:50, typo:'attaches', text:'« Il y a des rendez-vous culturels qui nous amènent quelques fois chez des particuliers et nous font rencontrer du monde. Une programmation qui lutte contre l\'isolement dans les communes. »', author:'Hélène Bodennec', lieu:'Plouider', photo:null, w:200, h:150 },

  // ── LES MARÉES ──────────────────────────────────────────────
  { x:33, y:30, typo:'marees', text:'« La mer peu importe la météo »', author:'Nathalie', lieu:'Guissény', photo:'croixgreve.jpeg', w:240, h:160 },
  { x:60, y:33, typo:'marees', text:'« Le silence dans la baie de Goulven »', author:'Annie Guezennoc', lieu:'Goulven', photo:null, w:180, h:135 },
  { x:55, y:75, typo:'marees', text:'« Cette fréquence de véhicule et bruit et ambiance de précipitation de vitesse et d\'individualité »', author:'Anna Roger', lieu:'Ploudaniel', photo:null, w:200, h:150 },
  { x:27, y:33, typo:'marees', text:'« Couchers de soleil en bord de mer. Les soirs de pleine lune »', author:'Annie Guezennoc', lieu:'Guissény', photo:'plagevougo.jpeg', w:220, h:300 },
  { x:54, y:22, typo:'marees', text:'« La côte change tout le temps en fonction du jour, des marées, des saisons, de la météo »', author:'Gilles Corlosquet', lieu:'Brignogan-Plages', photo:'croixtemps.jpeg', w:240, h:320 },
  { x:28, y:32, typo:'marees', text:'« La saison du camping qui ouvre. Il reprend vie peu à peu au printemps avec l\'arrivée du beau temps et des touristes. »', author:'Nina Le Calvez', lieu:'Guissény', photo:null, w:220, h:160 },
  { x:52, y:45, typo:'marees', text:'« Un bel endroit dans la véranda face au couché de soleil, sur la ligne d\'horizon. »', author:'Nathalie', lieu:'Kernouës', photo:'coucheesoleilkernoues.jpeg', w:220, h:160 },
  { x:29, y:35, typo:'marees', text:'« La mer qui change de couleur à l\'infini, selon le ciel, le temps, la lumière. »', author:'Nina Le Calvez', lieu:'Guissény', photo:null, w:220, h:165 },
  { x:36, y:52, typo:'marees', text:'« La parade de noël, qui traverse les communes, pour soutenir les jeunes agriculteurs. »', author:'Lilian Talon', lieu:'Kernilis', photo:null, w:220, h:165 },
  { x:60, y:35, typo:'marees', text:'« Les bords de mer lors de tempêtes hivernales, la côte est transformée et le vent vient se casser contre les rochers de granit. »', author:'Sandrine Oblet', lieu:'Goulven', photo:null, w:200, h:150 },

  // ── LES INVISIBLES ──────────────────────────────────────────
  { x:65, y:54, typo:'invisibles', text:'« La campagne de Saint-Méen, hyper calme. Le soir, la nuit noire avec ciel étoilé, pas de lumière parasite. »', author:'Aurélie', lieu:'Saint-Méen', photo:'campagnesaintmeen.jpeg', w:220, h:165 },
  { x:57, y:21, typo:'invisibles', text:'« Particularité du phare de Pontusval sur la commune de Brignogan-plage »', author:'Sonia Bodennec', lieu:'Brignogan-Plages', photo:'pharepontusval.jpeg', w:190, h:280 },
  { x:58, y:20, typo:'invisibles', text:'« Le phare de Pontusval et sa plage. Et Ménéham. Très joli coin »', author:'Aurélie', lieu:'Brignogan-Plages', photo:'Plage du phare - Plounéour.jpeg', w:190, h:280 },
  { x:58, y:24, typo:'invisibles', text:'« Brignogan-Plage, au niveau de la rade (café du port) vers 17h »', author:'Sandrine Oblet', lieu:'Brignogan-Plages', photo:null, w:180, h:135 },
  { x:52, y:53, typo:'invisibles', text:'« Le silence et le calme du recueillement dans la basilique du Folgoët. »', author:'Annie Guezennoc', lieu:'Le Folgoët', photo:null, w:180, h:135 },
  { x:53, y:48, typo:'invisibles', text:'« Un des premiers points d\'eau semi-automatique sur le commun de Kernouës, prénommé "le tic-tac" »', author:'Gilles Corlosquet', lieu:'Kernouës', photo:'tictac.JPEG', w:240, h:160 },
  { x:64, y:36, typo:'invisibles', text:'« Une fontaine sur les hauteurs de Goulven. Entretenue par une association d\'anciens. »', author:'Annie Guezennoc', lieu:'Goulven', photo:'Fontaine de Saint-Goulven.jpg', w:240, h:160 },
  { x:35, y:30, typo:'invisibles', text:'« Le sentier qui mène au point de surveillance du Corps de garde à Guissény »', author:'Nathalie', lieu:'Guissény', photo:'Sentier Corps de garde - Guissény.jpeg', w:190, h:280 },
  { x:47, y:22, typo:'invisibles', text:'« L\'île aux vaches, pour faire des pique-niques. Peu de personnes connaissent cet endroit »', author:'Yanna Dantec', lieu:'Kerlouan', photo:null, w:240, h:160 },
  { x:35, y:32, typo:'invisibles', text:'« Quand on allait à la plage avec ma mère et ma sœur à Kerlouan, il y avait toujours un bateau abandonné par la marée, il est resté là des années. »', author:'Antoine', lieu:'Guissény', photo:'Plage de Lerret - Guissény .jpeg', w:240, h:160 },
  { x:51, y:47, typo:'invisibles', text:'« Les jolies couleurs des hortensias du jardin de la petite chapelle en descendant la route de la chapelle. »', author:'Hélène Bodennec', lieu:'Kernouës', photo:'hortensia.jpeg', w:220, h:165 },
  { x:56, y:55, typo:'invisibles', text:'« Pour son apaisement : le Jardin du souvenir à Lesneven. »', author:'Yanna Dantec', lieu:'Lesneven', photo:null, w:180, h:135 },

  // ── LES COMMUNS ─────────────────────────────────────────────
  { x:57, y:56, typo:'communs', text:'« Lesneven à la fête foraine et le feu d\'artifice au stade George Martin »', author:'Eline Oblet', lieu:'Lesneven', photo:null, w:180, h:135 },
  { x:53, y:58, typo:'communs', text:'« La fête foraine de Lesneven, les festivals locaux de musique »', author:null, lieu:'Le Folgoët', photo:null, w:180, h:135 },
  { x:56, y:45, typo:'communs', text:'« Le festival Legend\'Air où je retrouve amis et famille »', author:'Eline Oblet', lieu:'Le Folgoët', photo:'nuitétoile2.JPG', w:190, h:280 },
  { x:55, y:53, typo:'communs', text:'« Le Folgoët pour le festival de musique tous les étés : la nuit des étoiles »', author:'Aurélie', lieu:'Le Folgoët', photo:null, w:180, h:135 },
  { x:53, y:52, typo:'communs', text:'« Endroit de fête à la nuit des étoiles ! »', author:'Yanna Dantec', lieu:'Le Folgoët', photo:'nuitdesétoiles.jpeg', w:190, h:280 },
  { x:52, y:50, typo:'communs', text:'« Festival de la nuit des étoiles du Folgoët entre collègues et amis »', author:'Nathalie', lieu:'Le Folgoët', photo:'nuiétoile.JPG', w:190, h:280 },
  { x:51, y:57, typo:'communs', text:'« Le pardon du Folgoët en septembre, en face de la grande basilique. Les pèlerins attendent avec impatience cette période. »', author:'Annie Guezennoc', lieu:'Le Folgoët', photo:'Archives pardon du folgoet.jpeg', w:240, h:160 },
  { x:27, y:35, typo:'communs', text:'« La traditionnelle balade du dimanche à la plage du Garo »', author:'Anna Roger', lieu:'Guissény', photo:'Plage - Guissény.jpeg', w:240, h:160 },
  { x:56, y:55, typo:'communs', text:'« Le carnaval en maternelle tous les ans, à l\'école de l\'Argoat, quand on défilait dans les rues devant l\'hôpital et sur la place Le Flo. »', author:'Antoine', lieu:'Lesneven', photo:null, w:200, h:150 },
  { x:58, y:54, typo:'communs', text:'« L\'immense gare routière du collège de Lesneven sous le regard d\'un petit enfant de 6e »', author:'Louison Villers', lieu:'Lesneven', photo:null, w:180, h:135 },
  { x:53, y:24, typo:'communs', text:'« Quand le printemps arrive, les brocantes reviennent. J\'aime y aller avec mes grands-parents, ils connaissent tout le monde. »', author:'Yanna Dantec', lieu:'Brignogan', photo:'brocante.jpeg', w:240, h:160 },
  { x:50, y:44, typo:'communs', text:'« L\'auto-cross de Kernouës/Saint-Frégant, que j\'ai organisé durant des années, existe depuis 2012. C\'est un beau moment qui amène de l\'animation dans la commune l\'été. »', author:'Gilles Corlosquet', lieu:'Kernouës', photo:null, w:200, h:150 },
  { x:53, y:48, typo:'communs', text:'« Les courses de vélo qui passent dans la commune sont devenu un évènement chaque année, on s\'y retrouve. »', author:'Gilles Corlosquet', lieu:'Saint-Frégant', photo:null, w:240, h:160 },
];

// Couleurs aplat par typo (pour les dépôts sans photo)
const TYPO_COLORS = {
  attaches:  '#E54564',
  marees:    '#45A4E5',
  invisibles:'#DB84E5',
  communs:   '#D37311'
};

// ÉTAT
let activeFilters = new Set();
let pendingPin = null;
let zoom = 1, panX = 0, panY = 0;
let isDragging = false, dragStartX, dragStartY, dragStartPanX, dragStartPanY;
let lbGallery = [], lbIndex = 0;
let printFilters = new Set();
let rafId = null;
let contribTypo = null;
let miniDragging = false, miniDragX, miniDragY, miniPanX = 0, miniPanY = 0, miniZoom = 1;

// CURSEUR
const cursor = document.getElementById('cursor');
const cursorLabel = document.getElementById('cursor-label');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    cursorLabel.style.left = mouseX + 'px';
    cursorLabel.style.top = mouseY + 'px';
    rafId = null;
  });
});

function bindCursorAll() {
  document.querySelectorAll('[data-cursor]').forEach(el => {
    if (el._cb) return; el._cb = true;
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorLabel.textContent = el.dataset.cursor;
      cursorLabel.classList.add('visible');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorLabel.classList.remove('visible');
    });
  });
}

function hideMarkers() { document.getElementById('map-labels').style.display = 'none'; }
function showMarkers() { document.getElementById('map-labels').style.display = ''; }

// Phrase d'accueil : visible si aucun filtre actif
function updateWelcomePhrase() {
  const el = document.getElementById('welcome-phrase');
  if (!el) return;
  if (activeFilters.size === 0) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

// NAVIGATION
function showPage(page) {
  document.querySelectorAll('.full-page, .lightbox').forEach(p => p.classList.add('hidden'));
  hideMarkers();
  // Cacher phrase d'accueil et filtres sur les pages (pas contrib)
  const hideUI = (page !== 'contrib');
  const phrase = document.getElementById('welcome-phrase');
  const filters = document.getElementById('ui-filters-bottom');
  if (hideUI) {
    if (phrase)  phrase.classList.add('hidden');
    if (filters) filters.classList.add('hidden');
  }
  if (page === 'projet') { buildProjetApercu(); document.getElementById('page-projet').classList.remove('hidden'); }
  else if (page === 'index') { buildIndex(); document.getElementById('page-index').classList.remove('hidden'); }
  else if (page === 'print') { buildPrintDate(); document.getElementById('page-print').classList.remove('hidden'); }
  else if (page === 'contrib') { goContribStep(1); document.getElementById('page-contrib').classList.remove('hidden'); }
  bindCursorAll();
}

function showMap() {
  document.querySelectorAll('.full-page, .lightbox').forEach(p => p.classList.add('hidden'));
  showMarkers();
  // Réafficher phrase et filtres sur la carte
  const filters = document.getElementById('ui-filters-bottom');
  if (filters) filters.classList.remove('hidden');
  applyFilterVisibility();
  updateWelcomePhrase();
}

document.getElementById('btn-projet').addEventListener('click', () => showPage('projet'));
document.getElementById('ui-logo').addEventListener('click', () => showPage('projet'));
document.getElementById('btn-index').addEventListener('click', () => showPage('index'));
document.getElementById('btn-print').addEventListener('click', () => showPage('print'));
document.getElementById('btn-contrib').addEventListener('click', () => showPage('contrib'));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); showMap(); }
});

// CARTE
function initMap() {
  const img = document.getElementById('map-img');
  if (img.complete && img.naturalWidth > 0) positionMap();
  else img.onload = positionMap;
}

function positionMap() {
  const wrap = document.getElementById('map-wrap');
  const img  = document.getElementById('map-img');
  const wW = wrap.clientWidth, wH = wrap.clientHeight;
  const iW = img.naturalWidth,  iH = img.naturalHeight;
  if (!iW || !iH) return;
  zoom = Math.max(wW / iW, wH / iH) * 1.45;
  panX = (wW - iW * zoom) * 0.72;
  panY = (wH - iH * zoom) * 0.18;
  applyTransform(false);
  initMarkers();
  bindCursorAll();
}

function applyTransform(animate) {
  const pan = document.getElementById('map-pan');
  pan.style.transition = animate ? 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none';
  pan.style.transform = `translate(${panX}px,${panY}px) scale(${zoom})`;
}

function zoomIn()  { changeZoom(zoom * 1.25); }
function zoomOut() { changeZoom(zoom * 0.8);  }

function changeZoom(nz) {
  const wrap = document.getElementById('map-wrap');
  const cx = wrap.clientWidth / 2, cy = wrap.clientHeight / 2;
  const c = Math.min(Math.max(nz, 0.15), 10);
  const r = c / zoom;
  panX = cx - r * (cx - panX); panY = cy - r * (cy - panY); zoom = c;
  applyTransform(true);
}

document.getElementById('map-wrap').addEventListener('wheel', e => {
  e.preventDefault();
  const wrap = document.getElementById('map-wrap');
  const rect = wrap.getBoundingClientRect();
  const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
  const nz = Math.min(Math.max(zoom * (1 - e.deltaY * 0.00012), 0.15), 10);
  const r  = nz / zoom;
  panX = cx - r * (cx - panX); panY = cy - r * (cy - panY); zoom = nz;
  applyTransform(false);
}, { passive: false });

document.getElementById('map-wrap').addEventListener('gesturechange', e => {
  e.preventDefault(); changeZoom(zoom * (1 + (e.scale - 1) * 0.5));
}, { passive: false });

const mapWrap = document.getElementById('map-wrap');
mapWrap.addEventListener('mousedown', e => {
  if (e.target.closest('.map-label') || e.target.closest('.map-ui')) return;
  isDragging = true;
  dragStartX = e.clientX; dragStartY = e.clientY;
  dragStartPanX = panX; dragStartPanY = panY;
  e.preventDefault();
});
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  panX = dragStartPanX + (e.clientX - dragStartX);
  panY = dragStartPanY + (e.clientY - dragStartY);
  applyTransform(false);
}, { passive: true });
window.addEventListener('mouseup', () => { isDragging = false; });

let touchPrevX = 0, touchPrevY = 0, touchPrevDist = 0;
mapWrap.addEventListener('touchstart', e => {
  e.preventDefault();
  if (e.touches.length === 1) { touchPrevX = e.touches[0].clientX; touchPrevY = e.touches[0].clientY; }
  else if (e.touches.length === 2) touchPrevDist = pinchDist(e);
}, { passive: false });
mapWrap.addEventListener('touchmove', e => {
  e.preventDefault();
  if (e.touches.length === 1) {
    panX += e.touches[0].clientX - touchPrevX; panY += e.touches[0].clientY - touchPrevY;
    touchPrevX = e.touches[0].clientX; touchPrevY = e.touches[0].clientY;
    applyTransform(false);
  } else if (e.touches.length === 2) {
    const dist = pinchDist(e);
    const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    const nz = Math.min(Math.max(zoom * dist / touchPrevDist, 0.15), 10);
    const r  = nz / zoom;
    panX = cx - r * (cx - panX); panY = cy - r * (cy - panY); zoom = nz;
    touchPrevDist = dist; applyTransform(false);
  }
}, { passive: false });
function pinchDist(e) {
  const dx = e.touches[0].clientX - e.touches[1].clientX;
  const dy = e.touches[0].clientY - e.touches[1].clientY;
  return Math.sqrt(dx*dx + dy*dy);
}

// ================================================================
// MARQUEURS — max 300px, aplat couleur si pas de photo
// ================================================================
// Calcule la couleur résultante d'un multiply entre deux hex
function multiplyColors(hex1, hex2) {
  const p = h => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
  const [r1,g1,b1] = p(hex1), [r2,g2,b2] = p(hex2);
  const r = Math.round(r1*r2/255), g = Math.round(g1*g2/255), b = Math.round(b1*b2/255);
  return `rgb(${r},${g},${b})`;
}

function getCurrentBgColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--green').trim() || '#17C664';
}

function initMarkers() {
  const container = document.getElementById('map-labels');
  container.innerHTML = '';
  const img = document.getElementById('map-img');
  const iW = img.naturalWidth  || 1024;
  const iH = img.naturalHeight || 1267;
  const MAX = 700;
  const bgColor = getCurrentBgColor();

  DEPOSITS.forEach((d, i) => {
    const el = document.createElement('div');
    el.className = 'map-label';
    el.dataset.index = i;
    el.dataset.typo  = d.typo;
    el.dataset.cursor = 'cliquer';
    el.style.left = (d.x / 100 * iW) + 'px';
    el.style.top  = (d.y / 100 * iH) + 'px';

    if (d.photo) {
      const wrap = document.createElement('div');
      wrap.className = 'map-label-photo-wrap';
      const img2 = document.createElement('img');
      img2.src = d.photo; img2.alt = '';
      img2.className = 'map-label-photo';
      img2.loading = 'lazy';
      wrap.appendChild(img2);
      el.appendChild(wrap);
    } else {
      // Classe sur le marqueur lui-même : fournit le fond vert local
      // nécessaire au mix-blend-mode multiply du carré (sans elle, le
      // carré n'a rien derrière lui à mixer et s'affiche en aplat plat)
      el.classList.add('map-label--color');
      const ph = document.createElement('div');
      ph.className = 'map-label-color';
      ph.style.width  = Math.min(d.w || 200, MAX) + 'px';
      ph.style.height = Math.min(d.h || 150, MAX) + 'px';
      ph.style.backgroundColor = TYPO_COLORS[d.typo] || '#888888';
      el.appendChild(ph);
    }

    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorLabel.textContent = 'cliquer';
      cursorLabel.classList.add('visible');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorLabel.classList.remove('visible');
    });
    el.addEventListener('click', e => { e.stopPropagation(); openLightbox(i); });
    container.appendChild(el);
  });

  applyFilterVisibility();
  bindCursorAll();
}

// ================================================================
// FILTRES — sans filtre = tout caché; avec filtre = typo visible
// ================================================================
function applyFilterVisibility() {
  document.querySelectorAll('.map-label').forEach(m => {
    const show = activeFilters.size > 0 && activeFilters.has(m.dataset.typo);
    m.style.opacity       = show ? '1' : '0';
    m.style.pointerEvents = show ? 'all' : 'none';
    m.style.transition    = 'opacity 0.35s ease';
  });
  updateWelcomePhrase();
}

function selectTypo(typo) {
  const btn = document.querySelector(`.filter-tag[data-typo="${typo}"]`);
  if (activeFilters.has(typo)) {
    activeFilters.delete(typo); btn.classList.remove('active');
  } else {
    activeFilters.add(typo); btn.classList.add('active');
  }
  applyFilterVisibility();
}

// TYPO HOVER
function showTypoHover(typo) {
  const t = TYPOLOGIES[typo];
  document.getElementById('typo-hover-tag').textContent = t.label;
  document.getElementById('typo-hover-text').innerHTML = t.text.replace(/\n/g, '<br>');
  document.getElementById('typo-hover-panel').classList.remove('hidden');
}
function hideTypoHover() {
  document.getElementById('typo-hover-panel').classList.add('hidden');
}

// ================================================================
// INDEX — format libre inspiré de la maquette
// ================================================================
function buildIndex() {
  const layout = document.getElementById('index-layout');
  layout.innerHTML = '';

  Object.keys(TYPOLOGIES).forEach(typo => {
    const col = document.createElement('div');
    col.className = 'index-col';

    const titleEl = document.createElement('div');
    titleEl.className = 'index-col-title';
    titleEl.textContent = TYPOLOGIES[typo].label;
    col.appendChild(titleEl);

    DEPOSITS.filter(d => d.typo === typo).forEach(d => {
      const item = document.createElement('div');
      item.className = 'index-item';
      item.dataset.cursor = 'cliquer';

      if (d.photo) {
        const wrap = document.createElement('div');
        wrap.className = 'index-item-photo-wrap';
        // Format aléatoire parmi paysage / portrait / carré
        const formats = [
          { ar: '4/3' },
          { ar: '3/4' },
          { ar: '1/1' },
          { ar: '16/9' }
        ];
        const fmt = formats[Math.floor(Math.random() * formats.length)];
        wrap.style.aspectRatio = fmt.ar;
        const imgEl = document.createElement('img');
        imgEl.src = d.photo; imgEl.alt = ''; imgEl.loading = 'lazy';
        wrap.appendChild(imgEl);
        item.appendChild(wrap);
      } else {
        // Aplat couleur en index — fond vert local garanti dans un wrapper,
        // + carré en multiply posé dessus. Avant : le multiply était sur
        // l'item entier (texte compris) et ne trouvait aucun fond vert
        // local (la page index a un fond transparent), donc le carré
        // s'affichait en aplat plat sans aucun effet "mode produit".
        const wrap = document.createElement('div');
        wrap.className = 'index-item-color-wrap';
        wrap.style.aspectRatio = '4/2';
        const ph = document.createElement('div');
        ph.className = 'index-item-color';
        ph.style.backgroundColor = TYPO_COLORS[d.typo] || '#888';
        wrap.appendChild(ph);
        item.appendChild(wrap);
      }

      const label = document.createElement('div');
      label.className = 'index-item-label';
      const lieu   = d.lieu   ? d.lieu   : '';
      const author = d.author ? d.author : '';
      label.textContent = [lieu, author].filter(Boolean).join(' — ');
      item.appendChild(label);

      item.addEventListener('click', () => { openLightbox(DEPOSITS.indexOf(d)); });
      col.appendChild(item);
    });
    layout.appendChild(col);
  });
  bindCursorAll();
}

// ================================================================
// APERÇU SUR LA PAGE PROJET — reprend exactement le même balisage/CSS
// que l'index (.index-item, .index-item-color-wrap, etc.) pour un
// rendu identique (carrés couleur en mode produit, photos en clair)
// ================================================================
function buildProjetApercu() {
  const layout = document.getElementById('projet-apercu');
  if (!layout) return;
  layout.innerHTML = '';

  // Un récit représentatif par typologie, dans l'ordre des typologies
  Object.keys(TYPOLOGIES).forEach(typo => {
    const d = DEPOSITS.find(dep => dep.typo === typo);
    if (!d) return;
    const index = DEPOSITS.indexOf(d);

    const item = document.createElement('div');
    item.className = 'index-item projet-apercu-item';
    item.dataset.cursor = 'cliquer';

    if (d.photo) {
      const wrap = document.createElement('div');
      wrap.className = 'index-item-photo-wrap';
      wrap.style.aspectRatio = '4/3';
      const imgEl = document.createElement('img');
      imgEl.src = d.photo; imgEl.alt = ''; imgEl.loading = 'lazy';
      wrap.appendChild(imgEl);
      item.appendChild(wrap);
    } else {
      const wrap = document.createElement('div');
      wrap.className = 'index-item-color-wrap';
      wrap.style.aspectRatio = '4/2';
      const ph = document.createElement('div');
      ph.className = 'index-item-color';
      ph.style.backgroundColor = TYPO_COLORS[d.typo] || '#888';
      wrap.appendChild(ph);
      item.appendChild(wrap);
    }

    const label = document.createElement('div');
    label.className = 'index-item-label';
    label.textContent = TYPOLOGIES[typo].label;
    item.appendChild(label);

    item.addEventListener('click', () => { openLightbox(index); });
    layout.appendChild(item);
  });
  bindCursorAll();
}

// LIGHTBOX
function openLightbox(index) {
  const d = DEPOSITS[index];
  lbGallery = DEPOSITS.map((dep, i) => ({ ...dep, originalIndex: i }))
                      .filter(dep => dep.typo === d.typo);
  lbIndex = lbGallery.findIndex(dep => dep.originalIndex === index);
  updateLightbox();
  hideMarkers();
  document.querySelectorAll('.full-page').forEach(p => p.classList.add('hidden'));
  document.getElementById('lightbox').classList.remove('hidden');
  bindCursorAll();
}

function updateLightbox() {
  const dep = lbGallery[lbIndex];
  if (!dep) return;
  const t = TYPOLOGIES[dep.typo];
  document.getElementById('lb-typo-tag').textContent = t.label;
  document.getElementById('lb-text').textContent = dep.text;
  const parts = [];
  if (dep.author) parts.push(dep.author);
  if (dep.lieu)   parts.push(dep.lieu);
  document.getElementById('lb-author').textContent = parts.length ? '— ' + parts.join(', ') : '';

  // Réponses à plusieurs mains
  if (typeof renderReplies === 'function') renderReplies(dep.originalIndex);

  const photo   = document.getElementById('lightbox-photo');
  const noPhoto = document.getElementById('lb-no-photo');
  if (dep.photo) {
    photo.style.opacity = '0'; photo.src = dep.photo;
    photo.onload = () => { photo.style.opacity = '1'; photo.style.transition = 'opacity 0.4s'; };
    photo.classList.remove('hidden'); noPhoto.classList.add('hidden');
  } else {
    photo.classList.add('hidden'); noPhoto.classList.remove('hidden');
    // Teinte aplat en lightbox si pas de photo
    noPhoto.style.background = t.color || TYPO_COLORS[dep.typo];
  }

  const prev = document.getElementById('lb-prev');
  const next = document.getElementById('lb-next');
  if (lbGallery.length > 1) { prev.classList.remove('hidden'); next.classList.remove('hidden'); }
  else                       { prev.classList.add('hidden');    next.classList.add('hidden');    }

  const gallery = document.getElementById('lb-gallery');
  gallery.innerHTML = '';
  lbGallery.forEach((dep2, gi) => {
    if (gi === lbIndex) return;
    const item = document.createElement('div');
    item.className = 'lb-gallery-item'; item.dataset.cursor = 'voir';
    if (dep2.photo) {
      const imgEl = document.createElement('img');
      imgEl.src = dep2.photo; imgEl.alt = ''; imgEl.loading = 'lazy';
      item.appendChild(imgEl);
    } else {
      const noImg = document.createElement('div');
      noImg.className = 'lb-gallery-item-noimg';
      noImg.style.background = TYPO_COLORS[dep2.typo] || '#888';
      noImg.textContent = '';
      item.appendChild(noImg);
    }
    item.addEventListener('click', () => { lbIndex = gi; updateLightbox(); });
    gallery.appendChild(item);
  });
}

function lbSlide(dir) {
  lbIndex = (lbIndex + dir + lbGallery.length) % lbGallery.length;
  updateLightbox();
}
function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  // Sans ça, les marqueurs restaient cachés (hideMarkers() posé à
  // l'ouverture du lightbox) et la barre de filtres restait masquée
  // si on arrivait depuis l'index/projet/etc. — les filtres semblaient
  // "ne plus s'activer" au retour sur la carte.
  showMarkers();
  const filters = document.getElementById('ui-filters-bottom');
  if (filters) filters.classList.remove('hidden');
  applyFilterVisibility();
  updateWelcomePhrase();
}

// IMPRIMER
function buildPrintDate() {
  const now  = new Date();
  const jours = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
  const mois  = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  document.getElementById('print-date').textContent =
    `[ ${jours[now.getDay()]} ${now.getDate()} ${mois[now.getMonth()]} ${now.getFullYear()} ]`;
}
function togglePrintFilter(typo) {
  const btn = document.querySelector(`.print-filter-btn[data-typo="${typo}"]`);
  if (printFilters.has(typo)) { printFilters.delete(typo); btn.classList.remove('active'); }
  else                        { printFilters.add(typo);    btn.classList.add('active');    }
}
function doPrint() {
  // Récupère la première typo sélectionnée (ou 'communs' par défaut)
  const typo = printFilters.size > 0 ? [...printFilters][0] : 'communs';
  sessionStorage.setItem('printTypo', typo);
  window.open('print.html', '_blank');
}

// CONTRIBUTION
function goContribStep(n) {
  ['cstep1','cstep2','cstep3','cstep-success'].forEach(id =>
    document.getElementById(id).classList.add('hidden'));
  document.getElementById(n === 'success' ? 'cstep-success' : `cstep${n}`).classList.remove('hidden');
  if (n === 3) setTimeout(initMiniMap, 50);
}
function pickContribTypo(typo) {
  contribTypo = typo;
  const t = TYPOLOGIES[typo];
  document.getElementById('contrib-typo-tag').textContent = t.label;
  const tag3 = document.getElementById('contrib-typo-tag3');
  if (tag3) tag3.textContent = t.label;
  document.getElementById('contrib-invite').textContent = CONTRIB_INVITES[typo];
  goContribStep(2);
}
function previewPhoto(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('photo-preview').src = e.target.result;
    document.getElementById('photo-preview-wrap').classList.remove('hidden');
    document.getElementById('photo-upload-text').textContent = 'Photo ajoutée ✓';
  };
  reader.readAsDataURL(file);
}
function removePhoto() {
  document.getElementById('photo-preview').src = '';
  document.getElementById('photo-preview-wrap').classList.add('hidden');
  document.getElementById('photo-upload-text').textContent = 'Ajoute ta photographie';
  document.getElementById('photo-input').value = '';
}

// Mini carte contribution — initialisée à l'ouverture de l'étape 2
let miniMapImg = null;
let miniMapWrap = null;
let miniMapBound = false;

function applyMiniTransform() {
  if (!miniMapImg) return;
  miniMapImg.style.transform = `translate(${miniPanX}px,${miniPanY}px) scale(${miniZoom})`;
}

function initMiniMap() {
  miniMapImg  = document.getElementById('mini-map');
  miniMapWrap = document.getElementById('mini-map-wrap');
  if (!miniMapImg || !miniMapWrap) return;

  const doInit = () => {
    const wrapW = miniMapWrap.clientWidth  || 400;
    const wrapH = miniMapWrap.clientHeight || 280;
    const iW = miniMapImg.naturalWidth  || 7203;
    const iH = miniMapImg.naturalHeight || 8000;
    miniZoom = Math.max(wrapW / iW, wrapH / iH);
    miniPanX = (wrapW - iW * miniZoom) / 2;
    miniPanY = (wrapH - iH * miniZoom) / 2;
    applyMiniTransform();
  };

  if (miniMapImg.complete && miniMapImg.naturalWidth > 0) doInit();
  else miniMapImg.onload = doInit;

  // Bind events une seule fois
  if (miniMapBound) return;
  miniMapBound = true;

  // Pan
  miniMapWrap.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    miniDragging = true; miniDragX = e.clientX; miniDragY = e.clientY;
    e.preventDefault();
  });
  window.addEventListener('mousemove', e => {
    if (!miniDragging) return;
    miniPanX += e.clientX - miniDragX; miniPanY += e.clientY - miniDragY;
    miniDragX = e.clientX; miniDragY = e.clientY;
    applyMiniTransform();
  });
  window.addEventListener('mouseup', () => miniDragging = false);

  // Zoom molette
  miniMapWrap.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = miniMapWrap.getBoundingClientRect();
    const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    const newZoom = Math.min(Math.max(miniZoom * factor, 0.3), 6);
    const r = newZoom / miniZoom;
    miniPanX = cx - r * (cx - miniPanX);
    miniPanY = cy - r * (cy - miniPanY);
    miniZoom = newZoom;
    applyMiniTransform();
  }, { passive: false });

  // Clic pour situer
  let miniClickX = 0, miniClickY = 0;
  miniMapWrap.addEventListener('mousedown', e => { miniClickX = e.clientX; miniClickY = e.clientY; });
  miniMapWrap.addEventListener('mouseup', e => {
    if (Math.abs(e.clientX - miniClickX) > 4 || Math.abs(e.clientY - miniClickY) > 4) return;
    const rect = miniMapWrap.getBoundingClientRect();
    const iW = miniMapImg.naturalWidth  || 7203;
    const iH = miniMapImg.naturalHeight || 8000;
    const relX = (e.clientX - rect.left - miniPanX) / miniZoom;
    const relY = (e.clientY - rect.top  - miniPanY) / miniZoom;
    const x = Math.min(Math.max(relX / iW * 100, 0), 100).toFixed(1);
    const y = Math.min(Math.max(relY / iH * 100, 0), 100).toFixed(1);
    pendingPin = { x: parseFloat(x), y: parseFloat(y) };
    const pin = document.getElementById('mini-pin');
    pin.style.left = (parseFloat(x) / 100 * iW * miniZoom + miniPanX) + 'px';
    pin.style.top  = (parseFloat(y) / 100 * iH * miniZoom + miniPanY) + 'px';
    pin.style.transform = 'translate(-50%, -50%)';
    pin.classList.remove('hidden');
    document.getElementById('mini-hint').textContent = 'Récit situé — cliquez ailleurs pour ajuster';
  });
}

function submitContrib() {
  const text = document.getElementById('recit-text').value.trim();
  if (!text || !contribTypo) return;
  if (!pendingPin) pendingPin = { x: 50, y: 50 };
  const photo    = document.getElementById('photo-preview').src;
  const hasPhoto = photo && photo.length > 50 && !photo.endsWith('/');
  const depositX = pendingPin.x, depositY = pendingPin.y;
  DEPOSITS.push({
    x: pendingPin.x, y: pendingPin.y,
    typo: contribTypo,
    text: '« ' + text + ' »',
    author: (document.getElementById('contrib-name') && document.getElementById('contrib-name').value.trim()) ? document.getElementById('contrib-name').value.trim() : 'Anonyme', lieu: null,
    photo: hasPhoto ? photo : null,
    w: 200, h: 150
  });
  initMarkers();
  if (typeof updateCounter === 'function') updateCounter();
  pendingPin = null;
  document.getElementById('recit-text').value = '';
  goContribStep('success');
  showSuccessMapPreview(depositX, depositY);
}

// Centre et zoome l'aperçu carte de l'étape succès sur le point déposé,
// pour montrer visuellement que le récit est bien sur la carte
function showSuccessMapPreview(xPercent, yPercent) {
  const img = document.getElementById('success-map-img');
  if (!img) return;
  const SIZE = 200; // doit rester en phase avec .success-map-preview en CSS
  const ZOOM_IN = 7; // niveau de zoom local autour du point, au-delà du "fit" plein cadre

  const place = () => {
    const iW = img.naturalWidth  || 7203;
    const iH = img.naturalHeight || 8000;
    const fit = Math.max(SIZE / iW, SIZE / iH);
    const z = fit * ZOOM_IN;
    const px = xPercent / 100 * iW;
    const py = yPercent / 100 * iH;
    img.style.transform = `translate(${SIZE / 2 - px * z}px, ${SIZE / 2 - py * z}px) scale(${z})`;
  };

  if (img.complete && img.naturalWidth > 0) place();
  else img.onload = place;
}

// INIT
initMap();
updateWelcomePhrase();
updateCounter();
applyHourPalette();

// ===== PALETTE HORAIRE =====
const HOUR_PALETTES = [
  { from: 0,  to: 5,  color: '#1A2535' }, // nuit
  { from: 5,  to: 8,  color: '#C4A898' }, // aube
  { from: 8,  to: 10, color: '#D4C48A' }, // matin
  { from: 10, to: 12, color: '#9AB4C8' }, // 10h-12h
  { from: 12, to: 17, color: '#5A7A9A' }, // après-midi
  { from: 17, to: 20, color: '#C47A5A' }, // fin de journée
  { from: 20, to: 24, color: '#6A5A7A' }, // soir
];

function getHourColor() {
  const h = new Date().getHours();
  const p = HOUR_PALETTES.find(p => h >= p.from && h < p.to);
  return p ? p.color : '#1A2535';
}

function applyColor(color) {
  document.documentElement.style.setProperty('--green', color);
  const mapBg = document.getElementById('map-bg');
  if (mapBg) mapBg.style.background = color;
  const ss = document.querySelector('.screensaver');
  if (ss) ss.style.background = color;
  const miniWrap = document.querySelector('.mini-map-wrap');
  if (miniWrap) miniWrap.style.background = color;
  // Recalculer les couleurs multiply des marqueurs
  document.querySelectorAll('.map-label-color').forEach(el => {
    const typo = el.closest('.map-label')?.dataset.typo;
    if (typo) el.style.backgroundColor = multiplyColors(TYPO_COLORS[typo] || '#888888', color);
  });
}

function applyHourPalette() {
  const saved = (() => { try { return localStorage.getItem('palette'); } catch(e) { return null; } })();
  if (saved && saved !== 'hour') { applyColor(saved); return; }
  applyColor(getHourColor());
}

// ===== SÉLECTEUR PALETTE =====
function togglePalette() {
  const opts = document.getElementById('palette-options');
  if (opts) opts.classList.toggle('hidden');
}

function setPalette(btn) {
  const color = btn.dataset.color;
  try { localStorage.setItem('palette', color); } catch(e) {}
  if (color === 'hour') { applyColor(getHourColor()); }
  else { applyColor(color); }
  document.getElementById('palette-options').classList.add('hidden');
  bindCursorAll();
}

// ===== COMPTEUR VIVANT =====
function updateCounter() {
  const el = document.getElementById('ui-counter');
  if (el) el.textContent = DEPOSITS.length + ' récits déposés';
}

// ===== RÉCIT AU HASARD =====
function openRandom() {
  const i = Math.floor(Math.random() * DEPOSITS.length);
  openLightbox(i);
}

// ===== RÉCIT À PLUSIEURS MAINS =====
let REPLIES = {};
try { REPLIES = JSON.parse(localStorage.getItem('replies') || '{}'); } catch(e) {}

function toggleReplyForm() {
  const form = document.getElementById('lb-reply-form');
  if (form) form.classList.toggle('hidden');
}

function submitReply() {
  const text = document.getElementById('reply-text').value.trim();
  if (!text) return;
  const name = document.getElementById('reply-name').value.trim() || 'Anonyme';
  const dep = lbGallery[lbIndex];
  if (!dep) return;
  const key = dep.originalIndex;
  if (!REPLIES[key]) REPLIES[key] = [];
  REPLIES[key].push({ text, author: name });
  try { localStorage.setItem('replies', JSON.stringify(REPLIES)); } catch(e) {}
  document.getElementById('reply-text').value = '';
  document.getElementById('reply-name').value = '';
  document.getElementById('lb-reply-form').classList.add('hidden');
  renderReplies(key);
}

function renderReplies(key) {
  const container = document.getElementById('lb-replies');
  if (!container) return;
  const replies = REPLIES[key] || [];
  container.innerHTML = '';
  replies.forEach(r => {
    const item = document.createElement('div');
    item.className = 'lb-reply-item';
    item.innerHTML = `<p class="lb-reply-text">« ${r.text} »</p><span class="lb-reply-author">— ${r.author}</span>`;
    container.appendChild(item);
  });
}

// ===== ÉCRAN DE VEILLE =====
let idleTimer = null;
const IDLE_DELAY = 30000; // 30 secondes

function resetIdle() {
  clearTimeout(idleTimer);
  const ss = document.getElementById('screensaver');
  if (ss && !ss.classList.contains('hidden')) {
    ss.classList.add('hidden');
  }
  idleTimer = setTimeout(showScreensaver, IDLE_DELAY);
}

function showScreensaver() {
  const ss = document.getElementById('screensaver');
  if (ss) ss.classList.remove('hidden');
}

// Écouter toute activité
['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'].forEach(evt => {
  document.addEventListener(evt, resetIdle, { passive: true });
});

// Clic sur le screensaver le ferme
document.getElementById('screensaver').addEventListener('click', () => {
  document.getElementById('screensaver').classList.add('hidden');
  resetIdle();
});

// Démarrer le timer
resetIdle();
