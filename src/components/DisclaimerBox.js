import { html } from "./html.js";

const defaultDisclaimer =
  "Ticker Academy is for education and entertainment only. It does not provide investment advice, financial planning, market forecasts, trade-action ratings, or return projections.";

export function DisclaimerBox(note = defaultDisclaimer) {
  return html`
    <section class="disclaimer-box" id="disclaimer">
      <div>
        <p class="section-kicker">Educational disclaimer</p>
        <h2>No recommendations, no predictions.</h2>
      </div>
      <p>${note} All company and ETF profiles are simplified teaching metaphors. Do your own research and consider speaking with a qualified professional before making financial decisions.</p>
    </section>
  `;
}
