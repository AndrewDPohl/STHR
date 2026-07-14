const catalog = [
  { artist: 'The Jukebox Romantics', title: 'This One Looks Cool', img: 'https://i.imgur.com/hdgpx0u.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'http://selltheheartrecords.bigcartel.com/product/the-jukebox-romantics-this-one-looks-cool-12-lp' },
  { artist: 'Beneath You', title: 'General Hermitude', img: 'https://i.imgur.com/jqN6S0o.jpg', format: '12" LP', type: ['12lp'], url: 'http://selltheheartrecords.bigcartel.com/product/beneath-you-general-hermitude-12-lp' },
  { artist: 'Hauntu', title: 'The Unknown Reigns', img: 'https://i.imgur.com/reMoITI.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'http://selltheheartrecords.bigcartel.com/product/hauntu-the-unknown-reigns-lp' },
  { artist: 'Various Artists', title: 'A 7 Step Guide To Happiness', img: 'https://i.imgur.com/jAc7TSR.jpg', format: '12" LP', type: ['12lp','comp'], url: 'http://selltheheartrecords.bigcartel.com/product/a-7-step-guide-to-happiness' },
  { artist: 'Good City Lie Still', title: 'S/T', img: 'https://i.imgur.com/MjoUtkj.jpg', format: '12" LP', type: ['12lp'], url: 'http://selltheheartrecords.bigcartel.com/product/good-city-lie-still-st-12-lp' },
  { artist: 'Neckscars', title: 'Unhinged', img: 'https://i.imgur.com/Ddl6SgJ.jpg', format: '12" LP', type: ['12lp'], url: 'http://selltheheartrecords.bigcartel.com/product/neckscars-unhinged-12-vinyl-lp' },
  { artist: 'Unseemlier', title: 'I Have A Screw Loose, Somewhere', img: 'https://i.imgur.com/vywY86t.jpg', format: '12" LP', type: ['12lp'], url: 'http://selltheheartrecords.bigcartel.com/product/unseemlier-i-have-a-screw-loose-somewhere-12-lp' },
  { artist: 'Little Low', title: 'Sunshine Guilt', img: 'https://i.imgur.com/6LU5R3M.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/little-low-sunshine-guilt-12-vinyl-lp' },
  { artist: 'Datura', title: 'Songs From A Dark House', img: 'https://i.imgur.com/xliupuG.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bigcartel.com/product/datura-songs-from-a-dark-house-12-lp' },
  { artist: 'Middle-Aged Queers', title: 'Theatre of Shame', img: 'https://i.imgur.com/AVthEwR.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bigcartel.com/product/not-the-new-middle-aged-queers-album' },
  { artist: 'Oh The Humanity!', title: 'Ground To Dust', img: 'https://i.imgur.com/uLpMylo.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/oh-the-humanity-ground-to-dust-12-lp' },
  { artist: 'Build Us Airplanes', title: 'All Things Expire', img: 'https://i.imgur.com/VW8dUDd.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/build-us-airplanes-all-things-expire-12-lp' },
  { artist: 'Holy Water', title: 'Tides', img: 'https://i.imgur.com/NVYsYaw.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/holy-water-tides-12-lp' },
  { artist: 'Various Artists', title: 'Fest 22 Comp', img: 'https://i.imgur.com/QvzOgIC.jpg', format: '12" LP', type: ['12lp','comp'], url: 'https://selltheheartrecords.bigcartel.com/product/fest-22-compilation' },
  { artist: 'Bumsy and the Moochers', title: 'Anywhere But Here', img: 'https://i.imgur.com/I2nZmVE.jpg', format: '7" EP', type: ['7ep'], url: 'https://selltheheartrecords.bigcartel.com/product/7-inch-vinyl-records' },
  { artist: 'Hauntu', title: 'I', img: 'https://i.imgur.com/gviUOlf.jpg', format: '7" EP', type: ['7ep'], url: 'https://selltheheartrecords.bigcartel.com/product/7-inch-vinyl-records' },
  { artist: 'Sammy Kay', title: 'July 1960', img: 'https://i.imgur.com/Zzi2hwD.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://sammykaynj.bandcamp.com/album/july-1960' },
  { artist: 'Various Artists', title: 'Comp Punksylvania: The Sequel', img: 'https://i.imgur.com/uioz1sp.jpg', format: 'CD', type: ['cd','comp'], url: 'https://selltheheartrecords.bandcamp.com/album/comp-punksylvania-the-sequel' },
  { artist: 'Kalifornia Redemption', title: 'The Kal Red Anthology', img: 'https://i.imgur.com/VX2cK1X.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/kalifornia-redemption-the-kal-red-anthology-12-lp' },
  { artist: 'Hotlung', title: 'In Spite Of', img: 'https://i.imgur.com/VJoV2Ow.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://hotlung.bandcamp.com/album/in-spite-of' },
  { artist: 'The Bonstones', title: 'East Bay Elegy', img: 'https://i.imgur.com/o3AXhIi.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bandcamp.com/album/east-bay-elegy' },
  { artist: 'Raised On TV', title: 'Make Time To Make Time', img: 'https://i.imgur.com/fzhuXc2.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://raisedontv.bandcamp.com/album/make-time-to-make-time' },
  { artist: 'Rad Owl', title: 'Rage Gracefully', img: 'https://i.imgur.com/1US2z8L.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://radowl.bandcamp.com/album/rage-gracefully' },
  { artist: 'Sleave', title: 'How To Get Over', img: 'https://i.imgur.com/rtOmRQg.jpg', format: '12" LP', type: ['12lp'], url: 'https://sleaverva.bandcamp.com/album/how-to-get-over' },
  { artist: 'Unseemlier', title: 'The Truth Is We Out Here', img: 'https://i.imgur.com/KCPMKq6.jpg', format: 'CD · Cassette', type: ['cd'], url: 'https://selltheheartrecords.bandcamp.com/album/the-truth-is-we-out-here' },
  { artist: 'Back Teeth', title: 'Back Teeth', img: 'https://i.imgur.com/EIrwNA9.jpg', format: '7" EP', type: ['7ep'], url: 'https://selltheheartrecords.bandcamp.com/album/back-teeth' },
  { artist: 'The Blackburns', title: 'The Blackburns', img: 'https://i.imgur.com/z5XTR3m.jpg', format: 'CD · Cassette', type: ['cd'], url: 'https://theblackburns.bandcamp.com/album/the-blackburns' },
  { artist: 'Custody', title: '3', img: 'https://i.imgur.com/8ohhif3.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com/album/3' },
  { artist: 'Bitters and Distractions', title: 'The Home That Procrastination Built', img: 'https://i.imgur.com/tYxZ3dG.jpg', format: '7" EP', type: ['7ep'], url: 'https://bittersanddistractions.bandcamp.com/album/the-home-that-procrastination-built' },
  { artist: 'Gab De La Vega', title: 'Life Burns', img: 'https://i.imgur.com/F5R5pki.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/gab-de-la-vega-life-burns-12-lp' },
  { artist: 'States of Nature', title: 'Brighter Than Before', img: 'https://i.imgur.com/qkFs5Jz.jpg', format: '12" LP', type: ['12lp'], url: 'http://selltheheartrecords.bigcartel.com/product/states-of-nature-brighter-than-before-12-lp' },
  { artist: 'The Darién Gap', title: 'Haunted Lots', img: 'https://i.imgur.com/00Uv8q0.jpg', format: '12" EP', type: ['12lp','7ep'], url: 'https://selltheheartrecords.bigcartel.com/product/the-darien-gap-haunted-lots' },
  { artist: 'Laserchrist', title: 'Laserchrist', img: 'https://i.imgur.com/KRRlggs.jpg', format: 'Digital', type: [], url: 'https://selltheheartrecords.bandcamp.com/album/laserchrist' },
  { artist: 'Tearjerker', title: 'S/T', img: 'https://i.imgur.com/pDIwPCv.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com/album/tearjerker' },
  { artist: 'Moonraker & Neckscars', title: 'Split', img: 'https://i.imgur.com/OafnnvG.jpg', format: '12" EP', type: ['12lp'], url: 'http://selltheheartrecords.bigcartel.com/product/neckscars-moonraker-split-vinyl-bundle' },
  { artist: 'Palm Ghosts', title: 'I Love You, Burn In Hell', img: 'https://i.imgur.com/c6pivlr.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/palm-ghosts-i-love-you-burn-in-hell-12-lp' },
  { artist: 'Calm.', title: 'Dysfunctional Assumptions', img: 'https://i.imgur.com/8SL4MfN.jpg', format: 'CD', type: ['cd'], url: 'https://selltheheartrecords.bigcartel.com/product/compact-discs-and-cassettes' },
  { artist: 'Various Artists', title: 'Fest 21 Comp', img: 'https://i.imgur.com/j34B27a.jpg', format: '12" LP', type: ['12lp','comp'], url: 'https://selltheheartrecords.bandcamp.com/album/fest-21-comp' },
  { artist: 'Various Artists', title: 'Comp Punksylvania', img: 'https://i.imgur.com/JVMOwlY.jpg', format: '12" LP', type: ['12lp','comp'], url: 'https://selltheheartrecords.bandcamp.com/album/comp-punksylvania' },
  { artist: '18Fevers', title: 'Death Punk Disco', img: 'https://i.imgur.com/su6usay.jpg', format: 'CD', type: ['cd'], url: 'https://selltheheartrecords.bandcamp.com/album/death-punk-disco' },
  { artist: 'Amalia Bloom', title: 'Picturesque', img: 'https://i.imgur.com/96PbqHU.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com/album/picturesque' },
  { artist: 'Rites', title: 'No Change Without Me', img: 'https://i.imgur.com/vpw9WIE.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bigcartel.com/product/rites-no-change-without-me-12-vinyl-ep' },
  { artist: 'Crossed Keys', title: 'Believes In You', img: 'https://i.imgur.com/v95JiyY.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/crossed-keys-believes-in-you-12-gold-variant' },
  { artist: 'Raised On TV', title: 'Strangers In Pictures', img: 'https://i.imgur.com/8zWIa8r.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/raised-on-tv-strangers-in-pictures-12-lp' },
  { artist: 'Various Artists', title: 'Mooorree Than Just Another Comp', img: 'https://i.imgur.com/4fY5QWR.jpg', format: '2×12" LP', type: ['12lp','comp'], url: 'https://selltheheartrecords.bigcartel.com/product/mooorree-than-just-another-comp-12-compilation' },
  { artist: 'Singing Lungs', title: 'Coming Around', img: 'https://i.imgur.com/q6ShHtG.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com/album/coming-around' },
  { artist: 'Fat Heaven', title: 'Trash Life', img: 'https://i.imgur.com/r8Cywil.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/fat-heaven-trash-life-12-lp' },
  { artist: 'Goddamnit', title: 'All This Time Is Yours Now', img: 'https://i.imgur.com/oAFPmZO.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/goddamnit-all-this-time-is-yours-now-12-lp-pre-order' },
  { artist: 'Middle-Aged Queers', title: 'Shout at the Hetero', img: 'https://i.imgur.com/2ApJGkL.jpg', format: '10" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/middle-aged-queers-shout-at-the-hetero-10-vinyl-album' },
  { artist: 'Bear Away', title: 'A Drastic Tale of Western Living', img: 'https://i.imgur.com/vRUSzkh.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com/album/a-drastic-tale-of-western-living' },
  { artist: 'Various Artists', title: 'Fest 20 Comp', img: 'https://i.imgur.com/cesuipR.jpg', format: '12" LP', type: ['12lp','comp'], url: 'https://selltheheartrecords.bigcartel.com/product/fest-20-compilation-12-vinyl' },
  { artist: 'Kid You Not', title: "Here's To Feeling Good All The Time", img: 'https://i.imgur.com/jMNjBol.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com/album/heres-to-feelin-good-all-the-time' },
  { artist: 'The 1984 Draft', title: 'Best Friends Forever', img: 'https://i.imgur.com/8Ql2QbY.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com/album/best-friends-forever' },
  { artist: 'Abermals', title: 'Reasons to Travel', img: 'https://i.imgur.com/X961jzK.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bandcamp.com/album/reasons-to-travel' },
  { artist: 'Snipers!!', title: 'Let The Wolves Eat Themselves', img: 'https://i.imgur.com/1lSwp10.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/snipers-let-the-wolves-eat-themselves-12-vinyl' },
  { artist: 'The Atlantic Union Project', title: '3,482 Miles', img: 'https://i.imgur.com/OLdK5Ur.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'Bumsy and the Moochers', title: 'Diet Violence', img: 'https://i.imgur.com/a7JUf68.jpg', format: 'CD · Cassette', type: ['cd'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'Hopelifter', title: 'Anthemology', img: 'https://i.imgur.com/OizP6Ve.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com/product/hopelifter-anthemology' },
  { artist: 'Emblems', title: 'Everything Is Strange', img: 'https://i.imgur.com/DGzBlVu.jpg', format: 'Digital', type: [], url: 'https://selltheheartrecords.bandcamp.com/album/everything-is-strange' },
  { artist: 'Failing Up', title: 'Stories Of A Disturbed Mind', img: 'https://i.imgur.com/b0Yj0la.jpg', format: 'CD', type: ['cd'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'Box Elder', title: 'Minimums', img: 'https://i.imgur.com/AyKwWzU.jpg', format: 'CD', type: ['cd'], url: 'https://selltheheartrecords.bandcamp.com/album/minimums' },
  { artist: 'Omnigone & Protagonist', title: 'Split', img: 'https://i.imgur.com/g1oUiuX.jpg', format: '7" EP', type: ['7ep'], url: 'https://selltheheartrecords.bandcamp.com/album/omnigone-protagonist' },
  { artist: 'Lawbreaker', title: 'Tribute to Jawbreaker', img: 'https://i.imgur.com/f5OkYvC.jpg', format: '12" LP', type: ['12lp'], url: 'https://lavasocksrecords.bandcamp.com/album/dear-who' },
  { artist: 'The Dreaded Laramie', title: 'Everything A Girl Could Ask', img: 'https://i.imgur.com/9eqrE9N.jpg', format: '7" EP', type: ['7ep'], url: 'https://selltheheartrecords.bandcamp.com/album/everything-a-girl-could-ask' },
  { artist: 'One Armed Joey', title: 'Happiness, To Me', img: 'https://i.imgur.com/NmhPHEG.jpg', format: 'CD', type: ['cd'], url: 'https://selltheheartrecords.bandcamp.com/album/happiness-to-me' },
  { artist: 'Original Son', title: 'Currents', img: 'https://i.imgur.com/ezQnxmr.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'Datura', title: 'Arcano Chemical', img: 'https://i.imgur.com/AmIN4Tf.png', format: '12" LP · CD · Cassette', type: ['12lp','cd'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'The Jukebox Romantics', title: 'Fires Forming', img: 'https://i.imgur.com/e85xlbO.jpg', format: '12" EP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'States of Nature', title: 'Songs To Sway', img: 'https://i.imgur.com/y32msrj.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'Neckscars', title: "Don't Panic", img: 'https://i.imgur.com/EBnw8uI.jpg', format: '12" LP · CD', type: ['12lp','cd'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'Decent Criminal', title: 'Bliss', img: 'https://i.imgur.com/JDazsqJ.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bigcartel.com' },
  { artist: 'Middle-Aged Queers', title: 'Too Fag For Love', img: 'https://f4.bcbits.com/img/a3664173256_10.jpg', format: '10" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com' },
  { artist: 'Unconditional Arms', title: 'Formation', img: 'https://f4.bcbits.com/img/a1044413766_10.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com' },
  { artist: 'Various Artists', title: 'Everybody Wants Somewhere — A Tribute To Fugazi', img: 'http://i.imgur.com/mvoQWnd.png', format: '12" LP', type: ['12lp','comp'], url: 'https://selltheheartrecords.bandcamp.com' },
  { artist: 'Goodriddler', title: 'The Strength of Weak Ties', img: 'https://i.imgur.com/zBpTAQi.jpg', format: '12" EP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com' },
  { artist: 'Build Us Airplanes', title: 'At The End Of The Day', img: 'https://i.imgur.com/MfUQ2Sy.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com' },
  { artist: 'Mære', title: 'The Architect', img: 'https://i.imgur.com/eDWFzNx.jpg', format: 'CD', type: ['cd'], url: 'https://selltheheartrecords.bandcamp.com' },
  { artist: 'Starskate', title: 'Goodnight Nobody', img: 'https://i.imgur.com/wU2KfNMm.jpg', format: '12" LP', type: ['12lp'], url: 'https://selltheheartrecords.bandcamp.com' },
  { artist: 'Various Artists', title: 'Atlas Amped — Sonoma County Compilation', img: 'https://i.imgur.com/cztrzkn.jpg', format: '12" LP', type: ['12lp','comp'], url: 'https://selltheheartrecords.bandcamp.com' },
];

let activeFilter = 'all';
let dynamicAlbums = []; // albums loaded from Supabase

// ---- SUPABASE CONFIG ----
const SUPABASE_URL = 'https://xuhmmszgyiuvxfaxegee.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1aG1tc3pneWl1dnhmYXhlZ2VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MzA3MTYsImV4cCI6MjA5NjIwNjcxNn0._BQmTEtxN6PoWgU8e5kPaDXvvipB8WXOOddQlKFW7S0';

async function supabaseFetch(table, params = '') {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    }
  });
  if (!res.ok) throw new Error(`Supabase error: ${res.status}`);
  return res.json();
}

// Default featured (fallback if no Supabase albums)
const defaultFeatured = {
  img: 'https://i.imgur.com/hdgpx0u.jpg',
  artist: 'The Jukebox Romantics',
  title: 'This One Looks Cool',
  format: '12" Vinyl · CD',
  year: '',
  url: 'http://selltheheartrecords.bigcartel.com/product/the-jukebox-romantics-this-one-looks-cool-12-lp'
};

function renderFeatured(album) {
  document.getElementById('featured-img').src = album.img || album.image_url;
  document.getElementById('featured-img').alt = album.title;
  document.getElementById('featured-artist').textContent = album.artist;
  document.getElementById('featured-album').textContent = album.title;
  const year = album.year ? ` · ${album.year}` : '';
  document.getElementById('featured-formats').innerHTML = (album.format || '') + year;
  document.getElementById('featured-link').href = album.url || album.store_url;
  document.getElementById('featured-badge').textContent = 'New Release';
}

function normaliseAlbum(a) {
  // Normalise Supabase row to match catalog object shape
  return {
    artist: a.artist,
    title: a.title,
    img: a.image_url,
    format: a.format,
    year: a.year || '',
    type: Array.isArray(a.types) ? a.types : (a.types || '').split(',').filter(Boolean),
    url: a.store_url,
    featured: a.featured,
  };
}

function buildCatalog(filter) {
  // Supabase albums first (newest first), then static catalog
  const allAlbums = [...dynamicAlbums, ...catalog];
  const grid = document.getElementById('catalogGrid');
  const items = filter === 'all' ? allAlbums : allAlbums.filter(r => r.type && r.type.includes(filter));
  grid.innerHTML = items.map(r => `
    <a class="catalog-item" href="${r.url || r.store_url || '#'}" target="_blank">
      <img src="${r.img || r.image_url}" alt="${r.title}" loading="lazy">
      <div class="catalog-item-info">
        <div class="catalog-item-artist">${r.artist}</div>
        <div class="catalog-item-title">${r.title}</div>
        <div class="catalog-item-format">${r.format}${r.year ? ' · ' + r.year : ''}</div>
      </div>
    </a>
  `).join('');
}

function filterCatalog(type, btn) {
  activeFilter = type;
  document.querySelectorAll('.catalog-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildCatalog(type);
}

async function loadDynamicAlbums() {
  try {
    // Fetch all albums ordered by created_at descending (newest first)
    const rows = await supabaseFetch('albums', 'order=created_at.desc');
    dynamicAlbums = rows.map(normaliseAlbum);

    if (dynamicAlbums.length > 0) {
      // Featured = row with featured=true, else most recently added
      const featured = dynamicAlbums.find(a => a.featured) || dynamicAlbums[0];
      renderFeatured(featured);
    } else {
      renderFeatured(defaultFeatured);
    }
  } catch(e) {
    console.warn('Could not load albums from Supabase, using defaults.', e);
    dynamicAlbums = [];
    renderFeatured(defaultFeatured);
  }
  buildCatalog(activeFilter);
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.style.display = id === 'home' ? 'flex' : 'block';
    window.scrollTo(0, 0);
  }
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
}

function filterPress(band, btn) {
  document.querySelectorAll('#pressFilters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.press-band-block').forEach(block => {
    if (band === 'all' || block.dataset.band === band) {
      block.classList.add('visible');
    } else {
      block.classList.remove('visible');
    }
  });
}

async function handleSubmit(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const topic = document.getElementById('contact-topic').value;
  const message = document.getElementById('contact-message').value.trim();
  const btn = document.getElementById('contact-submit');
  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');
 
  // Basic validation
  if (!name || !email || !message) {
    errorEl.textContent = '✕ \u00a0Please fill in your name, email, and message.';
    errorEl.style.display = 'block';
    successEl.style.display = 'none';
    return;
  }
 
  // Disable button while sending
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.6';
  btn.style.pointerEvents = 'none';
  errorEl.style.display = 'none';
  successEl.style.display = 'none';
 
  try {
    const res = await fetch('https://formspree.io/f/xlgkokpy', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, topic, message })
    });
 
    if (res.ok) {
      successEl.style.display = 'block';
      // Clear form
      document.getElementById('contact-name').value = '';
      document.getElementById('contact-email').value = '';
      document.getElementById('contact-topic').value = '';
      document.getElementById('contact-message').value = '';
      btn.textContent = 'Send Message →';
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      throw new Error('Server error');
    }
  } catch(e) {
    errorEl.textContent = '✕ \u00a0Something went wrong. Please try again or email us directly.';
    errorEl.style.display = 'block';
    btn.textContent = 'Send Message →';
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
  }
}
// ---- DYNAMIC PRESS FROM SUPABASE ----
function bandNameToKey(band) {
  return band.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function loadDynamicPress() {
  try {
    const rows = await supabaseFetch('press', 'order=created_at.asc');
    if (!rows || rows.length === 0) return;

    // Group by band
    const grouped = {};
    rows.forEach(p => {
      const key = bandNameToKey(p.band);
      if (!grouped[key]) grouped[key] = { band: p.band, items: [] };
      grouped[key].items.push(p);
    });

    const pressBands = document.getElementById('pressBands');
    const pressFilters = document.getElementById('pressFilters');

    for (const [key, group] of Object.entries(grouped)) {
      // Add filter button if not already there
      if (!document.querySelector(`#pressFilters .filter-btn[data-band="${key}"]`)) {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.band = key;
        btn.textContent = group.band;
        btn.setAttribute('onclick', `filterPress('${key}', this)`);
        pressFilters.appendChild(btn);
      }

      // Check if band block already exists (hardcoded in HTML)
      let block = document.querySelector(`.press-band-block[data-band="${key}"]`);

      if (!block) {
        // Create new band block
        block = document.createElement('div');
        block.className = 'press-band-block visible';
        block.dataset.band = key;
        block.innerHTML = `
          <div class="press-band-header">
            <div class="press-band-name">${group.band}</div>
            <div class="press-band-genre"></div>
          </div>
          <div class="press-items"></div>
        `;
        pressBands.appendChild(block);
      }

      // Append new press items to the band's press-items div
      const itemsDiv = block.querySelector('.press-items');
      group.items.forEach(p => {
        // Avoid duplicates
        if (itemsDiv.querySelector(`[href="${p.url}"]`)) return;
        const a = document.createElement('a');
        a.className = 'press-item';
        a.href = p.url;
        a.target = '_blank';
        a.innerHTML = `
          <div class="press-item-meta">
            <span class="press-item-outlet">${p.outlet}</span>
            <span class="press-item-type">${p.type || ''}</span>
          </div>
          <div class="press-item-headline">${p.headline}</div>
          <div class="press-item-quote">${p.quote}</div>
          <div class="press-item-arrow">Read more →</div>
        `;
        itemsDiv.appendChild(a);
      });
    }
  } catch(e) {
    console.warn('Could not load press from Supabase.', e);
  }
}

// Init — load from Supabase then render
loadDynamicAlbums();
loadDynamicPress();
showPage('home');
