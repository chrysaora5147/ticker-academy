import { html } from "./html.js";
import { StudentCard } from "./StudentCard.js";

export function PortfolioRoster(students) {
  return html`
    <section class="section-block">
      <div class="section-heading">
        <div>
          <p class="section-kicker">รายชื่อนักเรียนในห้อง</p>
          <h2>เลือกนักเรียน ${students.length} คน</h2>
        </div>
      </div>
      <div class="student-grid portfolio-roster">
        ${students.map(StudentCard).join("")}
      </div>
    </section>
  `;
}
