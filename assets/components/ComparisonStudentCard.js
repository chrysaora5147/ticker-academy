import { pill } from "./Badges.js";
import { html } from "./html.js";

export function ComparisonStudentCard(profile, sideLabel) {
  return html`
    <article class="comparison-id-card">
      <div class="id-card-top">
        <span>${sideLabel}</span>
        ${pill(profile.assetType, profile.assetType === "ETF" ? "green" : "gold")}
      </div>
      <p class="ticker">${profile.ticker}</p>
      <h2>${profile.companyName}</h2>
      <div class="comparison-meta">
        <span>${profile.classroom}</span>
        <span>${profile.archetype}</span>
        <span>${profile.riskLevel} risk</span>
      </div>
      <p>${profile.riskTemperament}</p>
      <button class="secondary-action" data-link="/students/${profile.ticker}">Open full student file</button>
    </article>
  `;
}
