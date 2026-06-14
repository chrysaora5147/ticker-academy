import { CompareSelector } from "../components/CompareSelector.js";
import { ComparisonList } from "../components/ComparisonList.js";
import { ComparisonStudentCard } from "../components/ComparisonStudentCard.js";
import { DisclaimerBox } from "../components/DisclaimerBox.js";
import { Header } from "../components/Header.js";
import { html } from "../components/html.js";
import { RelationshipHints } from "../components/RelationshipHints.js";
import { ReportCardComparison } from "../components/ReportCardComparison.js";
import {
  compareStudents,
  getAllStudents,
  getRecommendedComparisons,
  getStudentByTicker,
  normalizeTicker
} from "../lib/students.js";

const defaultPair = { left: "AMD", right: "NVDA" };

export function ComparePage(params = {}) {
  const requestedLeft = normalizeTicker(params.left || defaultPair.left);
  const requestedRight = normalizeTicker(params.right || defaultPair.right);
  const requestedLeftProfile = getStudentByTicker(requestedLeft);
  const requestedRightProfile = getStudentByTicker(requestedRight);
  const hasInvalidSelection = !requestedLeftProfile || !requestedRightProfile;
  const left = hasInvalidSelection ? getStudentByTicker(defaultPair.left) : requestedLeftProfile;
  const right = hasInvalidSelection ? getStudentByTicker(defaultPair.right) : requestedRightProfile;
  const comparison = compareStudents(left, right);

  return html`
    ${Header()}
    <main class="compare-page">
      <section class="compare-hero">
        <div>
          <p class="section-kicker">Compare student files</p>
          <h1>Compare</h1>
          <p class="browse-subtitle">Put two students side by side to study classroom energy, role, report-card traits, risk temperament, and learning fit. No rankings, no predictions.</p>
        </div>
        <div class="compare-hero-card">
          <strong>${left.ticker} vs ${right.ticker}</strong>
          <span>Side-by-side report cards</span>
          <button class="secondary-action" data-copy-current-url="true" data-copy-status="#compare-copy-status" type="button">Copy compare link</button>
          <small id="compare-copy-status">Share this exact student pairing.</small>
        </div>
      </section>

      ${hasInvalidSelection ? InvalidTickerNotice(requestedLeft, requestedRight) : ""}
      ${CompareSelector(getAllStudents(), left.ticker, right.ticker)}
      ${PopularComparisons()}

      <section class="comparison-id-grid">
        ${ComparisonStudentCard(left, "Left desk")}
        ${ComparisonStudentCard(right, "Right desk")}
      </section>

      <section class="comparison-panel comparison-summary">
        <p class="section-kicker">Different classroom energy</p>
        <h2>${left.ticker} vs ${right.ticker}</h2>
        <p>${comparison.summary}</p>
      </section>

      <section class="comparison-panel">
        <p class="section-kicker">One-line stories</p>
        <div class="comparison-two-col">
          <div>
            <h3>${left.ticker}</h3>
            <p>${left.oneLineStory}</p>
          </div>
          <div>
            <h3>${right.ticker}</h3>
            <p>${right.oneLineStory}</p>
          </div>
        </div>
      </section>

      ${ReportCardComparison(left, right)}
      ${ComparisonList("Strengths comparison", left.strengths, right.strengths, left.ticker, right.ticker)}
      ${ComparisonList("Weaknesses / fragile points", left.weaknesses, right.weaknesses, left.ticker, right.ticker)}
      ${ComparisonList("Learning fit comparison", left.investorFit, right.investorFit, left.ticker, right.ticker)}
      ${RelationshipHints(left, right, comparison)}
      ${DisclaimerBox("Ticker Academy comparisons are educational simplifications. They are not investment advice, price forecasts, rankings, or trade-action ratings.")}
    </main>
  `;
}

function InvalidTickerNotice(left, right) {
  return html`
    <section class="empty-state compare-warning">
      <p class="section-kicker">Student file missing</p>
      <h2>That student ID is not in this academy roster yet.</h2>
      <p>Requested pair: ${left || "blank"} vs ${right || "blank"}. Showing AMD vs NVDA so the comparison desk still has a useful example.</p>
    </section>
  `;
}

function PopularComparisons() {
  return html`
    <section class="popular-comparisons" aria-label="Popular comparisons">
      <p class="section-kicker">Popular comparisons</p>
      <div>
        ${getRecommendedComparisons()
          .map((pair) => {
            return `<button data-link="/compare?left=${pair.left}&right=${pair.right}"><strong>${pair.left} vs ${pair.right}</strong><span>${pair.label}</span></button>`;
          })
          .join("")}
      </div>
    </section>
  `;
}
