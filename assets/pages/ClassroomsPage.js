import { DisclaimerBox } from "../components/DisclaimerBox.js";
import { Header } from "../components/Header.js";
import { html } from "../components/html.js";
import { StudentCard } from "../components/StudentCard.js";
import { filterStudents, getArchetypes, getClassroomSummaries, getClassrooms, getRiskLevels } from "../lib/students.js";

export function ClassroomsPage(filters = {}) {
  const selected = {
    classroom: filters.classroom || "",
    archetype: filters.archetype || "",
    riskLevel: filters.riskLevel || ""
  };
  const students = filterStudents(selected);

  return html`
    ${Header()}
    <main class="browse-page">
      <section class="browse-hero">
        <div>
          <p class="section-kicker">Browse the academy</p>
          <h1>Classrooms</h1>
          <p class="browse-subtitle">Walk the hallways by classroom, role, and risk temperament. This is a school map, not a financial screener.</p>
        </div>
        <div class="browse-stats" aria-label="Academy stats">
          <strong>${getClassroomSummaries().length}</strong>
          <span>classrooms</span>
          <strong>${students.length}</strong>
          <span>matching student files</span>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <div>
            <p class="section-kicker">Hallways</p>
            <h2>Pick a classroom</h2>
          </div>
          <button class="secondary-action" data-link="/classrooms">Clear filters</button>
        </div>
        <div class="browse-classroom-grid">
          ${getClassroomSummaries().map((summary) => ClassroomCard(summary, selected.classroom)).join("")}
        </div>
      </section>

      <section class="browse-controls" aria-label="Browse filters">
        <label>
          <span>Filter by classroom</span>
          <select id="classroom-filter">
            ${FilterOption("All classrooms", "", selected.classroom)}
            ${getClassrooms().map((classroom) => FilterOption(classroom, classroom, selected.classroom)).join("")}
          </select>
        </label>
        <label>
          <span>Filter by role</span>
          <select id="archetype-filter">
            ${FilterOption("All roles", "", selected.archetype)}
            ${getArchetypes().map((archetype) => FilterOption(archetype, archetype, selected.archetype)).join("")}
          </select>
        </label>
        <label>
          <span>Filter by risk level</span>
          <select id="risk-filter">
            ${FilterOption("All risk levels", "", selected.riskLevel)}
            ${getRiskLevels().map((riskLevel) => FilterOption(riskLevel, riskLevel, selected.riskLevel)).join("")}
          </select>
        </label>
        <button class="clear-filter-button" id="clear-filters" type="button">Reset hallway pass</button>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <div>
            <p class="section-kicker">Student files</p>
            <h2>${students.length} matching students</h2>
          </div>
        </div>
        ${students.length ? `<div class="student-grid browse-results">${students.map(StudentCard).join("")}</div>` : EmptyBrowseState()}
      </section>

      ${DisclaimerBox()}
    </main>
  `;
}

function ClassroomCard(summary, selectedClassroom) {
  const isActive = summary.classroom === selectedClassroom;

  return html`
    <button class="browse-classroom-card ${isActive ? "active" : ""}" data-link="/classrooms?classroom=${encodeURIComponent(summary.classroom)}">
      <span>${summary.count} ${summary.count === 1 ? "student" : "students"}</span>
      <strong>${summary.classroom}</strong>
      <p>${summary.description}</p>
      <small>${summary.tickers.join(", ")}</small>
    </button>
  `;
}

function FilterOption(label, value, selectedValue) {
  return `<option value="${value}" ${value === selectedValue ? "selected" : ""}>${label}</option>`;
}

function EmptyBrowseState() {
  return html`
    <section class="empty-state hallway-empty">
      <p class="section-kicker">Quiet hallway</p>
      <h2>No students found in this hallway yet.</h2>
      <p>Try clearing one filter or picking a broader classroom so more student files can report for attendance.</p>
      <button data-link="/classrooms">Clear filters</button>
    </section>
  `;
}
