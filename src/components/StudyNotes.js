import { html } from "./html.js";

export function StudyNotes(notes) {
  return html`
    <section class="portfolio-panel">
      <p class="section-kicker">สมุดจดท้ายคาบ</p>
      <h2>คำถามสำหรับคาบถัดไป</h2>
      <ul class="trait-list">
        ${notes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </section>
  `;
}
