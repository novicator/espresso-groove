import fs from 'node:fs';
import path from 'node:path';

const albums = [
  // Turn It Up
  { slug: 'back-in-black', name: 'Back in Black', artist: 'AC/DC' },
  { slug: 'paranoid', name: 'Paranoid', artist: 'Black Sabbath' },
  { slug: 'london-calling', name: 'London Calling', artist: 'The Clash' },
  { slug: 'born-to-run', name: 'Born to Run', artist: 'Bruce Springsteen' },
  { slug: 'whos-next', name: "Who's Next", artist: 'The Who' },
  { slug: 'master-of-puppets', name: 'Master of Puppets', artist: 'Metallica' },
  { slug: 'rage-against-the-machine', name: 'Rage Against the Machine', artist: 'Rage Against the Machine' },
  { slug: 'ten-pearl-jam', name: 'Ten', artist: 'Pearl Jam' },
  { slug: 'songs-for-the-deaf', name: 'Songs for the Deaf', artist: 'Queens of the Stone Age' },
  { slug: 'never-mind-the-bollocks', name: "Never Mind the Bollocks, Here's the Sex Pistols", artist: 'Sex Pistols' },

  // Smooth Operator
  { slug: 'whats-going-on', name: "What's Going On", artist: 'Marvin Gaye' },
  { slug: 'songs-in-the-key-of-life', name: 'Songs in the Key of Life', artist: 'Stevie Wonder' },
  { slug: 'voodoo', name: 'Voodoo', artist: "D'Angelo" },
  { slug: 'aja', name: 'Aja', artist: 'Steely Dan' },
  { slug: 'lady-soul', name: 'Lady Soul', artist: 'Aretha Franklin' },
  { slug: 'songs-in-a-minor', name: 'Songs in A Minor', artist: 'Alicia Keys' },
  { slug: 'lady-sings-the-blues', name: 'Lady Sings the Blues', artist: 'Billie Holiday' },
  { slug: 'bitches-brew', name: 'Bitches Brew', artist: 'Miles Davis' },

  // Low End Theory
  { slug: 'the-chronic', name: 'The Chronic', artist: 'Dr. Dre' },
  { slug: '36-chambers', name: 'Enter the Wu-Tang (36 Chambers)', artist: 'Wu-Tang Clan' },
  { slug: 'aquemini', name: 'Aquemini', artist: 'OutKast' },
  { slug: 'low-end-theory-tribe', name: 'The Low End Theory', artist: 'A Tribe Called Quest' },
  { slug: 'paid-in-full', name: 'Paid in Full', artist: 'Eric B. & Rakim' },
  { slug: 'reasonable-doubt', name: 'Reasonable Doubt', artist: 'Jay-Z' },
  { slug: 'black-on-both-sides', name: 'Black on Both Sides', artist: 'Mos Def' },
  { slug: 'college-dropout', name: 'The College Dropout', artist: 'Kanye West' },
  { slug: 'get-rich-or-die-tryin', name: "Get Rich or Die Tryin'", artist: '50 Cent' },
  { slug: '2001-dre', name: '2001', artist: 'Dr. Dre' },

  // Neon Nights
  { slug: 'selected-ambient-works', name: 'Selected Ambient Works 85-92', artist: 'Aphex Twin' },
  { slug: 'fat-of-the-land', name: 'The Fat of the Land', artist: 'The Prodigy' },
  { slug: 'endtroducing', name: 'Endtroducing.....', artist: 'DJ Shadow' },
  { slug: 'play-moby', name: 'Play', artist: 'Moby' },
  { slug: 'trans-europe-express', name: 'Trans-Europe Express', artist: 'Kraftwerk' },
  { slug: 'untrue', name: 'Untrue', artist: 'Burial' },
  { slug: 'since-i-left-you', name: 'Since I Left You', artist: 'The Avalanches' },
  { slug: 'dummy', name: 'Dummy', artist: 'Portishead' },
  { slug: 'mezzanine', name: 'Mezzanine', artist: 'Massive Attack' },
  { slug: 'confessions-on-a-dance-floor', name: 'Confessions on a Dance Floor', artist: 'Madonna' },

  // Roots & Dust
  { slug: 'blood-on-the-tracks', name: 'Blood on the Tracks', artist: 'Bob Dylan' },
  { slug: 'harvest', name: 'Harvest', artist: 'Neil Young' },
  { slug: 'pink-moon', name: 'Pink Moon', artist: 'Nick Drake' },
  { slug: 'blue-joni-mitchell', name: 'Blue', artist: 'Joni Mitchell' },
  { slug: 'wildflowers', name: 'Wildflowers', artist: 'Tom Petty' },
  { slug: 'stardust', name: 'Stardust', artist: 'Willie Nelson' },
  { slug: 'coal-miners-daughter', name: "Coal Miner's Daughter", artist: 'Loretta Lynn' },
  { slug: 'music-from-big-pink', name: 'Music from Big Pink', artist: 'The Band' },
  { slug: 'honky-tonk-heroes', name: 'Honky Tonk Heroes', artist: 'Waylon Jennings' },
  { slug: 'will-the-circle-be-unbroken', name: 'Will the Circle Be Unbroken', artist: 'Nitty Gritty Dirt Band' },

  // Main Stage
  { slug: 'born-this-way', name: 'Born This Way', artist: 'Lady Gaga' },
  { slug: 'parachutes', name: 'Parachutes', artist: 'Coldplay' },
  { slug: 'modern-vampires-of-the-city', name: 'Modern Vampires of the City', artist: 'Vampire Weekend' },
  { slug: 'currents', name: 'Currents', artist: 'Tame Impala' },
];

const outDir = path.resolve('public/images/artwork');
fs.mkdirSync(outDir, { recursive: true });

const norm = (s) => (s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');

async function findArtistId(artist) {
  const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&entity=musicArtist&limit=10`);
  const data = await res.json();
  const key = norm(artist);
  const exact = data.results?.find((r) => norm(r.artistName) === key);
  return (exact || data.results?.[0])?.artistId || null;
}

async function findAlbumByArtist(artistId, name) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=200`);
  const data = await res.json();
  const albums = (data.results || []).filter((r) => r.wrapperType === 'collection');
  const key = norm(name);
  const exact = albums.find((a) => norm(a.collectionName) === key);
  if (exact) return exact;
  const startsWith = albums.find((a) => norm(a.collectionName).startsWith(key));
  if (startsWith) return startsWith;
  return albums.find((a) => norm(a.collectionName).includes(key)) || null;
}

async function findAlbumGeneric(artist, name) {
  const term = encodeURIComponent(`${artist} ${name}`);
  const res = await fetch(`https://itunes.apple.com/search?term=${term}&entity=album&limit=10`);
  const data = await res.json();
  const artistKey = norm(artist);
  const nameKey = norm(name);
  const score = (r) => {
    const a = norm(r.artistName);
    const c = norm(r.collectionName);
    let s = 0;
    if (a === artistKey) s += 10;
    if (c.includes(nameKey)) s += 8;
    if (c.includes('single')) s -= 6;
    if (c.includes('live') && !nameKey.includes('live')) s -= 4;
    return s;
  };
  return [...(data.results || [])].sort((a, b) => score(b) - score(a))[0] || null;
}

for (const { slug, name, artist } of albums) {
  const target = path.join(outDir, `${slug}.jpg`);
  if (fs.existsSync(target)) {
    console.log(`skip   ${slug} (already exists)`);
    continue;
  }

  try {
    let match = null;
    const artistId = await findArtistId(artist);
    if (artistId) match = await findAlbumByArtist(artistId, name);
    if (!match) match = await findAlbumGeneric(artist, name);

    if (!match || !match.artworkUrl100) {
      console.warn(`MISS   ${slug}: nothing matched for "${artist} - ${name}"`);
      continue;
    }

    const hiRes = match.artworkUrl100.replace('100x100bb', '600x600bb');
    const imgRes = await fetch(hiRes);
    if (!imgRes.ok) {
      console.warn(`FAIL   ${slug}: HTTP ${imgRes.status}`);
      continue;
    }
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(target, buffer);
    console.log(`saved  ${slug}  ←  ${match.artistName} – ${match.collectionName}`);
  } catch (err) {
    console.warn(`ERROR  ${slug}: ${err.message}`);
  }
}
