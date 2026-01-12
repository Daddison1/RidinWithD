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

  // Bike/Ebike only
  driveType?: DriveType;

  // Gear only
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
  // =====================================================
  // ELECTRIC DIRT BIKES (US) — YOUTH + ADULT
  // =====================================================

  // --- Budget / Youth ---
  {
    id: "bike-hiboy-dk1",
    title: "Hiboy DK1 Electric Dirt Bike (Youth)",
    brand: "Hiboy",
    retailer: "Hiboy",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 359.99,
    tier: "Budget",
    url: "https://www.hiboy.com/products/hiboy-dk1-electric-dirt-bike-for-kids-ages-3-13",
    imageUrl: "https://www.hiboy.com/cdn/shop/files/DK04.jpg?v=1765848028&width=1600",
    highlights: ["300W motor", "3 speed modes", "Great starter for kids"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-razor-mx650",
    title: "Razor MX650 Dirt Rocket",
    brand: "Razor",
    retailer: "Walmart",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 549.0,
    tier: "Budget",
    url: "https://www.walmart.com/ip/554737831",
    // If this breaks, DealCard will fallback automatically.
    imageUrl:
      "https://i5.walmartimages.com/asr/1d2e2b2b-7a5a-4b6c-b1b6-8b0a4c1fd80a.8c3c8ef94c7a85a2d8f24e2c4c29c316.jpeg",
    highlights: ["Classic mini e-dirt bike", "Chain drive", "Up to ~17 mph"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // --- New bikes you requested ---
  {
    id: "bike-qronge-x1-spark",
    title: "Qronge X1 Spark — 4500W mid-drive electric dirt bike",
    brand: "Qronge",
    retailer: "Qronge",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1149.99,
    wasPrice: 2199.99,
    tier: "Budget",
    url: "https://www.qronge.com/products/x1-spark",
    imageUrl:
      "https://www.qronge.com/cdn/shop/files/1_e1ea7378-5c89-4686-a641-948daf278d44.jpg?v=1767000664&width=1200",
    highlights: ["4500W peak listed", "Mid-drive", "Popular budget e-dirt option"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-yozma-in10",
    title: "Yozma IN 10 — 2600W mid-drive mini dirt bike",
    brand: "Yozma",
    retailer: "Yozma Sport",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1259.99,
    wasPrice: 1599.0,
    tier: "Budget",
    url: "https://yozmasport.com/products/in-10",
    imageUrl:
      "https://yozmasport.com/cdn/shop/files/Group_41_94ff018a-cd32-475e-a02a-0af0b18cfd24.png?v=1765267218&width=1600",
    highlights: ["2600W listed", "Mid-drive", "Good teen/smaller adult size"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-tuttio-soleil01",
    title: "Tuttio Soleil01 — 48V 2000W mini bike",
    brand: "Tuttio",
    retailer: "TuttioSport",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 1299.0,
    wasPrice: 1399.0,
    tier: "Budget",
    url: "https://tuttiosport.com/products/tuttio-soleil01-electric-bike",
    imageUrl:
      "https://tuttiosport.com/cdn/shop/files/adult-electric-motorcycle-2000w-cheap-dirtt-bike.jpg?v=1763629112&width=1200",
    highlights: ["48V 2000W listed", "Mini / pit-bike style", "Good budget option"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // --- Mid range ---
  {
    id: "bike-mototec-48v-pro",
    title: "MotoTec 48V Pro Electric Dirt Bike (1800W)",
    brand: "MotoTec",
    retailer: "MotoTec USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1099.0,
    tier: "Mid",
    url: "https://mototecusa.com/products/mototec-48v-1800w-pro-electric-dirt-bike",
    imageUrl: "https://mototecusa.com/cdn/shop/products/48v1800w_1024x1024.jpg",
    highlights: ["1800W listed", "Step-up mini dirt bike", "Adjustable speed dial"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-freego-nova3",
    title: "Freego Nova 3 — 3000W mid-drive electric dirt bike",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1699.0,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-nova3-mid-drive-electric-motorcycle",
    imageUrl:
      "https://freegobikes.com/cdn/shop/files/Freego_Nova2_RightFrontView.png?v=1757667053",
    highlights: ["3000W listed", "Mid-drive", "Full suspension look"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-freego-x2-pro",
    title: "Freego X2 Pro — high-power dirt e-bike",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 2499.0,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-x2-pro-dirt-ebike",
    imageUrl:
      "https://freegobikes.com/cdn/shop/files/Freego_X2Pro_RightFrontView.png?v=1757667053",
    highlights: ["High-power hub style", "Moto styling", "Popular category bike"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // --- Premium / Adult performance ---
  {
    id: "bike-happyrun-g300-pro",
    title: "HAPPYRUN G300 Pro — 72V 3000W hub-style e-dirt bike",
    brand: "HAPPYRUN",
    retailer: "Amazon",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 2099.0,
    tier: "Premium",
    url: "https://www.amazon.com/dp/B0FP33LR9G",
    imageUrl:
      "https://m.media-amazon.com/images/I/71w7m8gFvWL._AC_SL1500_.jpg",
    highlights: ["72V battery listed", "Hub motor style", "Full-size look"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-talaria-sting-r-mx4",
    title: "Talaria Sting R MX4",
    brand: "Talaria",
    retailer: "Talaria USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4099.0,
    tier: "Premium",
    url: "https://talariausa.us.com/product/talaria-sting-r-mx4/",
    imageUrl:
      "https://talariausa.us.com/wp-content/uploads/2023/05/Talaria-Sting-R-MX4.jpg",
    highlights: ["Mid-drive platform", "Trail capable", "Popular Sur-Ron competitor"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-surron-light-bee-x",
    title: "Sur-Ron Light Bee X",
    brand: "Sur-Ron",
    retailer: "Sur-Ron USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4600.0,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/product/surron-light-bee-x/",
    imageUrl:
      "https://sur-ronusa.us.com/wp-content/uploads/2022/03/light-bee-x.jpg",
    highlights: ["Most popular e-dirt bike platform", "Massive aftermarket", "Mid-drive"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "bike-surron-ultra-bee",
    title: "Sur-Ron Ultra Bee",
    brand: "Sur-Ron",
    retailer: "Sur-Ron USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 6999.0,
    tier: "Premium",
    url: "https://sur-ronusa.us.com/product/surron-ultra-bee/",
    imageUrl:
      "https://sur-ronusa.us.com/wp-content/uploads/2023/02/Ultra-Bee.jpg",
    highlights: ["Bigger chassis", "Higher performance class", "Mid-drive"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =====================================================
  // KEEP THESE SO YOUR OTHER TABS AREN’T EMPTY
  // =====================================================

  {
    id: "ebike-budget-hub",
    title: "Budget E-bike (example placeholder)",
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
    highlights: ["Hub motor value buy", "Commuter friendly", "Often discounted"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "gear-boots-tech3",
    title: "Alpinestars Tech 3 Boots (example placeholder)",
    brand: "Alpinestars",
    retailer: "Moto Retailer",
    region: "US",
    kind: "Gear",
    gearCategory: "Boots",
    price: 239,
    wasPrice: 299,
    tier: "Mid",
    url: "https://example.com/tech3",
    imageUrl:
      "https://images.unsplash.com/photo-1528701800489-20be3c3ea4a2?auto=format&fit=crop&w=1200&q=60",
    highlights: ["Great protection/value", "Replaceable buckles", "Popular pick"],
    lastUpdatedISO: new Date().toISOString(),
  },
];
