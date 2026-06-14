import { html } from "./html.js";

export function SharedThemes(themes, fragilePoints) {
  return html`
    <section class="portfolio-panel">
      <p class="section-kicker">สิ่งที่ห้องนี้มีร่วมกัน</p>
      <h2>ธีมที่โผล่ซ้ำในห้อง</h2>
      <div class="theme-chip-grid">
        ${themes.length
          ? themes.map((theme) => `<span>${theme.label} (${theme.count})</span>`).join("")
          : `<span>ห้องนี้ผสมหลายธีม ยังไม่มีแท็กซ้ำเด่น ๆ</span>`}
      </div>
      <div class="fragile-note">
        <p class="section-kicker">สิ่งที่ห้องนี้ควรศึกษาเพิ่ม</p>
        <p>${fragilePoints.length ? `ห้องนี้อาจอ่อนไหวกับ ${fragilePoints.join(", ")}` : "ห้องนี้มีจุดเปราะบางหลายแบบ ควรเปิดดูแฟ้มรายคนประกอบ"}</p>
      </div>
    </section>
  `;
}
