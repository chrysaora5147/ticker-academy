import { html } from "./html.js";

const defaultDisclaimer =
  "Ticker Academy ทำขึ้นเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุน การวางแผนการเงิน การคาดการณ์ราคา หรือสัญญาณซื้อขาย";

export function DisclaimerBox(note = defaultDisclaimer) {
  return html`
    <section class="disclaimer-box" id="disclaimer">
      <div>
        <p class="section-kicker">คำเตือนเพื่อการเรียนรู้</p>
        <h2>ไม่มีคำแนะนำ ไม่มีคำทำนาย</h2>
      </div>
      <p>${note} ทุกบริษัทและ ETF ถูกเล่าเป็นตัวละครนักเรียนแบบย่อเพื่อให้เข้าใจง่าย ควรศึกษาข้อมูลเอง และปรึกษาผู้เชี่ยวชาญที่เหมาะสมก่อนตัดสินใจทางการเงิน</p>
    </section>
  `;
}
