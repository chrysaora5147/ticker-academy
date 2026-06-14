/** @typedef {import("../types/student").StudentProfile} StudentProfile */

/** @type {StudentProfile[]} */
const baseStudentProfiles = [
  {
    ticker: "NVDA",
    companyName: "NVIDIA Corporation",
    assetType: "stock",
    classroom: "AI Chip Workshop",
    sector: "Semiconductors",
    archetype: "AI Lab Star",
    roleTitle: "Accelerated Computing Prodigy",
    shortDescription: "A spotlight student whose chips help run many modern AI lessons.",
    personality: "Brilliant, intense, infrastructure-minded, and watched closely by the whole academy.",
    oneLineStory: "NVDA is the lab star setting the pace when the academy talks about AI homework and accelerated computing.",
    strengths: ["Large GPU ecosystem used by developers and data centers", "Strong position in AI infrastructure spending", "Software and hardware stack that makes the platform sticky"],
    weaknesses: ["Expectations can become very demanding", "Chip demand can shift when customers adjust spending", "Other students are working hard to reduce dependence on one supplier"],
    riskTemperament: "High-achieving lab star with a fast heartbeat.",
    riskLevel: "High",
    reportCard: { growthEnergy: "A+", stability: "B", moatStrength: "A", valuationPressure: "Very High", volatility: "High", dividendFriendliness: "Low" },
    rivals: ["AMD", "AVGO", "GOOGL"],
    classmates: ["AMD", "AVGO", "TSM", "ASML", "ARM"],
    tags: ["AI", "chips", "data center", "platform"],
    investorFit: ["Useful for studying AI infrastructure and platform effects", "Good case study for expectations versus execution", "Helpful when learning how hardware ecosystems become business moats"],
    disclaimerNote: "This profile is a simplified learning lens about NVDA's business character.",
    featured: true
  },
  {
    ticker: "AMD",
    companyName: "Advanced Micro Devices, Inc.",
    assetType: "stock",
    classroom: "AI Chip Workshop",
    sector: "Semiconductors",
    archetype: "Challenger Builder",
    roleTitle: "Ambitious Chip Contender",
    shortDescription: "A competitive chip student trying to win more desks in CPUs, GPUs, and AI accelerators.",
    personality: "Fast-moving, technical, scrappy, and sensitive to how quickly expectations change.",
    oneLineStory: "AMD is the challenger in the chip workshop, sprinting after larger AI leaders with a sharper toolkit each semester.",
    strengths: ["Strong CPU reputation across PCs and servers", "Credible data center and AI accelerator ambitions", "History of gaining share when execution improves"],
    weaknesses: ["Faces powerful platform competitors", "AI hopes can run ahead of visible results", "Hardware demand can cool quickly during cycle shifts"],
    riskTemperament: "Competitive sprinter with high-energy exam weeks.",
    riskLevel: "High",
    reportCard: { growthEnergy: "A-", stability: "B-", moatStrength: "B+", valuationPressure: "High", volatility: "High", dividendFriendliness: "Low" },
    rivals: ["NVDA", "ARM", "AVGO"],
    classmates: ["NVDA", "MU", "TSM", "ASML", "ARM"],
    tags: ["AI", "chips", "CPU", "GPU"],
    investorFit: ["Useful for learning challenger-versus-leader dynamics", "Good case study for semiconductor cycles", "Helpful for comparing product execution with market expectations"],
    disclaimerNote: "This profile explains AMD as an educational character, not as a forecast.",
    featured: true
  },
  {
    ticker: "AAPL",
    companyName: "Apple Inc.",
    assetType: "stock",
    classroom: "Consumer Tech Hall",
    sector: "Consumer Technology",
    archetype: "Premium Ecosystem Student",
    roleTitle: "Brand Loyalty Captain",
    shortDescription: "A polished consumer tech student with loyal users and a tightly connected device ecosystem.",
    personality: "Disciplined, premium, cash-generative, and careful about protecting the academy image.",
    oneLineStory: "AAPL is the student whose phone, watch, laptop, and services notebook all match perfectly.",
    strengths: ["Powerful brand loyalty and premium device positioning", "Integrated hardware, software, and services ecosystem", "Large cash generation from a global installed base"],
    weaknesses: ["Growth can feel mature compared with younger students", "Product cycles still matter, especially the iPhone", "Regulatory attention can challenge platform rules"],
    riskTemperament: "Composed honors student with premium habits.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "B", stability: "A-", moatStrength: "A", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Medium" },
    rivals: ["MSFT", "GOOGL", "AMZN"],
    classmates: ["MSFT", "GOOGL", "META", "SPY"],
    tags: ["brand", "devices", "services", "cash flow"],
    investorFit: ["Useful for studying consumer moats and ecosystem lock-in", "Good case study for mature mega-cap growth", "Helpful for comparing brand strength with platform regulation"],
    disclaimerNote: "This profile is a learning aid about business traits and market personality.",
    featured: true
  },
  {
    ticker: "MSFT",
    companyName: "Microsoft Corporation",
    assetType: "stock",
    classroom: "Software & Cloud Lab",
    sector: "Software",
    archetype: "Enterprise Class President",
    roleTitle: "Cloud and Productivity Leader",
    shortDescription: "A broad software student with strong seats in productivity tools, cloud infrastructure, and AI workflows.",
    personality: "Organized, durable, institution-friendly, and quietly ambitious across many school departments.",
    oneLineStory: "MSFT is the class president running the timetable, the cloud lab, and many of the academy's work tools.",
    strengths: ["Deep enterprise software relationships", "Large Azure cloud platform with AI distribution", "Multiple engines across productivity, security, gaming, and developer tools"],
    weaknesses: ["Very large size can make growth harder to surprise", "Cloud competition remains intense", "Regulators pay close attention to major platform students"],
    riskTemperament: "Steady leader with a very full schedule.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "A-", stability: "A", moatStrength: "A", valuationPressure: "High", volatility: "Medium", dividendFriendliness: "Medium" },
    rivals: ["GOOGL", "AMZN", "ORCL"],
    classmates: ["CRM", "ORCL", "GOOGL", "AMZN", "AAPL"],
    tags: ["cloud", "software", "AI", "enterprise"],
    investorFit: ["Useful for studying platform breadth", "Good case study for cloud and AI distribution", "Helpful for learning how enterprise software relationships create durability"],
    disclaimerNote: "The report card is a simplified educational view of MSFT's business character.",
    featured: true
  },
  {
    ticker: "GOOGL",
    companyName: "Alphabet Inc.",
    assetType: "stock",
    classroom: "Platform & Commerce Hall",
    sector: "Communication Services",
    archetype: "Search Lab Scholar",
    roleTitle: "Data and Discovery Specialist",
    shortDescription: "A data-rich platform student with search dominance, ads, YouTube, cloud, and many experiments.",
    personality: "Curious, technical, inventive, and occasionally scattered across too many lab projects.",
    oneLineStory: "GOOGL is the search lab scholar who knows where the answers are hidden and keeps testing new AI notebooks.",
    strengths: ["Search and advertising scale", "Deep AI research roots and data infrastructure", "YouTube and cloud add additional learning engines"],
    weaknesses: ["Advertising budgets can be cyclical", "AI may reshape search behavior over time", "Regulatory questions regularly visit the classroom"],
    riskTemperament: "Smart experimenter with a busy research desk.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "A-", stability: "A-", moatStrength: "A", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Low" },
    rivals: ["MSFT", "META", "AMZN"],
    classmates: ["META", "MSFT", "AMZN", "PLTR", "QQQ"],
    tags: ["search", "ads", "AI", "data"],
    investorFit: ["Useful for studying advertising platforms", "Good case study for AI disruption risk", "Helpful for comparing data advantage with regulatory pressure"],
    disclaimerNote: "This profile is educational storytelling about GOOGL's role in the academy.",
    featured: true
  },
  {
    ticker: "AMZN",
    companyName: "Amazon.com, Inc.",
    assetType: "stock",
    classroom: "Platform & Commerce Hall",
    sector: "Consumer Discretionary",
    archetype: "Campus Store Operator",
    roleTitle: "Commerce and Cloud Builder",
    shortDescription: "A relentless operator that runs the school store while also managing a huge server room.",
    personality: "Customer-obsessed, operational, restless, and willing to work through thin-margin homework.",
    oneLineStory: "AMZN handles academy supplies, moves them through the hallway, and rents space in the server closet.",
    strengths: ["AWS cloud leadership", "Massive commerce and logistics network", "Multiple business lines that can support each other"],
    weaknesses: ["Retail margins can stay thin", "Large investments can pressure near-term profits", "Regulatory scrutiny can challenge platform behavior"],
    riskTemperament: "Busy operator pushing many carts at once.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "A-", stability: "B+", moatStrength: "A-", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Low" },
    rivals: ["MSFT", "GOOGL", "META"],
    classmates: ["MSFT", "GOOGL", "META", "CRM", "QQQ"],
    tags: ["commerce", "cloud", "logistics", "platform"],
    investorFit: ["Useful for studying scale economics", "Good case study for cloud plus commerce models", "Helpful for learning how reinvestment can shape profitability"],
    disclaimerNote: "This profile simplifies AMZN's business personality for education.",
    featured: true
  },
  {
    ticker: "META",
    companyName: "Meta Platforms, Inc.",
    assetType: "stock",
    classroom: "Platform & Commerce Hall",
    sector: "Communication Services",
    archetype: "Social Club Captain",
    roleTitle: "Attention Network Leader",
    shortDescription: "A social platform student with massive attention networks, ads, messaging, and AI content tools.",
    personality: "Bold, social, profitable, experimental, and sometimes dramatic about side projects.",
    oneLineStory: "META is the social club captain who learned to focus after an expensive detour and now studies AI-powered attention.",
    strengths: ["Large social networks with strong engagement", "Powerful advertising machine", "AI tools can improve content discovery and ad relevance"],
    weaknesses: ["Ad cycles still affect the mood", "Privacy and regulation remain recurring exams", "Big experimental projects can make spending harder to read"],
    riskTemperament: "High-energy captain with a loud clubhouse.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "A-", stability: "B+", moatStrength: "A-", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Low" },
    rivals: ["GOOGL", "AMZN", "AAPL"],
    classmates: ["GOOGL", "AMZN", "AAPL", "PLTR", "QQQ"],
    tags: ["ads", "social", "AI", "platform"],
    investorFit: ["Useful for studying network effects", "Good case study for advertising platforms", "Helpful for comparing focus, spending, and platform risk"],
    disclaimerNote: "This profile is an educational summary of META's business temperament.",
    featured: true
  },
  {
    ticker: "TSLA",
    companyName: "Tesla, Inc.",
    assetType: "stock",
    classroom: "Consumer Tech Hall",
    sector: "Consumer Discretionary",
    archetype: "Electric Science Student",
    roleTitle: "Volatile Innovation Builder",
    shortDescription: "An inventive consumer tech student mixing electric vehicles, energy, software, and autonomy ideas.",
    personality: "Ambitious, polarizing, fast-changing, and rarely quiet during exam season.",
    oneLineStory: "TSLA is the electric science student whose projects can impress the room and rattle the lab table.",
    strengths: ["Recognized electric vehicle brand", "Manufacturing scale and direct customer relationship", "Optionality across energy storage, software, and autonomy research"],
    weaknesses: ["Auto margins can compress", "Competition keeps expanding", "Narrative swings can become very intense"],
    riskTemperament: "Dramatic inventor with a volatile lab schedule.",
    riskLevel: "High",
    reportCard: { growthEnergy: "A-", stability: "C+", moatStrength: "B+", valuationPressure: "High", volatility: "Very High", dividendFriendliness: "Low" },
    rivals: ["AAPL", "AMZN", "NVDA"],
    classmates: ["AAPL", "AMZN", "NVDA", "QQQ"],
    tags: ["EV", "energy", "software", "volatility"],
    investorFit: ["Useful for studying narrative risk", "Good case study for disruptive brands", "Helpful for comparing innovation hopes with execution pressure"],
    disclaimerNote: "This profile does not forecast TSLA's future business outcome."
  },
  {
    ticker: "AVGO",
    companyName: "Broadcom Inc.",
    assetType: "stock",
    classroom: "Infrastructure Workshop",
    sector: "Semiconductors",
    archetype: "Backbone Builder",
    roleTitle: "Infrastructure Compounder",
    shortDescription: "A practical infrastructure student supplying chips and enterprise software that many systems depend on.",
    personality: "Disciplined, acquisitive, cash-flow focused, and less flashy than the AI spotlight students.",
    oneLineStory: "AVGO is the backbone builder quietly keeping the academy network, switches, and software closets running.",
    strengths: ["Broad exposure to networking and custom silicon", "Infrastructure software cash flows", "Disciplined acquisition playbook"],
    weaknesses: ["Large integrations can be complex", "Semiconductor demand still cycles", "Important customers can shape results more than beginners expect"],
    riskTemperament: "Serious builder with a heavy technical toolkit.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "B+", stability: "B+", moatStrength: "A-", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Medium" },
    rivals: ["NVDA", "AMD", "ASML"],
    classmates: ["NVDA", "AMD", "TSM", "ASML", "ARM"],
    tags: ["chips", "infrastructure", "software", "cash flow"],
    investorFit: ["Useful for studying infrastructure businesses", "Good case study for acquisition-led compounding", "Helpful for comparing flashy growth with durable cash flows"],
    disclaimerNote: "This character profile is a simplified view of AVGO's business traits."
  },
  {
    ticker: "TSM",
    companyName: "Taiwan Semiconductor Manufacturing Company Limited",
    assetType: "stock",
    classroom: "Infrastructure Workshop",
    sector: "Semiconductors",
    archetype: "Master Foundry Student",
    roleTitle: "Advanced Chip Manufacturer",
    shortDescription: "A precision manufacturing student that turns advanced chip designs into real hardware for many classmates.",
    personality: "Precise, essential, globally important, and quietly excellent under pressure.",
    oneLineStory: "TSM is the master workshop student trusted to build the academy's most delicate chip projects.",
    strengths: ["Leading foundry scale and manufacturing know-how", "Trusted partner for many advanced chip designers", "Critical position in global technology supply chains"],
    weaknesses: ["Geopolitical risk is important to understand", "Manufacturing requires heavy capital spending", "Customer demand cycles can affect factory utilization"],
    riskTemperament: "Precise craftsperson under a global spotlight.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "A-", stability: "B+", moatStrength: "A", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Medium" },
    rivals: ["ASML", "AVGO", "NVDA"],
    classmates: ["NVDA", "AMD", "ASML", "ARM", "AVGO"],
    tags: ["foundry", "chips", "manufacturing", "supply chain"],
    investorFit: ["Useful for studying technology supply chains", "Good case study for manufacturing moats", "Helpful for comparing chip designers with chip builders"],
    disclaimerNote: "This profile highlights TSM's academy role without personalizing decisions."
  },
  {
    ticker: "ASML",
    companyName: "ASML Holding N.V.",
    assetType: "stock",
    classroom: "Infrastructure Workshop",
    sector: "Semiconductors",
    archetype: "Rare Machine Keeper",
    roleTitle: "EUV Tool Specialist",
    shortDescription: "A rare equipment student whose machines help make the most advanced chips possible.",
    personality: "Specialized, patient, hard to replace, and technically elite.",
    oneLineStory: "ASML guards the rare machines that the chip academy cannot easily copy.",
    strengths: ["Unique position in EUV lithography", "Deep relationships with leading chip manufacturers", "High technical barriers around advanced equipment"],
    weaknesses: ["Export restrictions can shape demand", "Orders can be lumpy across chip cycles", "Customer capital spending decisions matter"],
    riskTemperament: "Rare specialist with a long waiting list.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "B+", stability: "B+", moatStrength: "A", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Low" },
    rivals: ["TSM", "AVGO", "NVDA"],
    classmates: ["TSM", "NVDA", "AMD", "MU", "ARM"],
    tags: ["equipment", "chips", "EUV", "supply chain"],
    investorFit: ["Useful for studying bottleneck businesses", "Good case study for technical moats", "Helpful for learning how equipment cycles differ from product cycles"],
    disclaimerNote: "This profile uses simplified business traits for academy-style learning."
  },
  {
    ticker: "MU",
    companyName: "Micron Technology, Inc.",
    assetType: "stock",
    classroom: "AI Chip Workshop",
    sector: "Semiconductors",
    archetype: "Memory Cycle Student",
    roleTitle: "DRAM and NAND Specialist",
    shortDescription: "A memory chip student whose grades can swing with supply, demand, and pricing cycles.",
    personality: "Useful, cyclical, emotionally sensitive, and important to the computing supply chain.",
    oneLineStory: "MU remembers everything, but its classroom mood can change quickly when the memory cycle turns.",
    strengths: ["Exposure to DRAM and NAND memory", "AI systems can increase demand for high-performance memory", "Important supplier for computing and data center hardware"],
    weaknesses: ["Memory pricing is highly cyclical", "Capital spending needs can be heavy", "Margins can move sharply when supply and demand shift"],
    riskTemperament: "Cyclical student with big mood swings.",
    riskLevel: "High",
    reportCard: { growthEnergy: "B+", stability: "C+", moatStrength: "B", valuationPressure: "Medium", volatility: "High", dividendFriendliness: "Low" },
    rivals: ["NVDA", "AMD", "ASML"],
    classmates: ["NVDA", "AMD", "ASML", "TSM", "ARM"],
    tags: ["memory", "chips", "cyclical", "AI"],
    investorFit: ["Useful for studying semiconductor cycles", "Good case study for supply-demand swings", "Helpful for learning how commodity-like technology differs from platform moats"],
    disclaimerNote: "This profile is a simplified learning tool about MU's cycle-sensitive character."
  },
  {
    ticker: "ARM",
    companyName: "Arm Holdings plc",
    assetType: "stock",
    classroom: "AI Chip Workshop",
    sector: "Semiconductors",
    archetype: "Blueprint Designer",
    roleTitle: "Chip Architecture Licensor",
    shortDescription: "A design-focused student whose chip blueprints appear across phones, devices, and data center ideas.",
    personality: "Elegant, licensing-savvy, strategic, and valued by many hardware classmates.",
    oneLineStory: "ARM sketches the blueprints that many chip students use before building their own projects.",
    strengths: ["Widely used chip architecture", "Capital-light licensing model", "Potential expansion from mobile devices into data center workloads"],
    weaknesses: ["Expectations can be demanding", "Partner adoption drives the pace of growth", "Alternative architectures remain important to study"],
    riskTemperament: "Elegant designer with a high-expectation notebook.",
    riskLevel: "High",
    reportCard: { growthEnergy: "A-", stability: "B", moatStrength: "A-", valuationPressure: "High", volatility: "High", dividendFriendliness: "Low" },
    rivals: ["AMD", "NVDA", "TSM"],
    classmates: ["NVDA", "AMD", "TSM", "ASML", "MU"],
    tags: ["architecture", "licensing", "chips", "AI"],
    investorFit: ["Useful for studying licensing models", "Good case study for capital-light technology", "Helpful for comparing architecture influence with manufacturing ownership"],
    disclaimerNote: "This character profile does not judge ARM's market value."
  },
  {
    ticker: "PLTR",
    companyName: "Palantir Technologies Inc.",
    assetType: "stock",
    classroom: "Data & Intelligence Club",
    sector: "Software",
    archetype: "Secret Data Student",
    roleTitle: "Operational Intelligence Specialist",
    shortDescription: "A data platform student helping organizations turn messy information into usable mission briefings.",
    personality: "Intense, analytical, mission-driven, and a little theatrical in the hallway.",
    oneLineStory: "PLTR is the secret data club student who converts chaotic files into a confident briefing folder.",
    strengths: ["Distinct data platform story", "Government and commercial use cases", "Strong connection to AI-enabled decision workflows"],
    weaknesses: ["Expectations can rise quickly around the story", "Sales cycles can be complex", "Narrative excitement can move faster than fundamentals"],
    riskTemperament: "Mysterious strategist with sharp swings.",
    riskLevel: "High",
    reportCard: { growthEnergy: "A-", stability: "B-", moatStrength: "B+", valuationPressure: "High", volatility: "High", dividendFriendliness: "Low" },
    rivals: ["MSFT", "CRM", "ORCL"],
    classmates: ["GOOGL", "MSFT", "CRM", "ORCL", "META"],
    tags: ["AI", "data", "software", "analytics"],
    investorFit: ["Useful for studying software narratives", "Good case study for AI platform enthusiasm", "Helpful for comparing growth stories with execution evidence"],
    disclaimerNote: "This is an educational simplification of PLTR's academy role."
  },
  {
    ticker: "CRM",
    companyName: "Salesforce, Inc.",
    assetType: "stock",
    classroom: "Software & Cloud Lab",
    sector: "Software",
    archetype: "Workflow Organizer",
    roleTitle: "Customer Relationship Monitor",
    shortDescription: "A software student that keeps customer notes, sales pipelines, and business workflows organized.",
    personality: "Organized, enterprise-focused, acquisition-tested, and increasingly careful about efficiency.",
    oneLineStory: "CRM keeps the academy's customer notebook tidy and reminds everyone to follow up after class.",
    strengths: ["Large CRM ecosystem", "Deep enterprise customer relationships", "Improved focus on margins and operational discipline"],
    weaknesses: ["Growth is more mature than younger software students", "Enterprise software competition is constant", "Past acquisitions can make the backpack heavy"],
    riskTemperament: "Organized student learning to travel lighter.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "B", stability: "B+", moatStrength: "B+", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Low" },
    rivals: ["MSFT", "ORCL", "PLTR"],
    classmates: ["MSFT", "ORCL", "PLTR", "GOOGL", "AMZN"],
    tags: ["CRM", "software", "enterprise", "workflow"],
    investorFit: ["Useful for studying SaaS maturity", "Good case study for enterprise customer retention", "Helpful for comparing growth and margin discipline"],
    disclaimerNote: "This profile describes CRM's learning role in the software hallway."
  },
  {
    ticker: "ORCL",
    companyName: "Oracle Corporation",
    assetType: "stock",
    classroom: "Software & Cloud Lab",
    sector: "Software",
    archetype: "Database Archivist",
    roleTitle: "Enterprise Database Keeper",
    shortDescription: "A veteran software student with deep database roots and newer cloud infrastructure ambitions.",
    personality: "Experienced, durable, enterprise-heavy, and more competitive than some classmates expect.",
    oneLineStory: "ORCL is the database archivist who still knows where the academy's old records are stored.",
    strengths: ["Deep enterprise database position", "Sticky customer relationships", "Cloud infrastructure ambitions tied to existing customers"],
    weaknesses: ["Legacy perception can be hard to shake", "Cloud leaders are strong classmates", "Debt and acquisitions can shape flexibility"],
    riskTemperament: "Veteran student with a serious archive cabinet.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "B", stability: "B+", moatStrength: "B+", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Medium" },
    rivals: ["MSFT", "AMZN", "CRM"],
    classmates: ["MSFT", "CRM", "PLTR", "GOOGL", "AMZN"],
    tags: ["database", "cloud", "enterprise", "software"],
    investorFit: ["Useful for studying legacy-to-cloud transitions", "Good case study for sticky enterprise systems", "Helpful for comparing durable databases with newer software platforms"],
    disclaimerNote: "This profile is an academy-style summary of ORCL's business character."
  },
  {
    ticker: "QQQ",
    companyName: "Invesco QQQ Trust",
    assetType: "ETF",
    classroom: "ETF Cohort",
    sector: "ETF",
    archetype: "Tech Honors Cohort",
    roleTitle: "Growth-Heavy Classroom Group",
    shortDescription: "A Nasdaq-heavy cohort filled with many large technology and growth-oriented students.",
    personality: "Ambitious, innovation-heavy, popular, and sensitive to growth expectations.",
    oneLineStory: "QQQ is the tech honors cohort where many famous growth students sit together.",
    strengths: ["Broad access to major Nasdaq-100 companies", "Simple way to study a tech-heavy group", "Exposure to innovation themes across several large students"],
    weaknesses: ["Concentrated in large technology leaders", "Sensitive to rates and valuation pressure", "Less defensive than broader or dividend-focused cohorts"],
    riskTemperament: "Honors class with a fast curriculum.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "A-", stability: "B", moatStrength: "B+", valuationPressure: "High", volatility: "Medium", dividendFriendliness: "Low" },
    rivals: ["SPY", "SCHD", "TQQQ"],
    classmates: ["TQQQ", "SPY", "AAPL", "MSFT", "NVDA"],
    tags: ["ETF", "growth", "technology", "Nasdaq"],
    investorFit: ["Useful for studying index composition", "Good case study for concentrated growth exposure", "Helpful for comparing one cohort with individual student files"],
    disclaimerNote: "ETF profiles describe classroom exposure in simplified educational terms.",
    featured: true
  },
  {
    ticker: "SPY",
    companyName: "SPDR S&P 500 ETF Trust",
    assetType: "ETF",
    classroom: "ETF Cohort",
    sector: "ETF",
    archetype: "Whole School Cohort",
    roleTitle: "Broad Market Homeroom",
    shortDescription: "A broad cohort representing many large U.S. companies across different academy hallways.",
    personality: "Balanced, widely followed, diversified, and less personality-driven than a single stock student.",
    oneLineStory: "SPY is the whole-school homeroom where many of the largest U.S. students show up for attendance.",
    strengths: ["Broad large-cap exposure", "Simple benchmark for market learning", "Diversified across many sectors"],
    weaknesses: ["Still influenced by mega-cap leaders", "Not immune to market drawdowns", "Less focused on any single innovation theme"],
    riskTemperament: "Balanced cohort with market-wide moods.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "B", stability: "B+", moatStrength: "B", valuationPressure: "Medium", volatility: "Medium", dividendFriendliness: "Medium" },
    rivals: ["QQQ", "SCHD", "TQQQ"],
    classmates: ["QQQ", "SCHD", "AAPL", "MSFT", "AMZN"],
    tags: ["ETF", "broad market", "S&P 500", "diversified"],
    investorFit: ["Useful for studying benchmarks", "Good case study for broad market exposure", "Helpful for comparing single students with a full cohort"],
    disclaimerNote: "This profile uses a broad classroom lens for education."
  },
  {
    ticker: "TQQQ",
    companyName: "ProShares UltraPro QQQ",
    assetType: "ETF",
    classroom: "ETF Cohort",
    sector: "ETF",
    archetype: "Turbo Cohort",
    roleTitle: "Leveraged Tech Sprinter",
    shortDescription: "A leveraged ETF student designed for amplified daily movement, not a calm classroom seat.",
    personality: "Explosive, restless, advanced-risk, and built for lessons about leverage mechanics.",
    oneLineStory: "TQQQ is the turbo cohort that sprints multiple laps when the tech honors class jogs one.",
    strengths: ["Clear teaching example for leverage", "Amplifies Nasdaq-100 daily moves", "Useful case study for path dependency and compounding effects"],
    weaknesses: ["Very high volatility", "Daily reset mechanics can create drag over time", "Not a simple long-term copy of QQQ"],
    riskTemperament: "Turbo sprinter with no quiet mode and very little patience for calm hallways.",
    riskLevel: "Very High",
    reportCard: { growthEnergy: "A", stability: "C", moatStrength: "C", valuationPressure: "Variable", volatility: "Very High", dividendFriendliness: "Low" },
    rivals: ["QQQ", "SPY", "SCHD"],
    classmates: ["QQQ", "SPY", "NVDA", "TSLA", "AMD"],
    tags: ["ETF", "leveraged", "technology", "volatility"],
    investorFit: ["Useful for advanced lessons about leverage", "Good case study for daily reset mechanics", "Helpful for understanding why volatility temperament matters"],
    disclaimerNote: "Leveraged ETF profiles are educational examples about structure and risk."
  },
  {
    ticker: "SCHD",
    companyName: "Schwab U.S. Dividend Equity ETF",
    assetType: "ETF",
    classroom: "Dividend Club",
    sector: "ETF",
    archetype: "Snack Distributor",
    roleTitle: "Dividend-Focused Cohort",
    shortDescription: "A dividend-oriented cohort that favors quality habits, cash generation, and regular allowance-style distributions.",
    personality: "Steady, income-aware, quality-focused, and less flashy than the growth hallway.",
    oneLineStory: "SCHD is the dividend club that prefers regular snacks and tidy homework over dramatic science fairs.",
    strengths: ["Dividend-oriented discipline", "Quality and cash-flow focus", "Less dependent on pure growth narratives"],
    weaknesses: ["Can trail high-growth tech rallies", "Dividend focus does not remove market risk", "Sector tilts can shape results"],
    riskTemperament: "Steady club member with an allowance calendar.",
    riskLevel: "Medium",
    reportCard: { growthEnergy: "C+", stability: "B+", moatStrength: "B", valuationPressure: "Low", volatility: "Medium", dividendFriendliness: "A" },
    rivals: ["QQQ", "SPY", "TQQQ"],
    classmates: ["SPY", "QQQ", "AAPL", "MSFT"],
    tags: ["ETF", "dividend", "quality", "cash flow"],
    investorFit: ["Useful for studying dividend-focused cohorts", "Good case study for quality and income style", "Helpful for comparing calmer ETF characters with growth-heavy cohorts"],
    disclaimerNote: "This educational profile describes SCHD's classroom style, not personal suitability."
  },
{
  ticker: "QCOM",
  companyName: "QUALCOMM Incorporated",
  assetType: "stock",
  classroom: "AI Chip Workshop",
  sector: "Semiconductors",
  archetype: "เด็กชิปมือถือสายเชื่อมต่อ",
  roleTitle: "นักออกแบบสัญญาณไร้สาย",
  shortDescription: "เด็กชิปที่ช่วยให้มือถือ อุปกรณ์ และรถบางรุ่นคุยกับโลกไร้สายได้ลื่นขึ้น",
  personality: "คล่องตัว ชอบมาตรฐานการสื่อสาร และมีนิสัยพึ่งรอบสินค้าในห้องมือถืออยู่บ้าง",
  oneLineStory: "QCOM คือเด็กชิปไร้สายที่ถือสมุด 5G เดินผ่านทั้งห้องมือถือ อุปกรณ์ และรถเชื่อมต่อ",
  strengths: [
    "ความรู้ด้าน modem และ wireless IP",
    "มีบทบาทใน ecosystem มือถือและอุปกรณ์เชื่อมต่อ",
    "รายได้จากชิปและ licensing ทำให้มีหลายมุมให้ศึกษา"
  ],
  weaknesses: [
    "รอบมือถืออาจทำให้บรรยากาศแกว่ง",
    "ลูกค้ารายใหญ่มีอิทธิพลต่อการบ้าน",
    "การแข่งขันชิปประหยัดพลังงานยังเข้มข้น"
  ],
  riskTemperament: "เด็กชิปมือถือสายเชื่อมต่อ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "AAPL",
    "INTC",
    "MRVL"
  ],
  classmates: [
    "NVDA",
    "AMD",
    "INTC",
    "MRVL",
    "TXN"
  ],
  tags: [
    "chips",
    "wireless",
    "5G",
    "mobile"
  ],
  investorFit: [
    "เรียนรู้ธุรกิจชิปไร้สาย",
    "ดูความสัมพันธ์ระหว่าง IP กับสินค้า",
    "เข้าใจวัฏจักรอุปกรณ์ผู้บริโภค"
  ],
  disclaimerNote: "แฟ้มของ QCOM เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "INTC",
  companyName: "Intel Corporation",
  assetType: "stock",
  classroom: "AI Chip Workshop",
  sector: "Semiconductors",
  archetype: "รุ่นพี่ชิปที่กำลังซ่อมแล็บ",
  roleTitle: "นักสร้าง CPU และโรงงาน",
  shortDescription: "เด็กชิปรุ่นเก๋าที่กำลังพยายามจัดโต๊ะใหม่ทั้งสินค้าและโรงงานผลิต",
  personality: "มีประวัติยาว แข็งแรงบางวิชา แต่ช่วงนี้ต้องส่งงาน turnaround หลายเล่มพร้อมกัน",
  oneLineStory: "INTC คือรุ่นพี่ห้องชิปที่เคยครองกระดาน และตอนนี้กำลังซ่อมแล็บให้กลับมาทันเพื่อน",
  strengths: [
    "ฐาน CPU และลูกค้าองค์กรยังสำคัญ",
    "มีความพยายามด้าน foundry และ manufacturing",
    "ชื่อแบรนด์เป็นที่รู้จักในพีซีและเซิร์ฟเวอร์"
  ],
  weaknesses: [
    "การแข่งขันจาก AMD และ ARM กดดัน",
    "การปรับโรงงานใช้เงินและเวลา",
    "ความเชื่อมั่นต้องค่อย ๆ สร้างใหม่"
  ],
  riskTemperament: "รุ่นพี่ชิปที่กำลังซ่อมแล็บ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "B-",
    stability: "C+",
    moatStrength: "B",
    valuationPressure: "Medium",
    volatility: "High",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "AMD",
    "NVDA",
    "TSM"
  ],
  classmates: [
    "AMD",
    "QCOM",
    "TXN",
    "ADI",
    "ON"
  ],
  tags: [
    "chips",
    "CPU",
    "foundry",
    "turnaround"
  ],
  investorFit: [
    "เรียนรู้ธุรกิจ turnaround",
    "ดูความเสี่ยงจากการลงทุนโรงงาน",
    "เทียบผู้นำเดิมกับผู้ท้าชิง"
  ],
  disclaimerNote: "แฟ้มของ INTC เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "MRVL",
  companyName: "Marvell Technology, Inc.",
  assetType: "stock",
  classroom: "AI Chip Workshop",
  sector: "Semiconductors",
  archetype: "เด็กชิปเครือข่ายสายดาต้าเซ็นเตอร์",
  roleTitle: "นักต่อท่อข้อมูล",
  shortDescription: "เด็กชิปที่ช่วยต่อทางเดินข้อมูลใน data center, networking และ custom silicon",
  personality: "เทคนิคแน่น พลังสูง และอารมณ์ขึ้นลงตามความคาดหวังของห้อง AI infrastructure",
  oneLineStory: "MRVL คือเด็กต่อท่อข้อมูลที่ช่วยให้ห้อง AI ส่งงานผ่านเครือข่ายได้เร็วขึ้น",
  strengths: [
    "เกี่ยวข้องกับ data center และ networking",
    "มีบทเรียนเรื่อง custom silicon",
    "ได้เรียนรู้โครงสร้างพื้นฐาน AI จากมุมชิปเชื่อมต่อ"
  ],
  weaknesses: [
    "ความคาดหวัง AI อาจสูงกว่าจังหวะรายได้",
    "ตลาด networking มีวัฏจักร",
    "ต้องแข่งกับเพื่อนชิปหลายสาย"
  ],
  riskTemperament: "เด็กชิปเครือข่ายสายดาต้าเซ็นเตอร์ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "AVGO",
    "NVDA",
    "QCOM"
  ],
  classmates: [
    "NVDA",
    "AMD",
    "AVGO",
    "QCOM",
    "SMH"
  ],
  tags: [
    "AI",
    "networking",
    "data center",
    "chips"
  ],
  investorFit: [
    "เรียนรู้ data center plumbing",
    "ดู custom silicon",
    "เข้าใจความคาดหวังในธีม AI infrastructure"
  ],
  disclaimerNote: "แฟ้มของ MRVL เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "LRCX",
  companyName: "Lam Research Corporation",
  assetType: "stock",
  classroom: "Infrastructure Workshop",
  sector: "Semiconductors",
  archetype: "เด็กเครื่องมือชิปสายโรงงาน",
  roleTitle: "ผู้ดูแลโต๊ะผลิตเวเฟอร์",
  shortDescription: "เด็กเครื่องมือโรงงานที่ช่วยให้เพื่อนชิปผลิตชิ้นงานละเอียดขึ้น",
  personality: "ละเอียด รอบคอบ และผูกกับรอบลงทุนโรงงานของอุตสาหกรรมชิป",
  oneLineStory: "LRCX คือเด็กเครื่องมือที่ยืนหลังห้องผลิต ช่วยให้แผ่นเวเฟอร์ผ่านการบ้านยาก ๆ",
  strengths: [
    "เชี่ยวชาญเครื่องมือผลิต semiconductor",
    "เกี่ยวข้องกับ memory และ logic fabrication",
    "มีบทเรียนเรื่อง capex cycle ของโรงงานชิป"
  ],
  weaknesses: [
    "คำสั่งซื้อขึ้นลงตามวัฏจักรโรงงาน",
    "ข้อจำกัดส่งออกอาจกระทบจังหวะ",
    "ลูกค้ารายใหญ่มีน้ำหนักมาก"
  ],
  riskTemperament: "เด็กเครื่องมือชิปสายโรงงาน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "B",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "AMAT",
    "KLAC",
    "ASML"
  ],
  classmates: [
    "ASML",
    "AMAT",
    "KLAC",
    "TSM",
    "SOXX"
  ],
  tags: [
    "equipment",
    "chips",
    "manufacturing",
    "cycle"
  ],
  investorFit: [
    "เรียนรู้เครื่องมือผลิตชิป",
    "ดูวัฏจักร capex",
    "เทียบผู้ผลิตอุปกรณ์กับผู้ออกแบบชิป"
  ],
  disclaimerNote: "แฟ้มของ LRCX เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "AMAT",
  companyName: "Applied Materials, Inc.",
  assetType: "stock",
  classroom: "Infrastructure Workshop",
  sector: "Semiconductors",
  archetype: "เด็กเครื่องมือสารพัดประโยชน์",
  roleTitle: "ช่างอุปกรณ์โรงงานชิป",
  shortDescription: "เด็กเครื่องมือที่มีอุปกรณ์หลายแบบสำหรับห้องผลิต semiconductor",
  personality: "กว้าง ขยัน และเป็นตัวอย่างดีของธุรกิจหลังบ้านที่สำคัญต่อทั้งห้องชิป",
  oneLineStory: "AMAT คือเด็กช่างสารพัดที่ถือกล่องเครื่องมือใหญ่ให้โรงงานชิปหลายโต๊ะยืมใช้",
  strengths: [
    "เครื่องมือหลากหลายสำหรับการผลิตชิป",
    "ได้ประโยชน์จากความซับซ้อนของ manufacturing",
    "ฐานลูกค้ากว้างในอุตสาหกรรม semiconductor"
  ],
  weaknesses: [
    "ผูกกับรอบลงทุนโรงงาน",
    "การแข่งขันกับเครื่องมือเฉพาะทาง",
    "นโยบายการค้าสามารถเปลี่ยนจังหวะงานได้"
  ],
  riskTemperament: "เด็กเครื่องมือสารพัดประโยชน์ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "B+",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "LRCX",
    "KLAC",
    "ASML"
  ],
  classmates: [
    "LRCX",
    "KLAC",
    "ASML",
    "TSM",
    "SOXX"
  ],
  tags: [
    "equipment",
    "chips",
    "manufacturing",
    "infrastructure"
  ],
  investorFit: [
    "เรียนรู้ supply chain ชิป",
    "ดูธุรกิจเครื่องมือโรงงาน",
    "เข้าใจว่าหลังบ้านสร้างความได้เปรียบอย่างไร"
  ],
  disclaimerNote: "แฟ้มของ AMAT เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "KLAC",
  companyName: "KLA Corporation",
  assetType: "stock",
  classroom: "Infrastructure Workshop",
  sector: "Semiconductors",
  archetype: "เด็กตรวจการบ้านชิป",
  roleTitle: "ผู้ตรวจคุณภาพเวเฟอร์",
  shortDescription: "เด็กที่ช่วยตรวจข้อผิดพลาดในการผลิตชิปก่อนงานจะหลุดไปไกล",
  personality: "พิถีพิถัน สำคัญต่อคุณภาพ และมักถูกมองว่าเป็นนักเรียนหลังบ้านที่ขาดไม่ได้",
  oneLineStory: "KLAC คือเด็กตรวจการบ้านในโรงงานชิป คอยหา error ก่อนที่เพื่อนจะเสียคะแนนทั้งแผ่น",
  strengths: [
    "บทบาทสำคัญใน process control",
    "ความซับซ้อนของชิปทำให้การตรวจสอบยิ่งสำคัญ",
    "ธุรกิจมีลักษณะเฉพาะทางสูง"
  ],
  weaknesses: [
    "ยังผูกกับ capex cycle",
    "ลูกค้าชิปชะลองบได้",
    "ข้อจำกัดด้านภูมิรัฐศาสตร์อาจมีผล"
  ],
  riskTemperament: "เด็กตรวจการบ้านชิป มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "B+",
    moatStrength: "A",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "AMAT",
    "LRCX",
    "ASML"
  ],
  classmates: [
    "AMAT",
    "LRCX",
    "ASML",
    "TSM",
    "SOXX"
  ],
  tags: [
    "equipment",
    "quality",
    "chips",
    "manufacturing"
  ],
  investorFit: [
    "เรียนรู้ process control",
    "ดูธุรกิจตรวจคุณภาพ",
    "เข้าใจ bottleneck ในโรงงานชิป"
  ],
  disclaimerNote: "แฟ้มของ KLAC เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "TXN",
  companyName: "Texas Instruments Incorporated",
  assetType: "stock",
  classroom: "AI Chip Workshop",
  sector: "Semiconductors",
  archetype: "เด็กชิปอะนาล็อกใจเย็น",
  roleTitle: "ผู้ดูแลวงจรพื้นฐาน",
  shortDescription: "เด็กชิปที่ไม่ได้เสียงดังที่สุด แต่มีชิ้นส่วนพื้นฐานอยู่ในอุปกรณ์หลายชนิด",
  personality: "สุขุม กระจายตัวกว้าง และเหมาะกับบทเรียนเรื่องวัฏจักรอุตสาหกรรมแบบไม่หวือหวา",
  oneLineStory: "TXN คือเด็กชิปอะนาล็อกที่อยู่ในอุปกรณ์รอบโรงเรียน เงียบแต่จำเป็น",
  strengths: [
    "ฐาน analog และ embedded กว้าง",
    "ลูกค้ากระจายหลายอุตสาหกรรม",
    "นิสัย cash flow และ dividend น่าสังเกต"
  ],
  weaknesses: [
    "วัฏจักรอุตสาหกรรมกดดันได้",
    "การเติบโตไม่เร้าใจเท่าชิป AI",
    "inventory cycle ทำให้ห้องเงียบเป็นช่วง"
  ],
  riskTemperament: "เด็กชิปอะนาล็อกใจเย็น มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B-",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "ADI",
    "ON",
    "QCOM"
  ],
  classmates: [
    "ADI",
    "ON",
    "INTC",
    "QCOM",
    "SOXX"
  ],
  tags: [
    "analog",
    "chips",
    "industrial",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ analog semiconductor",
    "ดูวัฏจักรอุตสาหกรรม",
    "เทียบชิปพื้นฐานกับชิป AI"
  ],
  disclaimerNote: "แฟ้มของ TXN เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "ADI",
  companyName: "Analog Devices, Inc.",
  assetType: "stock",
  classroom: "AI Chip Workshop",
  sector: "Semiconductors",
  archetype: "เด็กแปลงสัญญาณสายอุตสาหกรรม",
  roleTitle: "นักอ่านสัญญาณจริง",
  shortDescription: "เด็กชิปที่ช่วยแปลงสัญญาณจากโลกจริงให้เครื่องจักรและอุปกรณ์เข้าใจ",
  personality: "เทคนิคแน่น ไม่หวือหวา และสอนบทเรียนเรื่อง industrial กับ analog ได้ดี",
  oneLineStory: "ADI คือเด็กที่ฟังเสียงจากโลกจริงแล้วแปลให้ระบบอิเล็กทรอนิกส์ในโรงเรียนเข้าใจ",
  strengths: [
    "ความเชี่ยวชาญ analog และ mixed-signal",
    "เกี่ยวข้องกับ industrial, auto และ communication",
    "ธุรกิจมีลักษณะเฉพาะทาง"
  ],
  weaknesses: [
    "รอบอุตสาหกรรมอาจชะลอ",
    "การเติบโตไม่เร็วเท่าเด็กซอฟต์แวร์",
    "ต้องจัดการ inventory cycle"
  ],
  riskTemperament: "เด็กแปลงสัญญาณสายอุตสาหกรรม มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "TXN",
    "ON",
    "QCOM"
  ],
  classmates: [
    "TXN",
    "ON",
    "INTC",
    "QCOM",
    "SOXX"
  ],
  tags: [
    "analog",
    "industrial",
    "chips",
    "sensors"
  ],
  investorFit: [
    "เรียนรู้ mixed-signal chips",
    "ดูความเชื่อมโยงกับ industrial cycle",
    "เข้าใจชิปที่อยู่หลังฉาก"
  ],
  disclaimerNote: "แฟ้มของ ADI เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "ON",
  companyName: "ON Semiconductor Corporation",
  assetType: "stock",
  classroom: "AI Chip Workshop",
  sector: "Semiconductors",
  archetype: "เด็กชิปพลังงานและรถไฟฟ้า",
  roleTitle: "ผู้ดูแลไฟในอุปกรณ์",
  shortDescription: "เด็กชิปที่เกี่ยวกับ power, sensors และรถไฟฟ้า ทำให้เครื่องจักรใช้พลังงานได้ฉลาดขึ้น",
  personality: "พลังสูงกว่าชิปอะนาล็อกบางตัว และอ่อนไหวกับรอบรถยนต์กับอุตสาหกรรม",
  oneLineStory: "ON คือเด็กชิปที่คุมไฟ คุม sensor และช่วยให้รถกับโรงงานเรียนวิชาประหยัดพลังงาน",
  strengths: [
    "เกี่ยวข้องกับ power semiconductor",
    "มีบทเรียนเรื่อง EV และ industrial demand",
    "ช่วยศึกษา silicon carbide และการจัดการพลังงาน"
  ],
  weaknesses: [
    "รอบ EV และ industrial ผันผวนได้",
    "การแข่งขันด้าน power chips เพิ่มขึ้น",
    "ความคาดหวังอาจแกว่งตามธีมรถไฟฟ้า"
  ],
  riskTemperament: "เด็กชิปพลังงานและรถไฟฟ้า มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "B+",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "Medium",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "TXN",
    "ADI",
    "TSLA"
  ],
  classmates: [
    "TXN",
    "ADI",
    "QCOM",
    "INTC",
    "SOXX"
  ],
  tags: [
    "power",
    "EV",
    "chips",
    "industrial"
  ],
  investorFit: [
    "เรียนรู้ power semiconductor",
    "ดูความเชื่อมโยงกับ EV cycle",
    "เข้าใจความเสี่ยงจากธีมอุตสาหกรรม"
  ],
  disclaimerNote: "แฟ้มของ ON เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "SMH",
  companyName: "VanEck Semiconductor ETF",
  assetType: "ETF",
  classroom: "ETF Cohort",
  sector: "ETF",
  archetype: "ชมรม ETF ชิป",
  roleTitle: "ตัวแทนห้อง semiconductor",
  shortDescription: "ETF ที่รวมเพื่อนในห้องชิปหลายคนไว้ในแฟ้มเดียว เพื่อเรียนรู้ธีม semiconductor แบบกว้างขึ้น",
  personality: "เป็นนักเรียนหมู่คณะที่พลังสูง เพราะเพื่อนในกลุ่มมีทั้งดาว AI โรงงาน และเครื่องมือผลิต",
  oneLineStory: "SMH คือบัตรรวมเพื่อนห้องชิป ไม่ใช่เด็กคนเดียว แต่พาเห็นอารมณ์ของทั้งอุตสาหกรรม semiconductor",
  strengths: [
    "รวมหลายบริษัทในธีม semiconductor",
    "ใช้ศึกษา concentration และ sector exposure",
    "เห็นความเชื่อมโยงระหว่างชิป AI, foundry และ equipment"
  ],
  weaknesses: [
    "ยังผันผวนตามรอบชิป",
    "อาจกระจุกตัวในบางตัวใหญ่",
    "ETF ธีมเดียวไม่กระจายเท่าตลาดกว้าง"
  ],
  riskTemperament: "ชมรม ETF ชิป มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "SOXX",
    "QQQ",
    "SPY"
  ],
  classmates: [
    "NVDA",
    "AMD",
    "AVGO",
    "TSM",
    "SOXX"
  ],
  tags: [
    "ETF",
    "semiconductor",
    "AI",
    "chips"
  ],
  investorFit: [
    "เรียนรู้ sector ETF",
    "ดูความกระจุกตัวของธีมชิป",
    "เทียบ ETF ธีมกับหุ้นรายตัว"
  ],
  disclaimerNote: "แฟ้มของ SMH เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "SOXX",
  companyName: "iShares Semiconductor ETF",
  assetType: "ETF",
  classroom: "ETF Cohort",
  sector: "ETF",
  archetype: "ห้องรวมเพื่อนเซมิคอนดักเตอร์",
  roleTitle: "ตัวแทน ETF ชิปอีกชุด",
  shortDescription: "ETF ที่ใช้เป็นอีกบัตรรวมเพื่อนในอุตสาหกรรม semiconductor สำหรับเทียบกับ SMH",
  personality: "เป็นนักเรียนหมู่คณะสายชิปที่ช่วยดูว่า index construction เปลี่ยนอารมณ์ห้องได้อย่างไร",
  oneLineStory: "SOXX คืออีกสมุดรวมของห้องชิป เอาไว้เทียบว่าการจัดรายชื่อ ETF ทำให้บรรยากาศต่างกันอย่างไร",
  strengths: [
    "รวมหลายบริษัท semiconductor",
    "ช่วยศึกษา ETF construction",
    "ใช้เทียบกับ SMH และหุ้นชิปรายตัว"
  ],
  weaknesses: [
    "sector concentration ยังสูง",
    "วัฏจักรชิปกระทบทั้งห้อง",
    "น้ำหนักรายตัวทำให้ผลลัพธ์ต่างจาก ETF อื่น"
  ],
  riskTemperament: "ห้องรวมเพื่อนเซมิคอนดักเตอร์ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "SMH",
    "QQQ",
    "SPY"
  ],
  classmates: [
    "NVDA",
    "AMD",
    "AVGO",
    "TSM",
    "SMH"
  ],
  tags: [
    "ETF",
    "semiconductor",
    "chips",
    "sector"
  ],
  investorFit: [
    "เรียนรู้ ETF ธีม semiconductor",
    "ดู index weight",
    "เข้าใจความต่างระหว่าง ETF คล้ายกัน"
  ],
  disclaimerNote: "แฟ้มของ SOXX เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "ADBE",
  companyName: "Adobe Inc.",
  assetType: "stock",
  classroom: "Software & Cloud Lab",
  sector: "Software",
  archetype: "เด็กศิลปะดิจิทัลสายซอฟต์แวร์",
  roleTitle: "ผู้ดูแลสมุดสร้างสรรค์",
  shortDescription: "เด็กซอฟต์แวร์ที่ช่วยให้ทั้งโรงเรียนทำภาพ วิดีโอ เอกสาร และงานครีเอทีฟ",
  personality: "สร้างสรรค์ มี subscription เป็นระเบียบ และกำลังเรียนบทใหม่เกี่ยวกับ AI creative tools",
  oneLineStory: "ADBE คือเด็กศิลปะดิจิทัลที่เปลี่ยนห้องคอมให้กลายเป็นสตูดิโอสร้างสรรค์",
  strengths: [
    "แบรนด์แข็งแรงใน creative software",
    "subscription model ช่วยให้รายได้อ่านง่ายขึ้น",
    "มีบทเรียนเรื่อง AI กับเครื่องมือสร้างสรรค์"
  ],
  weaknesses: [
    "AI อาจเปลี่ยนพฤติกรรมผู้ใช้",
    "การแข่งขันเครื่องมือครีเอทีฟเพิ่มขึ้น",
    "ความคาดหวังด้าน growth กดดันได้"
  ],
  riskTemperament: "เด็กศิลปะดิจิทัลสายซอฟต์แวร์ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "MSFT",
    "INTU",
    "NOW"
  ],
  classmates: [
    "MSFT",
    "CRM",
    "NOW",
    "INTU",
    "TEAM"
  ],
  tags: [
    "software",
    "creative",
    "AI",
    "subscription"
  ],
  investorFit: [
    "เรียนรู้ subscription software",
    "ดู AI creative disruption",
    "เข้าใจ brand moat ในซอฟต์แวร์"
  ],
  disclaimerNote: "แฟ้มของ ADBE เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "NOW",
  companyName: "ServiceNow, Inc.",
  assetType: "stock",
  classroom: "Software & Cloud Lab",
  sector: "Software",
  archetype: "เด็กจัด workflow หลังห้อง",
  roleTitle: "ผู้จัดระบบงานองค์กร",
  shortDescription: "เด็กซอฟต์แวร์องค์กรที่ช่วยให้คำขอ งานบริการ และ workflow ในโรงเรียนไหลเป็นระบบ",
  personality: "มีระเบียบ โตไว และชอบแก้ปัญหางานยุ่งขององค์กรให้กลายเป็นขั้นตอน",
  oneLineStory: "NOW คือเด็กที่จัดคิวงานทั้งโรงเรียนให้รู้ว่าเรื่องไหนต้องไปโต๊ะไหนต่อ",
  strengths: [
    "แพลตฟอร์ม workflow องค์กรเหนียว",
    "มีโอกาสขยายโมดูลในลูกค้าเดิม",
    "เหมาะกับการเรียนรู้ enterprise SaaS"
  ],
  weaknesses: [
    "มูลค่าคาดหวังสูงได้",
    "การขายองค์กรใช้เวลา",
    "ต้องรักษาการเติบโตเมื่อฐานใหญ่ขึ้น"
  ],
  riskTemperament: "เด็กจัด workflow หลังห้อง มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B+",
    moatStrength: "A-",
    valuationPressure: "High",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "CRM",
    "MSFT",
    "TEAM"
  ],
  classmates: [
    "MSFT",
    "CRM",
    "ADBE",
    "TEAM",
    "DDOG"
  ],
  tags: [
    "workflow",
    "software",
    "enterprise",
    "SaaS"
  ],
  investorFit: [
    "เรียนรู้ enterprise SaaS",
    "ดู platform expansion",
    "เข้าใจความคาดหวังของหุ้นซอฟต์แวร์โตสูง"
  ],
  disclaimerNote: "แฟ้มของ NOW เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "NFLX",
  companyName: "Netflix, Inc.",
  assetType: "stock",
  classroom: "Platform & Commerce Hall",
  sector: "Communication Services",
  archetype: "หัวหน้าชมรมภาพยนตร์",
  roleTitle: "นักเล่าเรื่องสตรีมมิง",
  shortDescription: "เด็กสตรีมมิงที่ชวนทั้งโรงเรียนมาดูซีรีส์หลังเลิกเรียน และต้องบริหารคอนเทนต์ให้คุ้ม",
  personality: "ครีเอทีฟ วินัยมากขึ้น และแข่งขันกับเวลาว่างของทุกคนในโรงเรียน",
  oneLineStory: "NFLX คือหัวหน้าชมรมภาพยนตร์ที่ต้องทำให้เพื่อนต่อสมาชิกและกลับมาดูตอนใหม่",
  strengths: [
    "แบรนด์สตรีมมิงระดับโลก",
    "ขนาดสมาชิกช่วยกระจายต้นทุนคอนเทนต์",
    "มีบทเรียนเรื่อง pricing และ ad tier"
  ],
  weaknesses: [
    "การแข่งขันแย่งเวลาผู้ชมสูง",
    "คอนเทนต์ใช้เงินมาก",
    "การเติบโตสมาชิกอาจช้าลงในบางช่วง"
  ],
  riskTemperament: "หัวหน้าชมรมภาพยนตร์ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "DIS",
    "AMZN",
    "GOOGL"
  ],
  classmates: [
    "META",
    "GOOGL",
    "DIS",
    "AMZN",
    "QQQ"
  ],
  tags: [
    "streaming",
    "media",
    "subscription",
    "content"
  ],
  investorFit: [
    "เรียนรู้ subscription media",
    "ดู scale ในคอนเทนต์",
    "เข้าใจการแข่งขันเพื่อ attention"
  ],
  disclaimerNote: "แฟ้มของ NFLX เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "SHOP",
  companyName: "Shopify Inc.",
  assetType: "stock",
  classroom: "Platform & Commerce Hall",
  sector: "Software",
  archetype: "เด็กเปิดร้านให้เพื่อน",
  roleTitle: "ผู้สร้างร้านค้าออนไลน์",
  shortDescription: "เด็กแพลตฟอร์มที่ช่วยให้ร้านเล็กและแบรนด์ต่าง ๆ ตั้งแผงขายของออนไลน์ได้",
  personality: "คล่องตัว ชอบผู้ประกอบการ และอารมณ์เหวี่ยงตามความหวัง e-commerce กับซอฟต์แวร์โตเร็ว",
  oneLineStory: "SHOP คือเด็กที่แจกโต๊ะขายของออนไลน์ให้เพื่อนทั้งโรงเรียนตั้งร้านเอง",
  strengths: [
    "แพลตฟอร์ม commerce สำหรับผู้ขายจำนวนมาก",
    "ecosystem ของ apps และ payments",
    "ช่วยศึกษา merchant software"
  ],
  weaknesses: [
    "การแข่งขัน commerce platform สูง",
    "ความคาดหวัง growth ทำให้คะแนนแกว่ง",
    "ธุรกิจผู้ขายรายเล็กอ่อนไหวต่อเศรษฐกิจ"
  ],
  riskTemperament: "เด็กเปิดร้านให้เพื่อน มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B-",
    moatStrength: "B+",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "AMZN",
    "PYPL",
    "UBER"
  ],
  classmates: [
    "AMZN",
    "META",
    "GOOGL",
    "PYPL",
    "CRM"
  ],
  tags: [
    "commerce",
    "platform",
    "software",
    "payments"
  ],
  investorFit: [
    "เรียนรู้ merchant platform",
    "ดู e-commerce ecosystem",
    "เข้าใจ growth software volatility"
  ],
  disclaimerNote: "แฟ้มของ SHOP เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "UBER",
  companyName: "Uber Technologies, Inc.",
  assetType: "stock",
  classroom: "Platform & Commerce Hall",
  sector: "Technology",
  archetype: "เด็กจัดรถหน้าประตูโรงเรียน",
  roleTitle: "ผู้ประสานงานเดินทางและส่งของ",
  shortDescription: "เด็กแพลตฟอร์มที่ต่อคนขับ ผู้โดยสาร ร้านอาหาร และคำสั่งส่งของเข้าด้วยกัน",
  personality: "เคลื่อนไหวเร็ว เคยซนมาก และกำลังเรียนวิชาวินัยด้านกำไร",
  oneLineStory: "UBER คือเด็กเวรหน้าประตูที่จัดรถ ส่งข้าว และคอยทำให้การเดินทางในโรงเรียนไม่ติดขัด",
  strengths: [
    "network marketplace ขนาดใหญ่",
    "มีทั้ง mobility และ delivery",
    "บทเรียนเรื่อง operating leverage หลังโตขึ้น"
  ],
  weaknesses: [
    "กฎระเบียบแรงงานและเมืองสำคัญ",
    "การแข่งขันและ incentive กระทบกำไร",
    "ความต้องการเดินทางผันผวนได้"
  ],
  riskTemperament: "เด็กจัดรถหน้าประตูโรงเรียน มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "B+",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "Medium",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "SHOP",
    "AMZN",
    "AMZN"
  ],
  classmates: [
    "AMZN",
    "SHOP",
    "PYPL",
    "META",
    "QQQ"
  ],
  tags: [
    "platform",
    "mobility",
    "delivery",
    "marketplace"
  ],
  investorFit: [
    "เรียนรู้ marketplace platform",
    "ดู operating leverage",
    "เข้าใจ regulatory risk ในแพลตฟอร์ม"
  ],
  disclaimerNote: "แฟ้มของ UBER เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "SNOW",
  companyName: "Snowflake Inc.",
  assetType: "stock",
  classroom: "Data & Intelligence Club",
  sector: "Software",
  archetype: "เด็กคลังข้อมูลหิมะ",
  roleTitle: "ผู้จัดสมุดข้อมูลบนคลาวด์",
  shortDescription: "เด็กข้อมูลที่ช่วยให้บริษัทเก็บ แบ่งปัน และวิเคราะห์ข้อมูลบน cloud ได้เป็นระเบียบ",
  personality: "ฉลาด โตไว แต่ถูกจับตาเรื่องการใช้เครดิตและความคาดหวังสูง",
  oneLineStory: "SNOW คือเด็กคลังข้อมูลที่ช่วยให้สมุดข้อมูลหลายห้องมาอยู่บนโต๊ะเดียวกันแบบค้นง่าย",
  strengths: [
    "แพลตฟอร์ม data cloud เป็นธีมสำคัญ",
    "ใช้ศึกษา consumption software model",
    "เกี่ยวข้องกับ analytics และ AI readiness"
  ],
  weaknesses: [
    "การใช้จ่ายลูกค้าอาจปรับตามงบ",
    "การแข่งขัน data platform สูง",
    "valuation pressure ทำให้คะแนนไวต่อข่าว"
  ],
  riskTemperament: "เด็กคลังข้อมูลหิมะ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "DDOG",
    "NET",
    "PLTR"
  ],
  classmates: [
    "PLTR",
    "DDOG",
    "NET",
    "TEAM",
    "CRM"
  ],
  tags: [
    "data",
    "cloud",
    "AI",
    "software"
  ],
  investorFit: [
    "เรียนรู้ data cloud",
    "ดู consumption model",
    "เข้าใจความคาดหวังในหุ้นข้อมูล"
  ],
  disclaimerNote: "แฟ้มของ SNOW เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "DDOG",
  companyName: "Datadog, Inc.",
  assetType: "stock",
  classroom: "Data & Intelligence Club",
  sector: "Software",
  archetype: "เด็กเฝ้าห้องเซิร์ฟเวอร์",
  roleTitle: "ผู้ดูแดชบอร์ดระบบ",
  shortDescription: "เด็กซอฟต์แวร์ที่คอยดูว่าแอป เซิร์ฟเวอร์ และ cloud ในโรงเรียนทำงานปกติไหม",
  personality: "ตื่นตัว เทคนิคแน่น และอารมณ์ตามงบ cloud ของลูกค้า",
  oneLineStory: "DDOG คือเด็กเฝ้าหน้าจอที่เห็นสัญญาณเตือนก่อนเพื่อนรู้ว่าระบบมีปัญหา",
  strengths: [
    "observability platform สำหรับ cloud",
    "ลูกค้าขยายการใช้โมดูลได้",
    "ช่วยศึกษา software ที่ผูกกับ infrastructure"
  ],
  weaknesses: [
    "งบ cloud optimization กระทบการใช้จ่าย",
    "การแข่งขันจาก platform ใหญ่",
    "หุ้นซอฟต์แวร์โตไวมี volatility"
  ],
  riskTemperament: "เด็กเฝ้าห้องเซิร์ฟเวอร์ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "SNOW",
    "NET",
    "TEAM"
  ],
  classmates: [
    "SNOW",
    "NET",
    "PLTR",
    "TEAM",
    "NOW"
  ],
  tags: [
    "observability",
    "cloud",
    "software",
    "data"
  ],
  investorFit: [
    "เรียนรู้ observability",
    "ดู cloud usage cycle",
    "เข้าใจ SaaS expansion model"
  ],
  disclaimerNote: "แฟ้มของ DDOG เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "NET",
  companyName: "Cloudflare, Inc.",
  assetType: "stock",
  classroom: "Data & Intelligence Club",
  sector: "Software",
  archetype: "เด็กยามหน้าเว็บ",
  roleTitle: "ผู้ดูแลความเร็วและความปลอดภัย",
  shortDescription: "เด็กโครงข่ายซอฟต์แวร์ที่ช่วยให้เว็บเร็ว ปลอดภัย และเดินทางผ่านอินเทอร์เน็ตได้ดีขึ้น",
  personality: "ฉลาด เร็ว และชอบตั้งด่านหน้าโรงเรียนเพื่อคุม traffic",
  oneLineStory: "NET คือเด็กยามหน้าเว็บที่ช่วยให้ประตูอินเทอร์เน็ตของโรงเรียนเร็วและปลอดภัยขึ้น",
  strengths: [
    "เครือข่าย edge global",
    "เกี่ยวข้องกับ security และ performance",
    "มีหลายผลิตภัณฑ์ให้ขยายในลูกค้าเดิม"
  ],
  weaknesses: [
    "การแข่งขัน security และ cloud สูง",
    "ความคาดหวัง growth สูง",
    "ต้องแปลง adoption เป็นกำไรสม่ำเสมอ"
  ],
  riskTemperament: "เด็กยามหน้าเว็บ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B-",
    moatStrength: "B",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "DDOG",
    "SNOW",
    "AMZN"
  ],
  classmates: [
    "DDOG",
    "SNOW",
    "PLTR",
    "TEAM",
    "NOW"
  ],
  tags: [
    "edge",
    "security",
    "cloud",
    "network"
  ],
  investorFit: [
    "เรียนรู้ edge network",
    "ดู cloud security platform",
    "เข้าใจ growth-to-profitability path"
  ],
  disclaimerNote: "แฟ้มของ NET เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "TEAM",
  companyName: "Atlassian Corporation",
  assetType: "stock",
  classroom: "Software & Cloud Lab",
  sector: "Software",
  archetype: "เด็กทำงานกลุ่มสายโปรเจกต์",
  roleTitle: "ผู้จัดบอร์ดงานทีม",
  shortDescription: "เด็กซอฟต์แวร์ที่ช่วยทีมเขียนงาน แจ้งปัญหา และติดตามโปรเจกต์ในโรงเรียน",
  personality: "ร่วมมือเก่ง เป็นระบบ และต้องรักษาพลัง growth เมื่อองค์กรระวังงบ",
  oneLineStory: "TEAM คือเด็กถือบอร์ดงานที่ทำให้ทุกกลุ่มรู้ว่าใครต้องส่งอะไรต่อ",
  strengths: [
    "เครื่องมือ collaboration และ developer workflow",
    "ฐานผู้ใช้กว้างในทีมเทค",
    "โมเดล cloud migration ให้บทเรียนสำคัญ"
  ],
  weaknesses: [
    "การแข่งขัน productivity tools สูง",
    "ลูกค้าองค์กรคุมงบได้",
    "transition model ทำให้ตัวเลขอ่านยากบางช่วง"
  ],
  riskTemperament: "เด็กทำงานกลุ่มสายโปรเจกต์ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "MSFT",
    "NOW",
    "DDOG"
  ],
  classmates: [
    "MSFT",
    "NOW",
    "ADBE",
    "DDOG",
    "NET"
  ],
  tags: [
    "collaboration",
    "software",
    "developer",
    "workflow"
  ],
  investorFit: [
    "เรียนรู้ team software",
    "ดู cloud migration",
    "เข้าใจเครื่องมือ developer workflow"
  ],
  disclaimerNote: "แฟ้มของ TEAM เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "INTU",
  companyName: "Intuit Inc.",
  assetType: "stock",
  classroom: "Software & Cloud Lab",
  sector: "Software",
  archetype: "เด็กบัญชีประจำห้อง",
  roleTitle: "ผู้ช่วยภาษีและการเงินรายย่อย",
  shortDescription: "เด็กซอฟต์แวร์ที่ช่วยคนทำบัญชี ภาษี และการเงินธุรกิจเล็กให้เป็นระบบ",
  personality: "สุขุม ใช้ข้อมูลเก่ง และมีนิสัยผูกกับฤดูกาลภาษีและผู้ประกอบการรายย่อย",
  oneLineStory: "INTU คือเด็กบัญชีที่ช่วยเพื่อนจัดใบเสร็จ ภาษี และการเงินไม่ให้กระจัดกระจาย",
  strengths: [
    "แบรนด์แข็งใน tax และ small business software",
    "ข้อมูลและ workflow ทำให้ลูกค้าใช้งานต่อเนื่อง",
    "มีบทเรียนเรื่อง fintech software"
  ],
  weaknesses: [
    "ฤดูกาลภาษีทำให้จังหวะรายได้เฉพาะตัว",
    "การแข่งขันใน SMB tools มีมาก",
    "กฎและผลิตภัณฑ์การเงินเปลี่ยนได้"
  ],
  riskTemperament: "เด็กบัญชีประจำห้อง มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "ADBE",
    "PYPL",
    "SOFI"
  ],
  classmates: [
    "MSFT",
    "ADBE",
    "CRM",
    "NOW",
    "PYPL"
  ],
  tags: [
    "software",
    "tax",
    "SMB",
    "fintech"
  ],
  investorFit: [
    "เรียนรู้ vertical software",
    "ดู SMB ecosystem",
    "เข้าใจข้อมูลในบริการการเงิน"
  ],
  disclaimerNote: "แฟ้มของ INTU เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "IBM",
  companyName: "International Business Machines Corporation",
  assetType: "stock",
  classroom: "Software & Cloud Lab",
  sector: "Technology",
  archetype: "รุ่นพี่ห้ององค์กรสายเมนเฟรม",
  roleTitle: "นักผสม hybrid cloud",
  shortDescription: "เด็กรุ่นพี่ที่อยู่กับองค์กรใหญ่มานาน มีทั้ง consulting, software และระบบเก่าใหม่ปนกัน",
  personality: "นิ่งกว่าเด็กซอฟต์แวร์โตเร็ว มีประวัติยาว และกำลังเรียนบท hybrid cloud กับ AI องค์กร",
  oneLineStory: "IBM คือรุ่นพี่ที่ยังดูแลระบบเก่าหลังโรงเรียน พร้อมถือสมุด hybrid cloud เดินเข้าห้องใหม่",
  strengths: [
    "ความสัมพันธ์องค์กรยาวนาน",
    "บทบาทใน hybrid cloud และ consulting",
    "นิสัย dividend และ cash flow น่าสังเกต"
  ],
  weaknesses: [
    "การเติบโตไม่หวือหวา",
    "ต้องพิสูจน์การเปลี่ยนผ่าน portfolio",
    "การแข่งขัน cloud และ AI จากยักษ์ใหญ่สูง"
  ],
  riskTemperament: "รุ่นพี่ห้ององค์กรสายเมนเฟรม มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "C+",
    stability: "B+",
    moatStrength: "B",
    valuationPressure: "Low",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "MSFT",
    "ORCL",
    "CRM"
  ],
  classmates: [
    "MSFT",
    "ORCL",
    "CRM",
    "NOW",
    "INTU"
  ],
  tags: [
    "enterprise",
    "hybrid cloud",
    "consulting",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ legacy-to-cloud transition",
    "ดู enterprise relationships",
    "เข้าใจหุ้นเทคที่นิ่งขึ้น"
  ],
  disclaimerNote: "แฟ้มของ IBM เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "JPM",
  companyName: "JPMorgan Chase & Co.",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "หัวหน้าห้องธนาคารใหญ่",
  roleTitle: "ผู้ดูแลสมุดบัญชีทั้งโรงเรียน",
  shortDescription: "เด็กธนาคารตัวใหญ่ที่มีทั้งเงินฝาก สินเชื่อ ตลาดทุน และการบริหารความเสี่ยง",
  personality: "สุขุม แข็งแรง และเป็นตัวอย่างดีของระบบการเงินขนาดใหญ่ที่ต้องผ่านหลายฤดูกาล",
  oneLineStory: "JPM คือหัวหน้าห้องการเงินที่คอยดูบัญชี เงินกู้ และสภาพคล่องของทั้งโรงเรียน",
  strengths: [
    "ขนาดและความหลากหลายของธุรกิจการเงิน",
    "ฐานเงินฝากและลูกค้ากว้าง",
    "ความสามารถด้าน risk management เป็นบทเรียนสำคัญ"
  ],
  weaknesses: [
    "อ่อนไหวต่อเศรษฐกิจและ credit cycle",
    "กฎระเบียบธนาคารเข้มงวด",
    "อัตราดอกเบี้ยเปลี่ยนอารมณ์รายได้"
  ],
  riskTemperament: "หัวหน้าห้องธนาคารใหญ่ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "BAC",
    "WFC",
    "GS"
  ],
  classmates: [
    "BAC",
    "WFC",
    "GS",
    "MS",
    "BLK"
  ],
  tags: [
    "bank",
    "finance",
    "credit",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ธนาคารขนาดใหญ่",
    "ดู credit cycle",
    "เข้าใจบทบาทดอกเบี้ยกับเงินฝาก"
  ],
  disclaimerNote: "แฟ้มของ JPM เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "BAC",
  companyName: "Bank of America Corporation",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กธนาคารเครือข่ายใหญ่",
  roleTitle: "ผู้ดูแลบัญชีรายวัน",
  shortDescription: "เด็กธนาคารที่มีลูกค้ารายย่อยและองค์กรจำนวนมาก เหมาะกับการเรียนรู้ดอกเบี้ยและเครดิต",
  personality: "กว้าง ขึ้นกับเศรษฐกิจ และอารมณ์เปลี่ยนตามเส้นอัตราดอกเบี้ยได้",
  oneLineStory: "BAC คือเด็กธนาคารโต๊ะใหญ่ที่เห็นทั้งเงินฝากรายวันและสินเชื่อของเพื่อนหลายกลุ่ม",
  strengths: [
    "ฐานลูกค้าและเงินฝากขนาดใหญ่",
    "มีทั้ง consumer banking และ wealth",
    "ใช้ศึกษาความสัมพันธ์กับอัตราดอกเบี้ย"
  ],
  weaknesses: [
    "credit cycle กระทบผลลัพธ์",
    "กฎระเบียบและเงินทุนสำรองสำคัญ",
    "รายได้บางส่วนไวต่อดอกเบี้ย"
  ],
  riskTemperament: "เด็กธนาคารเครือข่ายใหญ่ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B-",
    stability: "B+",
    moatStrength: "B",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "JPM",
    "WFC",
    "COF"
  ],
  classmates: [
    "JPM",
    "WFC",
    "GS",
    "MS",
    "BLK"
  ],
  tags: [
    "bank",
    "deposits",
    "credit",
    "rates"
  ],
  investorFit: [
    "เรียนรู้ธนาคารรายย่อย",
    "ดูผลของดอกเบี้ย",
    "เข้าใจ credit risk แบบง่าย"
  ],
  disclaimerNote: "แฟ้มของ BAC เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "WFC",
  companyName: "Wells Fargo & Company",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กธนาคารที่กำลังจัดระเบียบโต๊ะ",
  roleTitle: "ผู้ดูแลสินเชื่อและสาขา",
  shortDescription: "เด็กธนาคารใหญ่ที่ยังมีบทเรียนเรื่องการปรับปรุงระบบและความไว้ใจของห้อง",
  personality: "มีฐานใหญ่ แต่ต้องรักษาวินัยและภาพลักษณ์หลังเคยโดนห้องปกครองจับตา",
  oneLineStory: "WFC คือเด็กธนาคารที่กำลังจัดโต๊ะใหม่ให้เรียบร้อยและพยายามส่งงานให้สม่ำเสมอขึ้น",
  strengths: [
    "ฐานลูกค้า retail banking ใหญ่",
    "มีบทเรียนเรื่อง efficiency และ governance",
    "ได้รับอิทธิพลจากอัตราดอกเบี้ยและสินเชื่อ"
  ],
  weaknesses: [
    "ประวัติด้าน compliance ยังเป็นบทเรียน",
    "credit cycle กระทบได้",
    "การฟื้นความเชื่อมั่นต้องใช้เวลา"
  ],
  riskTemperament: "เด็กธนาคารที่กำลังจัดระเบียบโต๊ะ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "C+",
    stability: "B",
    moatStrength: "B-",
    valuationPressure: "Low",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "JPM",
    "BAC",
    "COF"
  ],
  classmates: [
    "JPM",
    "BAC",
    "GS",
    "MS",
    "BLK"
  ],
  tags: [
    "bank",
    "retail banking",
    "credit",
    "governance"
  ],
  investorFit: [
    "เรียนรู้ bank turnaround",
    "ดู governance risk",
    "เข้าใจรายได้จากสินเชื่อและเงินฝาก"
  ],
  disclaimerNote: "แฟ้มของ WFC เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "GS",
  companyName: "The Goldman Sachs Group, Inc.",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กวาณิชธนกิจห้องแข่งขัน",
  roleTitle: "นักจัดดีลและตลาดทุน",
  shortDescription: "เด็กการเงินที่เก่งเรื่องดีล ตลาดทุน trading และการให้คำปรึกษาบริษัทใหญ่",
  personality: "หัวไว แข่งขันสูง และอารมณ์ขึ้นลงตามตลาดทุนกับกิจกรรมดีล",
  oneLineStory: "GS คือเด็กจัดดีลหน้าเวทีที่คะแนนสดใสเมื่อทั้งโรงเรียนมีงานระดมทุนและซื้อกิจการ",
  strengths: [
    "แบรนด์แข็งใน investment banking",
    "trading และ markets มีบทบาทสำคัญ",
    "ความสัมพันธ์กับลูกค้าองค์กรใหญ่"
  ],
  weaknesses: [
    "ดีลและ IPO มีวัฏจักร",
    "ตลาดผันผวนกระทบผลลัพธ์",
    "ธุรกิจบางส่วนใช้ทุนและ regulation สูง"
  ],
  riskTemperament: "เด็กวาณิชธนกิจห้องแข่งขัน มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "B",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "High",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "MS",
    "JPM",
    "BLK"
  ],
  classmates: [
    "JPM",
    "BAC",
    "MS",
    "BLK",
    "BLK"
  ],
  tags: [
    "investment banking",
    "markets",
    "finance",
    "deals"
  ],
  investorFit: [
    "เรียนรู้ตลาดทุน",
    "ดูวัฏจักรดีล",
    "เข้าใจความต่างธนาคารพาณิชย์กับวาณิชธนกิจ"
  ],
  disclaimerNote: "แฟ้มของ GS เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "MS",
  companyName: "Morgan Stanley",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กจัดพอร์ตและดีล",
  roleTitle: "ผู้ดูแลความมั่งคั่งกับตลาดทุน",
  shortDescription: "เด็กการเงินที่มีทั้ง wealth management, investment banking และ markets",
  personality: "นิ่งกว่าอดีตบางช่วงเพราะมีฐาน wealth แต่ยังซนตามตลาดทุนได้",
  oneLineStory: "MS คือเด็กการเงินที่ช่วยทั้งจัดดีลหน้าเวทีและดูแฟ้มทรัพย์สินให้ครูใหญ่",
  strengths: [
    "wealth management ช่วยเพิ่มความสม่ำเสมอ",
    "แบรนด์แข็งในตลาดทุน",
    "มีหลายธุรกิจการเงินให้ศึกษา"
  ],
  weaknesses: [
    "ตลาดทุนซบเซากระทบดีล",
    "asset values มีผลต่อค่าธรรมเนียม",
    "การแข่งขัน wealth management สูง"
  ],
  riskTemperament: "เด็กจัดพอร์ตและดีล มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "GS",
    "JPM",
    "BLK"
  ],
  classmates: [
    "JPM",
    "GS",
    "BLK",
    "BAC",
    "BLK"
  ],
  tags: [
    "wealth",
    "investment banking",
    "markets",
    "finance"
  ],
  investorFit: [
    "เรียนรู้ wealth management",
    "ดูตลาดทุนกับค่าธรรมเนียม",
    "เทียบ GS กับ MS"
  ],
  disclaimerNote: "แฟ้มของ MS เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "V",
  companyName: "Visa Inc.",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กทางผ่านการจ่ายเงิน",
  roleTitle: "ผู้ดูแลประตูรูดบัตร",
  shortDescription: "เด็กห้องจ่ายเงินที่ทั้งโรงเรียนต้องเดินผ่านเวลาซื้อของด้วยบัตรหรือดิจิทัล",
  personality: "เบาเท้า กว้างมาก และได้เรียนรู้ network effect โดยไม่ต้องปล่อยกู้เองเหมือนธนาคาร",
  oneLineStory: "V คือเด็กประตูจ่ายเงินที่เก็บสัญญาณจากการใช้จ่ายทั่วโรงเรียนโดยไม่ต้องถือสินค้าบนชั้น",
  strengths: [
    "เครือข่ายชำระเงินขนาดใหญ่",
    "โมเดล asset-light เมื่อเทียบกับธนาคาร",
    "ได้ประโยชน์จากการเปลี่ยนจากเงินสดสู่ดิจิทัล"
  ],
  weaknesses: [
    "กฎค่าธรรมเนียมและ regulation สำคัญ",
    "เศรษฐกิจอ่อนกระทบ volume ได้",
    "การแข่งขัน payment technology เพิ่มขึ้น"
  ],
  riskTemperament: "เด็กทางผ่านการจ่ายเงิน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "A-",
    moatStrength: "A",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "MA",
    "AXP",
    "PYPL"
  ],
  classmates: [
    "MA",
    "AXP",
    "PYPL",
    "JPM",
    "BLK"
  ],
  tags: [
    "payments",
    "network",
    "cards",
    "fintech"
  ],
  investorFit: [
    "เรียนรู้ payment network",
    "ดู network effects",
    "เข้าใจธุรกิจ asset-light ในการเงิน"
  ],
  disclaimerNote: "แฟ้มของ V เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "MA",
  companyName: "Mastercard Incorporated",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กเครือข่ายจ่ายเงินคู่ขนาน",
  roleTitle: "ผู้ดูแลทางผ่านบัตรอีกฝั่ง",
  shortDescription: "เด็กจ่ายเงินที่ทำงานคล้าย Visa และช่วยให้เปรียบเทียบ payment networks ได้ชัด",
  personality: "รวดเร็ว กว้าง และเป็นคู่เทียบสำคัญกับ V ในบทเรียนเครือข่ายชำระเงิน",
  oneLineStory: "MA คือเด็กทางเดินจ่ายเงินอีกฝั่งที่ทำให้ห้อง finance มีคู่เทียบ network effect ที่ชัดมาก",
  strengths: [
    "เครือข่ายชำระเงินระดับโลก",
    "asset-light และ margin สูง",
    "เกี่ยวข้องกับ secular shift สู่ digital payments"
  ],
  weaknesses: [
    "regulation ค่าธรรมเนียมสำคัญ",
    "volume อ่อนไหวต่อเศรษฐกิจ",
    "ต้องแข่งขันกับ wallet และ payment rails ใหม่"
  ],
  riskTemperament: "เด็กเครือข่ายจ่ายเงินคู่ขนาน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "A-",
    moatStrength: "A",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "V",
    "AXP",
    "PYPL"
  ],
  classmates: [
    "V",
    "AXP",
    "PYPL",
    "JPM",
    "BLK"
  ],
  tags: [
    "payments",
    "network",
    "cards",
    "fintech"
  ],
  investorFit: [
    "เรียนรู้ payment duopoly",
    "เทียบ V กับ MA",
    "ดู digital payment adoption"
  ],
  disclaimerNote: "แฟ้มของ MA เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "AXP",
  companyName: "American Express Company",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กบัตรพรีเมียมสายสมาชิก",
  roleTitle: "ผู้ดูแลคลับจ่ายเงิน",
  shortDescription: "เด็กจ่ายเงินที่มีทั้งเครือข่าย บัตร และความสัมพันธ์กับลูกค้ากำลังซื้อสูง",
  personality: "พรีเมียม มีฐานสมาชิกเหนียว แต่ยังเจอ credit และ spending cycle ได้",
  oneLineStory: "AXP คือเด็กบัตรสมาชิกที่รู้จักลูกค้าดีและชวนเข้าคลับสิทธิประโยชน์ในโรงเรียน",
  strengths: [
    "แบรนด์พรีเมียมและฐานสมาชิกแข็งแรง",
    "มีทั้ง payment network และ lending exposure",
    "รายได้ผูกกับ spending ของกลุ่มลูกค้ามีกำลังซื้อ"
  ],
  weaknesses: [
    "credit cycle กระทบได้",
    "เศรษฐกิจชะลอทำให้ spending อ่อนลง",
    "การแข่งขันบัตร rewards สูง"
  ],
  riskTemperament: "เด็กบัตรพรีเมียมสายสมาชิก มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "V",
    "MA",
    "COF"
  ],
  classmates: [
    "V",
    "MA",
    "JPM",
    "COF",
    "BLK"
  ],
  tags: [
    "cards",
    "payments",
    "premium",
    "credit"
  ],
  investorFit: [
    "เรียนรู้ closed-loop card model",
    "ดู consumer credit",
    "เทียบ payment network กับ lending"
  ],
  disclaimerNote: "แฟ้มของ AXP เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "PYPL",
  companyName: "PayPal Holdings, Inc.",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กกระเป๋าเงินออนไลน์ที่กำลังหาที่นั่งใหม่",
  roleTitle: "ผู้ดูแลปุ่มจ่ายเงินดิจิทัล",
  shortDescription: "เด็ก payment รุ่นบุกเบิกที่ต้องพิสูจน์บทบาทใหม่เมื่อเพื่อน wallet และ platform เยอะขึ้น",
  personality: "ยังมีฐานผู้ใช้ใหญ่ แต่กำลังเรียนบทการแข่งขันและการจัดระเบียบตัวเองใหม่",
  oneLineStory: "PYPL คือเด็กกระเป๋าเงินออนไลน์ที่เคยเด่นมาก และตอนนี้ต้องทำให้เพื่อนเห็นว่ายังจำเป็นในห้องจ่ายเงิน",
  strengths: [
    "ฐานผู้ใช้และ merchant กว้าง",
    "แบรนด์คุ้นเคยใน online checkout",
    "มีบทเรียนเรื่อง fintech competition"
  ],
  weaknesses: [
    "การแข่งขัน wallet และ payment button สูง",
    "การเติบโตต้องพิสูจน์ใหม่",
    "margin และ brand relevance ถูกจับตา"
  ],
  riskTemperament: "เด็กกระเป๋าเงินออนไลน์ที่กำลังหาที่นั่งใหม่ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "C+",
    stability: "B-",
    moatStrength: "B-",
    valuationPressure: "Low",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "V",
    "MA",
    "SOFI"
  ],
  classmates: [
    "V",
    "MA",
    "AXP",
    "SHOP",
    "SOFI"
  ],
  tags: [
    "payments",
    "fintech",
    "wallet",
    "checkout"
  ],
  investorFit: [
    "เรียนรู้ fintech competition",
    "ดู platform relevance",
    "เข้าใจธุรกิจที่กำลัง reposition"
  ],
  disclaimerNote: "แฟ้มของ PYPL เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "COF",
  companyName: "Capital One Financial Corporation",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กบัตรเครดิตสายข้อมูล",
  roleTitle: "ผู้ดูแลสินเชื่อผู้บริโภค",
  shortDescription: "เด็กการเงินที่ใช้ข้อมูลกับบัตรเครดิตและสินเชื่อผู้บริโภคเป็นวิชาหลัก",
  personality: "วิเคราะห์เก่ง แต่ซนตาม credit cycle และสุขภาพผู้บริโภคได้ชัด",
  oneLineStory: "COF คือเด็กบัตรเครดิตที่อ่านพฤติกรรมผู้บริโภคผ่านคะแนนและการจ่ายบิล",
  strengths: [
    "เชี่ยวชาญบัตรเครดิตและ consumer lending",
    "ใช้ข้อมูลในการบริหารความเสี่ยง",
    "เหมาะกับบทเรียน credit cycle"
  ],
  weaknesses: [
    "เศรษฐกิจอ่อนทำให้ delinquency สูงขึ้นได้",
    "ต้นทุนเงินทุนและดอกเบี้ยสำคัญ",
    "การแข่งขันบัตรและ rewards สูง"
  ],
  riskTemperament: "เด็กบัตรเครดิตสายข้อมูล มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "B-",
    stability: "B-",
    moatStrength: "B-",
    valuationPressure: "Low",
    volatility: "High",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "AXP",
    "BAC",
    "JPM"
  ],
  classmates: [
    "JPM",
    "BAC",
    "WFC",
    "AXP",
    "BLK"
  ],
  tags: [
    "credit cards",
    "consumer credit",
    "bank",
    "risk"
  ],
  investorFit: [
    "เรียนรู้ consumer credit",
    "ดู delinquency cycle",
    "เข้าใจข้อมูลกับการปล่อยสินเชื่อ"
  ],
  disclaimerNote: "แฟ้มของ COF เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "SOFI",
  companyName: "SoFi Technologies, Inc.",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กฟินเทคสายมหาวิทยาลัย",
  roleTitle: "นักทดลองธนาคารดิจิทัล",
  shortDescription: "เด็ก fintech ที่รวมสินเชื่อ บัญชี การลงทุน และแพลตฟอร์มเทคการเงินไว้ในห้องเดียว",
  personality: "พลังสูง โตไว และยังต้องพิสูจน์ว่าวินัยการเงินจะทันความทะเยอทะยาน",
  oneLineStory: "SOFI คือเด็กธนาคารดิจิทัลที่พยายามทำให้บริการการเงินทั้งชุดอยู่ในแอปเดียว",
  strengths: [
    "แบรนด์ fintech กับลูกค้ารุ่นใหม่",
    "หลายผลิตภัณฑ์ในระบบเดียว",
    "มีบทเรียนเรื่อง bank charter และ lending"
  ],
  weaknesses: [
    "credit risk และ funding cost สำคัญ",
    "ความคาดหวัง growth สูง",
    "การแข่งขัน fintech และธนาคารดั้งเดิมมาก"
  ],
  riskTemperament: "เด็กฟินเทคสายมหาวิทยาลัย มีระดับความซน ซนเทอร์โบ ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Very High",
  reportCard: {
    growthEnergy: "B+",
    stability: "C+",
    moatStrength: "C+",
    valuationPressure: "High",
    volatility: "Very High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "PYPL",
    "COF",
    "JPM"
  ],
  classmates: [
    "PYPL",
    "COF",
    "AXP",
    "INTU",
    "BLK"
  ],
  tags: [
    "fintech",
    "lending",
    "banking",
    "growth"
  ],
  investorFit: [
    "เรียนรู้ digital banking",
    "ดู credit risk ใน fintech",
    "เข้าใจ growth กับ profitability path"
  ],
  disclaimerNote: "แฟ้มของ SOFI เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "BLK",
  companyName: "BlackRock, Inc.",
  assetType: "stock",
  classroom: "Finance & Payments Hall",
  sector: "Financials",
  archetype: "เด็กผู้จัดห้องกองทุน",
  roleTitle: "ผู้ดูแลชั้น ETF และสินทรัพย์",
  shortDescription: "เด็กการเงินที่ดูแลเงินจำนวนมากผ่านกองทุน ETF และระบบจัดการสินทรัพย์",
  personality: "นิ่ง มี scale สูง และเป็นตัวอย่างธุรกิจค่าธรรมเนียมที่ผูกกับตลาดทั้งโรงเรียน",
  oneLineStory: "BLK คือเด็กที่จัดชั้นกองทุนให้ทั้งโรงเรียนเลือกอ่าน ตั้งแต่ ETF ไปจนถึงพอร์ตขนาดใหญ่",
  strengths: [
    "ขนาดสินทรัพย์ภายใต้การจัดการใหญ่",
    "iShares เป็นแพลตฟอร์ม ETF สำคัญ",
    "ค่าธรรมเนียมผูกกับตลาดและ flows"
  ],
  weaknesses: [
    "ตลาดลงกระทบสินทรัพย์และค่าธรรมเนียม",
    "fee pressure ใน asset management",
    "กฎระเบียบและภาพลักษณ์สาธารณะสำคัญ"
  ],
  riskTemperament: "เด็กผู้จัดห้องกองทุน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "MS",
    "GS",
    "JPM"
  ],
  classmates: [
    "JPM",
    "MS",
    "GS",
    "SPY",
    "VTI"
  ],
  tags: [
    "asset management",
    "ETF",
    "fees",
    "finance"
  ],
  investorFit: [
    "เรียนรู้ asset management",
    "ดู ETF platform",
    "เข้าใจรายได้ค่าธรรมเนียมตามตลาด"
  ],
  disclaimerNote: "แฟ้มของ BLK เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "WMT",
  companyName: "Walmart Inc.",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Staples",
  archetype: "เด็กสหกรณ์โรงเรียนตัวใหญ่",
  roleTitle: "ผู้ดูแลร้านประหยัด",
  shortDescription: "เด็กค้าปลีกขนาดใหญ่ที่ขายของจำเป็นและของใช้ประจำวันให้ทั้งโรงเรียน",
  personality: "ขยัน ราคาประหยัด และค่อนข้างทนเวลาบรรยากาศผู้บริโภคเปลี่ยน",
  oneLineStory: "WMT คือสหกรณ์โรงเรียนขนาดใหญ่ที่เพื่อนแวะซื้อของใช้พื้นฐานแทบทุกสัปดาห์",
  strengths: [
    "ขนาดร้านค้าและ supply chain ใหญ่",
    "ขายสินค้าจำเป็นจำนวนมาก",
    "e-commerce และ grocery ช่วยเพิ่มบทเรียนใหม่"
  ],
  weaknesses: [
    "margin ค้าปลีกบาง",
    "การแข่งขันราคาสูง",
    "ค่าแรงและ logistics กระทบได้"
  ],
  riskTemperament: "เด็กสหกรณ์โรงเรียนตัวใหญ่ มีระดับความซน ซนเบา ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Low",
  reportCard: {
    growthEnergy: "B-",
    stability: "A-",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Low",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "TGT",
    "AMZN",
    "TGT"
  ],
  classmates: [
    "TGT",
    "HD",
    "LOW",
    "MCD",
    "KO"
  ],
  tags: [
    "retail",
    "grocery",
    "defensive",
    "scale"
  ],
  investorFit: [
    "เรียนรู้ค้าปลีกขนาดใหญ่",
    "ดู supply chain",
    "เข้าใจ defensive consumer behavior"
  ],
  disclaimerNote: "แฟ้มของ WMT เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "TGT",
  companyName: "Target Corporation",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กสหกรณ์สายดีไซน์",
  roleTitle: "ผู้จัดร้านค้าปลีกมีสไตล์",
  shortDescription: "เด็กค้าปลีกที่ขายของใช้ในบ้าน เสื้อผ้า และของจำเป็นแบบมีภาพลักษณ์ชัด",
  personality: "เป็นมิตร มีแบรนด์ร้านแข็ง แต่ซนตามสินค้าคงคลังและกำลังซื้อผู้บริโภค",
  oneLineStory: "TGT คือร้านโรงเรียนที่จัดชั้นสวย แต่ต้องบริหารของคงคลังและโปรโมชั่นให้แม่น",
  strengths: [
    "แบรนด์ค้าปลีกเป็นที่รู้จัก",
    "private label และ store experience มีบทบาท",
    "มีบทเรียนเรื่อง inventory management"
  ],
  weaknesses: [
    "สินค้าฟุ่มเฟือยบางส่วนอ่อนไหวต่อเศรษฐกิจ",
    "การแข่งขันกับ WMT และ AMZN สูง",
    "inventory miss กระทบ margin ได้"
  ],
  riskTemperament: "เด็กสหกรณ์สายดีไซน์ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "C+",
    stability: "B",
    moatStrength: "B",
    valuationPressure: "Low",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "WMT",
    "AMZN",
    "HD"
  ],
  classmates: [
    "WMT",
    "HD",
    "LOW",
    "MCD",
    "KO"
  ],
  tags: [
    "retail",
    "consumer",
    "inventory",
    "brand"
  ],
  investorFit: [
    "เรียนรู้ discretionary retail",
    "ดู inventory cycle",
    "เทียบค้าปลีก defensive กับ discretionary"
  ],
  disclaimerNote: "แฟ้มของ TGT เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "HD",
  companyName: "The Home Depot, Inc.",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กช่างบ้านประจำโรงเรียน",
  roleTitle: "ผู้ดูแลอุปกรณ์ซ่อมแซม",
  shortDescription: "เด็กค้าปลีกที่ขายเครื่องมือ วัสดุ และของแต่งบ้านให้เพื่อนสาย DIY กับช่างมืออาชีพ",
  personality: "แข็งแรง มีนิสัยผูกกับบ้านและดอกเบี้ย แต่แบรนด์ร้านแน่นมาก",
  oneLineStory: "HD คือเด็กช่างที่เปิดห้องเก็บเครื่องมือ ทุกคนมาหาเวลาบ้านต้องซ่อม",
  strengths: [
    "แบรนด์แข็งใน home improvement",
    "ลูกค้าทั้ง DIY และ professional",
    "scale และ supply chain ช่วยสร้าง moat"
  ],
  weaknesses: [
    "ดอกเบี้ยและ housing cycle กระทบ",
    "โครงการบ้านชะลอทำให้ยอดขายอ่อน",
    "การแข่งขันกับ LOW และร้านเฉพาะทาง"
  ],
  riskTemperament: "เด็กช่างบ้านประจำโรงเรียน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "LOW",
    "WMT",
    "TGT"
  ],
  classmates: [
    "LOW",
    "WMT",
    "TGT",
    "MCD",
    "MCD"
  ],
  tags: [
    "home improvement",
    "retail",
    "housing",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ home improvement retail",
    "ดู housing cycle",
    "เข้าใจ brand moat ในร้านค้าใหญ่"
  ],
  disclaimerNote: "แฟ้มของ HD เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "LOW",
  companyName: "Lowe's Companies, Inc.",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กช่างบ้านโต๊ะข้างกัน",
  roleTitle: "ผู้ช่วยซ่อมบ้านอีกคน",
  shortDescription: "เด็กค้าปลีกบ้านและเครื่องมือที่เป็นคู่เทียบสำคัญกับ HD",
  personality: "นิ่งขึ้น มีพื้นที่ให้ปรับปรุง และช่วยให้เรียนรู้การแข่งขันแบบร้านใกล้เคียง",
  oneLineStory: "LOW คือเด็กช่างบ้านอีกโต๊ะที่ทำให้ห้อง home improvement มีคู่เทียบชัดเจน",
  strengths: [
    "แบรนด์ใหญ่ใน home improvement",
    "มีโอกาสปรับ efficiency และ professional customer",
    "นิสัย dividend น่าสังเกต"
  ],
  weaknesses: [
    "housing cycle และดอกเบี้ยมีผล",
    "ต้องแข่งกับ HD ที่แข็งแรงมาก",
    "consumer project อาจชะลอในเศรษฐกิจอ่อน"
  ],
  riskTemperament: "เด็กช่างบ้านโต๊ะข้างกัน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B-",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "HD",
    "WMT",
    "TGT"
  ],
  classmates: [
    "HD",
    "WMT",
    "TGT",
    "MCD",
    "MCD"
  ],
  tags: [
    "home improvement",
    "retail",
    "housing",
    "dividend"
  ],
  investorFit: [
    "เทียบ LOW กับ HD",
    "เรียนรู้ operational improvement",
    "ดูผลของ housing cycle"
  ],
  disclaimerNote: "แฟ้มของ LOW เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "MCD",
  companyName: "McDonald's Corporation",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กโรงอาหารระดับโลก",
  roleTitle: "ผู้ดูแลเมนูเร็วและคุ้นเคย",
  shortDescription: "เด็กแบรนด์อาหารที่มีร้านทั่วโลกและระบบ franchise เป็นสมุดหลัก",
  personality: "คุ้นหน้า วินัยสูง และสอนเรื่องแบรนด์ เมนู ราคา และระบบแฟรนไชส์ได้ดี",
  oneLineStory: "MCD คือเด็กโรงอาหารที่เพื่อนทั่วโลกจำเมนูได้ แม้แต่ตอนรีบเข้าคาบ",
  strengths: [
    "แบรนด์ global แข็งแรง",
    "franchise model ช่วยให้ธุรกิจเบากว่าร้านถือเองทั้งหมด",
    "pricing power และ convenience เป็นบทเรียนสำคัญ"
  ],
  weaknesses: [
    "ต้นทุนอาหารและค่าแรงกดดันได้",
    "ผู้บริโภคอ่อนไหวต่อราคา",
    "ภาพลักษณ์สุขภาพและการแข่งขันอาหารเร็วมีผล"
  ],
  riskTemperament: "เด็กโรงอาหารระดับโลก มีระดับความซน ซนเบา ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Low",
  reportCard: {
    growthEnergy: "B",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Low",
    dividendFriendliness: "High"
  },
  rivals: [
    "SBUX",
    "CMG",
    "SBUX"
  ],
  classmates: [
    "SBUX",
    "CMG",
    "KO",
    "PEP",
    "MCD"
  ],
  tags: [
    "restaurant",
    "brand",
    "franchise",
    "consumer"
  ],
  investorFit: [
    "เรียนรู้ franchise model",
    "ดู brand consistency",
    "เข้าใจ pricing power ในอาหาร"
  ],
  disclaimerNote: "แฟ้มของ MCD เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "SBUX",
  companyName: "Starbucks Corporation",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กคาเฟ่หน้าโรงเรียน",
  roleTitle: "ผู้ดูแลแก้วกาแฟประจำคาบ",
  shortDescription: "เด็กแบรนด์กาแฟที่ขายทั้งเครื่องดื่ม ประสบการณ์ร้าน และ loyalty program",
  personality: "อบอุ่น มีแฟนประจำ แต่ต้องระวัง traffic ร้าน ค่าแรง และการแข่งขันเครื่องดื่ม",
  oneLineStory: "SBUX คือเด็กคาเฟ่ที่ทำให้เพื่อนแวะก่อนเข้าเรียน แต่ต้องรักษาบรรยากาศร้านให้ดีเสมอ",
  strengths: [
    "แบรนด์กาแฟระดับโลก",
    "loyalty program และ digital ordering สำคัญ",
    "มีโอกาสเติบโตต่างประเทศบางตลาด"
  ],
  weaknesses: [
    "traffic ร้านแกว่งได้",
    "ค่าแรงและต้นทุนวัตถุดิบกดดัน",
    "การแข่งขันเครื่องดื่มและร้านท้องถิ่นสูง"
  ],
  riskTemperament: "เด็กคาเฟ่หน้าโรงเรียน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "MCD",
    "CMG",
    "KO"
  ],
  classmates: [
    "MCD",
    "CMG",
    "KO",
    "PEP",
    "MCD"
  ],
  tags: [
    "coffee",
    "brand",
    "restaurant",
    "loyalty"
  ],
  investorFit: [
    "เรียนรู้ consumer brand",
    "ดู same-store sales",
    "เข้าใจ loyalty program ในร้านอาหาร"
  ],
  disclaimerNote: "แฟ้มของ SBUX เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "NKE",
  companyName: "NIKE, Inc.",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กนักกีฬาสายแบรนด์",
  roleTitle: "กัปตันรองเท้าและเสื้อกีฬา",
  shortDescription: "เด็กแบรนด์กีฬาที่มีโลโก้ดังและเรื่องเล่าด้าน athlete culture",
  personality: "เท่ มีประวัติแข็งแรง แต่ต้องซ้อมหนักเมื่อ fashion cycle และการแข่งขันเปลี่ยน",
  oneLineStory: "NKE คือเด็กนักกีฬาที่ทั้งโรงเรียนจำโลโก้ได้ แต่ยังต้องวิ่งให้ทันรสนิยมรุ่นใหม่",
  strengths: [
    "แบรนด์ global แข็งแรง",
    "ความสัมพันธ์กับนักกีฬาและวัฒนธรรมกีฬา",
    "direct-to-consumer ให้บทเรียนช่องทางขาย"
  ],
  weaknesses: [
    "การแข่งขันจากแบรนด์ใหม่เพิ่มขึ้น",
    "fashion cycle เปลี่ยนเร็ว",
    "inventory และ wholesale strategy กระทบได้"
  ],
  riskTemperament: "เด็กนักกีฬาสายแบรนด์ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "C+",
    stability: "B",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "LULU",
    "SBUX",
    "DIS"
  ],
  classmates: [
    "LULU",
    "SBUX",
    "MCD",
    "DIS",
    "MCD"
  ],
  tags: [
    "brand",
    "sportswear",
    "consumer",
    "DTC"
  ],
  investorFit: [
    "เรียนรู้ brand equity",
    "ดู consumer taste cycle",
    "เข้าใจช่องทางขาย DTC กับ wholesale"
  ],
  disclaimerNote: "แฟ้มของ NKE เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "LULU",
  companyName: "lululemon athletica inc.",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กโยคะพรีเมียม",
  roleTitle: "ผู้ดูแลชุดออกกำลังกายมีสไตล์",
  shortDescription: "เด็กแบรนด์ activewear ที่เริ่มจากโยคะและขยายเป็น lifestyle fitness",
  personality: "พรีเมียม ใกล้ชิดลูกค้า และซนตามความคาดหวังของแบรนด์โตเร็ว",
  oneLineStory: "LULU คือเด็กโยคะที่ทำให้ชุดออกกำลังกายกลายเป็น uniform สาย lifestyle",
  strengths: [
    "แบรนด์ premium activewear แข็งแรง",
    "community และ store experience ช่วยสร้างความภักดี",
    "มีบทเรียนเรื่อง international expansion"
  ],
  weaknesses: [
    "ความคาดหวัง growth สูง",
    "การแข่งขัน apparel สูง",
    "รสนิยมผู้บริโภคเปลี่ยนได้"
  ],
  riskTemperament: "เด็กโยคะพรีเมียม มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "B+",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "High",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "NKE",
    "SBUX",
    "TGT"
  ],
  classmates: [
    "NKE",
    "SBUX",
    "MCD",
    "DIS",
    "MCD"
  ],
  tags: [
    "brand",
    "apparel",
    "fitness",
    "consumer"
  ],
  investorFit: [
    "เรียนรู้ premium brand growth",
    "ดู consumer community",
    "เข้าใจความเสี่ยง fashion cycle"
  ],
  disclaimerNote: "แฟ้มของ LULU เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "DIS",
  companyName: "The Walt Disney Company",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Communication Services",
  archetype: "เด็กเล่านิทานและสวนสนุก",
  roleTitle: "ผู้ดูแลห้องบันเทิงครอบครัว",
  shortDescription: "เด็กแบรนด์บันเทิงที่มีตัวละคร สวนสนุก หนัง กีฬา และสตรีมมิงอยู่ในแฟ้มเดียว",
  personality: "มีเวทมนตร์แบรนด์สูง แต่กำลังจัดสมดุลระหว่างคอนเทนต์ สตรีมมิง และสวนสนุก",
  oneLineStory: "DIS คือเด็กเล่านิทานที่มีทั้งโรงละคร สนามกีฬา และสวนสนุกในกระเป๋าเดียว",
  strengths: [
    "แบรนด์และ IP แข็งแรงมาก",
    "สวนสนุกสร้างประสบการณ์เฉพาะตัว",
    "มีหลายช่องทาง monetization จากตัวละคร"
  ],
  weaknesses: [
    "streaming ใช้เงินและแข่งขันสูง",
    "media legacy ถูก disruption",
    "สวนสนุกอ่อนไหวต่อผู้บริโภคและเศรษฐกิจ"
  ],
  riskTemperament: "เด็กเล่านิทานและสวนสนุก มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B-",
    stability: "B",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "NFLX",
    "NFLX",
    "AMZN"
  ],
  classmates: [
    "NFLX",
    "META",
    "NKE",
    "MCD",
    "MCD"
  ],
  tags: [
    "media",
    "parks",
    "streaming",
    "brand"
  ],
  investorFit: [
    "เรียนรู้ IP monetization",
    "ดู streaming transition",
    "เข้าใจธุรกิจสวนสนุกและสื่อ"
  ],
  disclaimerNote: "แฟ้มของ DIS เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "CMG",
  companyName: "Chipotle Mexican Grill, Inc.",
  assetType: "stock",
  classroom: "Consumer & Brand Hall",
  sector: "Consumer Discretionary",
  archetype: "เด็กโรงอาหารสายเร็วพรีเมียม",
  roleTitle: "ผู้จัดแถว burrito",
  shortDescription: "เด็กเรสเตอรองต์ที่ขายอาหารเร็วแบบมีภาพลักษณ์คุณภาพและระบบร้านที่ทำซ้ำได้",
  personality: "คล่องตัว มี pricing power แต่ความคาดหวังสูงและต้นทุนอาหารต้องคุมดี",
  oneLineStory: "CMG คือเด็กโรงอาหารที่ต่อแถวเร็ว ทำเมนูซ้ำเก่ง และยังดูพรีเมียมกว่าร้านเร็วทั่วไป",
  strengths: [
    "แบรนด์ fast-casual แข็งแรง",
    "unit economics และ store expansion เป็นบทเรียนสำคัญ",
    "digital ordering ช่วยเพิ่มความสะดวก"
  ],
  weaknesses: [
    "valuation pressure สูงได้",
    "ต้นทุนอาหารและแรงงานมีผล",
    "ความคาดหวัง same-store sales กดดัน"
  ],
  riskTemperament: "เด็กโรงอาหารสายเร็วพรีเมียม มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "High",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "MCD",
    "SBUX",
    "SBUX"
  ],
  classmates: [
    "MCD",
    "SBUX",
    "NKE",
    "LULU",
    "MCD"
  ],
  tags: [
    "restaurant",
    "brand",
    "growth",
    "consumer"
  ],
  investorFit: [
    "เรียนรู้ fast-casual model",
    "ดู unit economics",
    "เข้าใจ pricing power กับต้นทุน"
  ],
  disclaimerNote: "แฟ้มของ CMG เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "KO",
  companyName: "The Coca-Cola Company",
  assetType: "stock",
  classroom: "Dividend Club",
  sector: "Consumer Staples",
  archetype: "เด็กน้ำอัดลมคลาสสิก",
  roleTitle: "ผู้แจกเครื่องดื่มประจำโรงอาหาร",
  shortDescription: "เด็กแบรนด์เครื่องดื่มที่อยู่ในโรงอาหารมานานและมีสูตรจำง่ายทั่วโลก",
  personality: "นิ่ง เป็นมิตรกับชมรมปันผล และใช้สอนเรื่องแบรนด์กับ distribution ได้ดี",
  oneLineStory: "KO คือเด็กเครื่องดื่มคลาสสิกที่เพื่อนจำรสชาติและโลโก้ได้ก่อนเปิดตู้เย็น",
  strengths: [
    "แบรนด์ global แข็งแรง",
    "distribution network กว้าง",
    "นิสัย cash flow และ dividend ชัด"
  ],
  weaknesses: [
    "การเติบโตไม่เร็วเท่าห้องเทค",
    "สุขภาพและน้ำตาลเป็นประเด็น",
    "ค่าเงินและตลาดโลกมีผล"
  ],
  riskTemperament: "เด็กน้ำอัดลมคลาสสิก มีระดับความซน ซนเบา ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Low",
  reportCard: {
    growthEnergy: "C+",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Low",
    dividendFriendliness: "High"
  },
  rivals: [
    "PEP",
    "SBUX",
    "MCD"
  ],
  classmates: [
    "PEP",
    "PG",
    "JNJ",
    "MCD",
    "SCHD"
  ],
  tags: [
    "beverages",
    "brand",
    "dividend",
    "defensive"
  ],
  investorFit: [
    "เรียนรู้ consumer staples",
    "ดู brand durability",
    "เข้าใจธุรกิจปันผลแบบนิ่งขึ้น"
  ],
  disclaimerNote: "แฟ้มของ KO เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "PEP",
  companyName: "PepsiCo, Inc.",
  assetType: "stock",
  classroom: "Dividend Club",
  sector: "Consumer Staples",
  archetype: "เด็กขนมและเครื่องดื่ม",
  roleTitle: "ผู้ดูแลโต๊ะ snack",
  shortDescription: "เด็ก consumer staples ที่มีทั้งเครื่องดื่ม ขนม และแบรนด์ในตู้โรงอาหาร",
  personality: "กว้างกว่าแค่น้ำอัดลม มีนิสัย defensive แต่ยังต้องดูต้นทุนและสุขภาพผู้บริโภค",
  oneLineStory: "PEP คือเด็กที่ถือทั้งแก้วน้ำและถุงขนม ทำให้โต๊ะ snack ของโรงเรียนไม่เคยว่าง",
  strengths: [
    "portfolio เครื่องดื่มและขนมกว้าง",
    "แบรนด์ global หลายตัว",
    "distribution และ pricing power น่าสังเกต"
  ],
  weaknesses: [
    "ต้นทุนวัตถุดิบกดดัน margin",
    "ความกังวลด้านสุขภาพมีผล",
    "การเติบโตโดยรวมค่อนข้างนิ่ง"
  ],
  riskTemperament: "เด็กขนมและเครื่องดื่ม มีระดับความซน ซนเบา ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Low",
  reportCard: {
    growthEnergy: "C+",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Low",
    dividendFriendliness: "High"
  },
  rivals: [
    "KO",
    "PG",
    "MCD"
  ],
  classmates: [
    "KO",
    "PG",
    "JNJ",
    "MCD",
    "SCHD"
  ],
  tags: [
    "snacks",
    "beverages",
    "brand",
    "dividend"
  ],
  investorFit: [
    "เทียบ KO กับ PEP",
    "เรียนรู้ staples portfolio",
    "ดู pricing power ในสินค้าอุปโภคบริโภค"
  ],
  disclaimerNote: "แฟ้มของ PEP เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "PG",
  companyName: "Procter & Gamble Company",
  assetType: "stock",
  classroom: "Dividend Club",
  sector: "Consumer Staples",
  archetype: "เด็กของใช้ประจำบ้าน",
  roleTitle: "ผู้ดูแลตู้สบู่และแปรงสีฟัน",
  shortDescription: "เด็กสินค้าอุปโภคบริโภคที่อยู่ในห้องน้ำ ห้องครัว และบ้านของเพื่อนจำนวนมาก",
  personality: "สุขุม มีแบรนด์จำเป็น และเหมาะกับบทเรียน defensive business",
  oneLineStory: "PG คือเด็กของใช้ประจำวันที่เพื่อนอาจไม่ตื่นเต้น แต่ต้องหยิบใช้แทบทุกวัน",
  strengths: [
    "แบรนด์ household staples แข็งแรง",
    "pricing และ scale สำคัญ",
    "นิสัย dividend และ cash flow สม่ำเสมอ"
  ],
  weaknesses: [
    "การเติบโตช้า",
    "ต้นทุนวัตถุดิบและค่าเงินมีผล",
    "private label แข่งขันในบางหมวด"
  ],
  riskTemperament: "เด็กของใช้ประจำบ้าน มีระดับความซน ซนเบา ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Low",
  reportCard: {
    growthEnergy: "C+",
    stability: "A",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Low",
    dividendFriendliness: "High"
  },
  rivals: [
    "KO",
    "PEP",
    "JNJ"
  ],
  classmates: [
    "KO",
    "PEP",
    "JNJ",
    "WMT",
    "SCHD"
  ],
  tags: [
    "staples",
    "household",
    "brand",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ defensive brands",
    "ดู pricing power",
    "เข้าใจสินค้าใช้ประจำกับตลาด"
  ],
  disclaimerNote: "แฟ้มของ PG เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "JNJ",
  companyName: "Johnson & Johnson",
  assetType: "stock",
  classroom: "Healthcare Hall",
  sector: "Healthcare",
  archetype: "เด็กห้องพยาบาลรุ่นใหญ่",
  roleTitle: "ผู้ดูแลสุขภาพหลายแผนก",
  shortDescription: "เด็ก healthcare ขนาดใหญ่ที่มีทั้งยาและอุปกรณ์การแพทย์เป็นบทเรียนหลัก",
  personality: "นิ่ง มีประวัติยาว และเหมาะกับการเรียนรู้ healthcare แบบกระจายหลายแผนก",
  oneLineStory: "JNJ คือรุ่นพี่ห้องพยาบาลที่ถือแฟ้มยาและอุปกรณ์การแพทย์หลายเล่มพร้อมกัน",
  strengths: [
    "ธุรกิจ healthcare ขนาดใหญ่และหลากหลาย",
    "แบรนด์และความสัมพันธ์ทางการแพทย์ยาวนาน",
    "นิสัย dividend defensive"
  ],
  weaknesses: [
    "คดีและกฎระเบียบมีผล",
    "pipeline ยาต้องเติมต่อเนื่อง",
    "การเติบโตไม่หวือหวา"
  ],
  riskTemperament: "เด็กห้องพยาบาลรุ่นใหญ่ มีระดับความซน ซนเบา ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Low",
  reportCard: {
    growthEnergy: "C+",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Low",
    volatility: "Low",
    dividendFriendliness: "High"
  },
  rivals: [
    "PFE",
    "MRK",
    "ABBV"
  ],
  classmates: [
    "PFE",
    "MRK",
    "ABBV",
    "UNH",
    "UNH"
  ],
  tags: [
    "healthcare",
    "pharma",
    "medical devices",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ healthcare conglomerate",
    "ดูความเสี่ยงกฎระเบียบ",
    "เข้าใจ defensive healthcare"
  ],
  disclaimerNote: "แฟ้มของ JNJ เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "UNH",
  companyName: "UnitedHealth Group Incorporated",
  assetType: "stock",
  classroom: "Healthcare Hall",
  sector: "Healthcare",
  archetype: "เด็กจัดตารางห้องพยาบาล",
  roleTitle: "ผู้ดูแลระบบประกันสุขภาพ",
  shortDescription: "เด็ก healthcare ที่เชื่อมประกัน สุขภาพ และบริการข้อมูลเข้าด้วยกัน",
  personality: "ใหญ่ เป็นระบบ และสอนเรื่อง healthcare payment กับ scale ได้ดีมาก",
  oneLineStory: "UNH คือเด็กที่จัดคิวห้องพยาบาลและสมุดประกันให้ทั้งโรงเรียนเดินเป็นระบบ",
  strengths: [
    "scale ใหญ่ใน health insurance",
    "Optum เพิ่มบทเรียนบริการและข้อมูล",
    "ความสัมพันธ์ในระบบ healthcare กว้าง"
  ],
  weaknesses: [
    "กฎและนโยบายสุขภาพสำคัญมาก",
    "medical cost trend กระทบ margin",
    "ขนาดใหญ่ทำให้ถูกจับตา"
  ],
  riskTemperament: "เด็กจัดตารางห้องพยาบาล มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "A-",
    moatStrength: "A-",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "JNJ",
    "UNH",
    "PFE"
  ],
  classmates: [
    "JNJ",
    "MRK",
    "ABBV",
    "TMO",
    "UNH"
  ],
  tags: [
    "health insurance",
    "healthcare",
    "services",
    "data"
  ],
  investorFit: [
    "เรียนรู้ healthcare payment",
    "ดู scale ในบริการสุขภาพ",
    "เข้าใจ policy risk"
  ],
  disclaimerNote: "แฟ้มของ UNH เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "ABBV",
  companyName: "AbbVie Inc.",
  assetType: "stock",
  classroom: "Healthcare Hall",
  sector: "Healthcare",
  archetype: "เด็กยาสายสิทธิบัตร",
  roleTitle: "ผู้ดูแลตู้ยาพิเศษ",
  shortDescription: "เด็ก pharma ที่มีบทเรียนเรื่องยาหลัก สิทธิบัตร และการสร้างยารุ่นถัดไป",
  personality: "นิ่งกว่าหุ้นโตเร็ว แต่ต้องจัดการการหมดสิทธิบัตรและ pipeline ให้ดี",
  oneLineStory: "ABBV คือเด็กตู้ยาพิเศษที่ต้องส่งต่อจากยารุ่นเก่าไปยังยารุ่นใหม่ให้เนียน",
  strengths: [
    "cash flow จากยา specialty",
    "นิสัย dividend สูง",
    "มีบทเรียนเรื่อง patent cycle"
  ],
  weaknesses: [
    "การหมดสิทธิบัตรกดดันได้",
    "pipeline ยาต้องพิสูจน์ต่อเนื่อง",
    "กฎราคาและ reimbursement สำคัญ"
  ],
  riskTemperament: "เด็กยาสายสิทธิบัตร มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "C+",
    stability: "B+",
    moatStrength: "B",
    valuationPressure: "Low",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "PFE",
    "MRK",
    "JNJ"
  ],
  classmates: [
    "JNJ",
    "MRK",
    "PFE",
    "UNH",
    "UNH"
  ],
  tags: [
    "pharma",
    "patent",
    "dividend",
    "healthcare"
  ],
  investorFit: [
    "เรียนรู้ patent cliff",
    "ดู pharma pipeline",
    "เข้าใจ cash flow กับ dividend"
  ],
  disclaimerNote: "แฟ้มของ ABBV เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "MRK",
  companyName: "Merck & Co., Inc.",
  assetType: "stock",
  classroom: "Healthcare Hall",
  sector: "Healthcare",
  archetype: "เด็กวิจัยยาห้องพยาบาล",
  roleTitle: "นักทดลองยาสำคัญ",
  shortDescription: "เด็ก pharma ที่มีบทเรียนเรื่องยาหลัก งานวิจัย และ pipeline ทางการแพทย์",
  personality: "จริงจัง วิจัยหนัก และอารมณ์ขึ้นกับความสำเร็จของยาใหม่กับสิทธิบัตร",
  oneLineStory: "MRK คือเด็กวิจัยยาที่มีสมุดทดลองหนา และต้องทำให้ pipeline ต่อจากยาตัวหลักได้",
  strengths: [
    "ยา specialty และ oncology สำคัญ",
    "งานวิจัยและ pipeline เป็นหัวใจ",
    "นิสัย defensive healthcare"
  ],
  weaknesses: [
    "การพึ่งพายาหลักต้องติดตาม",
    "patent cycle สำคัญ",
    "ผลทดลองและกฎอนุมัติเปลี่ยนอารมณ์ได้"
  ],
  riskTemperament: "เด็กวิจัยยาห้องพยาบาล มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "PFE",
    "ABBV",
    "JNJ"
  ],
  classmates: [
    "JNJ",
    "ABBV",
    "PFE",
    "UNH",
    "UNH"
  ],
  tags: [
    "pharma",
    "oncology",
    "pipeline",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ pharma pipeline",
    "ดู patent exposure",
    "เข้าใจ clinical/regulatory risk"
  ],
  disclaimerNote: "แฟ้มของ MRK เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "PFE",
  companyName: "Pfizer Inc.",
  assetType: "stock",
  classroom: "Healthcare Hall",
  sector: "Healthcare",
  archetype: "เด็กวัคซีนและยารุ่นใหญ่",
  roleTitle: "ผู้ดูแลตู้ยาหลากหลาย",
  shortDescription: "เด็ก pharma ชื่อคุ้นที่มีบทเรียนเรื่องผลิตภัณฑ์ดัง รายได้ที่เปลี่ยน และการเติม pipeline",
  personality: "เคยเด่นมากในบางช่วง แต่ตอนนี้ต้องพิสูจน์การจัดสมุดยาหลังคลื่นใหญ่",
  oneLineStory: "PFE คือเด็กตู้ยาที่เคยมีช่วง spotlight ใหญ่ และกำลังจัดบทเรียนต่อไปให้มั่นคงขึ้น",
  strengths: [
    "ขนาด pharma และความสามารถการผลิต",
    "มีหลาย therapeutic areas",
    "นิสัย dividend น่าสังเกต"
  ],
  weaknesses: [
    "รายได้จากผลิตภัณฑ์พิเศษบางช่วงลดลงได้",
    "pipeline ต้องชดเชยช่องว่าง",
    "กฎราคาและการแข่งขันยาสำคัญ"
  ],
  riskTemperament: "เด็กวัคซีนและยารุ่นใหญ่ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "C+",
    stability: "B",
    moatStrength: "B-",
    valuationPressure: "Low",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "MRK",
    "ABBV",
    "JNJ"
  ],
  classmates: [
    "JNJ",
    "MRK",
    "ABBV",
    "UNH",
    "UNH"
  ],
  tags: [
    "pharma",
    "vaccine",
    "pipeline",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ pharma transition",
    "ดู product cycle",
    "เข้าใจ dividend กับ pipeline risk"
  ],
  disclaimerNote: "แฟ้มของ PFE เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "TMO",
  companyName: "Thermo Fisher Scientific Inc.",
  assetType: "stock",
  classroom: "Healthcare Hall",
  sector: "Healthcare",
  archetype: "เด็กห้องแล็บวิทยาศาสตร์",
  roleTitle: "ผู้ขายอุปกรณ์วิจัย",
  shortDescription: "เด็ก healthcare tools ที่จัดหาเครื่องมือ น้ำยา และบริการให้ห้องแล็บหลายแห่ง",
  personality: "เงียบแต่สำคัญ ช่วยให้เรียนรู้ picks-and-shovels ของวิทยาศาสตร์สุขภาพ",
  oneLineStory: "TMO คือเด็กหลังห้องแล็บที่มีเครื่องมือให้เพื่อนนักวิจัยยืมทำการทดลอง",
  strengths: [
    "เครื่องมือและบริการวิจัยหลากหลาย",
    "ฐานลูกค้า pharma, biotech และ academic",
    "บทเรียนเรื่อง life science tools"
  ],
  weaknesses: [
    "งบ biotech และ research cycle มีผล",
    "การเติบโตหลังช่วงพิเศษอาจช้าลง",
    "integration จากดีลต้องบริหาร"
  ],
  riskTemperament: "เด็กห้องแล็บวิทยาศาสตร์ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "TMO",
    "MRK",
    "MRK"
  ],
  classmates: [
    "JNJ",
    "UNH",
    "MRK",
    "ABBV",
    "UNH"
  ],
  tags: [
    "life science tools",
    "healthcare",
    "research",
    "lab"
  ],
  investorFit: [
    "เรียนรู้ picks-and-shovels healthcare",
    "ดู research funding cycle",
    "เข้าใจเครื่องมือห้องแล็บ"
  ],
  disclaimerNote: "แฟ้มของ TMO เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "O",
  companyName: "Realty Income Corporation",
  assetType: "stock",
  classroom: "Dividend Club",
  sector: "Real Estate",
  archetype: "เด็กเก็บค่าเช่ารายเดือน",
  roleTitle: "ผู้ดูแลห้องเช่าปันผล",
  shortDescription: "เด็ก REIT ที่ชอบแจกขนมรายเดือนและถืออสังหาริมทรัพย์เชิงพาณิชย์หลายแห่ง",
  personality: "นิ่งกว่าห้องโตแรง แต่ไวต่อดอกเบี้ยและคุณภาพผู้เช่า",
  oneLineStory: "O คือเด็กเจ้าของตึกที่เดินเก็บค่าเช่าเป็นรอบ ๆ และเอามาแบ่งขนมให้ชมรมปันผล",
  strengths: [
    "รายได้ค่าเช่าจากอสังหาริมทรัพย์หลากหลาย",
    "นิสัย dividend ชัดเจน",
    "ใช้เรียนรู้ REIT และดอกเบี้ย"
  ],
  weaknesses: [
    "ดอกเบี้ยสูงกดดัน valuation ได้",
    "คุณภาพผู้เช่าและ occupancy สำคัญ",
    "REIT ต้องเข้าถึงตลาดทุน"
  ],
  riskTemperament: "เด็กเก็บค่าเช่ารายเดือน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "C+",
    stability: "B",
    moatStrength: "B",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "O",
    "SCHD",
    "KO"
  ],
  classmates: [
    "SCHD",
    "KO",
    "PEP",
    "PG",
    "VTI"
  ],
  tags: [
    "REIT",
    "dividend",
    "real estate",
    "rates"
  ],
  investorFit: [
    "เรียนรู้ REIT",
    "ดูผลของดอกเบี้ย",
    "เข้าใจรายได้ค่าเช่ากับปันผล"
  ],
  disclaimerNote: "แฟ้มของ O เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "XOM",
  companyName: "Exxon Mobil Corporation",
  assetType: "stock",
  classroom: "Energy & Industrial Yard",
  sector: "Energy",
  archetype: "เด็กสนามพลังงานรุ่นใหญ่",
  roleTitle: "ผู้ดูแลน้ำมันและก๊าซ",
  shortDescription: "เด็กพลังงานขนาดใหญ่ที่ช่วยให้เรียนรู้ commodity cycle, cash flow และการลงทุนระยะยาว",
  personality: "แข็งแรงตามรอบพลังงาน แต่คะแนนเหวี่ยงได้เมื่อราคาน้ำมันและก๊าซเปลี่ยน",
  oneLineStory: "XOM คือเด็กสนามพลังงานที่ถือหมวกนิรภัยและสมุด commodity cycle เข้าห้องเรียน",
  strengths: [
    "ขนาดใหญ่ในน้ำมันและก๊าซ",
    "cash flow สูงในช่วงพลังงานแข็งแรง",
    "integrated model ช่วยให้เห็นหลายส่วนของ value chain"
  ],
  weaknesses: [
    "ราคาพลังงานผันผวน",
    "transition ด้านพลังงานเป็นคำถามระยะยาว",
    "โครงการใหญ่ใช้เงินและเวลามาก"
  ],
  riskTemperament: "เด็กสนามพลังงานรุ่นใหญ่ มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "CVX",
    "XOM",
    "CAT"
  ],
  classmates: [
    "CVX",
    "CAT",
    "DE",
    "GE",
    "XOM"
  ],
  tags: [
    "energy",
    "oil",
    "cash flow",
    "dividend"
  ],
  investorFit: [
    "เรียนรู้ commodity cycle",
    "ดู integrated energy",
    "เข้าใจ dividend กับราคาพลังงาน"
  ],
  disclaimerNote: "แฟ้มของ XOM เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "CVX",
  companyName: "Chevron Corporation",
  assetType: "stock",
  classroom: "Energy & Industrial Yard",
  sector: "Energy",
  archetype: "เด็กพลังงานสายวินัย",
  roleTitle: "ผู้ดูแลโครงการน้ำมันและก๊าซ",
  shortDescription: "เด็กพลังงานขนาดใหญ่ที่เน้นวินัยเงินทุนและกระแสเงินสดในสนาม commodity",
  personality: "สุขุมกว่าเด็กพลังงานบางตัว แต่ยังต้องเรียนรู้ราคาน้ำมันที่เหวี่ยงได้",
  oneLineStory: "CVX คือเด็กพลังงานที่ทำงานเป็นระบบและคอยดูว่าโครงการใหญ่ใช้เงินคุ้มไหม",
  strengths: [
    "integrated energy business",
    "วินัยเงินทุนและ dividend เป็นบทเรียน",
    "ฐานสินทรัพย์พลังงานขนาดใหญ่"
  ],
  weaknesses: [
    "ผูกกับราคาน้ำมันและก๊าซ",
    "โครงการใหญ่มี execution risk",
    "energy transition เป็นโจทย์ระยะยาว"
  ],
  riskTemperament: "เด็กพลังงานสายวินัย มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B-",
    stability: "B+",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "XOM",
    "XOM",
    "XOM"
  ],
  classmates: [
    "XOM",
    "CAT",
    "DE",
    "GE",
    "XOM"
  ],
  tags: [
    "energy",
    "oil",
    "dividend",
    "capital discipline"
  ],
  investorFit: [
    "เทียบ XOM กับ CVX",
    "เรียนรู้ capital discipline",
    "ดู commodity exposure"
  ],
  disclaimerNote: "แฟ้มของ CVX เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "CAT",
  companyName: "Caterpillar Inc.",
  assetType: "stock",
  classroom: "Energy & Industrial Yard",
  sector: "Industrials",
  archetype: "เด็กเครื่องจักรก่อสร้าง",
  roleTitle: "ผู้ดูแลรถตักสนามโรงเรียน",
  shortDescription: "เด็กอุตสาหกรรมที่ขายเครื่องจักรให้เหมือง ก่อสร้าง พลังงาน และโครงการใหญ่",
  personality: "แข็งแรง แต่เป็นวัฏจักรตามการลงทุนจริงในโลกนอกห้องเรียน",
  oneLineStory: "CAT คือเด็กขับรถตักที่โผล่มาเมื่อโรงเรียนสร้างตึกใหม่ ขุดเหมือง หรือทำโครงการใหญ่",
  strengths: [
    "แบรนด์เครื่องจักรหนักระดับโลก",
    "เกี่ยวข้องกับ construction, mining และ energy",
    "บริการหลังการขายช่วยเสริมความทนทาน"
  ],
  weaknesses: [
    "วัฏจักรการลงทุนอุตสาหกรรมมีผล",
    "commodity และ construction cycle กระทบ",
    "ต้นทุนและ supply chain สำคัญ"
  ],
  riskTemperament: "เด็กเครื่องจักรก่อสร้าง มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "High"
  },
  rivals: [
    "DE",
    "GE",
    "XOM"
  ],
  classmates: [
    "DE",
    "GE",
    "BA",
    "XOM",
    "XOM"
  ],
  tags: [
    "industrials",
    "machinery",
    "construction",
    "cycle"
  ],
  investorFit: [
    "เรียนรู้ industrial cycle",
    "ดู machinery moat",
    "เข้าใจความสัมพันธ์กับ commodity และ infrastructure"
  ],
  disclaimerNote: "แฟ้มของ CAT เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "DE",
  companyName: "Deere & Company",
  assetType: "stock",
  classroom: "Energy & Industrial Yard",
  sector: "Industrials",
  archetype: "เด็กฟาร์มเทคโนโลยี",
  roleTitle: "ผู้ดูแลรถไถอัจฉริยะ",
  shortDescription: "เด็กเครื่องจักรเกษตรที่ผสมเหล็ก ซอฟต์แวร์ และข้อมูลในไร่นา",
  personality: "จริงจัง มีฤดูกาล และสอนบทเรียนวัฏจักรเกษตรกับ productivity ได้ดี",
  oneLineStory: "DE คือเด็กขับรถไถอัจฉริยะที่ช่วยให้ฟาร์มทำงานแม่นขึ้นและใช้ข้อมูลมากขึ้น",
  strengths: [
    "แบรนด์แข็งในเครื่องจักรเกษตร",
    "precision agriculture เพิ่มบทเรียนเทคโนโลยี",
    "บริการและ financing ช่วยเสริม ecosystem"
  ],
  weaknesses: [
    "รายได้ผูกกับ farm income cycle",
    "อัตราดอกเบี้ยและราคาพืชผลมีผล",
    "เครื่องจักรราคาแพงทำให้ลูกค้าชะลอได้"
  ],
  riskTemperament: "เด็กฟาร์มเทคโนโลยี มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "CAT",
    "GE",
    "CAT"
  ],
  classmates: [
    "CAT",
    "GE",
    "BA",
    "XOM",
    "XOM"
  ],
  tags: [
    "agriculture",
    "machinery",
    "industrial",
    "technology"
  ],
  investorFit: [
    "เรียนรู้ ag equipment cycle",
    "ดู precision agriculture",
    "เข้าใจ industrial financing"
  ],
  disclaimerNote: "แฟ้มของ DE เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "GE",
  companyName: "GE Aerospace",
  assetType: "stock",
  classroom: "Energy & Industrial Yard",
  sector: "Industrials",
  archetype: "เด็กเครื่องยนต์อากาศยาน",
  roleTitle: "ช่างประจำโรงซ่อมเครื่องบิน",
  shortDescription: "เด็กอุตสาหกรรมที่เน้นเครื่องยนต์และบริการหลังการขายในโลกการบิน",
  personality: "กำลังจัดตัวใหม่หลังแยกธุรกิจ และมีบทเรียนเรื่อง installed base กับบริการระยะยาว",
  oneLineStory: "GE คือเด็กช่างเครื่องยนต์ที่คอยดูแลให้เครื่องบินในโรงเรียนบินต่อได้หลายปี",
  strengths: [
    "installed base เครื่องยนต์อากาศยานใหญ่",
    "บริการซ่อมบำรุงสร้างรายได้ต่อเนื่อง",
    "บทเรียนเรื่อง aerospace cycle"
  ],
  weaknesses: [
    "การบินและ supply chain มีวัฏจักร",
    "execution หลังปรับโครงสร้างสำคัญ",
    "ลูกค้าสายการบินและผู้ผลิตเครื่องบินมีผล"
  ],
  riskTemperament: "เด็กเครื่องยนต์อากาศยาน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B+",
    stability: "B",
    moatStrength: "B+",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "GE",
    "BA",
    "CAT"
  ],
  classmates: [
    "CAT",
    "DE",
    "BA",
    "XOM",
    "XOM"
  ],
  tags: [
    "aerospace",
    "industrial",
    "engines",
    "services"
  ],
  investorFit: [
    "เรียนรู้ installed base",
    "ดู aerospace recovery",
    "เข้าใจบริการหลังการขายอุตสาหกรรม"
  ],
  disclaimerNote: "แฟ้มของ GE เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "BA",
  companyName: "The Boeing Company",
  assetType: "stock",
  classroom: "Energy & Industrial Yard",
  sector: "Industrials",
  archetype: "เด็กสร้างเครื่องบินที่ต้องจัดโต๊ะใหม่",
  roleTitle: "ผู้ประกอบเครื่องบินใหญ่",
  shortDescription: "เด็กอุตสาหกรรมการบินที่มีบทเรียนทั้ง backlog, safety, supply chain และความเชื่อมั่น",
  personality: "มีความสำคัญสูง แต่คะแนนซนเพราะการส่งงานและคุณภาพถูกจับตาเข้ม",
  oneLineStory: "BA คือเด็กประกอบเครื่องบินที่มีสมุดสั่งงานหนา แต่ต้องพิสูจน์ว่างานทุกชิ้นปลอดภัยและส่งทัน",
  strengths: [
    "หนึ่งในผู้ผลิตเครื่องบินพาณิชย์รายใหญ่",
    "backlog ทำให้มีบทเรียนระยะยาว",
    "เกี่ยวข้องกับ aerospace supply chain กว้าง"
  ],
  weaknesses: [
    "quality และ safety เป็นข้อสอบสำคัญ",
    "cash flow อ่อนไหวต่อ delivery schedule",
    "supply chain และ regulation กดดันได้"
  ],
  riskTemperament: "เด็กสร้างเครื่องบินที่ต้องจัดโต๊ะใหม่ มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "B",
    stability: "C+",
    moatStrength: "B",
    valuationPressure: "Medium",
    volatility: "High",
    dividendFriendliness: "Low"
  },
  rivals: [
    "GE",
    "GE",
    "BA"
  ],
  classmates: [
    "GE",
    "CAT",
    "DE",
    "XOM",
    "XOM"
  ],
  tags: [
    "aerospace",
    "manufacturing",
    "safety",
    "cycle"
  ],
  investorFit: [
    "เรียนรู้ aerospace manufacturing",
    "ดู execution risk",
    "เข้าใจ backlog กับ cash flow"
  ],
  disclaimerNote: "แฟ้มของ BA เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "VTI",
  companyName: "Vanguard Total Stock Market ETF",
  assetType: "ETF",
  classroom: "ETF Cohort",
  sector: "ETF",
  archetype: "โฮมรูมตลาดทั้งโรงเรียน",
  roleTitle: "ตัวแทนหุ้นสหรัฐกว้างมาก",
  shortDescription: "ETF ที่รวมเพื่อนจำนวนมากจากตลาดหุ้นสหรัฐไว้ในสมุดเดียว กว้างกว่าเฉพาะบริษัทใหญ่",
  personality: "นิสัยกระจายตัวกว่าเด็กเดี่ยว เหมาะกับการเรียนรู้ภาพรวมตลาดแบบไม่เลือกโต๊ะเดียว",
  oneLineStory: "VTI คือโฮมรูมตลาดกว้างที่รวมเพื่อนทั้งชั้น ตั้งแต่ตัวใหญ่ไปจนถึงตัวเล็กกว่า",
  strengths: [
    "กระจายตัวกว้างในหุ้นสหรัฐ",
    "ใช้เรียนรู้ total market exposure",
    "ช่วยเทียบกับ SPY และ ETF ธีมเฉพาะ"
  ],
  weaknesses: [
    "ยังผันผวนตามตลาดรวม",
    "mega-cap ยังมีน้ำหนักสูง",
    "ไม่ได้กันความเสี่ยงเศรษฐกิจโดยอัตโนมัติ"
  ],
  riskTemperament: "โฮมรูมตลาดทั้งโรงเรียน มีระดับความซน ซนกลาง ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "Medium",
  reportCard: {
    growthEnergy: "B",
    stability: "B+",
    moatStrength: "B",
    valuationPressure: "Medium",
    volatility: "Medium",
    dividendFriendliness: "Medium"
  },
  rivals: [
    "SPY",
    "QQQ",
    "SPY"
  ],
  classmates: [
    "SPY",
    "QQQ",
    "SCHD",
    "XLK",
    "BLK"
  ],
  tags: [
    "ETF",
    "total market",
    "diversified",
    "broad market"
  ],
  investorFit: [
    "เรียนรู้ total market ETF",
    "เทียบ VTI กับ SPY",
    "เข้าใจ diversification แบบกว้าง"
  ],
  disclaimerNote: "แฟ้มของ VTI เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
},
{
  ticker: "XLK",
  companyName: "Technology Select Sector SPDR Fund",
  assetType: "ETF",
  classroom: "ETF Cohort",
  sector: "ETF",
  archetype: "ชมรม ETF ห้องเทค",
  roleTitle: "ตัวแทน sector technology",
  shortDescription: "ETF ที่รวมเพื่อนกลุ่มเทคโนโลยีขนาดใหญ่ไว้ในแฟ้ม sector เดียว",
  personality: "พลังสูงกว่าตลาดกว้าง และช่วยให้เห็นความกระจุกตัวในห้องเทคชัดขึ้น",
  oneLineStory: "XLK คือบัตรชมรมเทคที่รวมเด็กซอฟต์แวร์ อุปกรณ์ และชิปบางส่วนไว้ในห้องเดียว",
  strengths: [
    "ใช้ศึกษา technology sector exposure",
    "มีเพื่อน mega-cap น้ำหนักสูง",
    "ช่วยเทียบกับ QQQ และ SPY"
  ],
  weaknesses: [
    "กระจุกตัวในเทคมากกว่าตลาดกว้าง",
    "valuation และ rate sensitivity มีผล",
    "น้ำหนักรายตัวใหญ่เปลี่ยนอารมณ์ ETF ได้"
  ],
  riskTemperament: "ชมรม ETF ห้องเทค มีระดับความซน ซนมาก ใช้เรียนรู้ความผันผวนและนิสัยธุรกิจแบบง่าย",
  riskLevel: "High",
  reportCard: {
    growthEnergy: "A-",
    stability: "B",
    moatStrength: "B",
    valuationPressure: "High",
    volatility: "Medium",
    dividendFriendliness: "Low"
  },
  rivals: [
    "QQQ",
    "SPY",
    "SMH"
  ],
  classmates: [
    "AAPL",
    "MSFT",
    "NVDA",
    "QQQ",
    "VTI"
  ],
  tags: [
    "ETF",
    "technology",
    "sector",
    "mega cap"
  ],
  investorFit: [
    "เรียนรู้ sector ETF",
    "ดู concentration risk",
    "เทียบ XLK กับ QQQ"
  ],
  disclaimerNote: "แฟ้มของ XLK เป็นบทเรียนแบบย่อเพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา"
}
];

const thaiClassrooms = {
  "AI Chip Workshop": "ห้องชิป AI",
  "Software & Cloud Lab": "ห้องซอฟต์แวร์และคลาวด์",
  "Consumer Tech Hall": "ห้องเทคผู้บริโภค",
  "Platform & Commerce Hall": "ห้องแพลตฟอร์มและการค้า",
  "Data & Intelligence Club": "ชมรมข้อมูลและปัญญา",
  "Infrastructure Workshop": "ห้องโครงสร้างพื้นฐาน",
  "ETF Cohort": "ห้องกองทุนรวมเพื่อนเยอะ",
  "Dividend Club": "ชมรมปันผล",
  "Finance & Payments Hall": "ห้องการเงินและการจ่ายเงิน",
  "Healthcare Hall": "ห้องพยาบาลและสุขภาพ",
  "Consumer & Brand Hall": "ห้องแบรนด์และผู้บริโภค",
  "Energy & Industrial Yard": "ลานพลังงานและอุตสาหกรรม"
};

const thaiRiskLevels = {
  Low: "ซนเบา",
  Medium: "ซนกลาง",
  High: "ซนมาก",
  "Very High": "ซนเทอร์โบ"
};

const thaiProfiles = {
  NVDA: {
    archetype: "ดาวห้องแล็บ AI",
    roleTitle: "เด็กอัจฉริยะสายประมวลผล",
    shortDescription: "น้องดาวแล็บที่ชิปของตัวเองถูกใช้เป็นเครื่องมือหลักในบทเรียน AI หลายห้อง",
    personality: "เก่งจัด เข้มข้น ชอบคิดเรื่องโครงสร้างพื้นฐาน และถูกทั้งโรงเรียนจับตาอยู่เสมอ",
    oneLineStory: "NVDA คือเด็กดาวเด่นห้องแล็บ AI ที่ตั้งจังหวะให้เพื่อนทั้งโรงเรียนเวลาพูดถึงชิปและการประมวลผลยุคใหม่",
    strengths: ["มีระบบนิเวศ GPU ที่นักพัฒนาและดาต้าเซ็นเตอร์ใช้เยอะ", "ยืนอยู่กลางกระแสลงทุนโครงสร้างพื้นฐาน AI", "ฮาร์ดแวร์กับซอฟต์แวร์ทำงานเป็นชุด ทำให้เพื่อนย้ายออกยาก"],
    weaknesses: ["ความคาดหวังจากทั้งห้องสูงมาก", "ถ้าลูกค้าปรับงบ ช่วงสอบชิปอาจเปลี่ยนอารมณ์เร็ว", "เพื่อนหลายคนพยายามลดการพึ่งพาน้องคนเดียว"],
    riskTemperament: "เด็กดาวแล็บพลังสูง หัวใจเต้นเร็วเวลาตลาดคาดหวังเยอะ",
    investorFit: ["เรียนรู้โครงสร้างพื้นฐาน AI", "ดูตัวอย่างความคาดหวังเทียบกับการส่งงานจริง", "เข้าใจว่าระบบนิเวศฮาร์ดแวร์สร้างความได้เปรียบได้อย่างไร"]
  },
  AMD: {
    archetype: "เด็กท้าชนสายสร้างของ",
    roleTitle: "คู่แข่งชิปไฟแรง",
    shortDescription: "เด็กห้องชิปที่พยายามแย่งโต๊ะเรียนใน CPU, GPU และชิป AI ให้ได้มากขึ้น",
    personality: "เคลื่อนไหวไว เทคนิคแน่น สู้ไม่ถอย และอ่อนไหวกับความคาดหวังที่เปลี่ยนเร็ว",
    oneLineStory: "AMD คือเด็กห้องชิปสายท้าชน วิ่งไล่รุ่นพี่ตัวท็อปแบบไม่ค่อยยอมใคร โตไว กล้าลุย แต่โดนกดดันง่ายเวลาเพื่อนคาดหวังเยอะ",
    strengths: ["ชื่อเสียงด้าน CPU ในพีซีและเซิร์ฟเวอร์ยังแข็งแรง", "มีความพยายามจริงจังในดาต้าเซ็นเตอร์และตัวเร่ง AI", "เคยแสดงให้เห็นว่าเมื่อส่งงานดี ก็แย่งส่วนแบ่งจากรุ่นพี่ได้"],
    weaknesses: ["ต้องเจอกับคู่แข่งแพลตฟอร์มที่ทรงพลังมาก", "เรื่อง AI อาจถูกคาดหวังนำหน้าผลงานที่เห็นจริง", "วัฏจักรฮาร์ดแวร์เย็นลงได้เร็ว"],
    riskTemperament: "นักวิ่งสายแข่งขัน พลังสูงในสัปดาห์สอบ เหวี่ยงตามความหวังเรื่องชิปและ AI ได้ง่าย",
    investorFit: ["เรียนรู้เกมผู้ท้าชิงกับผู้นำตลาด", "ดูวัฏจักรเซมิคอนดักเตอร์", "เปรียบเทียบการส่งงานสินค้าเข้ากับความคาดหวังของตลาด"]
  },
  AAPL: {
    archetype: "เด็กพรีเมียมสาย ecosystem",
    roleTitle: "หัวหน้ากลุ่มแบรนด์ภักดี",
    shortDescription: "เด็กเทคผู้บริโภคที่เนี้ยบ มีแฟนประจำ และอุปกรณ์ในกระเป๋าเข้าชุดกันหมด",
    personality: "มีวินัย พรีเมียม หาเงินเก่ง และระวังภาพลักษณ์ของตัวเองมาก",
    oneLineStory: "AAPL คือเด็กที่โทรศัพท์ นาฬิกา แล็ปท็อป และสมุดบริการต่าง ๆ เข้าชุดกันจนเพื่อนย้ายออกยาก",
    strengths: ["แบรนด์แข็งแรงและลูกค้าภักดี", "ฮาร์ดแวร์ ซอฟต์แวร์ และบริการเชื่อมกันแน่น", "ฐานผู้ใช้ทั่วโลกช่วยสร้างเงินสดสม่ำเสมอ"],
    weaknesses: ["โตช้ากว่าเด็กสายโตแรงบางคน", "รอบสินค้า โดยเฉพาะ iPhone ยังสำคัญ", "กฎระเบียบอาจเข้ามาท้าทายกติกาแพลตฟอร์ม"],
    riskTemperament: "เด็กเกียรตินิยมสุขุม มีนิสัยพรีเมียม แต่ยังต้องเจอรอบสินค้าและกฎแพลตฟอร์ม",
    investorFit: ["เรียนรู้ moat จากผู้บริโภคและ ecosystem", "ดูตัวอย่างเมกะแคปที่โตแบบโตเต็มวัย", "เปรียบเทียบพลังแบรนด์กับแรงกดดันด้านกฎระเบียบ"]
  },
  MSFT: {
    archetype: "ประธานห้ององค์กร",
    roleTitle: "หัวหน้าคลาวด์และเครื่องมือทำงาน",
    shortDescription: "เด็กซอฟต์แวร์ตัวใหญ่ที่มีที่นั่งทั้งเครื่องมือทำงาน คลาวด์ และ workflow AI",
    personality: "เป็นระบบ ทนทาน เพื่อนองค์กรไว้ใจ และยังแอบทะเยอทะยานในหลายแผนก",
    oneLineStory: "MSFT คือประธานห้องที่จัดตารางเรียน ดูแลห้องคลาวด์ และถือเครื่องมือทำงานของทั้งโรงเรียนไว้หลายชิ้น",
    strengths: ["ความสัมพันธ์กับลูกค้าองค์กรลึกมาก", "Azure เป็นคลาวด์ใหญ่ที่พา AI กระจายได้กว้าง", "มีเครื่องยนต์หลายตัวทั้ง productivity, security, gaming และ developer tools"],
    weaknesses: ["ตัวใหญ่มากจนการโตให้เซอร์ไพรส์ยากขึ้น", "การแข่งขันคลาวด์ยังเข้มข้น", "หน่วยงานกำกับดูแลจับตาแพลตฟอร์มใหญ่เสมอ"],
    riskTemperament: "ผู้นำสายมั่นคงที่ตารางแน่นทั้งวัน ซนน้อยกว่าเด็กโตแรงแต่ยังมีแรงคาดหวังสูง",
    investorFit: ["เรียนรู้พลังของแพลตฟอร์มกว้าง", "ดูคลาวด์และการกระจาย AI", "เข้าใจว่าความสัมพันธ์กับองค์กรสร้างความทนทานได้อย่างไร"]
  },
  GOOGL: {
    archetype: "นักวิจัยห้องค้นหา",
    roleTitle: "ผู้เชี่ยวชาญข้อมูลและการค้นพบ",
    shortDescription: "เด็กแพลตฟอร์มที่มีข้อมูลเยอะ มี search, ads, YouTube, cloud และโปรเจกต์ทดลองเต็มโต๊ะ",
    personality: "ขี้สงสัย เทคนิคแน่น ชอบประดิษฐ์ แต่บางทีก็กระจายสมุดไว้หลายโต๊ะเกินไป",
    oneLineStory: "GOOGL คือเด็กนักค้นหาที่รู้ว่าคำตอบซ่อนอยู่ตรงไหน และยังทดลองสมุด AI เล่มใหม่อยู่เรื่อย ๆ",
    strengths: ["ขนาดของ search และโฆษณาใหญ่มาก", "มีรากฐานวิจัย AI และ data infrastructure ลึก", "YouTube และ cloud เป็นเครื่องยนต์เสริม"],
    weaknesses: ["งบโฆษณาเปลี่ยนตามเศรษฐกิจได้", "AI อาจเปลี่ยนพฤติกรรมการค้นหาในระยะยาว", "คำถามด้านกฎระเบียบมาเยี่ยมห้องบ่อย"],
    riskTemperament: "เด็กทดลองฉลาด โต๊ะวิจัยแน่นมาก อารมณ์เปลี่ยนได้เมื่อโฆษณา AI หรือกฎระเบียบกดดัน",
    investorFit: ["เรียนรู้ธุรกิจแพลตฟอร์มโฆษณา", "ดูความเสี่ยงจาก AI disruption", "เปรียบเทียบข้อได้เปรียบด้านข้อมูลกับแรงกดดันจากกฎระเบียบ"]
  },
  AMZN: {
    archetype: "ผู้จัดการร้านสหกรณ์",
    roleTitle: "นักสร้าง commerce และ cloud",
    shortDescription: "เด็กสายปฏิบัติที่ดูแลร้านสหกรณ์ของโรงเรียนและยังคุมห้องเซิร์ฟเวอร์ใหญ่ไปพร้อมกัน",
    personality: "หมกมุ่นกับลูกค้า ทำงานหนัก ไม่อยู่นิ่ง และยอมทำการบ้านกำไรบาง ๆ เพื่อขยายสนาม",
    oneLineStory: "AMZN คือเด็กที่จัดของ ส่งของ ดูแลร้าน และปล่อยเช่าพื้นที่ในตู้เซิร์ฟเวอร์ของโรงเรียน",
    strengths: ["AWS เป็นผู้นำคลาวด์สำคัญ", "เครือข่าย commerce และ logistics ใหญ่มาก", "หลายธุรกิจช่วยพยุงกันได้"],
    weaknesses: ["กำไรฝั่ง retail อาจบาง", "การลงทุนใหญ่กดดันกำไรระยะสั้นได้", "แพลตฟอร์มใหญ่ย่อมเจอคำถามด้านกฎระเบียบ"],
    riskTemperament: "เด็กงานยุ่ง เข็นรถหลายคันพร้อมกัน นิสัยเหวี่ยงตาม retail margin และการลงทุนใหญ่",
    investorFit: ["เรียนรู้ scale economics", "ดูโมเดล cloud บวก commerce", "เข้าใจว่าการลงทุนซ้ำส่งผลต่อกำไรอย่างไร"]
  },
  META: {
    archetype: "หัวหน้าชมรมโซเชียล",
    roleTitle: "ผู้นำเครือข่ายความสนใจ",
    shortDescription: "เด็กโซเชียลแพลตฟอร์มที่มีเครือข่ายคนดูมหาศาล โฆษณา แชต และเครื่องมือคอนเทนต์ AI",
    personality: "กล้าเข้าสังคม ทำเงินเก่ง ชอบทดลอง และบางทีดราม่ากับโปรเจกต์ข้างทาง",
    oneLineStory: "META คือหัวหน้าชมรมโซเชียลที่เคยออกนอกทางแพง ๆ แล้วกลับมาโฟกัสบทเรียน AI กับความสนใจของผู้คน",
    strengths: ["เครือข่ายโซเชียลใหญ่และ engagement สูง", "เครื่องจักรโฆษณาทรงพลัง", "AI ช่วยเรื่องการแนะนำคอนเทนต์และโฆษณาได้"],
    weaknesses: ["วัฏจักรโฆษณายังมีผลต่ออารมณ์", "privacy และกฎระเบียบเป็นข้อสอบประจำ", "โปรเจกต์ทดลองใหญ่ทำให้การใช้เงินอ่านยาก"],
    riskTemperament: "หัวหน้าชมรมพลังสูง ห้องชมรมเสียงดัง อารมณ์ขึ้นลงตามโฆษณา การใช้เงิน และกฎ privacy",
    investorFit: ["เรียนรู้ network effects", "ดูธุรกิจแพลตฟอร์มโฆษณา", "เปรียบเทียบการโฟกัส การใช้เงิน และความเสี่ยงของแพลตฟอร์ม"]
  },
  TSLA: {
    archetype: "เด็กวิทย์ไฟฟ้า",
    roleTitle: "นักประดิษฐ์ผันผวนสูง",
    shortDescription: "เด็กเทคผู้บริโภคที่ผสมรถไฟฟ้า พลังงาน ซอฟต์แวร์ และไอเดียขับอัตโนมัติ",
    personality: "ทะเยอทะยาน แตกเสียงง่าย เปลี่ยนเร็ว และแทบไม่เคยเงียบช่วงสอบ",
    oneLineStory: "TSLA คือเด็กวิทย์ไฟฟ้าที่โปรเจกต์บางวันทำให้ทั้งห้องว้าว และบางวันก็เขย่าโต๊ะแล็บแรงมาก",
    strengths: ["แบรนด์รถไฟฟ้าเป็นที่รู้จัก", "มี scale การผลิตและความสัมพันธ์ตรงกับลูกค้า", "มีทางเลือกให้ศึกษาใน energy storage, software และ autonomy"],
    weaknesses: ["กำไรรถยนต์ถูกบีบได้", "การแข่งขันเพิ่มขึ้นเรื่อย ๆ", "เรื่องเล่ารอบตัวเหวี่ยงแรงมาก"],
    riskTemperament: "นักประดิษฐ์สายดราม่า ตารางแล็บผันผวน เหมาะใช้เรียนรู้หุ้นที่เรื่องเล่าแรงมาก",
    investorFit: ["เรียนรู้ narrative risk", "ดูแบรนด์สาย disrupt", "เปรียบเทียบความหวังนวัตกรรมกับแรงกดดันการส่งงานจริง"]
  }
};

const fallbackThaiByClassroom = {
  "ห้องชิป AI": ["เด็กชิปไฟแรง", "นักสร้างชิปประจำห้อง"],
  "ห้องซอฟต์แวร์และคลาวด์": ["เด็กระบบจัดจ้าน", "นักจัดการแพลตฟอร์ม"],
  "ห้องเทคผู้บริโภค": ["เด็กโปรดักต์คนดัง", "นักสร้างของให้คนใช้"],
  "ห้องแพลตฟอร์มและการค้า": ["เด็กแพลตฟอร์มคนเยอะ", "นักต่อระบบการค้า"],
  "ชมรมข้อมูลและปัญญา": ["เด็กข้อมูลสายวิเคราะห์", "นักอ่านสัญญาณ"],
  "ห้องโครงสร้างพื้นฐาน": ["เด็กหลังบ้านคนสำคัญ", "ช่างประจำโรงเรียน"],
  "ห้องกองทุนรวมเพื่อนเยอะ": ["ตัวแทนหมู่คณะ", "ห้องรวมเพื่อนหลายคน"],
  "ชมรมปันผล": ["เด็กสายสม่ำเสมอ", "ผู้แจกขนมประจำชมรม"],
  "ห้องการเงินและการจ่ายเงิน": ["เด็กห้องการเงิน", "ผู้ดูแลสมุดเงิน"],
  "ห้องพยาบาลและสุขภาพ": ["เด็กห้องพยาบาล", "ผู้ดูแลแฟ้มสุขภาพ"],
  "ห้องแบรนด์และผู้บริโภค": ["เด็กแบรนด์ประจำโรงเรียน", "ผู้ดูแลของใช้และร้านค้า"],
  "ลานพลังงานและอุตสาหกรรม": ["เด็กสนามอุตสาหกรรม", "ช่างประจำลานใหญ่"]
};

function ensureMinText(text, suffix, minLength) {
  const value = String(text || "").trim();
  if (value.length >= minLength) return value;
  return `${value} ${suffix}`.trim();
}

function toThaiProfile(profile) {
  const classroom = thaiClassrooms[profile.classroom] || profile.classroom;
  const fallback = fallbackThaiByClassroom[classroom] || ["นักเรียนประจำห้อง", "ตัวละครการเรียนรู้"];
  const custom = thaiProfiles[profile.ticker] || {};
  const roleTitle = custom.roleTitle || profile.roleTitle || fallback[1];
  const shortDescription =
    custom.shortDescription || profile.shortDescription || `นักเรียนห้อง ${classroom} ที่ช่วยให้เราเรียนรู้ธุรกิจและนิสัยตลาดผ่านมุมมองแบบโรงเรียน`;
  const personality =
    custom.personality || profile.personality || `มีคาแรกเตอร์เฉพาะตัวของห้อง ${classroom} เหมาะสำหรับเปิดแฟ้มดูนิสัยธุรกิจแบบง่าย ๆ`;
  const oneLineStory =
    custom.oneLineStory || profile.oneLineStory || `${profile.ticker} คือหนึ่งในนักเรียนของ ${classroom} ที่ช่วยเล่าเรื่องธุรกิจแบบจำง่าย ไม่ใช่คำแนะนำการลงทุน`;
  const riskTemperament =
    custom.riskTemperament || profile.riskTemperament || `ระดับความซนของน้องอยู่ที่ ${thaiRiskLevels[profile.riskLevel] || profile.riskLevel} ใช้ดูความผันผวนและนิสัยของธุรกิจแบบง่าย ๆ`;

  return {
    ...profile,
    classroom,
    archetype: custom.archetype || profile.archetype || fallback[0],
    roleTitle: ensureMinText(roleTitle, `ประจำ ${classroom}`, 12),
    shortDescription: ensureMinText(shortDescription, `ใช้เป็นบทเรียนแบบย่อของ ${classroom} สำหรับมือใหม่ที่อยากจำคาแรกเตอร์ธุรกิจให้ง่ายขึ้น`, 60),
    personality: ensureMinText(personality, "และช่วยให้เห็นนิสัยธุรกิจแบบเป็นมิตรกับมือใหม่ในโรงเรียนหุ้นมีชีวิต", 55),
    oneLineStory: ensureMinText(oneLineStory, "เพื่อให้จำคาแรกเตอร์ธุรกิจได้ง่ายขึ้นในโรงเรียนหุ้นมีชีวิต โดยไม่ใช้เป็นสัญญาณซื้อขาย", 70),
    strengths:
      custom.strengths || profile.strengths.map((item) => `บทเรียนเด่น: ${item}`),
    weaknesses:
      custom.weaknesses || profile.weaknesses.map((item) => `ข้อควรสังเกต: ${item}`),
    riskTemperament: ensureMinText(riskTemperament, "ใช้เปรียบเทียบอารมณ์ของธุรกิจ ไม่ใช่ตัดสินว่าใครดีกว่าใคร", 35),
    investorFit:
      custom.investorFit || profile.investorFit.map((item) => item.replace(/^Useful for studying /, "เรียนรู้เรื่อง ").replace(/^Good case study for /, "ดูตัวอย่าง ").replace(/^Helpful for /, "ช่วยให้เข้าใจ ")),
    disclaimerNote:
      `แฟ้มนี้เป็นบทเรียนแบบย่อของ ${profile.ticker} เพื่อการศึกษาและความบันเทิงเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือการคาดการณ์ราคา`
  };
}

export const studentProfiles = baseStudentProfiles.map(toThaiProfile);
