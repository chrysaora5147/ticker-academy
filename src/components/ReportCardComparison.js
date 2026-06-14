import { html } from "./html.js";

const reportRows = [
  ["Growth Energy", "growthEnergy"],
  ["Stability", "stability"],
  ["Moat Strength", "moatStrength"],
  ["Valuation Pressure", "valuationPressure"],
  ["Volatility", "volatility"],
  ["Dividend Friendliness", "dividendFriendliness"]
];

export function ReportCardComparison(left, right) {
  return html`
    <section class="comparison-panel">
      <p class="section-kicker">Side-by-side report cards</p>
      <div class="comparison-report">
        <div class="comparison-report-head">
          <span>Trait</span>
          <strong>${left.ticker}</strong>
          <strong>${right.ticker}</strong>
        </div>
        ${reportRows
          .map(([label, key]) => {
            return html`
              <div class="comparison-report-row">
                <span>${label}</span>
                <strong>${left.reportCard[key]}</strong>
                <strong>${right.reportCard[key]}</strong>
              </div>
            `;
          })
          .join("")}
      </div>
      <p class="small-note">These are personality-style teaching scores, not investment ratings.</p>
    </section>
  `;
}
