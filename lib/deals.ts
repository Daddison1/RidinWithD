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

export type Deal = {
  id: string;
  title: string;
  brand: string;
  retailer: string;
  region: Region;
  kind: DealKind;
  driveType?: DriveType;
  gearCategory?: GearCategory;
  price: number;
  wasPrice?: number;
  tier: PriceTier;
  url: string;
  imageUrl?: string;
  highlights: string[];
  lastUpdatedISO: string;
};

export const REGIONS: { code: Region; label: string }[] = [
  { code: "US", label: "United States" },
  { code: "CA", label: "Canada" },
  { code: "UK", label: "United Kingdom" },
  { code: "DE", label: "Germany" },
  { code: "AU", label: "Australia" },
  { code: "IN", label: "India" },
];

export const SAMPLE_DEALS: Deal[] = [
  // =======================
  // BUDGET / YOUTH E-DIRT
  // =======================
  {
    id: "hiboy-dk1",
    title: "Hiboy DK1 Electric Dirt Bike (Youth)",
    brand: "Hiboy",
    retailer: "Hiboy",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 359,
    wasPrice: 499,
    tier: "Budget",
    url: "https://www.hiboy.com/products/hiboy-dk1-electric-dirt-bike-for-kids-ages-3-13",
    imageUrl: "https://www.hiboy.com/cdn/shop/files/DK04.jpg",
    highlights: [
      "300W hub motor",
      "3 speed modes (kid friendly)",
      "Great starter electric dirt bike",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "razor-mx650",
    title: "Razor MX650 Dirt Rocket",
    brand: "Razor",
    retailer: "Walmart",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 549,
    tier: "Budget",
    url: "https://www.walmart.com/ip/554737831",
    imageUrl: "https://i5.walmartimages.com/asr/1d2e2b2b-7a5a-4b6c-b1b6-8b0a4c1fd80a.8c3c8ef94c7a85a2d8f24e2c4c29c316.jpeg",
    highlights: [
      "Classic mini electric dirt bike",
      "Chain drive",
      "Supports riders up to 220 lbs",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =======================
  // MID-RANGE ELECTRIC DIRT
  // =======================
  {
    id: "freego-nova3",
    title: "Freego Nova 3 Mid-Drive Electric Dirt Bike",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1699,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-nova3-mid-drive-electric-motorcycle",
    imageUrl: "https://freegobikes.com/cdn/shop/files/Freego_Nova2_RightFrontView.png",
    highlights: [
      "3000W mid-drive motor",
      "Full suspension",
      "Budget adult electric dirt bike",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "mototec-48v-pro",
    title: "MotoTec 48V Pro Electric Dirt Bike",
    brand: "MotoTec",
    retailer: "MotoTec USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1099,
    tier: "Mid",
    url: "https://mototecusa.com/products/mototec-48v-1800w-pro-electric-dirt-bike",
    imageUrl: "https://mototecusa.com/cdn/shop/products/48v1800w_1024x1024.jpg",
    highlights: [
      "1800W mid-drive",
      "30+ mph capability",
      "Good step-up from youth bikes",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =======================
  // ADULT PERFORMANCE E-DIRT
  // =======================
  {
    id: "talaria-sting-r",
    title: "Talaria Sting R MX4",
    brand: "Talaria",
    retailer: "Talaria USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4099,
    tier: "Premium",
    url: "https://talariausa.us.com/product/talaria-sting-r-mx4/",
    imageUrl: "https://talariausa.us.com/wp-content/uploads/2023/05/Talaria-Sting-R-MX4.jpg",
    highlights: [
      "8kW peak mid-drive",
      "Gear drive (no belt)",
      "Sur-Ron competitor",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "surron-light-bee-x",
    title: "Sur-Ron Light Bee X",
    brand: "Sur-Ron",
    retailer: "Sur-Ron USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4600,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/product/surron-light-bee-x/",
    imageUrl: "https://sur-ronusa.us.com/wp-content/uploads/2022/03/light-bee-x.jpg",
    highlights: [
      "6kW peak mid-drive",
      "Massive aftermarket",
      "Most popular e-dirt bike",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "surron-ultra-bee",
    title: "Sur-Ron Ultra Bee",
    brand: "Sur-Ron",
    retailer: "Sur-Ron USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 6999,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/product/surron-ultra-bee/",
    imageUrl: "https://sur-ronusa.us.com/wp-content/uploads/2023/02/Ultra-Bee.jpg",
    highlights: [
      "12.5kW peak",
      "Larger chassis",
      "Closest to full-size dirt bike",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },
];
