import { getClassrooms, getStudentsByClassroom } from "../lib/students.js";
import { html } from "./html.js";

export function ClassroomPreview() {
  return html`
    <section class="section-block">
      <div class="section-heading">
        <div>
          <p class="section-kicker">แผนที่โรงเรียน</p>
          <h2>เดินดูห้องเรียนก่อนเปิดแฟ้ม</h2>
        </div>
        <button class="secondary-action" data-link="/classrooms">ดูห้องเรียนทั้งหมด</button>
      </div>
      <div class="classroom-grid">
        ${getClassrooms()
          .slice(0, 8)
          .map((classroom) => {
            const students = getStudentsByClassroom(classroom);
            return html`
              <article class="classroom-tile" data-link="/classrooms?classroom=${encodeURIComponent(classroom)}">
                <span>${classroom}</span>
                <strong>${students.map((student) => student.ticker).join(", ")}</strong>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}
