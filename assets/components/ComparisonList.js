import { html } from "./html.js";

export function ComparisonList(title, leftItems, rightItems, leftTicker, rightTicker) {
  return html`
    <section class="comparison-panel">
      <p class="section-kicker">${title}</p>
      <div class="comparison-two-col">
        <div>
          <h3>${leftTicker}</h3>
          <ul class="trait-list">
            ${leftItems.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h3>${rightTicker}</h3>
          <ul class="trait-list">
            ${rightItems.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}
