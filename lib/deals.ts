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

  // --- Youth / entry ---
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
    imageUrl:
      "https://www.hiboy.com/cdn/shop/files/DK04.jpg?v=1765848028&width=1600",
    highlights: ["300W motor", "3 speed modes", "Great starter for kids"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-razor-mx650",
    title: "Razor MX650 Dirt Rocket",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 599,
    wasPrice: 699,
    tier: "Budget",
    url: "https://razor.com/product/mx650-dirt-rocket/",
    imageUrl:
      "https://razor.com/wp-content/uploads/2025/05/MX650_YE_SideRight.jpg",
    highlights: ["Classic mini e-dirt bike", "Chain drive", "Great first ripper"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // --- Requested bikes (budget) ---
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
    highlights: ["4500W peak listed", "Mid-drive", "Budget e-dirt favorite"],
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
    highlights: ["2600W listed", "Mid-drive", "Great teen/smaller adult size"],
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
    highlights: ["48V 2000W listed", "Pit-bike style", "Budget-friendly"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // --- Mid-range ---
  {
    id: "bike-mototec-48v-pro",
    title: "MotoTec 48V Pro — 1800W electric dirt bike",
    brand: "MotoTec",
    retailer: "MotoTec USA",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 1017,
    wasPrice: 1099,
    tier: "Mid",
    url: "https://mototecusa.com/mototec-48v-pro-electric-dirt-bike-1800w-lithium-blue.html",
    imageUrl:
      "https://mototecusa.com/assets/images/MT-Dirt-Pro-1800_Blue.jpg",
    highlights: ["1800W listed", "Good step-up bike", "Adjustable speed"],
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
    price: 1699,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-nova3-mid-drive-electric-motorcycle",
    imageUrl:
      "https://freegobikes.com/cdn/shop/files/Freego_Nova2_RightFrontView.png?v=1757667053",
    highlights: ["3000W listed", "Mid-drive", "Moto styling"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-freego-x2-pro",
    title: "Freego X2 Pro — dirt-style e-bike",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 2499,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-x2-pro-all-terrain-off-road-motorcycle-electric-dirt-bike-with-pedals",
    imageUrl:
      "https://freegobikes.com/cdn/shop/files/freego-x2pro-dirt-ebike-transparent.png?v=1764301240&width=416",
    highlights: ["Hub motor style", "All-terrain", "Good value category"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // --- Premium / adult performance ---
  {
    id: "bike-happyrun-g300-pro",
    title: "HappyRun G300 Pro — high-power hub dirt bike",
    brand: "HappyRun",
    retailer: "Electric Ride Co.",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 3299,
    tier: "Premium",
    url: "https://electricrideco.com/products/happyrun-g300-pro-electric-dirt-bike",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0612/2546/8142/files/1920.webp?v=1740053517",
    highlights: ["High power hub style", "Moto look", "Off-road focused"],
    lastUpdatedISO: new Date().toISOString(),
  },

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
    url: "https://lunacycle.com/talaria-sting-r-mx4/",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-9vkjq73s/images/stencil/1280w/products/2264/14651/TALARIA_R_01_WATERMARKED__94760.1680339572.jpg?c=2",
    highlights: ["Mid-drive platform", "Trail capable", "Popular Sur-Ron competitor"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-surron-light-bee-x",
    title: "Sur-Ron Light Bee X",
    brand: "Sur-Ron",
    retailer: "Sur-Ron (official images)",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4600,
    tier: "Premium",
    url: "https://surron.ca/pages/light-bee-x",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0540/6644/6508/files/lightBeeX-Green.png?v=1744836704",
    highlights: ["Most popular platform", "Huge aftermarket", "Mid-drive"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-surron-ultra-bee",
    title: "Sur-Ron Ultra Bee",
    brand: "Sur-Ron",
    retailer: "Sur-Ron (official images)",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 6999,
    tier: "Premium",
    url: "https://surron.ca/pages/ultra-bee",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0540/6644/6508/files/UltraBee-black.png?v=1744895801",
    highlights: ["Bigger chassis", "Higher power class", "Mid-drive"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =====================================================
  // KEEP 1–2 ITEMS FOR OTHER TABS (OPTIONAL)
  // =====================================================

  {
    id: "ebike-placeholder",
    title: "Budget E-bike (placeholder)",
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
    highlights: ["Hub motor", "Commuter friendly", "Placeholder for now"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "gear-placeholder",
    title: "Boots (placeholder)",
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
    highlights: ["Placeholder", "Swap later", "Just to populate tabs"],
    lastUpdatedISO: new Date().toISOString(),
  },
];

