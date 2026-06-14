import { studentProfiles } from "../data/studentProfiles.js";

export function normalizeTicker(ticker = "") {
  return ticker.trim().toUpperCase();
}

export function getAllStudents() {
  return studentProfiles;
}

export function getStudentByTicker(ticker) {
  const normalized = normalizeTicker(ticker);
  return studentProfiles.find((profile) => profile.ticker === normalized);
}

export function getFeaturedStudents() {
  return studentProfiles.filter((profile) => profile.featured);
}

export function getStudentsByClassroom(classroom) {
  return studentProfiles.filter((profile) => profile.classroom === classroom);
}

export function getClassrooms() {
  return [...new Set(studentProfiles.map((profile) => profile.classroom))].sort();
}

export function getArchetypes() {
  return [...new Set(studentProfiles.map((profile) => profile.archetype))].sort();
}

export function getRiskLevels() {
  const rank = { Low: 1, Medium: 2, High: 3, "Very High": 4 };
  return [...new Set(studentProfiles.map((profile) => profile.riskLevel))].sort((a, b) => rank[a] - rank[b]);
}

export function getClassroomSummaries() {
  return getClassrooms().map((classroom) => {
    const students = getStudentsByClassroom(classroom);
    const sectors = [...new Set(students.map((student) => student.sector))];

    return {
      classroom,
      count: students.length,
      tickers: students.map((student) => student.ticker),
      description: describeClassroom(classroom, sectors)
    };
  });
}

export function filterStudents(filters = {}) {
  return studentProfiles.filter((profile) => {
    return (
      (!filters.classroom || profile.classroom === filters.classroom) &&
      (!filters.archetype || profile.archetype === filters.archetype) &&
      (!filters.riskLevel || profile.riskLevel === filters.riskLevel)
    );
  });
}

export function getSharedTags(left, right) {
  return left.tags.filter((tag) => right.tags.includes(tag));
}

export function getSharedClassmates(left, right) {
  return left.classmates.filter((ticker) => right.classmates.includes(ticker));
}

export function getSharedRivals(left, right) {
  return left.rivals.filter((ticker) => right.rivals.includes(ticker));
}

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
  const rawTickers = input
    .split(",")
    .map((ticker) => normalizeTicker(ticker))
    .filter(Boolean);
  const seen = new Set();
  const tickers = [];
  const duplicates = [];

  for (const ticker of rawTickers) {
    if (seen.has(ticker)) {
      duplicates.push(ticker);
    } else {
      seen.add(ticker);
      tickers.push(ticker);
    }
  }

  return { tickers, duplicates };
}

export function getStudentsByTickers(tickers) {
  return tickers.map((ticker) => getStudentByTicker(ticker)).filter(Boolean);
}

export function getInvalidTickers(tickers) {
  return tickers.filter((ticker) => !getStudentByTicker(ticker));
}

export function getDuplicateTickers(input = "") {
  return parseTickerList(input).duplicates;
}

export function getClassroomMix(students) {
  return countBy(students, "classroom");
}

export function getArchetypeMix(students) {
  return countBy(students, "archetype");
}

export function getRiskMix(students) {
  return countBy(students, "riskLevel");
}

export function getCommonThemes(students) {
  const tagCounts = new Map();
  for (const student of students) {
    for (const tag of student.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }

  return [...tagCounts.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag, count]) => ({ label: tag, count }));
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

  if (!classSize) {
    return "ใส่รหัสนักเรียนที่ถูกต้อง 3-5 คน เพื่ออ่านนิสัยของห้องนี้";
  }

  const classroomPhrase = topClassroom
    ? `เอนเอียงไปทาง ${topClassroom.label}`
    : "ผสมหลายโถงทางเดิน";
  const themePhrase = topTheme
    ? `ธีมที่ซ้ำกันคือ ${themes.slice(0, 3).map((theme) => theme.label).join(", ")}`
    : "ห้องนี้กระจายหลายธีม บทเรียนคือการดูว่าธุรกิจหลายแบบอยู่ร่วมกันอย่างไร";

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
  const themes = [
    ["ความคาดหวังเรื่อง AI", ["ai", "expectations"]],
    ["แรงกดดันด้านมูลค่า", ["valuation"]],
    ["การแข่งขัน", ["competition", "competitors", "rivals"]],
    ["วัฏจักรอุปสงค์", ["cyclical", "cycle", "demand"]],
    ["กฎระเบียบ", ["regulatory", "regulation"]],
    ["ความผันผวน", ["volatility", "swings"]]
  ];

  return themes
    .filter(([, keywords]) => keywords.some((keyword) => text.includes(keyword)))
    .map(([theme]) => theme);
}

export function getStudyNotes(students) {
  const classroomMix = getClassroomMix(students);
  const riskMix = getRiskMix(students);
  const themes = getCommonThemes(students);
  const notes = [
    "ห้องเรียนไหนโผล่ซ้ำมากกว่าหนึ่งครั้ง?",
    "มีนักเรียนหลายคนที่เจอวัฏจักรตลาดหรือเทคโนโลยีเดียวกันไหม?",
    "จุดที่ต้องระวังข้อไหนซ้ำกันในรายชื่อห้องนี้?"
  ];

  if (themes.some((theme) => theme.label.toLowerCase().includes("ai"))) {
    notes.push("ห้องนี้พึ่งพาความต้องการ AI และการลงทุนโครงสร้างพื้นฐานมากแค่ไหน?");
  }

  if (classroomMix[0]?.count >= 3) {
    notes.push(`ถ้าโถง ${classroomMix[0].label} เจอสัปดาห์สอบยาก อารมณ์ทั้งห้องจะเปลี่ยนอย่างไร?`);
  }

  if (getCount(riskMix, "Very High") > 0) {
    notes.push("นักเรียนคนไหนพาความซนเทอร์โบเข้ามาในห้อง?");
  }

  return notes.slice(0, 5);
}

export function compareStudents(left, right) {
  return {
    sameClassroom: left.classroom === right.classroom,
    sameArchetype: left.archetype === right.archetype,
    sameRiskLevel: left.riskLevel === right.riskLevel,
    sharedTags: getSharedTags(left, right),
    sharedClassmates: getSharedClassmates(left, right),
    sharedRivals: getSharedRivals(left, right),
    summary: buildComparisonSummary(left, right)
  };
}

function countBy(students, field) {
  const counts = new Map();
  for (const student of students) {
    counts.set(student[field], (counts.get(student[field]) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

function getCount(mix, label) {
  return mix.find((item) => item.label === label)?.count || 0;
}

export function searchStudents(query) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  return studentProfiles.filter((profile) => {
    return [profile.ticker, profile.companyName, profile.classroom, profile.archetype, profile.sector]
      .join(" ")
      .toLowerCase()
      .includes(needle);
  });
}

function buildComparisonSummary(left, right) {
  if (left.assetType === "ETF" && right.assetType === "ETF") {
    return `${left.ticker} และ ${right.ticker} เป็นแฟ้มแบบนักเรียนหมู่คณะทั้งคู่ แต่ ${left.ticker} อยู่ใน ${left.classroom} ส่วน ${right.ticker} อยู่ใน ${right.classroom} ให้เทียบเป็น exposure ของคนละห้อง ไม่ใช่การแข่งขันทำนายอนาคต`;
  }

  if (left.classroom === right.classroom) {
    return `${left.ticker} และ ${right.ticker} อยู่ ${left.classroom} เหมือนกัน แต่บทบาทต่างกัน: ${left.ticker} เป็น ${left.archetype} ส่วน ${right.ticker} เป็น ${right.archetype} บทเรียนคือห้องเดียวกันก็มีนิสัยนักเรียนต่างกันได้มาก`;
  }

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
    "ชมรมปันผล": "ชมรมที่นิ่งขึ้น เน้นนิสัยคุณภาพ กระแสเงินสด และขนมประจำรอบแบบสายปันผล",
    "ห้องการเงินและการจ่ายเงิน": "โถงของธนาคาร เครือข่ายบัตร ฟินเทค และผู้จัดการสินทรัพย์ที่ช่วยให้เงินเดินผ่านโรงเรียน",
    "ห้องพยาบาลและสุขภาพ": "ห้องสุขภาพที่รวมยา ประกัน เครื่องมือแล็บ และระบบบริการทางการแพทย์แบบย่อ",
    "ห้องแบรนด์และผู้บริโภค": "ห้องของร้านค้า แบรนด์ อาหาร เครื่องดื่ม และพฤติกรรมผู้บริโภคในชีวิตประจำวัน",
    "ลานพลังงานและอุตสาหกรรม": "ลานใหญ่ของพลังงาน เครื่องจักร การบิน และโครงการจริงที่มักเดินตามวัฏจักรเศรษฐกิจ"
  };

  return descriptions[classroom] || `โถง ${sectorLabel} สำหรับนักเรียนที่มีนิสัยธุรกิจคล้ายกัน`;
}
