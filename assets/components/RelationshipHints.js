import { html } from "./html.js";

export function RelationshipHints(left, right, comparison) {
  return html`
    <section class="comparison-panel">
      <p class="section-kicker">เพื่อนร่วมชั้น คู่ปรับ และบทบาท</p>
      <div class="relationship-hints">
        ${Hint("ห้องเดียวกันไหม", comparison.sameClassroom ? `${left.classroom}` : "คนละโถง")}
        ${Hint("บทบาทคล้ายกันไหม", comparison.sameArchetype ? `${left.archetype}` : "บทบาทคนละแบบ")}
        ${Hint("ระดับความซน", comparison.sameRiskLevel ? riskLabel(left.riskLevel) : `${riskLabel(left.riskLevel)} vs ${riskLabel(right.riskLevel)}`)}
        ${Hint("แท็กร่วม", formatShared(comparison.sharedTags))}
        ${Hint("เพื่อนร่วมชั้นร่วมกัน", formatShared(comparison.sharedClassmates))}
        ${Hint("คู่ปรับร่วมกัน", formatShared(comparison.sharedRivals))}
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
  return items.length ? items.join(", ") : "ยังไม่เจอจุดทับกันชัด ๆ ในแฟ้มชุดนี้";
}

function riskLabel(level) {
  return {
    Low: "ซนเบา",
    Medium: "ซนกลาง",
    High: "ซนมาก",
    "Very High": "ซนเทอร์โบ"
  }[level] || level;
}
