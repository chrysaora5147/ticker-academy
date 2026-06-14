import { ClassroomPreview } from "../components/ClassroomPreview.js";
import { DisclaimerBox } from "../components/DisclaimerBox.js";
import { Header } from "../components/Header.js";
import { HeroSearch } from "../components/HeroSearch.js";
import { html } from "../components/html.js";
import { StudentCard } from "../components/StudentCard.js";
import { getFeaturedStudents } from "../lib/students.js";

export function HomePage() {
  return html`
    ${Header()}
    <main>
      ${HeroSearch()}
      <section class="example-links">
        <div>
          <p class="section-kicker">ทางลัดเปิดแฟ้ม</p>
          <h2>เริ่มเดินโรงเรียนจากตรงนี้</h2>
        </div>
        <div class="example-link-grid">
          <button data-link="/students/AMD"><strong>แฟ้ม AMD</strong><span>เด็กชิปสายท้าชน</span></button>
          <button data-link="/students/NVDA"><strong>แฟ้ม NVDA</strong><span>ดาวห้องแล็บ AI</span></button>
          <button data-link="/students/AAPL"><strong>แฟ้ม AAPL</strong><span>เด็กพรีเมียมสาย ecosystem</span></button>
          <button data-link="/compare?left=SPY&right=QQQ"><strong>SPY vs QQQ</strong><span>เทียบห้อง ETF สองสไตล์</span></button>
          <button data-link="/compare?left=AAPL&right=MSFT"><strong>AAPL vs MSFT</strong><span>แบรนด์ฮอลล์เจอห้องซอฟต์แวร์</span></button>
          <button data-link="/portfolio?tickers=SPY,QQQ,SCHD"><strong>ห้องสายใจเย็น</strong><span>ลองจัดห้อง ETF แบบนิ่งขึ้น</span></button>
        </div>
      </section>
      <section class="section-block">
        <div class="section-heading">
          <p class="section-kicker">แฟ้มยอดนิยม</p>
          <h2>นักเรียนที่น่าเปิดดูเป็นคนแรก</h2>
        </div>
        <div class="student-grid">
          ${getFeaturedStudents().map(StudentCard).join("")}
        </div>
      </section>
      <section class="compare-callout">
        <div>
          <p class="section-kicker">เครื่องมือหน้าโรงเรียน</p>
          <h2>เทียบสมุดพก หรือจัดห้องของเรา</h2>
          <p>วางแฟ้มนักเรียนสองคนข้างกันเพื่อดูนิสัยต่างกันอย่างไร หรือใส่ 3-5 ticker เพื่อดูคาแรกเตอร์ของทั้งห้อง</p>
        </div>
        <div class="home-tool-actions">
          <button class="clear-filter-button" data-link="/compare?left=AMD&right=NVDA">เทียบ AMD กับ NVDA</button>
          <button class="secondary-action" data-link="/portfolio?tickers=AAPL,MSFT,GOOGL,AMD,QQQ">จัดห้องเทคเกียรตินิยม</button>
        </div>
      </section>
      ${ClassroomPreview()}
      ${DisclaimerBox()}
    </main>
  `;
}
