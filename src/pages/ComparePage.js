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
          <p class="section-kicker">เทียบแฟ้มนักเรียน</p>
          <h1>เทียบสมุดพกนักเรียน</h1>
          <p class="browse-subtitle">วางนักเรียนสองคนข้างกันเพื่อดูพลังห้อง บทบาท นิสัยในสมุดพก ระดับความซน และบทเรียนที่ต่างกัน ไม่มีผู้ชนะ ไม่มีคำทำนาย</p>
        </div>
        <div class="compare-hero-card">
          <strong>${left.ticker} vs ${right.ticker}</strong>
          <span>สมุดพกวางข้างกัน</span>
          <button class="secondary-action" data-copy-current-url="true" data-copy-status="#compare-copy-status" type="button">คัดลอกลิงก์เทียบ</button>
          <small id="compare-copy-status">แชร์คู่สมุดพกนี้ได้เลย</small>
        </div>
      </section>

      ${hasInvalidSelection ? InvalidTickerNotice(requestedLeft, requestedRight) : ""}
      ${CompareSelector(getAllStudents(), left.ticker, right.ticker)}
      ${PopularComparisons()}

      <section class="comparison-id-grid">
        ${ComparisonStudentCard(left, "โต๊ะซ้าย")}
        ${ComparisonStudentCard(right, "โต๊ะขวา")}
      </section>

      <section class="comparison-panel comparison-summary">
        <p class="section-kicker">พลังคนละโต๊ะ</p>
        <h2>${left.ticker} vs ${right.ticker}</h2>
        <p>${comparison.summary}</p>
      </section>

      <section class="comparison-panel">
        <p class="section-kicker">เรื่องเล่าประจำตัว</p>
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
      ${ComparisonList("เทียบวิชาที่ถนัด", left.strengths, right.strengths, left.ticker, right.ticker)}
      ${ComparisonList("เทียบจุดที่ต้องระวัง", left.weaknesses, right.weaknesses, left.ticker, right.ticker)}
      ${ComparisonList("เหมาะกับคนที่อยากเรียนรู้เรื่อง…", left.investorFit, right.investorFit, left.ticker, right.ticker)}
      ${RelationshipHints(left, right, comparison)}
      ${DisclaimerBox("การเทียบสมุดพกใน Ticker Academy เป็นการย่อเรื่องเพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน การคาดการณ์ราคา การจัดอันดับ หรือสัญญาณซื้อขาย")}
    </main>
  `;
}

function InvalidTickerNotice(left, right) {
  return html`
    <section class="empty-state compare-warning">
      <p class="section-kicker">ไม่พบแฟ้ม</p>
      <h2>ยังไม่มีรหัสนักเรียนนี้ในทะเบียนโรงเรียน</h2>
      <p>คู่ที่ขอคือ ${left || "ว่าง"} vs ${right || "ว่าง"} เลยเปิดโต๊ะ AMD vs NVDA ให้ดูเป็นตัวอย่างก่อน</p>
    </section>
  `;
}

function PopularComparisons() {
  return html`
    <section class="popular-comparisons" aria-label="Popular comparisons">
      <p class="section-kicker">คู่เทียบยอดนิยม</p>
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
