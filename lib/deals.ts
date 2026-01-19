export type Region = "US" | "CA" | "UK" | "DE" | "AU" | "IN";

export type DealKind = "Bike" | "GasBike" | "Ebike" | "Gear";
export type DriveType = "Mid-Drive" | "Hub Motor" | "Unknown";
export type PriceTier = "Budget" | "Mid" | "Premium";

// NEW: for Gas Dirt Bikes sub-categories
export type BrandType = "Import" | "NameBrand";

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

  // OPTIONAL: used for GasBike sub-categories (Import vs NameBrand)
  brandType?: BrandType;
};

/* =====================================================
   DISCRIMINATED UNION TYPES (safer)
===================================================== */
export type BikeDeal = BaseDeal & {
  kind: "Bike" | "GasBike" | "Ebike";
  // Gas bikes don't need a driveType, so keep optional
  driveType?: DriveType;
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
  // KIDS / MINI (ELECTRIC)
  // =====================================================
  {
    id: "bike-razor-mx350",
    title: "Razor MX350 Dirt Rocket",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 299,
    tier: "Budget",
    url: "https://razor.com/product/mx350-dirt-rocket/",
    imageUrl:
      "https://razor.com/wp-content/uploads/2025/05/MX350_BL_Refresh_Product_001-1-300x300.jpg",
    highlights: ["Best starter mini bike", "Chain drive", "Kid friendly size"],
    lastUpdatedISO: nowISO(),
  },

  {
    id: "bike-hiboy-dk1",
    title: "Hiboy DK1 Electric Dirt Bike",
    brand: "Hiboy",
    retailer: "Hiboy",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 399,
    tier: "Budget",
    url: "https://www.hiboy.com/products/hiboy-dk1-electric-dirt-bike-for-kids-ages-3-13",
    imageUrl:
      "https://www.hiboy.com/cdn/shop/files/black.jpg?v=1765425463&width=1600",
    highlights: ["Quiet hub motor", "3 speed modes", "Great backyard bike"],
    lastUpdatedISO: nowISO(),
  },

  {
    id: "bike-razor-mx650",
    title: "Razor MX650 Dirt Rocket",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 599,
    tier: "Budget",
    url: "https://razor.com/product/mx650-dirt-rocket/",
    imageUrl:
      "https://razor.com/wp-content/uploads/2025/05/MX650_YE_Product_photo_001-300x300.jpg",
    highlights: ["Step-up power", "Youth / teen size", "Popular upgrade path"],
    lastUpdatedISO: nowISO(),
  },

  // =====================================================
  // MID-RANGE (ELECTRIC)
  // =====================================================
  {
    id: "bike-tuttio-soleil01",
    title: "Tuttio Soleil01 Electric Dirt Bike",
    brand: "Tuttio",
    retailer: "TuttioSport",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 1299,
    wasPrice: 1399,
    tier: "Mid",
    url: "https://tuttiosport.com/products/tuttio-soleil01-electric-bike",
    imageUrl:
      "https://tuttiosport.com/cdn/shop/files/tuttio-soleil01.png?v=1746531602&width=1200",
    highlights: ["Pit-bike style", "Good value", "Mid-range power"],
    lastUpdatedISO: nowISO(),
  },

  {
    id: "bike-yozma-in10",
    title: "Yozma IN-10 Electric Dirt Bike",
    brand: "Yozma",
    retailer: "Yozma Sport",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1259,
    wasPrice: 1599,
    tier: "Mid",
    url: "https://yozmasport.com/products/in-10",
    imageUrl:
      "https://yozmasport.com/cdn/shop/files/Group_41_94ff018a-cd32-475e-a02a-0af0b18cfd24.png?v=1765267218&width=1200",
    highlights: ["Teen / adult capable", "Strong mid-range value", "Aggressive styling"],
    lastUpdatedISO: nowISO(),
  },

  {
    id: "bike-qronge-x1-spark",
    title: "Qronge X1 Spark",
    brand: "Qronge",
    retailer: "Qronge",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1149,
    wasPrice: 2199,
    tier: "Mid",
    url: "https://www.qronge.com/products/x1-spark",
    imageUrl:
      "https://www.qronge.com/cdn/shop/files/2025-12-26-Q_M_3.png?v=1767173964&width=1200",
    highlights: ["High claimed wattage", "Popular review bike", "Great sale value"],
    lastUpdatedISO: nowISO(),
  },

  // =====================================================
  // TOP TIER (ELECTRIC)
  // =====================================================
  {
    id: "bike-eride-pro-s",
    title: "E Ride Pro S",
    brand: "E Ride Pro",
    retailer: "E Ride Pro",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 3999,
    tier: "Premium",
    url: "https://www.eridepro.com/products/pro-s",
    imageUrl: "https://www.eridepro.com/cdn/shop/files/S16-1_1200x.jpg?v=1766548419",
    highlights: ["High-performance e-moto", "Top-tier platform", "Upgrade friendly"],
    lastUpdatedISO: nowISO(),
  },

  {
    id: "bike-eride-pro-sr",
    title: "E Ride Pro SR",
    brand: "E Ride Pro",
    retailer: "E Ride Pro",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 5699,
    tier: "Premium",
    url: "https://www.eridepro.com/products/pro-sr",
    imageUrl:
      "https://www.eridepro.com/cdn/shop/files/removed_bg_sr_5e15d193-69fe-4749-bf32-47ce66002c04_1200x.png?v=1760463738",
    highlights: ["Higher spec version", "More range & power", "Premium class"],
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
    price: 5200,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/product/surron-ultra-bee/",
    imageUrl:
      "https://sur-ronusa.us.com/wp-content/uploads/2025/01/sur-ron-ultra-bee-700x467.jpg",
    highlights: ["Full-size e-moto", "Enduro capable", "Elite performance"],
    lastUpdatedISO: nowISO(),
  },

  // =====================================================
  // GAS DIRT BIKES
  // (We’ll split these into Import vs NameBrand in the UI next)
  // =====================================================

  // -------- Import Gas Dirt Bikes --------
  // =====================================================
// GAS DIRT BIKES — IMPORT BRANDS (SHIP TO DOOR)
// =====================================================

{
  id: "gas-xpro-x27-125",
  title: "X-Pro X27 125cc Dirt Bike",
  brand: "X-Pro",
  retailer: "XProUSA",
  region: "US",
  kind: "GasBike",
  driveType: "Unknown",
  price: 859.95,
  tier: "Budget",
  url: "https://xprousa.com/products/x-pro-x27-125cc-dirt-bike",
  imageUrl:
    "https://cdn.shopify.com/s/files/1/0618/3874/3069/products/x27-blue_1200x.jpg",
  highlights: [
    "Semi-automatic transmission",
    "Free shipping (lower 48)",
    "Assembly required"
  ],
  lastUpdatedISO: nowISO(),
},

{
  id: "gas-xpro-x9-125",
  title: "X-Pro X9 125cc Dirt Bike",
  brand: "X-Pro",
  retailer: "XProUSA",
  region: "US",
  kind: "GasBike",
  driveType: "Unknown",
  price: 959.95,
  tier: "Budget",
  url: "https://xprousa.com/products/x-pro-x9-125cc-dirt-bike",
  imageUrl:
    "https://cdn.shopify.com/s/files/1/0618/3874/3069/products/x9-blue_1200x.jpg",
  highlights: [
    "Manual 4-speed",
    "17/14 wheel setup",
    "Free shipping"
  ],
  lastUpdatedISO: nowISO(),
},

{
  id: "gas-xpro-x19-125",
  title: "X-Pro X19 125cc Dirt Bike",
  brand: "X-Pro",
  retailer: "XProUSA",
  region: "US",
  kind: "GasBike",
  driveType: "Unknown",
  price: 959.95,
  tier: "Budget",
  url: "https://xprousa.com/products/x-pro-x19-125cc-dirt-bike",
  imageUrl:
    "https://cdn.shopify.com/s/files/1/0618/3874/3069/products/x19-blue_1200x.jpg",
  highlights: [
    "Semi-auto clutch",
    "Trail-size wheels",
    "Crated shipping"
  ],
  lastUpdatedISO: nowISO(),
},

{
  id: "gas-trailmaster-tm23-125",
  title: "TrailMaster TM23 125cc",
  brand: "TrailMaster",
  retailer: "GoPowerSports",
  region: "US",
  kind: "GasBike",
  driveType: "Unknown",
  price: 1149.0,
  tier: "Mid",
  url: "https://www.gopowersports.com/trailmaster-tm23-125cc-dirt-bike/",
  imageUrl:
    "https://www.gopowersports.com/cdn/shop/products/TM23-125-blue_1200x.jpg",
  highlights: [
    "Electric start",
    "Semi-automatic",
    "Better suspension"
  ],
  lastUpdatedISO: nowISO(),
},

{
  id: "gas-trailmaster-mk125",
  title: "TrailMaster MK125",
  brand: "TrailMaster",
  retailer: "GoPowerSports",
  region: "US",
  kind: "GasBike",
  driveType: "Unknown",
  price: 1399.0,
  tier: "Mid",
  url: "https://www.gopowersports.com/trailmaster-mk125-dirt-bike/",
  imageUrl:
    "https://www.gopowersports.com/cdn/shop/products/MK125-blue_1200x.jpg",
  highlights: [
    "Manual clutch",
    "Electric start",
    "Higher-quality components"
  ],
  lastUpdatedISO: nowISO(),
},

{
  id: "gas-venom-thunder-125",
  title: "Venom Thunder 125cc",
  brand: "Venom",
  retailer: "Venom Motorsports USA",
  region: "US",
  kind: "GasBike",
  driveType: "Unknown",
  price: 1499.99,
  tier: "Mid",
  url: "https://venommotorsportsusa.com/products/venom-thunder-125cc-dirt-bike",
  imageUrl:
    "https://venommotorsportsusa.com/cdn/shop/products/thunder-125-blue_1200x.jpg",
  highlights: [
    "Manual 4-speed",
    "Full-size feel",
    "Nationwide shipping"
  ],
  lastUpdatedISO: nowISO(),
},


  // -------- Name-Brand Gas Dirt Bikes --------
  {
    id: "gas-yamaha-ttr110",
    title: "Yamaha TT-R110 (Name Brand)",
    brand: "Yamaha",
    retailer: "Dealers",
    region: "US",
    kind: "GasBike",
    brandType: "NameBrand",
    price: 0,
    tier: "Budget",
    url: "https://www.yamahamotorsports.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Beginner friendly", "Great starter gas bike", "Dealer network support"],
    lastUpdatedISO: nowISO(),
  },

  {
    id: "gas-honda-crf125f",
    title: "Honda CRF125F (Name Brand)",
    brand: "Honda",
    retailer: "Dealers",
    region: "US",
    kind: "GasBike",
    brandType: "NameBrand",
    price: 0,
    tier: "Mid",
    url: "https://powersports.honda.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Reliable trail bike", "Smooth power", "Great resale value"],
    lastUpdatedISO: nowISO(),
  },

  {
    id: "gas-ktm-250sxf",
    title: "KTM 250 SX-F (Name Brand)",
    brand: "KTM",
    retailer: "Dealers",
    region: "US",
    kind: "GasBike",
    brandType: "NameBrand",
    price: 0,
    tier: "Premium",
    url: "https://www.ktm.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Race-ready", "High performance", "Premium build"],
    lastUpdatedISO: nowISO(),
  },
];

