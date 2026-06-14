import { html } from "./html.js";

export function Header() {
  const currentPath = window.location.pathname;

  return html`
    <header class="site-header">
      <button class="brand-lockup" aria-label="Go to Ticker Academy home" data-link="/">
        <span class="brand-mark">TA</span>
        <span>
          <strong>Ticker Academy</strong>
          <small>Student records for the market</small>
        </span>
      </button>
      <nav class="top-nav" aria-label="Primary navigation">
        ${NavButton("Home", "/", currentPath)}
        ${NavButton("Classrooms", "/classrooms", currentPath)}
        ${NavButton("Compare", "/compare", currentPath)}
        ${NavButton("Portfolio", "/portfolio", currentPath)}
        <a href="#disclaimer">Disclaimer</a>
      </nav>
    </header>
  `;
}

function NavButton(label, path, currentPath) {
  const isActive = path === "/" ? currentPath === "/" : currentPath.startsWith(path);
  return `<button class="${isActive ? "active" : ""}" data-link="${path}" aria-current="${isActive ? "page" : "false"}">${label}</button>`;
}
