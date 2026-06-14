import { studentProfiles } from "../src/data/studentProfiles.js";

const expectedTickers = [
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

const forbiddenPatterns = [
  /\b(buy|sell|hold)\b/i,
  /\b(price\s+target|guaranteed\s+return|will\s+outperform|best\s+stock|optimal\s+portfolio)\b/i
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
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

assert(studentProfiles.length === expectedTickers.length, `Expected ${expectedTickers.length} profiles, found ${studentProfiles.length}`);

const seen = new Set();
for (const profile of studentProfiles) {
  for (const field of requiredFields) {
    assert(profile[field] !== undefined && profile[field] !== "", `${profile.ticker || "Unknown"} is missing ${field}`);
  }

  assert(expectedTickers.includes(profile.ticker), `${profile.ticker} is not part of the expected ticker set`);
  assert(!seen.has(profile.ticker), `Duplicate ticker: ${profile.ticker}`);
  seen.add(profile.ticker);

  assert(profile.classroom.trim(), `${profile.ticker} classroom must not be empty`);
  assert(profile.archetype.trim(), `${profile.ticker} archetype must not be empty`);
  assert(profile.riskTemperament.trim(), `${profile.ticker} riskTemperament must not be empty`);

  for (const field of ["strengths", "weaknesses", "rivals", "classmates", "tags", "investorFit"]) {
    assert(Array.isArray(profile[field]) && profile[field].length > 0, `${profile.ticker} ${field} must be a non-empty array`);
  }

  for (const field of reportFields) {
    assert(profile.reportCard[field], `${profile.ticker} reportCard is missing ${field}`);
  }

  for (const ticker of [...profile.rivals, ...profile.classmates]) {
    assert(expectedTickers.includes(ticker), `${profile.ticker} references unknown ticker ${ticker}`);
  }

  const text = profileText(profile);
  for (const pattern of forbiddenPatterns) {
    assert(!pattern.test(text), `${profile.ticker} contains recommendation-like language: ${pattern}`);
  }
}

console.log(`Validated ${studentProfiles.length} student profiles.`);
