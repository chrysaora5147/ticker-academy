import { DisclaimerBox } from "../components/DisclaimerBox.js";
import { Header } from "../components/Header.js";
import { html } from "../components/html.js";
import { MixPanel } from "../components/MixPanel.js";
import { PortfolioInput } from "../components/PortfolioInput.js";
import { PortfolioRoster } from "../components/PortfolioRoster.js";
import { SharedThemes } from "../components/SharedThemes.js";
import { StudyNotes } from "../components/StudyNotes.js";
import {
  buildPortfolioClassroomSummary,
  describeRiskMix,
  getArchetypeMix,
  getClassroomMix,
  getCommonThemes,
  getFragilePointThemes,
  getInvalidTickers,
  getRecommendedPortfolios,
  getRiskMix,
  getStudentsByTickers,
  getStudyNotes,
  parseTickerList
} from "../lib/students.js";

const defaultTickers = "AAPL, MSFT, GOOGL, AMD, QQQ";

export function PortfolioPage(params = {}) {
  const rawTickers = params.tickers || defaultTickers;
  const parsed = parseTickerList(rawTickers);
  const cappedTickers = parsed.tickers.slice(0, 5);
  const invalidTickers = getInvalidTickers(cappedTickers);
  const students = getStudentsByTickers(cappedTickers);
  const isTooSmall = students.length > 0 && students.length < 3;
  const isTooLarge = parsed.tickers.length > 5;
  const canAnalyze = students.length >= 3;
  const classroomMix = getClassroomMix(students);
  const archetypeMix = getArchetypeMix(students);
  const riskMix = getRiskMix(students);
  const commonThemes = getCommonThemes(students);
  const fragilePoints = getFragilePointThemes(students);

  return html`
    ${Header()}
    <main class="portfolio-page">
      <section class="portfolio-hero">
        <div>
          <p class="section-kicker">Build your classroom</p>
          <h1>Portfolio Classroom</h1>
          <p class="browse-subtitle">Enter 3 to 5 student IDs and study the group personality. This is a learning lens for classroom mix, shared themes, and risk temperament.</p>
        </div>
        <div class="portfolio-hero-card">
          <strong>${students.length}</strong>
          <span>valid students in this classroom</span>
          <button class="secondary-action" data-copy-current-url="true" data-copy-status="#portfolio-copy-status" type="button">Copy classroom link</button>
          <small id="portfolio-copy-status">Share this exact classroom roster.</small>
        </div>
      </section>

      ${PortfolioInput(rawTickers)}
      ${PortfolioMessages({ duplicates: parsed.duplicates, invalidTickers, isTooSmall, isTooLarge })}
      ${ExamplePortfolios()}

      ${canAnalyze ? PortfolioAnalysis(students, classroomMix, archetypeMix, riskMix, commonThemes, fragilePoints) : EmptyPortfolioState()}

      ${DisclaimerBox("Portfolio Classroom Builder is an educational simplification. It is not investment advice, not an allocation model, not a prediction, and not a trade-action recommendation.")}
    </main>
  `;
}

function PortfolioAnalysis(students, classroomMix, archetypeMix, riskMix, commonThemes, fragilePoints) {
  return html`
    <section class="portfolio-summary portfolio-panel">
      <p class="section-kicker">Class personality</p>
      <h2>${describeRiskMix(riskMix)} classroom energy</h2>
      <p>${buildPortfolioClassroomSummary(students)}</p>
    </section>
    ${PortfolioRoster(students)}
    <section class="portfolio-analysis-grid">
      ${MixPanel("Classroom mix", "Hallway count", classroomMix)}
      ${MixPanel("Role / archetype mix", "Student role count", archetypeMix)}
      ${MixPanel("Risk temperament", describeRiskMix(riskMix), riskMix)}
      ${SharedThemes(commonThemes, fragilePoints)}
      ${StudyNotes(getStudyNotes(students))}
    </section>
  `;
}

function PortfolioMessages({ duplicates, invalidTickers, isTooSmall, isTooLarge }) {
  const messages = [];
  if (duplicates.length) messages.push(`Duplicate student IDs were folded into one desk: ${duplicates.join(", ")}.`);
  if (invalidTickers.length) messages.push(`Not in the academy roster yet: ${invalidTickers.join(", ")}.`);
  if (isTooSmall) messages.push("This class needs at least 3 valid students before we can read the room.");
  if (isTooLarge) messages.push("This classroom has 5 desks for now, so only the first 5 unique student IDs are used.");

  if (!messages.length) return "";

  return html`
    <section class="portfolio-messages">
      ${messages.map((message) => `<p>${message}</p>`).join("")}
    </section>
  `;
}

function ExamplePortfolios() {
  return html`
    <section class="popular-comparisons portfolio-examples" aria-label="Starter classroom examples">
      <p class="section-kicker">Starter classrooms</p>
      <div>
        ${getRecommendedPortfolios()
          .map((example) => {
            return `<button data-link="/portfolio?tickers=${example.tickers.join(",")}"><strong>${example.name}</strong><span>${example.tickers.join(", ")}</span></button>`;
          })
          .join("")}
      </div>
    </section>
  `;
}

function EmptyPortfolioState() {
  return html`
    <section class="empty-state portfolio-empty">
      <p class="section-kicker">Waiting for the roster</p>
      <h2>This class needs at least 3 valid students before we can read the room.</h2>
      <p>Try a starter classroom or type something like AAPL, AMD, GOOGL, MSFT, QQQ.</p>
    </section>
  `;
}
