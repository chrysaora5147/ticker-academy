import { html } from "./html.js";

const quickTickers = ["AMD", "NVDA", "AAPL", "MSFT", "GOOGL", "QQQ"];

export function HeroSearch() {
  return html`
    <section class="hero">
      <div class="hero-copy">
        <p class="section-kicker">Modern market classroom</p>
        <h1>Ticker Academy</h1>
        <p class="thai-tagline">ใส่ ticker แล้วเปิดแฟ้มนักเรียนหุ้น</p>
        <p class="hero-subtitle">Explore stocks and ETFs as school-themed student profiles, report cards, classrooms, comparisons, and portfolio classrooms.</p>
        <div class="hero-actions" aria-label="Start exploring">
          <button class="clear-filter-button" data-focus-search="true" type="button">Open a student file</button>
          <button class="secondary-action" data-link="/classrooms" type="button">Browse classrooms</button>
          <button class="secondary-action" data-link="/compare?left=AMD&right=NVDA" type="button">Compare two students</button>
          <button class="secondary-action" data-link="/portfolio?tickers=AAPL,MSFT,GOOGL,AMD,QQQ" type="button">Build your classroom</button>
        </div>
      </div>
      <form class="search-panel" id="search-form">
        <label for="ticker-search">Open a student file</label>
        <div class="search-row">
          <input id="ticker-search" name="query" type="search" placeholder="Search student ID, e.g. AMD, AAPL, NVDA" autocomplete="off" />
          <button type="submit">Search</button>
        </div>
        <div class="quick-tickers" aria-label="Popular tickers">
          ${quickTickers.map((ticker) => `<button type="button" data-link="/students/${ticker}">${ticker}</button>`).join("")}
        </div>
        <p class="search-hint">Every student file is a playful learning profile, not a market call.</p>
        <div class="search-results" id="search-results" aria-live="polite"></div>
      </form>
    </section>
  `;
}
