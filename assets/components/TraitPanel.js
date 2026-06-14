import { html } from "./html.js";

export function TraitPanel(title, items, tone) {
  return html`
    <section class="profile-panel ${tone}">
      <h2>${title}</h2>
      <ul class="trait-list">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}
