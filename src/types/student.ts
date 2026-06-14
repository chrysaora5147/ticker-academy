export type AssetType = "stock" | "ETF";

export type ReportCard = {
  growthEnergy: string;
  stability: string;
  moatStrength: string;
  valuationPressure: string;
  volatility: string;
  dividendFriendliness: string;
};

export type StudentProfile = {
  ticker: string;
  companyName: string;
  assetType: AssetType;
  classroom: string;
  sector: string;
  archetype: string;
  roleTitle: string;
  shortDescription: string;
  personality: string;
  oneLineStory: string;
  strengths: string[];
  weaknesses: string[];
  riskTemperament: string;
  riskLevel: "Low" | "Medium" | "High" | "Very High";
  reportCard: ReportCard;
  rivals: string[];
  classmates: string[];
  tags: string[];
  investorFit: string[];
  disclaimerNote: string;
  featured?: boolean;
};
