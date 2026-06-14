import { studentProfiles } from "../data/studentProfiles.js";

const classroomNames = {
  "AI Chip Workshop": "ห้องชิป AI",
  "Consumer Tech Hall": "ห้องเทคผู้บริโภค",
  "Software & Cloud Lab": "ห้องซอฟต์แวร์และคลาวด์",
  "Platform & Commerce Hall": "ห้องแพลตฟอร์มและการค้า",
  "Infrastructure Workshop": "ห้องโครงสร้างพื้นฐาน",
  "Data Intelligence Club": "ชมรมข้อมูลและปัญญา",
  "Broad Market Homeroom": "ห้องกองทุนรวมเพื่อนเยอะ",
  "Dividend Club": "ชมรมปันผล"
};

const classroomFallbacks = {
  "ห้องชิป AI": ["เด็กชิปไฟแรง", "นักสร้างชิปประจำห้อง"],
  "ห้องเทคผู้บริโภค": ["เด็กโปรดักต์คนดัง", "นักสร้างของใช้ให้คนชอบ"],
  "ห้องซอฟต์แวร์และคลาวด์": ["เด็กระบบจัดจ้าน", "นักจัดการแพลตฟอร์ม"],
  "ห้องแพลตฟอร์มและการค้า": ["เด็กแพลตฟอร์มคนเยอะ", "นักต่อระบบการค้า"],
  "ชมรมข้อมูลและปัญญา": ["เด็กข้อมูลสายวิเคราะห์", "นักอ่านสัญญาณ"],
  "ห้องโครงสร้างพื้นฐาน": ["เด็กหลังบ้านคนสำคัญ", "ช่างประจำโรงเรียน"],
  "ห้องกองทุนรวมเพื่อนเยอะ": ["ตัวแทนหมู่คณะ", "ห้องรวมเพื่อนหลายคน"],
  "ชมรมปันผล": ["เด็กสายสม่ำเสมอ", "ผู้แจกขนมประจำชมรม"]
};

const profileOverrides = {
  NVDA: {
    archetype: "ดาวห้องแล็บ AI",
    roleTitle: "หัวหน้าห้องชิปเร่งความเร็ว",
    shortDescription: "เด็กชิปไฟแรงที่ทำให้บทเรียน AI หลายวิชาเดินเร็วขึ้น",
    personality: "ฉลาดจัด พลังสูง เป็นที่จับตาของทั้งโรงเรียน และมีการบ้านเรื่องความคาดหวังอยู่เสมอ",
    oneLineStory: "NVDA คือดาวห้องแล็บ AI ที่ทำให้ทุกคนพูดถึง GPU, data center และพลังประมวลผลแบบเร่งสปีด",
    strengths: ["ระบบนิเวศ GPU ใหญ่และนักพัฒนาใช้กันกว้าง", "ได้ประโยชน์จากการลงทุนโครงสร้างพื้นฐาน AI", "มีทั้งฮาร์ดแวร์และซอฟต์แวร์ที่ทำให้แพลตฟอร์มเหนียว"],
    weaknesses: ["ความคาดหวังสูงมาก", "ดีมานด์ชิปอาจเปลี่ยนเมื่อผู้ซื้อปรับงบ", "คู่แข่งและลูกค้ารายใหญ่พยายามลดการพึ่งพา"],
    riskTemperament: "เด็กเก่งห้องแล็บที่หัวใจเต้นเร็วเวลาสอบ",
    investorFit: ["เรียนรู้เรื่อง AI infrastructure", "ดูตัวอย่างความคาดหวังเทียบกับ execution", "เข้าใจว่าระบบนิเวศฮาร์ดแวร์สร้าง moat อย่างไร"]
  },
  AMD: {
    archetype: "เด็กท้าชนชิป",
    roleTitle: "นักวิ่งผลัด CPU/GPU",
    shortDescription: "เด็กชิปสายแข่งขันที่พยายามแย่งโต๊ะใน CPU, GPU และ AI accelerator",
    personality: "เร็ว กล้า ท้าชน และอ่อนไหวกับความคาดหวังที่เปลี่ยนเร็ว",
    oneLineStory: "AMD คือเด็กท้าชนในเวิร์กช็อปชิป วิ่งไล่ผู้นำ AI ด้วยเครื่องมือที่คมขึ้นทุกเทอม",
    strengths: ["ชื่อเสียง CPU แข็งแรง", "มีเป้าหมายใน data center และ AI accelerator", "เคยแย่งส่วนแบ่งได้เมื่อ execution ดี"],
    weaknesses: ["คู่แข่งแพลตฟอร์มแข็งมาก", "ความหวัง AI อาจวิ่งนำผลลัพธ์", "วัฏจักรฮาร์ดแวร์เย็นลงได้เร็ว"],
    riskTemperament: "นักวิ่งสปรินต์ที่ซ้อมหนักและคะแนนแกว่งได้",
    investorFit: ["เรียนรู้ challenger vs leader", "ดูวัฏจักร semiconductor", "เปรียบเทียบ execution กับ market expectation"]
  },
  AAPL: {
    archetype: "เด็กพรีเมียมสาย ecosystem",
    roleTitle: "หัวหน้าชมรมแบรนด์ภักดี",
    shortDescription: "เด็กเทคผู้บริโภคที่มีอุปกรณ์ บริการ และแฟนคลับเข้ากันแน่น",
    personality: "เนี้ยบ พรีเมียม สร้างเงินสดเก่ง และคุมภาพลักษณ์โรงเรียนดี",
    oneLineStory: "AAPL คือเด็กที่สมุด ปากกา นาฬิกา และบริการเสริมเข้าชุดกันหมด",
    strengths: ["แบรนด์และฐานผู้ใช้ภักดี", "ecosystem ของ hardware, software, services", "กระแสเงินสดขนาดใหญ่"],
    weaknesses: ["โตช้ากว่าเด็กสายโตแรงบางคน", "รอบสินค้าโดยเฉพาะ iPhone ยังสำคัญ", "กฎระเบียบจับตาแพลตฟอร์ม"],
    riskTemperament: "เด็กเกียรตินิยมสายพรีเมียม แต่ยังต้องสอบสินค้าใหม่ทุกปี",
    investorFit: ["เรียนรู้ moat จาก brand และ ecosystem", "ดู mature mega-cap growth", "เทียบ brand strength กับ regulation"]
  },
  MSFT: {
    archetype: "ประธานห้ององค์กร",
    roleTitle: "หัวหน้าคลาวด์และเครื่องมือทำงาน",
    shortDescription: "เด็กซอฟต์แวร์ตัวใหญ่ที่มีที่นั่งทั้งเครื่องมือทำงาน คลาวด์ และ workflow AI",
    personality: "เป็นระบบ ทนทาน เพื่อนองค์กรไว้ใจ และยังแอบทะเยอทะยานในหลายแผนก",
    oneLineStory: "MSFT คือประธานห้องที่จัดตารางเรียน ดูแลห้องคลาวด์ และถือเครื่องมือทำงานของทั้งโรงเรียนไว้หลายชิ้น",
    strengths: ["สัมพันธ์องค์กรลึกมาก", "Azure เป็นคลาวด์สำคัญที่พา AI กระจายได้", "มีหลายเครื่องยนต์ตั้งแต่ productivity ถึง developer tools"],
    weaknesses: ["ขนาดใหญ่มากทำให้โตเซอร์ไพรส์ยากขึ้น", "การแข่งขัน cloud ยังแรง", "แพลตฟอร์มใหญ่ถูกจับตาจากกฎระเบียบ"],
    riskTemperament: "ผู้นำสายมั่นคงที่ตารางแน่นทั้งวัน",
    investorFit: ["เรียนรู้พลังแพลตฟอร์มองค์กร", "ดู cloud และ AI distribution", "เข้าใจ enterprise software durability"]
  },
  GOOGL: {
    archetype: "นักวิจัยห้องค้นหา",
    roleTitle: "ผู้เชี่ยวชาญข้อมูลและการค้นพบ",
    shortDescription: "เด็กแพลตฟอร์มที่มี search, ads, YouTube, cloud และโปรเจกต์ทดลองเยอะ",
    personality: "ขี้สงสัย เทคนิคแน่น ชอบทดลอง และบางทีโปรเจกต์เยอะจนโต๊ะรก",
    oneLineStory: "GOOGL คือเด็กนักค้นหาที่รู้ว่าคำตอบซ่อนอยู่ตรงไหน และยังทดลองสมุด AI เล่มใหม่อยู่เรื่อย ๆ",
    strengths: ["search และ ads scale ใหญ่มาก", "รากฐาน AI และ data infrastructure ลึก", "YouTube และ cloud เป็นเครื่องยนต์เสริม"],
    weaknesses: ["งบโฆษณาเป็นวัฏจักร", "AI อาจเปลี่ยนพฤติกรรม search", "กฎระเบียบมาเคาะประตูบ่อย"],
    riskTemperament: "เด็กทดลองฉลาดที่ต้องพิสูจน์ว่า AI จะช่วยมากกว่ารบกวนธุรกิจเดิม",
    investorFit: ["เรียนรู้ advertising platform", "ดู AI disruption risk", "เทียบ data advantage กับ regulation"]
  },
  AMZN: {
    archetype: "ผู้จัดการร้านสหกรณ์",
    roleTitle: "นักสร้าง commerce และ cloud",
    shortDescription: "เด็กงานยุ่งที่ดูแลร้านสหกรณ์ โลจิสติกส์ และเซิร์ฟเวอร์ของโรงเรียนพร้อมกัน",
    personality: "หมกมุ่นกับลูกค้า ทำงานหนัก ไม่ค่อยอยู่นิ่ง และยอมลงแรงเพื่อขยายสนาม",
    oneLineStory: "AMZN จัดของ ส่งของ ดูแลร้าน และปล่อยเช่าพื้นที่ในตู้เซิร์ฟเวอร์ของโรงเรียน",
    strengths: ["AWS เป็นผู้นำคลาวด์สำคัญ", "commerce และ logistics scale ใหญ่มาก", "หลายธุรกิจช่วยพยุงกันได้"],
    weaknesses: ["กำไรฝั่ง retail อาจบาง", "ลงทุนหนักกดดันกำไรระยะสั้น", "แพลตฟอร์มใหญ่เจอกฎระเบียบ"],
    riskTemperament: "เด็กงานยุ่งที่เข็นรถหลายคันพร้อมกัน",
    investorFit: ["เรียนรู้ scale economics", "ดู cloud บวก commerce", "เข้าใจ reinvestment กับ profitability"]
  },
  META: {
    archetype: "หัวหน้าชมรมโซเชียล",
    roleTitle: "ผู้นำเครือข่ายความสนใจ",
    shortDescription: "เด็กโซเชียลแพลตฟอร์มที่มีเครือข่ายคนดูมหาศาล โฆษณา แชต และเครื่องมือคอนเทนต์ AI",
    personality: "กล้าเข้าสังคม ทำเงินเก่ง ชอบทดลอง และบางทีดราม่ากับโปรเจกต์ข้างทาง",
    oneLineStory: "META คือหัวหน้าชมรมโซเชียลที่เคยออกนอกทางแพง ๆ แล้วกลับมาโฟกัสบทเรียน AI กับความสนใจของผู้คน",
    strengths: ["เครือข่ายโซเชียลใหญ่และ engagement สูง", "เครื่องจักรโฆษณาแข็งแรง", "AI ช่วย discovery และ ad relevance"],
    weaknesses: ["งบโฆษณายังมีวัฏจักร", "privacy และ regulation มาตรวจประจำ", "โปรเจกต์ใหญ่ทำให้อ่านการใช้เงินยาก"],
    riskTemperament: "หัวหน้าชมรมพลังสูงที่ห้องเสียงดังและมีการเช็ก privacy อยู่เสมอ",
    investorFit: ["เรียนรู้ network effects", "ดู advertising platform", "เทียบ focus กับ spending risk"]
  },
  TSLA: {
    archetype: "เด็กวิทย์ไฟฟ้า",
    roleTitle: "นักประดิษฐ์ผันผวนสูง",
    shortDescription: "เด็กเทคผู้บริโภคที่ผสมรถไฟฟ้า พลังงาน ซอฟต์แวร์ และไอเดีย autonomy",
    personality: "ทะเยอทะยาน เสียงดัง เปลี่ยนเร็ว และแทบไม่เคยเงียบช่วงสอบ",
    oneLineStory: "TSLA คือเด็กวิทย์ไฟฟ้าที่โปรเจกต์บางวันทำให้ทั้งห้องว้าว และบางวันก็เขย่าโต๊ะแล็บแรงมาก",
    strengths: ["แบรนด์รถไฟฟ้าเป็นที่รู้จัก", "scale การผลิตและสัมพันธ์ตรงกับลูกค้า", "มีทางเลือกใน energy, software, autonomy"],
    weaknesses: ["margin รถยนต์ถูกบีบได้", "การแข่งขันเพิ่มขึ้น", "เรื่องเล่าเหวี่ยงแรง"],
    riskTemperament: "นักประดิษฐ์สายดราม่าที่คะแนนแกว่งตามเรื่องเล่า",
    investorFit: ["เรียนรู้ narrative risk", "ดู disruptive brand", "เทียบ innovation hope กับ execution pressure"]
  },
  QQQ: { archetype: "ห้องเทคเกียรตินิยม", roleTitle: "ตัวแทนกลุ่มเทคตัวใหญ่", shortDescription: "นักเรียนหมู่คณะที่รวมเพื่อนเทคและ growth หลายคน", oneLineStory: "QQQ คือห้องรวมเด็กเทคดาวเด่น ไม่ใช่แฟ้มของบริษัทเดียว", riskTemperament: "ห้องรวมเพื่อนที่พลังสูงกว่าห้องตลาดกว้าง", investorFit: ["เรียนรู้ exposure เทคขนาดใหญ่", "ดูความกระจุกตัวใน index", "เทียบ ETF กับหุ้นรายตัว"] },
  SPY: { archetype: "โฮมรูมทั้งโรงเรียน", roleTitle: "ตัวแทนตลาดกว้าง", shortDescription: "ห้องรวมเพื่อนหลากหลายที่ช่วยดูภาพรวมโรงเรียน", oneLineStory: "SPY คือโฮมรูมใหญ่ที่รวมเด็กหลายสายไว้ในแฟ้มเดียว", riskTemperament: "นิ่งกว่านักเรียนรายตัว แต่ยังขยับตามอารมณ์ตลาด", investorFit: ["เรียนรู้ broad market exposure", "ดู diversification", "เทียบตลาดกว้างกับธีมเฉพาะ"] },
  TQQQ: { archetype: "ห้องเทอร์โบ", roleTitle: "ตัวคูณพลังซน", shortDescription: "นักเรียน ETF สายเร่งสปีดที่เหมาะกับการเรียนรู้ leverage risk", oneLineStory: "TQQQ คือห้องเทอร์โบที่ขยายทั้งความสนุกและความเหวี่ยง", riskTemperament: "ซนเทอร์โบแบบต้องคาดเข็มขัด", investorFit: ["เรียนรู้ leverage", "ดู path dependency", "เข้าใจความเสี่ยงจากความผันผวน"] },
  SCHD: { archetype: "ชมรมปันผลใจเย็น", roleTitle: "ผู้แจกขนมประจำรอบ", shortDescription: "ETF สายคุณภาพและปันผลที่อารมณ์นิ่งกว่าห้องเทอร์โบ", oneLineStory: "SCHD คือชมรมที่ชอบความสม่ำเสมอ กระแสเงินสด และขนมประจำรอบ", riskTemperament: "ค่อนข้างใจเย็น แต่ไม่ได้ปลอดความเสี่ยง", investorFit: ["เรียนรู้ dividend quality", "ดู factor exposure", "เทียบ growth กับ income style"] }
};

function toDisplayProfile(profile) {
  const classroom = classroomNames[profile.classroom] || profile.classroom;
  const fallback = classroomFallbacks[classroom] || ["นักเรียนประจำห้อง", "ตัวละครธุรกิจน่าเรียนรู้"];
  const custom = profileOverrides[profile.ticker] || {};

  return {
    ...profile,
    classroom,
    archetype: custom.archetype || fallback[0],
    roleTitle: custom.roleTitle || fallback[1],
    shortDescription: custom.shortDescription || `นักเรียนใน ${classroom} ที่ช่วยให้เรียนรู้นิสัยธุรกิจและความเสี่ยงแบบง่ายขึ้น`,
    personality: custom.personality || `มีคาแรกเตอร์เฉพาะตัวของ ${classroom} เหมาะสำหรับเปิดแฟ้มดูบทเรียนธุรกิจแบบไม่ต้องเป็นภาษายาก`,
    oneLineStory: custom.oneLineStory || `${profile.ticker} คือหนึ่งในนักเรียนของ ${classroom} ที่ช่วยเล่าเรื่องธุรกิจผ่านบัตรนักเรียนและสมุดพก`,
    strengths: custom.strengths || profile.strengths.map((item) => `บทเรียนเด่น: ${item}`),
    weaknesses: custom.weaknesses || profile.weaknesses.map((item) => `ข้อควรสังเกต: ${item}`),
    riskTemperament: custom.riskTemperament || `ระดับความซน ${riskLabel(profile.riskLevel)} ใช้ดูความผันผวนและนิสัยของธุรกิจแบบย่อ`,
    investorFit: custom.investorFit || profile.investorFit.map((item) => item.replace(/^Useful for studying /, "เรียนรู้เรื่อง ").replace(/^Good case study for /, "ดูตัวอย่าง ").replace(/^Helpful for /, "ช่วยให้เข้าใจ ")),
    disclaimerNote: `แฟ้มนี้เป็นบทเรียนแบบย่อของ ${profile.ticker} เพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา`
  };
}

const displayProfiles = studentProfiles.map(toDisplayProfile);

export function normalizeTicker(ticker = "") {
  return ticker.trim().toUpperCase();
}

export function getAllStudents() {
  return displayProfiles;
}

export function getStudentByTicker(ticker) {
  const normalized = normalizeTicker(ticker);
  return displayProfiles.find((profile) => profile.ticker === normalized);
}

export function getFeaturedStudents() {
  return displayProfiles.filter((profile) => profile.featured);
}

export function getStudentsByClassroom(classroom) {
  return displayProfiles.filter((profile) => profile.classroom === classroom);
}

export function getClassrooms() {
  return [...new Set(displayProfiles.map((profile) => profile.classroom))].sort();
}

export function getArchetypes() {
  return [...new Set(displayProfiles.map((profile) => profile.archetype))].sort();
}

export function getRiskLevels() {
  const rank = { Low: 1, Medium: 2, High: 3, "Very High": 4 };
  return [...new Set(displayProfiles.map((profile) => profile.riskLevel))].sort((a, b) => rank[a] - rank[b]);
}

export function getClassroomSummaries() {
  return getClassrooms().map((classroom) => {
    const students = getStudentsByClassroom(classroom);
    const sectors = [...new Set(students.map((student) => student.sector))];
    return { classroom, count: students.length, tickers: students.map((student) => student.ticker), description: describeClassroom(classroom, sectors) };
  });
}

export function filterStudents(filters = {}) {
  return displayProfiles.filter((profile) => (!filters.classroom || profile.classroom === filters.classroom) && (!filters.archetype || profile.archetype === filters.archetype) && (!filters.riskLevel || profile.riskLevel === filters.riskLevel));
}

export function getSharedTags(left, right) { return left.tags.filter((tag) => right.tags.includes(tag)); }
export function getSharedClassmates(left, right) { return left.classmates.filter((ticker) => right.classmates.includes(ticker)); }
export function getSharedRivals(left, right) { return left.rivals.filter((ticker) => right.rivals.includes(ticker)); }

export function getRecommendedComparisons() {
  return [
    { left: "AMD", right: "NVDA", label: "เด็กท้าชนชิป vs ดาวห้อง AI" },
    { left: "AAPL", right: "MSFT", label: "ecosystem แบรนด์ vs ประธานห้ององค์กร" },
    { left: "SPY", right: "QQQ", label: "โฮมรูมทั้งโรงเรียน vs ห้องเทคเกียรตินิยม" },
    { left: "GOOGL", right: "META", label: "เด็กค้นหา vs หัวหน้าชมรมโซเชียล" },
    { left: "TQQQ", right: "QQQ", label: "ห้องเทอร์โบ vs ห้องพื้นฐาน" },
    { left: "AVGO", right: "TSM", label: "ช่างโครงสร้าง vs ช่างโรงงานระดับเทพ" }
  ];
}

export function parseTickerList(input = "") {
  const rawTickers = input.split(",").map((ticker) => normalizeTicker(ticker)).filter(Boolean);
  const seen = new Set();
  const tickers = [];
  const duplicates = [];
  for (const ticker of rawTickers) {
    if (seen.has(ticker)) duplicates.push(ticker);
    else { seen.add(ticker); tickers.push(ticker); }
  }
  return { tickers, duplicates };
}

export function getStudentsByTickers(tickers) { return tickers.map((ticker) => getStudentByTicker(ticker)).filter(Boolean); }
export function getInvalidTickers(tickers) { return tickers.filter((ticker) => !getStudentByTicker(ticker)); }
export function getDuplicateTickers(input = "") { return parseTickerList(input).duplicates; }
export function getClassroomMix(students) { return countBy(students, "classroom"); }
export function getArchetypeMix(students) { return countBy(students, "archetype"); }
export function getRiskMix(students) { return countBy(students, "riskLevel"); }

export function getCommonThemes(students) {
  const tagCounts = new Map();
  for (const student of students) for (const tag of student.tags) tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
  return [...tagCounts.entries()].filter(([, count]) => count > 1).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([tag, count]) => ({ label: tag, count }));
}

export function getRecommendedPortfolios() {
  return [
    { name: "ห้องเทคเกียรตินิยม", tickers: ["AAPL", "MSFT", "GOOGL", "AMD", "QQQ"] },
    { name: "เวิร์กช็อปชิป AI", tickers: ["NVDA", "AMD", "AVGO", "TSM", "ASML"] },
    { name: "ห้องกว้างบวกชมรมปันผล", tickers: ["SPY", "QQQ", "SCHD"] },
    { name: "ห้องเทอร์โบซนมาก", tickers: ["TQQQ", "QQQ", "TSLA"] },
    { name: "ชมรมข้อมูลและแพลตฟอร์ม", tickers: ["GOOGL", "META", "PLTR", "CRM", "ORCL"] }
  ];
}

export function buildPortfolioClassroomSummary(students) {
  const classroomMix = getClassroomMix(students);
  const riskMix = getRiskMix(students);
  const themes = getCommonThemes(students);
  const topClassroom = classroomMix[0];
  const topTheme = themes[0]?.label;
  const riskMood = describeRiskMix(riskMix);
  const classSize = students.length;
  if (!classSize) return "ใส่รหัสนักเรียนที่ถูกต้อง 3-5 คน เพื่ออ่านนิสัยของห้องนี้";
  const classroomPhrase = topClassroom ? `เอนเอียงไปทาง ${topClassroom.label}` : "ผสมหลายโถงทางเดิน";
  const themePhrase = topTheme ? `ธีมที่ซ้ำกันคือ ${themes.slice(0, 3).map((theme) => theme.label).join(", ")}` : "ห้องนี้กระจายหลายธีม บทเรียนคือการดูว่าธุรกิจหลายแบบอยู่ร่วมกันอย่างไร";
  return `ห้องนี้มีนักเรียน ${classSize} คน และ${classroomPhrase} บรรยากาศรวมคือ ${riskMood} มีบทบาทตั้งแต่ ${students[0].archetype} ไปจนถึง ${students[classSize - 1].archetype} ${themePhrase} ใช้เป็นเลนส์เรียนรู้เรื่องความทับซ้อน ความกระจุกตัว และนิสัยของห้อง ไม่ใช่คำแนะนำ`;
}

export function describeRiskMix(riskMix) {
  const highCount = getCount(riskMix, "High") + getCount(riskMix, "Very High");
  const mediumCount = getCount(riskMix, "Medium");
  const lowCount = getCount(riskMix, "Low");
  if (getCount(riskMix, "Very High") > 0 && highCount >= 2) return "ซนเทอร์โบ";
  if (highCount >= mediumCount + lowCount) return "พลังสูง";
  if (lowCount > highCount && lowCount >= mediumCount) return "ค่อนข้างใจเย็น";
  return "สมดุล";
}

export function getFragilePointThemes(students) {
  const text = students.flatMap((student) => student.weaknesses).join(" ").toLowerCase();
  const themes = [["ความคาดหวังเรื่อง AI", ["ai", "expectations", "ความคาดหวัง"]], ["แรงกดดันด้านมูลค่า", ["valuation", "มูลค่า"]], ["การแข่งขัน", ["competition", "competitors", "rivals", "แข่ง"]], ["วัฏจักรอุปสงค์", ["cyclical", "cycle", "demand", "วัฏจักร"]], ["กฎระเบียบ", ["regulatory", "regulation", "กฎ"]], ["ความผันผวน", ["volatility", "swings", "เหวี่ยง"]]];
  return themes.filter(([, keywords]) => keywords.some((keyword) => text.includes(keyword))).map(([theme]) => theme);
}

export function getStudyNotes(students) {
  const classroomMix = getClassroomMix(students);
  const riskMix = getRiskMix(students);
  const themes = getCommonThemes(students);
  const notes = ["ห้องเรียนไหนโผล่ซ้ำมากกว่าหนึ่งครั้ง?", "มีนักเรียนหลายคนที่เจอวัฏจักรตลาดหรือเทคโนโลยีเดียวกันไหม?", "จุดที่ต้องระวังข้อไหนซ้ำกันในรายชื่อห้องนี้?"];
  if (themes.some((theme) => theme.label.toLowerCase().includes("ai"))) notes.push("ห้องนี้พึ่งพาความต้องการ AI และการลงทุนโครงสร้างพื้นฐานมากแค่ไหน?");
  if (classroomMix[0]?.count >= 3) notes.push(`ถ้าโถง ${classroomMix[0].label} เจอสัปดาห์สอบยาก อารมณ์ทั้งห้องจะเปลี่ยนอย่างไร?`);
  if (getCount(riskMix, "Very High") > 0) notes.push("นักเรียนคนไหนพาความซนเทอร์โบเข้ามาในห้อง?");
  return notes.slice(0, 5);
}

export function compareStudents(left, right) {
  return { sameClassroom: left.classroom === right.classroom, sameArchetype: left.archetype === right.archetype, sameRiskLevel: left.riskLevel === right.riskLevel, sharedTags: getSharedTags(left, right), sharedClassmates: getSharedClassmates(left, right), sharedRivals: getSharedRivals(left, right), summary: buildComparisonSummary(left, right) };
}

function countBy(students, field) {
  const counts = new Map();
  for (const student of students) counts.set(student[field], (counts.get(student[field]) || 0) + 1);
  return [...counts.entries()].map(([label, count]) => ({ label, count })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

function getCount(mix, label) { return mix.find((item) => item.label === label)?.count || 0; }

export function searchStudents(query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return displayProfiles.filter((profile) => [profile.ticker, profile.companyName, profile.classroom, profile.archetype, profile.sector, profile.roleTitle].join(" ").toLowerCase().includes(needle));
}

function buildComparisonSummary(left, right) {
  if (left.assetType === "ETF" && right.assetType === "ETF") return `${left.ticker} และ ${right.ticker} เป็นแฟ้มแบบนักเรียนหมู่คณะทั้งคู่ แต่ ${left.ticker} อยู่ใน ${left.classroom} ส่วน ${right.ticker} อยู่ใน ${right.classroom} ให้เทียบเป็น exposure ของคนละห้อง ไม่ใช่การแข่งขันทำนายอนาคต`;
  if (left.classroom === right.classroom) return `${left.ticker} และ ${right.ticker} อยู่ ${left.classroom} เหมือนกัน แต่บทบาทต่างกัน: ${left.ticker} เป็น ${left.archetype} ส่วน ${right.ticker} เป็น ${right.archetype} บทเรียนคือห้องเดียวกันก็มีนิสัยนักเรียนต่างกันได้มาก`;
  return `${left.ticker} พาพลังแบบ ${left.archetype} จาก ${left.classroom} มาเจอกับ ${right.ticker} ที่เป็น ${right.archetype} จาก ${right.classroom} การวางข้างกันช่วยดูคาแรกเตอร์ธุรกิจ ระดับความซน และสไตล์การเรียนรู้ที่ต่างกัน`;
}

function describeClassroom(classroom, sectors) {
  const sectorLabel = sectors.length === 1 ? sectors[0] : "mixed academy";
  const descriptions = {
    "ห้องชิป AI": "ห้องพลังสูงของตัวเร่ง AI สถาปัตยกรรมชิป วัฏจักรหน่วยความจำ และการแข่งขันสาย semiconductor",
    "ห้องซอฟต์แวร์และคลาวด์": "ห้ององค์กรที่รวมคลาวด์ ฐานข้อมูล workflow และเครื่องมือทำงานให้เป็นระบบ",
    "ห้องเทคผู้บริโภค": "โถงแบรนด์และโปรดักต์ที่พูดเรื่องอุปกรณ์ รถไฟฟ้า ความภักดี และพฤติกรรมผู้ใช้",
    "ห้องแพลตฟอร์มและการค้า": "ปีกแพลตฟอร์มสุดคึกคัก มี search, ads, commerce, social, logistics และ cloud scale",
    "ชมรมข้อมูลและปัญญา": "ชมรมสายวิเคราะห์สำหรับ data platform, mission briefing, AI workflow และระบบข้อมูลซับซ้อน",
    "ห้องโครงสร้างพื้นฐาน": "เวิร์กช็อปหลังบ้านของ foundry, equipment, networking chip และกระดูกสันหลังของคอมพิวเตอร์ยุคใหม่",
    "ห้องกองทุนรวมเพื่อนเยอะ": "ห้องสำหรับเรียนรู้กลุ่มนักเรียนหลายคน แทนการดูบริษัทเดียว",
    "ชมรมปันผล": "ชมรมที่นิ่งขึ้น เน้นนิสัยคุณภาพ กระแสเงินสด และขนมประจำรอบแบบสายปันผล"
  };
  return descriptions[classroom] || `โถง ${sectorLabel} สำหรับนักเรียนที่มีนิสัยธุรกิจคล้ายกัน`;
}

function riskLabel(level) {
  return { Low: "ซนเบา", Medium: "ซนกลาง", High: "ซนมาก", "Very High": "ซนเทอร์โบ" }[level] || level;
}
