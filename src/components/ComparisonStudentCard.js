import { pill } from "./Badges.js";
import { html } from "./html.js";

export function ComparisonStudentCard(profile, sideLabel) {
  return html`
    <article class="comparison-id-card">
      <div class="id-card-top">
        <span>${sideLabel}</span>
        ${pill(profile.assetType === "ETF" ? "ETF" : "หุ้น", profile.assetType === "ETF" ? "green" : "gold")}
      </div>
      <p class="ticker">${profile.ticker}</p>
      <h2>${profile.companyName}</h2>
      <div class="comparison-meta">
        <span>${profile.classroom}</span>
        <span>${profile.archetype}</span>
        <span>${riskLabel(profile.riskLevel)}</span>
      </div>
      <p>${profile.riskTemperament}</p>
      <button class="secondary-action" data-link="/students/${profile.ticker}">เปิดแฟ้มเต็ม</button>
    </article>
  `;
}

function riskLabel(level) {
  return {
    Low: "ซนเบา",
    Medium: "ซนกลาง",
    High: "ซนมาก",
    "Very High": "ซนเทอร์โบ"
  }[level] || level;
}
