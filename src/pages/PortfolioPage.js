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
          <p class="section-kicker">จัดห้องเรียนของเรา</p>
          <h1>จัดห้องเรียนของเรา</h1>
          <p class="browse-subtitle">ใส่รหัสนักเรียน 3-5 คน แล้วดูนิสัยของห้องนี้ ส่วนผสมของห้อง และเรื่องที่ควรศึกษาเพิ่ม</p>
        </div>
        <div class="portfolio-hero-card">
          <strong>${students.length}</strong>
          <span>นักเรียนที่อยู่ในห้องนี้</span>
          <button class="secondary-action" data-copy-current-url="true" data-copy-status="#portfolio-copy-status" type="button">คัดลอกลิงก์ห้อง</button>
          <small id="portfolio-copy-status">แชร์รายชื่อห้องนี้ได้เลย</small>
        </div>
      </section>

      ${PortfolioInput(rawTickers)}
      ${PortfolioMessages({ duplicates: parsed.duplicates, invalidTickers, isTooSmall, isTooLarge })}
      ${ExamplePortfolios()}

      ${canAnalyze ? PortfolioAnalysis(students, classroomMix, archetypeMix, riskMix, commonThemes, fragilePoints) : EmptyPortfolioState()}

      ${DisclaimerBox("การจัดห้องเรียนของเราเป็นแบบฝึกหัดเพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน ไม่ใช่โมเดลจัดพอร์ต ไม่ใช่คำทำนาย และไม่ใช่สัญญาณซื้อขาย")}
    </main>
  `;
}

function PortfolioAnalysis(students, classroomMix, archetypeMix, riskMix, commonThemes, fragilePoints) {
  return html`
    <section class="portfolio-summary portfolio-panel">
      <p class="section-kicker">นิสัยของห้องนี้</p>
      <h2>${describeRiskMix(riskMix)} ของทั้งห้อง</h2>
      <p>${buildPortfolioClassroomSummary(students)}</p>
    </section>
    ${PortfolioRoster(students)}
    <section class="portfolio-analysis-grid">
      ${MixPanel("ส่วนผสมของห้อง", "นับตามห้องเรียน", classroomMix)}
      ${MixPanel("บทบาทในห้อง", "นับตามคาแรกเตอร์", archetypeMix)}
      ${MixPanel("ระดับความซน", describeRiskMix(riskMix), riskMix)}
      ${SharedThemes(commonThemes, fragilePoints)}
      ${StudyNotes(getStudyNotes(students))}
    </section>
  `;
}

function PortfolioMessages({ duplicates, invalidTickers, isTooSmall, isTooLarge }) {
  const messages = [];
  if (duplicates.length) messages.push(`รหัสซ้ำถูกนับเป็นโต๊ะเดียว: ${duplicates.join(", ")}`);
  if (invalidTickers.length) messages.push(`ยังไม่มีในทะเบียนโรงเรียน: ${invalidTickers.join(", ")}`);
  if (isTooSmall) messages.push("ห้องนี้ต้องมีนักเรียนอย่างน้อย 3 คนก่อนถึงจะอ่านนิสัยของห้องได้");
  if (isTooLarge) messages.push("ตอนนี้ห้องมี 5 โต๊ะ จึงใช้รหัสไม่ซ้ำ 5 ตัวแรกก่อน");

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
      <p class="section-kicker">ห้องตัวอย่าง</p>
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
      <p class="section-kicker">รอรายชื่อเข้าห้อง</p>
      <h2>ต้องมีนักเรียนอย่างน้อย 3 คนก่อนถึงจะอ่านนิสัยของห้องได้</h2>
      <p>ลองกดห้องตัวอย่าง หรือพิมพ์ประมาณ AAPL, AMD, GOOGL, MSFT, QQQ</p>
    </section>
  `;
}
