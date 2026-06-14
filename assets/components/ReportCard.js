import { html } from "./html.js";

export function ReportCard(profile) {
  const rows = [
    ["Growth Energy", profile.reportCard.growthEnergy],
    ["Stability", profile.reportCard.stability],
    ["Moat Strength", profile.reportCard.moatStrength],
    ["Valuation Pressure", profile.reportCard.valuationPressure],
    ["Volatility", profile.reportCard.volatility],
    ["Dividend Friendliness", profile.reportCard.dividendFriendliness]
  ];

  return html`
    <section class="profile-panel">
      <div class="panel-heading">
        <p class="section-kicker">Report card</p>
        <h2>Personality-style scores</h2>
      </div>
      <div class="report-grid">
        ${rows
          .map(([label, value]) => `<div class="report-row"><span>${label}</span><strong>${value}</strong></div>`)
          .join("")}
      </div>
      <p class="small-note">Scores are educational simplifications, not investment ratings.</p>
    </section>
  `;
}
