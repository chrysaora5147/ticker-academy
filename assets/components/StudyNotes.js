import { html } from "./html.js";

export function StudyNotes(notes) {
  return html`
    <section class="portfolio-panel">
      <p class="section-kicker">Study notes</p>
      <h2>Questions for the next lesson</h2>
      <ul class="trait-list">
        ${notes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </section>
  `;
}
