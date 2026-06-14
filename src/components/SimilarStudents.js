import { getStudentByTicker } from "../lib/students.js";
import { html } from "./html.js";

export function SimilarStudents(profile) {
  const tickers = [...new Set([...profile.classmates, ...profile.rivals])];
  const cards = tickers
    .map((ticker) => getStudentByTicker(ticker))
    .filter(Boolean)
    .slice(0, 6)
    .map((student) => html`
      <button class="mini-student" data-link="/students/${student.ticker}">
        <span>${student.ticker}</span>
        <small>${student.archetype}</small>
      </button>
    `)
    .join("");

  return html`
    <section class="profile-panel">
      <div class="panel-heading">
        <p class="section-kicker">เพื่อนร่วมชั้นและคู่ปรับ</p>
        <h2>คนที่ควรเปิดแฟ้มต่อ</h2>
      </div>
      <div class="relationship-grid">
        <div>
          <span>คู่ปรับประจำห้อง</span>
          <strong>${profile.rivals.join(", ")}</strong>
        </div>
        <div>
          <span>เพื่อนร่วมชั้น</span>
          <strong>${profile.classmates.join(", ")}</strong>
        </div>
      </div>
      <div class="mini-student-grid">${cards || `<p class="small-note">ยังไม่มีแฟ้มที่เชื่อมกันในชุดข้อมูลนี้</p>`}</div>
    </section>
  `;
}
