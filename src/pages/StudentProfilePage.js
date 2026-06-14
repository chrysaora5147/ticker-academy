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
          <p class="section-kicker">Student file missing</p>
          <h1>That student ID is not in this academy roster yet.</h1>
          <p>No profile for ${ticker.toUpperCase()}. Try one of the current academy records: ${studentProfiles.map((item) => item.ticker).join(", ")}.</p>
          <button data-link="/">Back to search</button>
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
            <span>Student ID</span>
            ${pill(profile.assetType, profile.assetType === "ETF" ? "green" : "gold")}
          </div>
          <h1>${profile.ticker}</h1>
          <p>${profile.companyName}</p>
          <div class="id-meta">
            <span>${profile.classroom}</span>
            <span>${profile.riskLevel} risk</span>
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
          <p class="section-kicker">Risk temperament</p>
          <h2>${profile.riskTemperament}</h2>
          <p>Risk level: <strong>${profile.riskLevel}</strong></p>
        </section>
        ${TraitPanel("Strengths", profile.strengths, "strength-panel")}
        ${TraitPanel("Weaknesses / fragile points", profile.weaknesses, "weakness-panel")}
        <section class="profile-panel">
          <h2>Investor fit, as a learning lens</h2>
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
