import { studentProfiles } from "../src/data/studentProfiles.js";
import { getRecommendedComparisons, getRecommendedPortfolios } from "../src/lib/students.js";

const requiredOriginalTickers = [
  "NVDA",
  "AMD",
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "META",
  "TSLA",
  "AVGO",
  "TSM",
  "ASML",
  "MU",
  "ARM",
  "PLTR",
  "CRM",
  "ORCL",
  "QQQ",
  "SPY",
  "TQQQ",
  "SCHD"
];

const requiredFields = [
  "ticker",
  "companyName",
  "assetType",
  "classroom",
  "sector",
  "archetype",
  "roleTitle",
  "shortDescription",
  "personality",
  "oneLineStory",
  "strengths",
  "weaknesses",
  "riskTemperament",
  "riskLevel",
  "reportCard",
  "rivals",
  "classmates",
  "tags",
  "investorFit",
  "disclaimerNote"
];

const reportFields = [
  "growthEnergy",
  "stability",
  "moatStrength",
  "valuationPressure",
  "volatility",
  "dividendFriendliness"
];

const allowedGradeValues = new Set(["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-"]);
const allowedPressureValues = new Set(["Low", "Medium", "High", "Very High", "Variable"]);
const allowedVolatilityValues = new Set(["Low", "Medium", "High", "Very High"]);
const allowedDividendValues = new Set(["Low", "Medium", "High", "A", "A-", "B+", "B", "B-", "C+"]);

const demoStudentExamples = ["AMD", "NVDA", "AAPL", "V", "KO", "JPM", "SMH"];
const demoCompareExamples = [
  ["AMD", "NVDA"],
  ["SPY", "QQQ"],
  ["AAPL", "MSFT"],
  ["V", "MA"],
  ["KO", "PEP"]
];
const demoPortfolioExamples = [
  ["AAPL", "MSFT", "GOOGL", "AMD", "QQQ"],
  ["NVDA", "AMD", "AVGO", "TSM", "ASML"],
  ["SPY", "QQQ", "SCHD"],
  ["SPY", "QQQ", "SCHD", "VTI", "XLK"],
  ["NVDA", "AMD", "AVGO", "TSM", "SMH"]
];

const recommendationPatterns = [
  /\b(buy|sell|hold)\b/i,
  /\b(should|must|need to)\s+(buy|sell|hold)\b/i,
  /\b(price\s+target|guaranteed\s+return|will\s+outperform|best\s+stock|optimal\s+portfolio)\b/i
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertTextLength(value, minLength, message) {
  assert(typeof value === "string" && value.trim().length >= minLength, message);
}

function profileText(profile) {
  return [
    profile.roleTitle,
    profile.shortDescription,
    profile.personality,
    profile.oneLineStory,
    ...profile.strengths,
    ...profile.weaknesses,
    profile.riskTemperament,
    ...profile.investorFit,
    profile.disclaimerNote
  ].join(" ");
}

const tickers = new Set();

assert(studentProfiles.length >= requiredOriginalTickers.length, `Expected at least ${requiredOriginalTickers.length} profiles, found ${studentProfiles.length}`);

for (const profile of studentProfiles) {
  for (const field of requiredFields) {
    assert(profile[field] !== undefined && profile[field] !== "", `${profile.ticker || "Unknown"} is missing ${field}`);
  }

  assert(!tickers.has(profile.ticker), `Duplicate ticker: ${profile.ticker}`);
  tickers.add(profile.ticker);

  assert(profile.classroom.trim(), `${profile.ticker} classroom must not be empty`);
  assert(profile.archetype.trim(), `${profile.ticker} archetype must not be empty`);
  assert(profile.riskTemperament.trim(), `${profile.ticker} riskTemperament must not be empty`);
  assertTextLength(profile.roleTitle, 12, `${profile.ticker} roleTitle is too short`);
  assertTextLength(profile.shortDescription, 60, `${profile.ticker} shortDescription is too short`);
  assertTextLength(profile.personality, 55, `${profile.ticker} personality is too short`);
  assertTextLength(profile.oneLineStory, 70, `${profile.ticker} oneLineStory is too short`);
  assertTextLength(profile.riskTemperament, 35, `${profile.ticker} riskTemperament is too short`);
  assertTextLength(profile.disclaimerNote, 45, `${profile.ticker} disclaimerNote is too short`);

  for (const field of ["strengths", "weaknesses", "rivals", "classmates", "tags", "investorFit"]) {
    assert(Array.isArray(profile[field]) && profile[field].length > 0, `${profile.ticker} ${field} must be a non-empty array`);
  }

  for (const field of reportFields) {
    assert(profile.reportCard[field], `${profile.ticker} reportCard is missing ${field}`);
  }

  assert(allowedGradeValues.has(profile.reportCard.growthEnergy), `${profile.ticker} has invalid growthEnergy`);
  assert(allowedGradeValues.has(profile.reportCard.stability), `${profile.ticker} has invalid stability`);
  assert(allowedGradeValues.has(profile.reportCard.moatStrength), `${profile.ticker} has invalid moatStrength`);
  assert(allowedPressureValues.has(profile.reportCard.valuationPressure), `${profile.ticker} has invalid valuationPressure`);
  assert(allowedVolatilityValues.has(profile.reportCard.volatility), `${profile.ticker} has invalid volatility`);
  assert(allowedDividendValues.has(profile.reportCard.dividendFriendliness), `${profile.ticker} has invalid dividendFriendliness`);

  for (const classmate of profile.classmates) {
    assert(studentProfiles.some((item) => item.ticker === classmate), `${profile.ticker} has non-local classmate reference: ${classmate}`);
  }

  for (const rival of profile.rivals) {
    assert(studentProfiles.some((item) => item.ticker === rival), `${profile.ticker} has non-local rival reference: ${rival}`);
  }

  const text = profileText(profile);
  for (const pattern of recommendationPatterns) {
    assert(!pattern.test(text), `${profile.ticker} contains recommendation-like language matching ${pattern}`);
  }
}

for (const ticker of requiredOriginalTickers) {
  assert(tickers.has(ticker), `Missing expected ticker: ${ticker}`);
}

for (const pair of getRecommendedComparisons()) {
  assert(tickers.has(pair.left), `Recommended comparison left ticker is missing: ${pair.left}`);
  assert(tickers.has(pair.right), `Recommended comparison right ticker is missing: ${pair.right}`);
  assert(pair.left !== pair.right, `Recommended comparison cannot compare a ticker to itself: ${pair.left}`);
}

for (const classroom of getRecommendedPortfolios()) {
  assert(classroom.tickers.length >= 3, `Recommended portfolio has fewer than 3 tickers: ${classroom.name}`);
  assert(classroom.tickers.length <= 5, `Recommended portfolio has more than 5 tickers: ${classroom.name}`);
  for (const ticker of classroom.tickers) {
    assert(tickers.has(ticker), `Recommended portfolio ticker is missing: ${classroom.name} uses ${ticker}`);
  }
}

for (const ticker of demoStudentExamples) {
  assert(tickers.has(ticker), `Demo student example is missing: ${ticker}`);
}

for (const [left, right] of demoCompareExamples) {
  assert(tickers.has(left), `Demo compare left ticker is missing: ${left}`);
  assert(tickers.has(right), `Demo compare right ticker is missing: ${right}`);
}

for (const example of demoPortfolioExamples) {
  assert(example.length >= 3 && example.length <= 5, `Demo portfolio has invalid size: ${example.join(",")}`);
  for (const ticker of example) {
    assert(tickers.has(ticker), `Demo portfolio ticker is missing: ${ticker}`);
  }
}

console.log(`Validated ${studentProfiles.length} student profiles.`);
