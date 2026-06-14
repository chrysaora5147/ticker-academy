import { html } from "./html.js";

export function PortfolioInput(rawTickers) {
  return html`
    <section class="portfolio-input-panel" aria-label="Build your classroom">
      <label for="portfolio-tickers">
        <span>Student IDs</span>
        <input id="portfolio-tickers" type="text" value="${rawTickers}" placeholder="AAPL, AMD, GOOGL, MSFT, QQQ" autocomplete="off" />
      </label>
      <button class="clear-filter-button" id="build-portfolio" type="button">Build classroom</button>
    </section>
  `;
}
