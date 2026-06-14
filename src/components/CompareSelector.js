import { html } from "./html.js";

export function CompareSelector(students, selectedLeft, selectedRight) {
  return html`
    <section class="compare-selector" aria-label="เลือกนักเรียนเพื่อเทียบสมุดพก">
      <label>
        <span>เลือกนักเรียนคนที่ 1</span>
        <select id="compare-left">
          ${students.map((student) => CompareOption(student, selectedLeft)).join("")}
        </select>
      </label>
      <label>
        <span>เลือกนักเรียนคนที่ 2</span>
        <select id="compare-right">
          ${students.map((student) => CompareOption(student, selectedRight)).join("")}
        </select>
      </label>
      <button class="clear-filter-button" id="swap-compare" type="button">สลับฝั่ง</button>
    </section>
  `;
}

function CompareOption(student, selectedTicker) {
  return `<option value="${student.ticker}" ${student.ticker === selectedTicker ? "selected" : ""}>${student.ticker} - ${student.companyName}</option>`;
}
