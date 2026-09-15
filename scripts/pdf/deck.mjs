export function deck({ asset, constant }) {
  const e = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const img = (name, cls = '') => `<img class="${cls}" src="${asset(name)}" alt="">`;
  const p = (text, cls = '') => `<p class="${cls}">${e(text)}</p>`;
  const title = (text, cls = '') => `<h1 class="${cls}">${text}</h1>`;
  const item = (heading, text, cls = '') => `<article class="${cls}"><h3>${e(heading)}</h3>${p(text)}</article>`;
  const columns = (items, cls = '') => `<div class="columns ${cls}">${items.join('')}</div>`;
  const rows = (items, cls = '') => `<div class="rows ${cls}">${items.map(([label, body]) => `<article><h3>${e(label)}</h3>${p(body)}</article>`).join('')}</div>`;
  const photo = (name) => `<figure class="photo">${img(name)}</figure>`;
  const stat = (value, label) => `<article><strong class="stat">${value}</strong>${p(label)}</article>`;
  const pages = [];
  const page = (label, cls, content) => {
    const n = pages.length + 1;
    pages.push(`<section class="slide ${cls}" aria-label="${e(label)}"><div class="content">${content}</div><footer><span>PROJECT RHAPSODY / PROGRAM OVERVIEW</span><span>${e(label)}</span><span>CONFIDENTIAL / SEPTEMBER 2026 / ${String(n).padStart(2, '0')}</span></footer></section>`);
  };

  page('Cover', 'dark bookend cover', `${img('media/00_hero_firstlight_poster.jpg', 'backdrop')}
    ${p('[ PROGRAM OVERVIEW / SEPTEMBER 2026 / CONFIDENTIAL ]', 'bookend-meta')}
    ${title('Nobody has<br>played this before.')}
    ${img('brand/primary-glow-clear.svg', 'bookend-lockup')}
    ${p('A Symphony Space program. "Project Rhapsody" is a working codename pending trademark clearance; the emblem is the durable asset.', 'bookend-note')}`);

  page('Thesis', 'split', `<div class="copy">${title('The live and<br>unrepeatable is<br><em>the last real luxury.</em>')}
    ${p('Every medium is defined by the physics of where it is made. Broadcast was invented in a studio. Social was invented in a feed. The next one gets invented in orbit.')}
    ${p('Rhapsody is the first instrument for making media in orbit: a studio, not a satellite; a session, not a slot. Every work is made once, in a place with new physics, and can never be played twice.')}
    <div class="mini-stat"><strong>April 2028</strong>${p('First works fly on a demonstrator with a secured launch slot.')}</div></div>${photo('media/01_thesis_poster.jpg')}`);

  page('Highlights', 'highlights', `${title('Six reasons this is a studio,<br><em>not a stunt.</em>')}
    ${columns(constant('02-highlights','TILES').map(t => item(t.title,t.body)), 'six')}`);

  page('Why Now', 'dark photo-statement', `${img('media/03_why_now.webp','backdrop')}
    <div class="scrim"></div>${title('Anything can be generated.<br><em>Nothing can be re-lived.</em>')}
    ${columns([
      item('Abundance changed the asset.', 'When a campaign can be prompted in seconds, a house pays for proof that a real thing happened, once, somewhere no one else could go.'),
      item('Luxury ran out of altitude.', 'The museum steps, the desert, the runway on ice: every terrestrial venue has been used. Cultural capital comes from founding moments, not attending them.'),
      item('Orbit became reconfigurable.', 'A platform can host a creative work, swap it, and host the next on the timeline of a season, not a decade.')], 'bottom')}
    ${p('You cannot prompt a session that already happened.', 'statement-note')}`);

  page('The Medium', 'medium', `${title('Media has had two movements.<br><em>We are writing the third.</em>')}
    ${columns(constant('04-third-movement','MOVEMENTS').map(m => `<article><span class="roman">${m.n}</span><h2>${e(m.name)}</h2><h3>${e(m.verb)}</h3>${p(m.body)}</article>`))}
    <div class="closing-rule">${p('Legacy space composes a mission over years and freezes it at launch. Our instrument reconfigures on orbit in weeks. The story and the hardware are the same story.')}</div>`);

  page('Problem', 'split', `<div class="copy">${title('Space has been<br>a stunt,<br><em>never a studio.</em>')}
    ${p('Every brand moment in orbit to date has been a one-off. A single launch. A press cycle. No instrument. No repeatability. No rights. No medium.')}
    ${rows(constant('05-problem','REASONS').map(r => [r.title,r.body]), 'compact')}
    </div>${photo('media/05_problem.webp')}`);

  page('Solution', 'split', `<div class="copy">${title('The first instrument<br><em>for orbit.</em>')}
    ${p('A house brings the work: a camera, a material, a digital canvas. It drops into a standard creative envelope in weeks, not years. The studio composes the window, captures the take, authenticates the master, and returns the media rights.')}
    ${rows(constant('06-solution','PILLARS').map(v => [v.name,v.body]), 'compact')}
    </div>${photo('media/06_solution_poster.jpg')}`);

  page('The Session', 'dark session', `${title('Invited. Composed. Flown.<br><em>Captured. Mastered.</em>')}
    ${p('Your session is yours alone.', 'standfirst')}
    <div class="steps">${constant('07-session','STEPS').map(s => `<article><span>${s.n}</span><h3>${e(s.name)}</h3>${p(s.body)}</article>`).join('')}</div>
    <div class="session-line"></div>${p('One work. One window. One authenticated master.', 'statement-note')}`);

  const offer = constant('08-offer','ROWS');
  page('Offer', 'offer', `${title('Moments <em>over mass.</em>')}
    <table><thead><tr><th></th>${constant('08-offer','COLUMNS').map(v => `<th>${e(v)}</th>`).join('')}</tr></thead><tbody>${offer.map(r => `<tr>${r.map((v,i) => `<${i ? 'td' : 'th'}>${e(v)}</${i ? 'td' : 'th'}>`).join('')}</tr>`).join('')}</tbody></table>
    <div class="service"><h3>Studio Services</h3>${p('Mission storytelling, launch media, brand and communications work for sovereign, commercial, and hyperscale clients already on contract with Symphony. A complementary offering that extends existing relationships and keeps production active between sessions. Revenue books to Symphony.')}</div>
    ${p('Capacity pricing is approximate and depends on mass and volume. Engagements are typically about one month and non-recurring. Larger or heavier works cost more; smaller or lighter works cost less.', 'note')}`);

  page('Opportunity', 'split opportunity', `<div class="copy">${title('Not the media budget.<br><em>The founding moment.</em>')}
    <strong class="stat giant">$60B</strong>${p('Luxury brand & media opportunity in orbit, opening 2030-2035.', 'standfirst')}
    ${p('The nearer comparison is what luxury already spends on cultural capital: pavilions, patronage, motorsport, the gala, the monograph. That budget buys being there first.')}
    ${rows(constant('09-market','RINGS').map(r => [r.name,r.body]), 'compact')}
    </div>${photo('media/pdf-market-frame.jpg')}`);

  page('The First Generation', 'dark generation', `<div class="generation-copy">${title('We are not<br>looking for<br>customers.<br><em>We are looking<br>for the first<br>generation.</em>')}</div>
    <figure>${img('media/10_first_generation.png')}</figure>`);

  page('Economics', 'economics', `${title('Creative engagements.<br><em>Symphony revenue.</em>')}
    ${columns([stat('$30K','Estimated capacity rate / kg / month'),stat('4.6-7.5x',"4.6x Symphony's weighted-average subscription rate; 7.5x its Long-Term Plan"),stat('$58.3M','Modeled 2029 brand and advertising revenue, booked to Symphony')], 'metrics')}
    ${rows([
      ['2028 / Commercial target', '$1M-$4M in total contracted value sought for two founding demonstrator works. This is a target, not secured contracts or modeled revenue. Symphony models $1.075M in licensing and consulting, with no brand and advertising revenue in 2028.'],
      ['2029 / Modeled revenue', '$58.3M of brand and advertising revenue on 15% of subscription-platform capacity at 90% booked. All program revenue books to Symphony.'],
      ['2034 / Capacity allocation', 'Brand and advertising allocation reaches 28% of subscription-platform capacity. This is separate from the 40% cap on long-term studio anchors.']], 'financial')}
    ${p('Typically one-month, non-recurring engagements. $360,000/kg/year is an annualized rate comparison, not recurring contracted revenue. Pricing varies with mass and volume. No standalone Rhapsody revenue model or intercompany capacity purchase. Source: Symphony model figures confirmed by Merry Walker, September 2026.', 'note')}`);

  page('Landscape', 'dark landscape', `${title('The venue.<br>The instrument.<br><em>The gate.</em>')}
    <div class="landscape-right">${rows(constant('12-landscape','COLUMNS').map(v => [v.name,v.body]))}</div>
    <div class="moat">${constant('12-landscape','MOAT').map(v => p(v)).join('')}</div>`);

  page('Platform', 'split platform', `<div class="copy">${title('The orbit is booked.<br><em>The instrument is real.</em>')}
    ${p("The studio is a Symphony Space program operating on Symphony's reconfigurable, serviceable platforms. Symphony has a secured launch slot and signed demand from sovereign, commercial, and hyperscale customers before first flight.")}
    ${rows(constant('13-infrastructure','MILESTONES').map(v => [v.date,v.body]), 'compact timeline')}
    ${p("Rhapsody is not a separate entity and cannot issue equity or raise independently. Its budget is funded from Symphony's Seed; all program revenue books to Symphony.", 'note')}
    </div>${photo('media/13_infrastructure.webp')}`);

  page('Governance', 'governance', `${title('Separate by design.<br><em>Clear boundaries protect the work.</em>')}
    ${p('Brand and data separation within Symphony Space. An operational framework, not a claim of legal separation.', 'standfirst')}
    <div class="governance-grid">${rows(constant('14-governance','RULES').filter((_,i) => i !== 3).map(r => [r.name,r.body]), 'compact')}
    <aside><strong class="stat giant">40%</strong><h3>Maximum studio capacity<br>for long-term anchors.</h3>${p('Capped to preserve room for individual, unrepeatable works. This is distinct from the financial model\'s brand and advertising allocation of 15% in 2029, rising to 28% in 2034.')}</aside></div>`);

  page('Traction', 'split traction', `<div class="copy">${title('The studio opens<br>in October.<br><em>First works: 2028.</em>')}
    ${rows([
      ['The Launch.', 'Studio launch announcement planned for October 5, 2026, New York, Advertising Week. Art Basel Miami VIP days follow in December. Objective: two founding works for the 2028 demonstrator.'],
      ['The Pipeline.', 'Conversations open across fragrance, apparel, spirits, and talent. Named houses under NDA to follow as available. These conversations are not signed contracts.'],
      ['The Foundation.', 'Brand operating system complete. Identity system production-ready. Name in trademark knockout across classes 35/38/41. Governance framework adopted.']], 'compact')}
    </div>${photo('media/02_highlights.webp')}`);

  page('Roadmap', 'dark photo-statement roadmap', `${img('media/16_roadmap.webp','backdrop')}<div class="scrim"></div>
    ${title('From an instrument<br><em>to a movement.</em>')}
    ${columns(constant('16-roadmap','PHASES').map(v => `<article><span class="phase">${e(v.k)}</span><h3>${e(v.name)}</h3>${p(v.body)}</article>`), 'bottom')}
    ${p('Grounded and hardware-true. Grow into something larger only once the work earns it.', 'statement-note')}`);

  page('Team & Partners', 'team', `${title("Symphony's team. Specialist partners.<br><em>One creative program.</em>")}
    <div class="team-grid">${constant('17-team','TEAM').map(t => `<article><h3>${e(t.name)}</h3>${p(t.role,'role')}${p(t.proof,'bio')}</article>`).join('')}</div>
    ${p("Advisory bench: national security, commercial space, civil space, and international markets, via Symphony's advisory board.",'note')}`);

  page('The Plan', 'plan', `${title('What <em>$1M</em> builds.')}${p("Program budget funded from Symphony Space's Seed. Not a separate Rhapsody raise.",'standfirst')}
    <div class="plan-grid"><div><h3>Use of funds</h3><div class="allocation"><i style="width:40%"></i><i style="width:25%"></i><i style="width:15%"></i><i style="width:12%"></i><i style="width:8%"></i></div>
    <table><tbody>${constant('18-ask','USE_OF_FUNDS').map(r => `<tr><th>${e(r[0])}</th><td class="amount">${e(r[1])}</td><td>${e(r[2])}</td></tr>`).join('')}</tbody></table></div>
    <aside><h3>Planned milestones</h3>${rows(constant('18-ask','MILESTONES').map(m => [m.date,m.body]), 'compact')}</aside></div>
    ${p('Target: $1M-$4M in total contracted value for two founding demonstrator works, not secured contracts or modeled 2028 revenue. Symphony models $1.075M in licensing and consulting in 2028; brand and advertising revenue starts in 2029. Rhapsody does not issue equity or raise independently. All program revenue books to Symphony.', 'note')}`);

  page('First Light', 'dark bookend close', `${img('media/00_hero_firstlight_poster.jpg','backdrop')}
    ${p('[ PROGRAM OVERVIEW / SEPTEMBER 2026 / CONFIDENTIAL ]', 'bookend-meta')}
    ${title('Improvised on Earth for a century.<br>Now it leaves the planet.')}
    ${img('brand/primary-glow-clear.svg','bookend-lockup')}
    <div class="bookend-contact">${p('A Symphony Space program.')}
    <a href="mailto:merry@symphony-space.com">Merry Walker / merry@symphony-space.com</a>
    ${p('New York / Orbit')}</div>`);
  return pages.join('\n');
}
