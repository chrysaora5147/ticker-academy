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
    { left: "AMD", right: "NVDA", label: "Chip challenger vs AI star" },
    { left: "AAPL", right: "MSFT", label: "Brand ecosystem vs enterprise platform" },
    { left: "SPY", right: "QQQ", label: "Whole school vs tech honors" },
    { left: "GOOGL", right: "META", label: "Search lab vs social club" },
    { left: "TQQQ", right: "QQQ", label: "Turbo classroom vs base cohort" },
    { left: "AVGO", right: "TSM", label: "Infrastructure builder vs master workshop" }
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
    { name: "Tech Honors Room", tickers: ["AAPL", "MSFT", "GOOGL", "AMD", "QQQ"] },
    { name: "AI Chip Workshop", tickers: ["NVDA", "AMD", "AVGO", "TSM", "ASML"] },
    { name: "Broad + Dividend Classroom", tickers: ["SPY", "QQQ", "SCHD"] },
    { name: "Chaos Turbo Class", tickers: ["TQQQ", "QQQ", "TSLA"] },
    { name: "Data + Platform Club", tickers: ["GOOGL", "META", "PLTR", "CRM", "ORCL"] }
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
    return "Add 3 to 5 valid student IDs to build a classroom personality.";
  }

  const classroomPhrase = topClassroom
    ? `leans toward ${topClassroom.label}`
    : "has a mixed hallway setup";
  const themePhrase = topTheme
    ? `Shared themes include ${themes.slice(0, 3).map((theme) => theme.label).join(", ")}.`
    : "The class is spread across different themes, so the useful lesson is diversification of business stories.";

  return `This classroom has ${classSize} students and ${classroomPhrase}. The room feels ${riskMood.toLowerCase()}, with roles ranging from ${students[0].archetype} to ${students[classSize - 1].archetype}. ${themePhrase} This is a learning lens for studying overlap, concentration, and temperament, not a recommendation.`;
}

export function describeRiskMix(riskMix) {
  const highCount = getCount(riskMix, "High") + getCount(riskMix, "Very High");
  const mediumCount = getCount(riskMix, "Medium");
  const lowCount = getCount(riskMix, "Low");

  if (getCount(riskMix, "Very High") > 0 && highCount >= 2) return "Turbo-heavy";
  if (highCount >= mediumCount + lowCount) return "Mostly high-energy";
  if (lowCount > highCount && lowCount >= mediumCount) return "Defensive-leaning";
  return "Balanced";
}

export function getFragilePointThemes(students) {
  const text = students.flatMap((student) => student.weaknesses).join(" ").toLowerCase();
  const themes = [
    ["AI expectations", ["ai", "expectations"]],
    ["valuation pressure", ["valuation"]],
    ["competition", ["competition", "competitors", "rivals"]],
    ["cycle sensitivity", ["cyclical", "cycle", "demand"]],
    ["regulatory pressure", ["regulatory", "regulation"]],
    ["volatility", ["volatility", "swings"]]
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
    "Which classrooms show up more than once in this group?",
    "Are several students exposed to the same market or technology cycle?",
    "Which fragile points repeat across the roster?"
  ];

  if (themes.some((theme) => theme.label.toLowerCase().includes("ai"))) {
    notes.push("How much of this class depends on AI demand and infrastructure spending?");
  }

  if (classroomMix[0]?.count >= 3) {
    notes.push(`What happens to the class mood when the ${classroomMix[0].label} hallway has a rough exam week?`);
  }

  if (getCount(riskMix, "Very High") > 0) {
    notes.push("Which students bring turbo or very high-volatility temperament into the room?");
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
    return `${left.ticker} and ${right.ticker} are both cohort-style student files, but ${left.ticker} sits in ${left.classroom} while ${right.ticker} sits in ${right.classroom}. Compare them as different classroom exposures, not as a prediction contest.`;
  }

  if (left.classroom === right.classroom) {
    return `${left.ticker} and ${right.ticker} share the ${left.classroom}, but they carry different roles: ${left.ticker} is the ${left.archetype}, while ${right.ticker} is the ${right.archetype}. The useful lesson is how similar classrooms can still have very different student temperaments.`;
  }

  return `${left.ticker} brings ${left.archetype} energy from ${left.classroom}, while ${right.ticker} brings ${right.archetype} energy from ${right.classroom}. This side-by-side view is meant to highlight business character, risk temperament, and learning style differences.`;
}

function describeClassroom(classroom, sectors) {
  const sectorLabel = sectors.length === 1 ? sectors[0] : "mixed academy";
  const descriptions = {
    "AI Chip Workshop": "The high-energy workshop for AI accelerators, architecture lessons, memory cycles, and chip competition.",
    "Software & Cloud Lab": "The enterprise lab where cloud platforms, databases, workflows, and productivity systems get organized.",
    "Consumer Tech Hall": "The brand and product hallway for devices, electric machines, loyalty, and consumer behavior.",
    "Platform & Commerce Hall": "The busy platform wing for search, ads, commerce, social networks, logistics, and cloud scale.",
    "Data & Intelligence Club": "The analytical club for data platforms, mission briefings, AI workflows, and complex information systems.",
    "Infrastructure Workshop": "The precision workshop for foundries, equipment, networking chips, and the backbone of modern computing.",
    "ETF Cohort": "The cohort room for studying groups of students instead of only one company at a time.",
    "Dividend Club": "A steadier club focused on quality habits and regular allowance-style distributions."
  };

  return descriptions[classroom] || `A ${sectorLabel} hallway for students with similar academy habits.`;
}
