export type Region = "US" | "CA" | "UK" | "DE" | "AU" | "IN";

export type DealKind = "Bike" | "Ebike" | "Gear";
export type DriveType = "Mid-Drive" | "Hub Motor" | "Unknown";
export type PriceTier = "Budget" | "Mid" | "Premium";

export type GearCategory =
  | "Helmet"
  | "Boots"
  | "Pants"
  | "Gloves"
  | "Protection"
  | "Jersey"
  | "Goggles"
  | "Other";

/* =====================================================
   BASE DEAL (shared fields)
===================================================== */
type BaseDeal = {
  id: string;
  title: string;
  brand: string;
  retailer: string;
  region: Region;

  price: number;
  wasPrice?: number;
  tier: PriceTier;

  url: string;
  imageUrl?: string;
  highlights: string[];
  lastUpdatedISO: string;
};

/* =====================================================
   DISCRIMINATED UNION TYPES (safer)
===================================================== */
export type BikeDeal = BaseDeal & {
  kind: "Bike" | "Ebike";
  driveType: DriveType;
  gearCategory?: never;
};

export type GearDeal = BaseDeal & {
  kind: "Gear";
  gearCategory: GearCategory;
  driveType?: never;
};

export type Deal = BikeDeal | GearDeal;

export const REGIONS: { code: Region; label: string }[] = [
  { code: "US", label: "United States" },
  { code: "CA", label: "Canada" },
  { code: "UK", label: "United Kingdom" },
  { code: "DE", label: "Germany" },
  { code: "AU", label: "Australia" },
  { code: "IN", label: "India" },
];

/**
 * IMPORTANT:
 * Your old placeholder URL was returning 404, which made every card look "broken".
 * This placeholder is a working Unsplash image.
 */
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1714065256915-0b61c2edb550?auto=format&fit=crop&fm=jpg&q=60&w=1200";

const nowISO = () => new Date().toISOString();

export const SAMPLE_DEALS: Deal[] = [
  // =====================================================
  // ELECTRIC DIRT BIKES — BUDGET (10+)
  // Aim: under ~ $1,500
  // =====================================================

  {
    id: "bike-razor-mx350",
    title: "Razor MX350 Dirt Rocket (Youth Mini)",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 299,
    tier: "Budget",
    url: "https://razor.com/product/mx350-dirt-rocket/",
    imageUrl: PLACEHOLDER,
    highlights: ["Youth mini bike", "Chain drive", "Great starter"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-razor-mx650",
    title: "Razor MX650 Dirt Rocket (Youth/Teen)",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 599,
    tier: "Budget",
    url: "https://razor.com/product/mx650-dirt-rocket/",
    imageUrl: PLACEHOLDER,
    highlights: ["Youth/teen", "Mini dirt bike", "Common parts availability"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-hiboy-dk1",
    title: "Hiboy DK1 Electric Dirt Bike (Youth Mini)",
    brand: "Hiboy",
    retailer: "Hiboy",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 399,
    tier: "Budget",
    url: "https://www.hiboy.com/products/hiboy-dk1-electric-dirt-bike-for-kids-ages-3-13",
    imageUrl: PLACEHOLDER,
    highlights: ["Youth mini bike", "Hub motor", "3 speed modes"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-freddo-36v",
    title: "Freddo 36V Dirt Bike (Off-brand Mini)",
    brand: "Freddo",
    retailer: "Tractor Supply",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 637,
    tier: "Budget",
    url: "https://www.tractorsupply.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Off-brand", "Youth/teen", "Budget entry option"],
    lastUpdatedISO: nowISO(),
  },
  
   {
  id: "bike-mototec-36v-1000w",
  title: "MotoTec 36V 1000W Dirt Bike (Youth/Teen)",
  brand: "MotoTec",
  retailer: "MotoTec USA",
  region: "US",
  kind: "Bike",
  driveType: "Mid-Drive",
  price: 650,
  tier: "Budget",
  url: "https://mototecusa.com/mototec-36v-1000w-hp112e-electric-dirt-bike-green.html",
  imageUrl:
    "https://mototecusa.com/assets/images/Dirt-Bike-36v-1000w-HP112E_Green.jpg",
  highlights: ["1000W class", "Youth/teen", "Adjustable limiter"],
  lastUpdatedISO: nowISO(),
},

  },
  {
    id: "bike-apollo-rfn-sxe500",
    title: "Apollo RFN SX-E500 (Kids Mini Motocross)",
    brand: "Apollo / RFN",
    retailer: "Apollo (US)",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 699,
    tier: "Budget",
    url: "https://apollomotors.ca/",
    imageUrl: PLACEHOLDER,
    highlights: ["Kids mini motocross", "Adjustable modes", "Starter race-style"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-burromax-tt750r",
    title: "Burromax TT750R (Mini Trail Bike)",
    brand: "Burromax",
    retailer: "Burromax",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 995,
    tier: "Budget",
    url: "https://burromax.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Mini trail bike", "Adult-capable size", "Good backyard ripper"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-kawasaki-elektrode",
    title: "Kawasaki Elektrode (Kids Balance Bike)",
    brand: "Kawasaki",
    retailer: "Kawasaki / Dealers",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 1099,
    tier: "Budget",
    url: "https://www.kawasaki.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Kids balance bike", "Hub motor", "3 speed modes"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-kuberg-start",
    title: "Kuberg Start (Kids Mini)",
    brand: "Kuberg",
    retailer: "Kuberg",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1358,
    tier: "Budget",
    url: "https://kuberg.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Kids mini bike", "Quality build", "Adjustable power"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-oset-125",
    title: "OSET 12.5 Racing (Kids Trials)",
    brand: "OSET",
    retailer: "OSET Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1295,
    tier: "Budget",
    url: "https://osetbikes.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Kids trials", "Great control", "Skill builder"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-qronge-x1-spark",
    title: "Qronge X1 Spark (Off-brand Mini E-Dirt)",
    brand: "Qronge",
    retailer: "Qronge",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1149,
    wasPrice: 2199,
    tier: "Budget",
    url: "https://www.qronge.com/products/x1-spark",
    imageUrl: PLACEHOLDER,
    highlights: ["Off-brand", "Mini e-dirt", "Claimed high watts"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-yozma-in10",
    title: "Yozma IN 10 (Off-brand Mini E-Dirt)",
    brand: "Yozma",
    retailer: "Yozma Sport",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1259,
    wasPrice: 1599,
    tier: "Budget",
    url: "https://yozmasport.com/products/in-10",
    imageUrl: PLACEHOLDER,
    highlights: ["Off-brand", "Mini e-dirt", "Teen/smaller adult fit"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-tuttio-soleil01",
    title: "Tuttio Soleil01 (Off-brand Pit Bike)",
    brand: "Tuttio",
    retailer: "TuttioSport",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 1299,
    wasPrice: 1399,
    tier: "Budget",
    url: "https://tuttiosport.com/products/tuttio-soleil01-electric-bike",
    imageUrl: PLACEHOLDER,
    highlights: ["Off-brand", "Pit-bike style", "Budget category"],
    lastUpdatedISO: nowISO(),
  },

  // =====================================================
  // ELECTRIC DIRT BIKES — MID (10+)
  // Aim: ~$1,500–$3,500
  // =====================================================

  {
    id: "bike-freego-nova3",
    title: "Freego Nova 3 (Moto-style E-Dirt)",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1699,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-nova3-mid-drive-electric-motorcycle",
    imageUrl: PLACEHOLDER,
    highlights: ["Moto styling", "Mid-drive", "Budget adult category"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-freego-x2-pro",
    title: "Freego X2 Pro (Dirt-style E-Dirt)",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 2499,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-x2-pro-all-terrain-off-road-motorcycle-electric-dirt-bike-with-pedals",
    imageUrl: PLACEHOLDER,
    highlights: ["Dirt styling", "Hub motor", "Adult-capable"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-mototec-48v-pro",
    title: "MotoTec 48V Pro (1800W Class)",
    brand: "MotoTec",
    retailer: "MotoTec USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1099,
    tier: "Mid",
    url: "https://mototecusa.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Mini dirt bike", "Step-up power", "Adjustable speed"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-volcon-runt",
    title: "Volcon Runt (Youth/Teen Trail)",
    brand: "Volcon",
    retailer: "Volcon",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 2995,
    tier: "Mid",
    url: "https://www.volcon.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Youth/teen", "Trail capable", "Tech features"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-greenger-crf-e2",
    title: "CRF-E2 (Greenger x Honda) Youth E-Dirt",
    brand: "Greenger / Honda",
    retailer: "Honda Dealers",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 2950,
    tier: "Mid",
    url: "https://powersports.honda.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Trusted platform", "Youth", "Dealer support"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-kuberg-cross-hero",
    title: "Kuberg Cross Hero (Youth Performance)",
    brand: "Kuberg",
    retailer: "Kuberg",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 2645,
    tier: "Mid",
    url: "https://kuberg.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Youth performance", "Quality build", "Adjustable power"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-oset-200",
    title: "OSET 20.0 Racing (Youth Trials)",
    brand: "OSET",
    retailer: "OSET Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 3299,
    tier: "Mid",
    url: "https://osetbikes.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Youth trials", "Great control", "Skill builder"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-segway-x160",
    title: "Segway Dirt eBike X160",
    brand: "Segway",
    retailer: "Segway",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 3499,
    tier: "Mid",
    url: "https://www.segway.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Lightweight platform", "Trail friendly", "Proven category"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-orion-rxb-volt",
    title: "Orion RXB Volt 72V (Off-brand Adult)",
    brand: "Orion",
    retailer: "Orion Powersports",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 3299,
    tier: "Mid",
    url: "https://www.orionpowersports.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Off-brand adult", "72V class", "Budget full-size category"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-flx-catalyst",
    title: "FLX Catalyst (Light Trail E-Moto)",
    brand: "FLX",
    retailer: "FLX Bike",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 3999,
    tier: "Mid",
    url: "https://flx.bike/",
    imageUrl: PLACEHOLDER,
    highlights: ["Lightweight", "Trail focused", "Direct-to-consumer"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-happyrun-g300-pro",
    title: "HappyRun G300 Pro (Hub Adult Off-brand)",
    brand: "HappyRun",
    retailer: "Electric Ride Co.",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 3299,
    tier: "Mid",
    url: "https://electricrideco.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Off-brand adult", "Hub motor style", "Full-size look"],
    lastUpdatedISO: nowISO(),
  },

  // =====================================================
  // ELECTRIC DIRT BIKES — PREMIUM (10+)
  // Aim: ~$3,500–$7,000
  // =====================================================

  {
    id: "bike-talaria-sting-r-mx4",
    title: "Talaria Sting R MX4",
    brand: "Talaria",
    retailer: "Luna Cycle",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4099,
    tier: "Premium",
    url: "https://lunacycle.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Premium mid-drive", "Sur-Ron competitor", "Trail ready"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-surron-light-bee-x",
    title: "Sur-Ron Light Bee X",
    brand: "Sur-Ron",
    retailer: "Sur-Ron / Dealers",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4600,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Most popular platform", "Huge aftermarket", "Lightweight"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-surron-ultra-bee",
    title: "Sur-Ron Ultra Bee",
    brand: "Sur-Ron",
    retailer: "Sur-Ron / Dealers",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 6999,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Bigger chassis", "More power class", "Enduro style"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-segway-x260",
    title: "Segway Dirt eBike X260",
    brand: "Segway",
    retailer: "Segway",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 5499,
    tier: "Premium",
    url: "https://www.segway.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Hub-drive style", "Proven platform", "App tuning category"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-apollo-rfn-ares-pro",
    title: "Apollo RFN Ares Rally Pro",
    brand: "Apollo / RFN",
    retailer: "Apollo (US)",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4699,
    tier: "Premium",
    url: "https://apollomotors.ca/",
    imageUrl: PLACEHOLDER,
    highlights: ["High power class", "Full-size", "Premium spec category"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-apollo-rfn-ares-dlx",
    title: "Apollo RFN Ares Rally DLX",
    brand: "Apollo / RFN",
    retailer: "Apollo (US)",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 5199,
    tier: "Premium",
    url: "https://apollomotors.ca/",
    imageUrl: PLACEHOLDER,
    highlights: ["Higher spec", "Full-size", "Performance class"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-electric-motion-escape",
    title: "Electric Motion Escape (Trials/Trail)",
    brand: "Electric Motion",
    retailer: "US Importers",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 6799,
    tier: "Premium",
    url: "https://electric-motion.fr/",
    imageUrl: PLACEHOLDER,
    highlights: ["Trials/trail focused", "Torque control", "Premium niche"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-cake-kalk-or",
    title: "CAKE Kalk OR (Premium Off-road)",
    brand: "CAKE",
    retailer: "US Dealers",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 6500,
    tier: "Premium",
    url: "https://ridecake.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Premium off-road", "Lightweight", "High-end feel"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-csc-rx1e",
    title: "CSC RX1E (Dual-sport / Off-road capable)",
    brand: "CSC",
    retailer: "CSC Motorcycles",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 5495,
    tier: "Premium",
    url: "https://cscmotorcycles.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Street-legal style", "Off-road capable", "US company"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "bike-zero-fx-used",
    title: "Zero FX (Used market under $7k sometimes)",
    brand: "Zero",
    retailer: "Used / Dealers",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 6999,
    tier: "Premium",
    url: "https://www.zeromotorcycles.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Used deal category", "Real motorcycle power", "Dual-sport capable"],
    lastUpdatedISO: nowISO(),
  },

  // =====================================================
  // OPTIONAL: KEEP 1 ITEM IN OTHER TABS SO THEY AREN’T EMPTY
  // =====================================================

  {
    id: "ebike-placeholder",
    title: "E-bike Placeholder (we’ll replace later)",
    brand: "ExampleBrand",
    retailer: "Retailer",
    region: "US",
    kind: "Ebike",
    driveType: "Hub Motor",
    price: 999,
    wasPrice: 1299,
    tier: "Budget",
    url: "https://example.com/budget-ebike",
    imageUrl:
      "https://images.unsplash.com/photo-1520975682038-6f3f04caa3c5?auto=format&fit=crop&w=1200&q=60",
    highlights: ["Placeholder", "Keeps tab populated", "Swap later"],
    lastUpdatedISO: nowISO(),
  },
  {
    id: "gear-placeholder",
    title: "Boots Placeholder (we’ll replace later)",
    brand: "Example",
    retailer: "Retailer",
    region: "US",
    kind: "Gear",
    gearCategory: "Boots",
    price: 199,
    tier: "Mid",
    url: "https://example.com/boots",
    imageUrl:
      "https://images.unsplash.com/photo-1528701800489-20be3c3ea4a2?auto=format&fit=crop&w=1200&q=60",
    highlights: ["Placeholder", "Keeps tab populated", "Swap later"],
    lastUpdatedISO: nowISO(),
  },
];
