import { html } from "./html.js";

export function RelationshipHints(left, right, comparison) {
  return html`
    <section class="comparison-panel">
      <p class="section-kicker">Rivals, classmates, and roles</p>
      <div class="relationship-hints">
        ${Hint("Same classroom", comparison.sameClassroom ? `${left.classroom}` : "Different hallways")}
        ${Hint("Same role", comparison.sameArchetype ? `${left.archetype}` : "Different student roles")}
        ${Hint("Same risk level", comparison.sameRiskLevel ? `${left.riskLevel}` : `${left.riskLevel} vs ${right.riskLevel}`)}
        ${Hint("Shared tags", formatShared(comparison.sharedTags))}
        ${Hint("Shared classmates", formatShared(comparison.sharedClassmates))}
        ${Hint("Shared rivals", formatShared(comparison.sharedRivals))}
      </div>
    </section>
  `;
}

function Hint(label, value) {
  return html`
    <div>
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function formatShared(items) {
  return items.length ? items.join(", ") : "No direct overlap in the current records";
}
