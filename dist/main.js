!(function (e) { const t = {}; function n(d) { if (t[d]) return t[d].exports; const o = t[d] = { i: d, l: !1, exports: {} }; return e[d].call(o.exports, o, o.exports, n), o.l = !0, o.exports; }n.m = e, n.c = t, n.d = function (e, t, d) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: d }); }, n.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const d = Object.create(null); if (n.r(d), Object.defineProperty(d, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const o in e)n.d(d, o, ((t) => e[t]).bind(null, o)); return d; }, n.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, 'a', t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = '', n(n.s = 0); }([function (e, t, n) {
  n.r(t); const d = (() => { const e = document.createElement('div'); const t = document.querySelector('#content'); const n = document.createElement('h4'); const d = document.createElement('div'); const o = document.createElement('span'); const l = document.createElement('a'); const c = document.createElement('a'); const a = document.createElement('a'); const i = document.createElement('button'); const r = document.createElement('div'); const s = document.createElement('h2'); const u = document.createElement('p'); const m = document.createElement('div'); const p = document.createElement('a'); const y = document.createElement('a'); e.classList.add('home-img'), n.classList.add('logo'), d.classList.add('nav-items'), l.classList.add('home-l'), c.classList.add('recipes-l'), a.classList.add('about-l'), i.classList.add('contact-btn'), r.classList.add('info'), s.classList.add('about-heading'), u.classList.add('about-desc'), m.classList.add('full-desc'), p.classList.add('read-more'), y.classList.add('show-less'); return { render: () => { n.textContent = 'Rico Meals', l.textContent = 'Home', c.textContent = 'Recipes', a.textContent = 'About Us', i.textContent = 'Conctact Us', s.textContent = 'DELICOUS FOODS', u.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', m.textContent = "Eius est soluta blanditiis velit doloremque corrupti aliquid ducimus consectetur ea nobis dolorem, id quibusdam praesentium consequuntur modi eligendi, sunt suscipit ullam iure nesciunt tempore. Itaque placeat, libero aliquam odio ex voluptas.'\n\nVel vitae, assumenda blanditiis nemo in vero reprehenderit asperiores distinctio exercitationem aliquid, quam velit explicabo neque. Sapiente provident sequi omnis itaque eaque voluptatum vel. Accusamus deserunt atque eligendi mollitia voluptates eum libero, ratione id labore. Magnam porro dolorem aspernatur, dolor?", p.textContent = 'Read More', y.textContent = 'Show less', p.addEventListener('click', () => { m.style.display = 'block', p.style.display = 'none', y.style.display = 'block'; }), y.addEventListener('click', () => { m.style.display = 'none', p.style.display = 'block', y.style.display = 'none'; }), r.appendChild(s), r.appendChild(u), r.appendChild(p), r.appendChild(m), r.appendChild(y), o.appendChild(l), o.appendChild(c), o.appendChild(a), d.appendChild(n), d.appendChild(o), d.appendChild(i), e.appendChild(d), e.appendChild(r), t.appendChild(e), t.style.margin = '0'; } }; })(); const o = { render: () => { document.querySelector('.menu-cont') !== null && (document.querySelector('.menu-cont').style.display = 'none'), document.querySelector('.contact-cont') !== null && (document.querySelector('.contact-cont').style.display = 'none'), document.querySelector('.info').style.display = 'block', document.querySelector('.about-heading').textContent = 'About Us'; } }; const l = (() => { const e = document.createElement('div'); const t = document.createElement('h2'); const n = document.createElement('div'); const d = document.createElement('div'); const o = document.createElement('img'); const l = document.createElement('p'); return { render: () => { document.querySelector('.info').style.display !== 'none' ? document.querySelector('.info').style.display = 'none' : document.querySelector('.contact-cont').style.display = 'none'; const c = document.querySelector('.home-img'); e.classList.add('menu-cont'), t.classList.add('menu-heading'), n.classList.add('menu-items'), d.classList.add('menu-item'), t.classList.add('menu-heading'), t.textContent = 'Our Menu', e.appendChild(t); let a = 0; if (e.childNodes.length === 1) for (;a < 4;) { if (a === 0)o.src = '../images/dishes_1.webp', l.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...', d.appendChild(o), d.appendChild(l), n.appendChild(d); else { const e = d.cloneNode(!0); n.appendChild(e); }a += 1; }e.appendChild(n), c.appendChild(e), e.style.display = 'block'; } }; })(); const c = (() => { const e = document.createElement('div'); const t = document.createElement('h2'); const n = document.createElement('div'); const d = document.createElement('div'); const o = document.createElement('p'); const l = document.createElement('p'); const c = document.createElement('p'); const a = document.createElement('textarea'); e.classList.add('contact-cont'), n.classList.add('contact-det'), d.classList.add('leave-msg'); return { render: () => { document.querySelector('.menu-cont') !== null && (document.querySelector('.menu-cont').style.display = 'none'), document.querySelector('.info') !== null && (document.querySelector('.info').style.display = 'none'), t.textContent = 'REACH OUT TO OUR TEAM', o.textContent = 'Manger: Kevin Dan', l.textContent = 'Email: dankevin@ricomeals.org', c.textContent = 'Tel: +254173673043', d.textContent = 'Leave us a message:', a.placeholder = 'Tell us anything', d.appendChild(a), n.appendChild(t), n.appendChild(o), n.appendChild(l), n.appendChild(c), e.appendChild(n), e.appendChild(d), document.querySelector('.home-img').appendChild(e), document.querySelector('.contact-cont').style.display = 'block'; } }; })(); d.render(), document.querySelector('.home-l').addEventListener('click', () => { location.reload(); }), document.querySelector('.about-l').addEventListener('click', () => { o.render(); }), document.querySelector('.recipes-l').addEventListener('click', () => { l.render(); }), document.querySelector('.contact-btn').addEventListener('click', () => { c.render(); }), document.querySelector('.logo').addEventListener('click', () => { location.reload(); });
}]));
