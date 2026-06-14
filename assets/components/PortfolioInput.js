import { html } from "./html.js";

export function PortfolioInput(rawTickers) {
  return html`
    <section class="portfolio-input-panel" aria-label="จัดห้องเรียนของเรา">
      <label for="portfolio-tickers">
        <span>ใส่รหัสนักเรียน 3-5 คน</span>
        <input id="portfolio-tickers" type="text" value="${rawTickers}" placeholder="AAPL, AMD, GOOGL, MSFT, QQQ" autocomplete="off" />
      </label>
      <button class="clear-filter-button" id="build-portfolio" type="button">จัดห้อง</button>
    </section>
  `;
}
