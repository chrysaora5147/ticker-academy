import { pill } from "./Badges.js";
import { html } from "./html.js";

export function StudentCard(profile) {
  return html`
    <article class="student-card">
      <div class="card-topline">
        ${pill(profile.classroom, "navy")}
        ${pill(profile.assetType, profile.assetType === "ETF" ? "green" : "gold")}
      </div>
      <div class="student-card-main">
        <div>
          <p class="ticker">${profile.ticker}</p>
          <h3>${profile.companyName}</h3>
        </div>
        <span class="risk-chip">${profile.riskLevel}</span>
      </div>
      <p class="role">${profile.roleTitle}</p>
      <p>${profile.shortDescription}</p>
      <button class="card-link" data-link="/students/${profile.ticker}">Open student file</button>
    </article>
  `;
}
