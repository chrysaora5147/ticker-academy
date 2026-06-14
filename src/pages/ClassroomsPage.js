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
          <p class="section-kicker">เดินดูโรงเรียน</p>
          <h1>ห้องเรียนทั้งหมด</h1>
          <p class="browse-subtitle">เลือกเดินดูแต่ละห้องตามสายวิชา บทบาท และระดับความซน นี่คือแผนที่โรงเรียน ไม่ใช่หน้าคัดหุ้น</p>
        </div>
        <div class="browse-stats" aria-label="Academy stats">
          <strong>${getClassroomSummaries().length}</strong>
          <span>ห้องเรียน</span>
          <strong>${students.length}</strong>
          <span>แฟ้มนักเรียนที่ตรงเงื่อนไข</span>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <div>
            <p class="section-kicker">โถงทางเดิน</p>
            <h2>เลือกเดินเข้าห้อง</h2>
          </div>
          <button class="secondary-action" data-link="/classrooms">ล้างตัวกรอง</button>
        </div>
        <div class="browse-classroom-grid">
          ${getClassroomSummaries().map((summary) => ClassroomCard(summary, selected.classroom)).join("")}
        </div>
      </section>

      <section class="browse-controls" aria-label="Browse filters">
        <label>
          <span>กรองตามห้อง</span>
          <select id="classroom-filter">
            ${FilterOption("ทุกห้องเรียน", "", selected.classroom)}
            ${getClassrooms().map((classroom) => FilterOption(classroom, classroom, selected.classroom)).join("")}
          </select>
        </label>
        <label>
          <span>กรองตามบทบาท</span>
          <select id="archetype-filter">
            ${FilterOption("ทุกบทบาท", "", selected.archetype)}
            ${getArchetypes().map((archetype) => FilterOption(archetype, archetype, selected.archetype)).join("")}
          </select>
        </label>
        <label>
          <span>กรองตามระดับความซน</span>
          <select id="risk-filter">
            ${FilterOption("ทุกระดับความซน", "", selected.riskLevel)}
            ${getRiskLevels().map((riskLevel) => FilterOption(riskLevel, riskLevel, selected.riskLevel)).join("")}
          </select>
        </label>
        <button class="clear-filter-button" id="clear-filters" type="button">ล้างบัตรเดินห้อง</button>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <div>
            <p class="section-kicker">แฟ้มนักเรียน</p>
            <h2>พบนักเรียน ${students.length} คน</h2>
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
      <span>จำนวนนักเรียน ${summary.count} คน</span>
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
      <p class="section-kicker">โถงเงียบมาก</p>
      <h2>ยังไม่เจอนักเรียนในโถงนี้</h2>
      <p>ลองล้างตัวกรองสักอัน หรือเลือกห้องที่กว้างขึ้นให้เพื่อนมาเข้าแถวมากกว่าเดิม</p>
      <button data-link="/classrooms">ล้างตัวกรอง</button>
    </section>
  `;
}
