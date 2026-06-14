import { html } from "./html.js";

export function CompareSelector(students, selectedLeft, selectedRight) {
  return html`
    <section class="compare-selector" aria-label="Choose students to compare">
      <label>
        <span>First student</span>
        <select id="compare-left">
          ${students.map((student) => CompareOption(student, selectedLeft)).join("")}
        </select>
      </label>
      <label>
        <span>Second student</span>
        <select id="compare-right">
          ${students.map((student) => CompareOption(student, selectedRight)).join("")}
        </select>
      </label>
      <button class="clear-filter-button" id="swap-compare" type="button">Swap desks</button>
    </section>
  `;
}

function CompareOption(student, selectedTicker) {
  return `<option value="${student.ticker}" ${student.ticker === selectedTicker ? "selected" : ""}>${student.ticker} - ${student.companyName}</option>`;
}
