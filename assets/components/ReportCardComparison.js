import { html } from "./html.js";

const reportRows = [
  ["พลังการเติบโต", "growthEnergy"],
  ["ความนิ่ง", "stability"],
  ["ความได้เปรียบ", "moatStrength"],
  ["แรงกดดันจากความคาดหวัง", "valuationPressure"],
  ["ความเหวี่ยง", "volatility"],
  ["ความเป็นมิตรสายปันผล", "dividendFriendliness"]
];

export function ReportCardComparison(left, right) {
  return html`
    <section class="comparison-panel">
      <p class="section-kicker">สมุดพกวางข้างกัน</p>
      <div class="comparison-report">
        <div class="comparison-report-head">
          <span>หัวข้อ</span>
          <strong>${left.ticker}</strong>
          <strong>${right.ticker}</strong>
        </div>
        ${reportRows
          .map(([label, key]) => {
            return html`
              <div class="comparison-report-row">
                <span>${label}</span>
                <strong>${left.reportCard[key]}</strong>
                <strong>${right.reportCard[key]}</strong>
              </div>
            `;
          })
          .join("")}
      </div>
      <p class="small-note">นี่คือคะแนนคาแรกเตอร์เพื่อการเรียนรู้ ไม่ใช่เรตติ้งการลงทุน</p>
    </section>
  `;
}
