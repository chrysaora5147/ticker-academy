import { html } from "./html.js";

export function Header() {
  const currentPath = window.location.pathname;

  return html`
    <header class="site-header">
      <button class="brand-lockup" aria-label="กลับหน้าแรก Ticker Academy" data-link="/">
        <span class="brand-mark">TA</span>
        <span>
          <strong>Ticker Academy</strong>
          <small>โรงเรียนหุ้นมีชีวิต</small>
        </span>
      </button>
      <nav class="top-nav" aria-label="เมนูหลัก">
        ${NavButton("หน้าแรก", "/", currentPath)}
        ${NavButton("ห้องเรียน", "/classrooms", currentPath)}
        ${NavButton("เทียบสมุดพก", "/compare", currentPath)}
        ${NavButton("จัดห้องของเรา", "/portfolio", currentPath)}
        <a href="#disclaimer">คำเตือน</a>
      </nav>
    </header>
  `;
}

function NavButton(label, path, currentPath) {
  const isActive = path === "/" ? currentPath === "/" : currentPath.startsWith(path);
  return `<button class="${isActive ? "active" : ""}" data-link="${path}" aria-current="${isActive ? "page" : "false"}">${label}</button>`;
}
