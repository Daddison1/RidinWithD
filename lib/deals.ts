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
  // KIDS / MINI
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
  // MID-RANGE
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
      "https://tuttiosport.com/cdn/shop/products/tuttio_soleil01_electric_bike.jpg",
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
      "https://yozmasport.com/cdn/shop/products/yozma_in10_mini_electric_dirt_bike.jpg",
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
      "https://qronge.com/cdn/shop/products/qronge_x1_spark_offroad_electric_dirt_bike.jpg",
    highlights: ["High claimed wattage", "Popular review bike", "Great sale value"],
    lastUpdatedISO: nowISO(),
  },

  // =====================================================
  // TOP TIER
  // =====================================================

  {
    id: "bike-eride-pro-s",
    title: "E Ride Pro S",
    brand: "E Ride Pro",
    retailer: "E Ride Pro",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 0,
    tier: "Premium",
    url: "https://eridepros.com/",
    imageUrl: PLACEHOLDER,
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
    price: 0,
    tier: "Premium",
    url: "https://eridepros.com/",
    imageUrl: PLACEHOLDER,
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
    price: 6999,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/",
    imageUrl: PLACEHOLDER,
    highlights: ["Full-size e-moto", "Enduro capable", "Elite performance"],
    lastUpdatedISO: nowISO(),
  },
];
