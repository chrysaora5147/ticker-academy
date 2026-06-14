import { html } from "./html.js";

export function MixPanel(title, subtitle, mix) {
  return html`
    <section class="portfolio-panel">
      <p class="section-kicker">${title}</p>
      <h2>${subtitle}</h2>
      <div class="mix-list">
        ${mix.map((item) => `<div><span>${item.label}</span><strong>${item.count}</strong></div>`).join("")}
      </div>
    </section>
  `;
}
