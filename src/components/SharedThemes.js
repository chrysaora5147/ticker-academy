import { html } from "./html.js";

export function SharedThemes(themes, fragilePoints) {
  return html`
    <section class="portfolio-panel">
      <p class="section-kicker">Shared strengths</p>
      <h2>Common classroom themes</h2>
      <div class="theme-chip-grid">
        ${themes.length
          ? themes.map((theme) => `<span>${theme.label} (${theme.count})</span>`).join("")
          : `<span>Mixed themes with no repeated tag yet</span>`}
      </div>
      <div class="fragile-note">
        <p class="section-kicker">Fragile points</p>
        <p>${fragilePoints.length ? `This class may be sensitive to ${fragilePoints.join(", ")}.` : "This class has varied fragile points, so study each student file individually."}</p>
      </div>
    </section>
  `;
}
