let activeFilter = 'all';
let dynamicAlbums = [];
 
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
 
// Default featured (fallback if Supabase is unreachable)
const defaultFeatured = {
  img: '',
  artist: 'Sell The Heart Records',
  title: 'New releases coming soon',
  format: '',
  year: '',
  url: 'https://selltheheartrecords.bigcartel.com'
};
 
function renderFeatured(album) {
  if (!album || !album.artist) return;
  document.getElementById('featured-img').src = album.img || album.image_url || '';
  document.getElementById('featured-img').alt = album.title;
  document.getElementById('featured-artist').textContent = album.artist;
  document.getElementById('featured-album').textContent = album.title;
  const year = album.year ? ` · ${album.year}` : '';
  document.getElementById('featured-formats').innerHTML = (album.format || '') + year;
  document.getElementById('featured-link').href = album.url || album.store_url || '#';
  document.getElementById('featured-badge').textContent = 'New Release';
  document.getElementById('featured-release').style.display = 'grid';
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
  const allAlbums = [...dynamicAlbums];
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
    console.warn('Could not load albums from Supabase.', e);
    dynamicAlbums = [];
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
 
      // All press now comes from Supabase — create band block if it doesn't exist
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

// ---- VIDEOS FROM SUPABASE ----
async function loadVideos() {
  try {
    const rows = await supabaseFetch('videos', 'order=year.desc');
    if (!rows || rows.length === 0) return;
    const grid = document.getElementById('videosGrid');
    if (!grid) return;
    grid.innerHTML = rows.map(v => `
      <div class="video-item">
        <div class="video-embed">
          <iframe src="https://www.youtube.com/embed/${v.youtube_id}"
            title="${v.artist} - ${v.title}"
            allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="video-info">
          <div class="video-artist">${v.artist}</div>
          <div class="video-title">${v.title}</div>
          <div class="video-song">${v.song || ''}</div>
        </div>
      </div>
    `).join('');
  } catch(e) {
    console.warn('Could not load videos from Supabase.', e);
  }
}

// ---- STORES FROM SUPABASE ----
async function loadStores() {
  try {
    const rows = await supabaseFetch('stores', 'order=name.asc');
    if (!rows || rows.length === 0) return;
    const grid = document.getElementById('storesGrid');
    if (!grid) return;
    grid.innerHTML = rows.map(s => `
      <a class="store-item" href="${s.url}" target="_blank">
        <img src="${s.image_url}" alt="${s.name}">
        <div class="store-name">${s.name}</div>
        <div class="store-location">${s.location}</div>
      </a>
    `).join('');
  } catch(e) {
    console.warn('Could not load stores from Supabase.', e);
  }
}
 
// Init — load from Supabase then render
loadDynamicAlbums();
loadDynamicPress();
loadVideos();
loadStores();
showPage('home');
