import { ClassroomPreview } from "../components/ClassroomPreview.js";
import { DisclaimerBox } from "../components/DisclaimerBox.js";
import { Header } from "../components/Header.js";
import { HeroSearch } from "../components/HeroSearch.js";
import { html } from "../components/html.js";
import { StudentCard } from "../components/StudentCard.js";
import { getFeaturedStudents } from "../lib/students.js";

export function HomePage() {
  return html`
    ${Header()}
    <main>
      ${HeroSearch()}
      <section class="example-links">
        <div>
          <p class="section-kicker">Shareable demo links</p>
          <h2>Good first clicks</h2>
        </div>
        <div class="example-link-grid">
          <button data-link="/students/AMD"><strong>AMD file</strong><span>Open a challenger student profile</span></button>
          <button data-link="/students/NVDA"><strong>NVDA file</strong><span>See an AI lab star report card</span></button>
          <button data-link="/students/AAPL"><strong>AAPL file</strong><span>Study a consumer tech ecosystem</span></button>
          <button data-link="/compare?left=SPY&right=QQQ"><strong>SPY vs QQQ</strong><span>Compare two ETF cohorts</span></button>
          <button data-link="/compare?left=AAPL&right=MSFT"><strong>AAPL vs MSFT</strong><span>Brand hall vs software lab</span></button>
          <button data-link="/portfolio?tickers=SPY,QQQ,SCHD"><strong>Broad + Dividend</strong><span>Build a calmer classroom example</span></button>
        </div>
      </section>
      <section class="section-block">
        <div class="section-heading">
          <p class="section-kicker">Featured files</p>
          <h2>Popular students to open first</h2>
        </div>
        <div class="student-grid">
          ${getFeaturedStudents().map(StudentCard).join("")}
        </div>
      </section>
      <section class="compare-callout">
        <div>
          <p class="section-kicker">Classroom tools</p>
          <h2>Compare or build a class</h2>
          <p>Study two student files side by side, or enter 3 to 5 tickers and see the group personality as a classroom.</p>
        </div>
        <div class="home-tool-actions">
          <button class="clear-filter-button" data-link="/compare?left=AMD&right=NVDA">Compare AMD vs NVDA</button>
          <button class="secondary-action" data-link="/portfolio?tickers=AAPL,MSFT,GOOGL,AMD,QQQ">Build Tech Honors Room</button>
        </div>
      </section>
      ${ClassroomPreview()}
      ${DisclaimerBox()}
    </main>
  `;
}
