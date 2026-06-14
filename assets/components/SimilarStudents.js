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
        <p class="section-kicker">Friends, rivals, classmates</p>
        <h2>Similar students</h2>
      </div>
      <div class="relationship-grid">
        <div>
          <span>Rivals</span>
          <strong>${profile.rivals.join(", ")}</strong>
        </div>
        <div>
          <span>Classmates</span>
          <strong>${profile.classmates.join(", ")}</strong>
        </div>
      </div>
      <div class="mini-student-grid">${cards || `<p class="small-note">No matching local profiles yet.</p>`}</div>
    </section>
  `;
}
