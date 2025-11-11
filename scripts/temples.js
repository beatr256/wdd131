// temples.js — keep JavaScript out of HTML


document.addEventListener('DOMContentLoaded', () => {
// Footer dynamic year and last modified
const yearEl = document.getElementById('current-year');
const lastModEl = document.getElementById('last-modified');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Use document.lastModified but fall back if empty
const last = document.lastModified || (new Date(document.documentElement.getAttribute('data-last-modified') || Date.now())).toLocaleString();
if (lastModEl) lastModEl.textContent = last;


// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('site-nav');
if (hamburger && nav) {
hamburger.addEventListener('click', () => {
const isOpen = nav.classList.toggle('show');
hamburger.setAttribute('aria-expanded', String(isOpen));


// swap icon text (you could use SVG icons instead)
const icon = hamburger.querySelector('.hamburger-icon');
if (icon) icon.textContent = isOpen ? '✕' : '☰';


// focus management: move focus to first nav link when opened
if (isOpen) {
const firstLink = nav.querySelector('a');
if (firstLink) firstLink.focus();
}
});


// Close nav if user resizes to a wider viewport (keeps state consistent)
window.addEventListener('resize', () => {
if (window.innerWidth >= 700 && nav.classList.contains('show')) {
nav.classList.remove('show');
hamburger.setAttribute('aria-expanded', 'false');
const icon = hamburger.querySelector('.hamburger-icon');
if (icon) icon.textContent = '☰';
}
});
}


});