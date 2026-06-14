import { html } from "./html.js";
import { StudentCard } from "./StudentCard.js";

export function PortfolioRoster(students) {
  return html`
    <section class="section-block">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Class roster</p>
          <h2>${students.length} selected students</h2>
        </div>
      </div>
      <div class="student-grid portfolio-roster">
        ${students.map(StudentCard).join("")}
      </div>
    </section>
  `;
}
