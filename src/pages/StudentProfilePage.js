import { pill } from "../components/Badges.js";
import { DisclaimerBox } from "../components/DisclaimerBox.js";
import { Header } from "../components/Header.js";
import { html } from "../components/html.js";
import { ReportCard } from "../components/ReportCard.js";
import { SimilarStudents } from "../components/SimilarStudents.js";
import { TraitPanel } from "../components/TraitPanel.js";
import { studentProfiles } from "../data/studentProfiles.js";
import { getStudentByTicker } from "../lib/students.js";

export function StudentProfilePage(ticker) {
  const profile = getStudentByTicker(ticker);

  if (!profile) {
    return html`
      ${Header()}
      <main class="not-found">
        <section class="empty-state">
          <p class="section-kicker">ไม่พบแฟ้ม</p>
          <h1>ยังไม่มีรหัสนักเรียนนี้ในทะเบียนโรงเรียน</h1>
          <p>ไม่พบแฟ้มของ ${ticker.toUpperCase()} ลองเปิดแฟ้มที่มีอยู่ตอนนี้: ${studentProfiles.map((item) => item.ticker).join(", ")}</p>
          <button data-link="/">กลับไปค้นหา</button>
        </section>
      </main>
    `;
  }

  return html`
    ${Header()}
    <main class="profile-page">
      <section class="student-id-hero">
        <div class="student-id-card">
          <div class="id-card-top">
            <span>บัตรนักเรียน</span>
            ${pill(profile.assetType === "ETF" ? "ETF" : "หุ้น", profile.assetType === "ETF" ? "green" : "gold")}
          </div>
          <h1>${profile.ticker}</h1>
          <p>${profile.companyName}</p>
          <div class="id-meta">
            <span>${profile.classroom}</span>
            <span>${riskLabel(profile.riskLevel)}</span>
          </div>
        </div>
        <div class="profile-intro">
          <div class="card-topline">
            ${pill(profile.archetype, "navy")}
            ${pill(profile.sector, "green")}
          </div>
          <h2>${profile.roleTitle}</h2>
          <p class="story">${profile.oneLineStory}</p>
          <p>${profile.personality}</p>
          <div class="tag-row">${profile.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
      </section>

      <section class="profile-grid">
        ${ReportCard(profile)}
        <section class="profile-panel temperament-panel">
          <p class="section-kicker">ระดับความซน</p>
          <h2>${profile.riskTemperament}</h2>
          <p>ระดับในแฟ้ม: <strong>${riskLabel(profile.riskLevel)}</strong> — ใช้เพื่อเข้าใจความผันผวนเชิงการเรียนรู้ ไม่ใช่คำตัดสินว่าดีหรือแย่กว่าใคร</p>
        </section>
        ${TraitPanel("วิชาที่ถนัด", profile.strengths, "strength-panel")}
        ${TraitPanel("จุดที่ต้องระวัง", profile.weaknesses, "weakness-panel")}
        <section class="profile-panel">
          <h2>เหมาะกับคนที่อยากเรียนรู้เรื่อง…</h2>
          <ul class="trait-list">
            ${profile.investorFit.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
        ${SimilarStudents(profile)}
      </section>
      ${DisclaimerBox(profile.disclaimerNote)}
    </main>
  `;
}

function riskLabel(level) {
  return {
    Low: "ซนเบา",
    Medium: "ซนกลาง",
    High: "ซนมาก",
    "Very High": "ซนเทอร์โบ"
  }[level] || level;
}
