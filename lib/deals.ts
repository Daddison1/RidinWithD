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
  {
    id: "bike-razor-mx650",
    title: "Razor MX650 — Budget electric mini dirt bike",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 599,
    wasPrice: 699,
    tier: "Budget",
    url: "https://razor.com/product/mx650-dirt-rocket/",
    imageUrl: "https://razor.com/wp-content/uploads/2025/05/MX650_YE_SideRight.jpg",
    highlights: ["Great starter", "Cheap fun", "Easy to find parts"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-mid-talaria",
    title: "Talaria Sting R MX4 — Trail electric dirt bike",
    brand: "Talaria",
    retailer: "Luna Cycle",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4100,
    wasPrice: 4500,
    tier: "Mid",
    url: "https://lunacycle.com/talaria-sting-r-mx4/",
    // Using LunaCycle's CDN image (more stable than random dealer sites)
    imageUrl:
      "https://cdn11.bigcommerce.com/s-9vkjq73s/images/stencil/1280w/products/2264/14651/TALARIA_R_01_WATERMARKED__94760.1680339572.jpg?c=2",
    highlights: ["Mid-drive", "Strong aftermarket", "Trail/track capable"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-surron-lightbee",
    title: "Sur-Ron Light Bee X — Popular lightweight e-dirt bike",
    brand: "Sur-Ron",
    retailer: "Sur-Ron (official images)",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4400,
    tier: "Premium",
    url: "https://surron.ca/pages/light-bee-x",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0540/6644/6508/files/lightBeeX-Green.png?v=1744836704",
    highlights: ["Lightweight", "Huge aftermarket", "Trail-ready platform"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-surron-ultrabee",
    title: "Sur-Ron Ultra Bee — More power, bigger chassis",
    brand: "Sur-Ron",
    retailer: "Sur-Ron (official images)",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 7000,
    tier: "Premium",
    url: "https://surron.ca/pages/ultra-bee",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0540/6644/6508/files/UltraBee-black.png?v=1744895801",
    highlights: ["Mid-drive performance", "More torque + stability", "Serious trail machine"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-mototec-48v",
    title: "MotoTec 48V 1800W Pro — Youth / backyard ripper",
    brand: "MotoTec",
    retailer: "MotoTec USA",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 1017,
    wasPrice: 1099,
    tier: "Budget",
    url: "https://mototecusa.com/mototec-48v-pro-electric-dirt-bike-1800w-lithium-blue.html",
    imageUrl: "https://mototecusa.com/assets/images/MT-Dirt-Pro-1800_Blue.jpg",
    highlights: ["Great value", "Good starter size", "Solid backyard/trail use"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-freego-x2",
    title: "Freego X2 Pro — Hub-motor dirt-style e-bike",
    brand: "Freego",
    retailer: "Freego (official store)",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 2499,
    tier: "Mid",
    url: "https://freegobikes.com/products/freego-x2-pro-all-terrain-off-road-motorcycle-electric-dirt-bike-with-pedals",
    imageUrl:
      "https://freegobikes.com/cdn/shop/files/freego-x2pro-dirt-ebike-transparent.png?v=1764301240&width=416",
    highlights: ["Hub motor", "Off-road styling", "Good value for the specs"],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-happyrun-g300",
    title: "HappyRun G300 Pro — High-power hub-motor dirt bike",
    brand: "HappyRun",
    retailer: "Electric Ride Co.",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 3299,
    tier: "Mid",
    url: "https://electricrideco.com/products/happyrun-g300-pro-electric-dirt-bike",
    imageUrl: "https://cdn.shopify.com/s/files/1/0612/2546/8142/files/1920.webp?v=1740053517",
    highlights: ["Hub motor", "Big battery platform", "Off-road focused"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // Keep your gear example if you want
  {
    id: "gear-boots-tech3",
    title: "Alpinestars Tech 3 Boots — Example sale",
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

