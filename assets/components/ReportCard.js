import { html } from "./html.js";

export function ReportCard(profile) {
  const rows = [
    ["พลังการเติบโต", profile.reportCard.growthEnergy],
    ["ความนิ่ง", profile.reportCard.stability],
    ["ความได้เปรียบ", profile.reportCard.moatStrength],
    ["แรงกดดันจากความคาดหวัง", profile.reportCard.valuationPressure],
    ["ความเหวี่ยง", profile.reportCard.volatility],
    ["ความเป็นมิตรสายปันผล", profile.reportCard.dividendFriendliness]
  ];

  return html`
    <section class="profile-panel">
      <div class="panel-heading">
        <p class="section-kicker">สมุดพก</p>
        <h2>คะแนนนิสัยเชิงการเรียนรู้</h2>
      </div>
      <div class="report-grid">
        ${rows
          .map(([label, value]) => `<div class="report-row"><span>${label}</span><strong>${value}</strong></div>`)
          .join("")}
      </div>
      <p class="small-note">คะแนนนี้เป็นภาษาง่าย ๆ เพื่อการเรียนรู้ ไม่ใช่เรตติ้งการลงทุน</p>
    </section>
  `;
}
