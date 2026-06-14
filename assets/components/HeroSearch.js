import { html } from "./html.js";

const quickTickers = ["AMD", "NVDA", "AAPL", "MSFT", "GOOGL", "QQQ"];

export function HeroSearch() {
  return html`
    <section class="hero">
      <div class="hero-copy">
        <p class="section-kicker">โรงเรียนหุ้นมีชีวิต</p>
        <h1>Ticker Academy</h1>
        <p class="thai-tagline">ใส่ ticker แล้วเปิดแฟ้มนักเรียนหุ้น</p>
        <p class="hero-subtitle">ลองรู้จักหุ้นและ ETF ผ่านบัตรนักเรียน สมุดพก ห้องเรียน การเทียบเพื่อนร่วมชั้น และการจัดห้องของเราเอง</p>
        <div class="hero-actions" aria-label="เริ่มสำรวจโรงเรียน">
          <button class="clear-filter-button" data-focus-search="true" type="button">เปิดแฟ้มนักเรียน</button>
          <button class="secondary-action" data-link="/classrooms" type="button">เดินดูห้องเรียน</button>
          <button class="secondary-action" data-link="/compare?left=AMD&right=NVDA" type="button">เทียบสมุดพก</button>
          <button class="secondary-action" data-link="/portfolio?tickers=AAPL,MSFT,GOOGL,AMD,QQQ" type="button">จัดห้องของเรา</button>
        </div>
      </div>
      <form class="search-panel" id="search-form">
        <label for="ticker-search">ค้นหารหัสนักเรียน</label>
        <div class="search-row">
          <input id="ticker-search" name="query" type="search" placeholder="เช่น AMD, AAPL, NVDA" autocomplete="off" />
          <button type="submit">เปิดแฟ้ม</button>
        </div>
        <div class="quick-tickers" aria-label="Popular tickers">
          ${quickTickers.map((ticker) => `<button type="button" data-link="/students/${ticker}">${ticker}</button>`).join("")}
        </div>
        <p class="search-hint">ทุกแฟ้มเป็นคาแรกเตอร์เพื่อการเรียนรู้ ไม่ใช่สัญญาณซื้อขาย</p>
        <div class="search-results" id="search-results" aria-live="polite"></div>
      </form>
    </section>
  `;
}
