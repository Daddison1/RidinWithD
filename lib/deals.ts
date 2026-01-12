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
  // =========================
  // ELECTRIC DIRT BIKES
  // =========================

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
    highlights: [
      "4500W peak power (mid-drive)",
      "60V battery listed",
      "Off-road / throttle-only style",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-yozma-in10",
    title: "Yozma IN 10 — 2600W mid-drive mini dirt bike (teens/adults)",
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
    highlights: [
      "2600W mid-drive motor",
      "Fat tires + full suspension styling",
      "Good size for teens / smaller adults",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },

  {
    id: "bike-tuttio-soleil01",
    title: "Tuttio Soleil01 — 48V 2000W electric mini bike (kids/teens)",
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
    highlights: [
      "48V 2000W listed",
      "Mini-bike / pit-bike style",
      "Good gift category (youth/teens)",
    ],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =========================
  // EXAMPLES / PLACEHOLDERS (you can remove these later)
  // =========================

  {
    id: "bike-razor-mx650",
    title: "Razor MX650 — Budget electric mini dirt bike (example)",
    brand: "Razor",
    retailer: "Retailer",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 599,
    wasPrice: 699,
    tier: "Budget",
    url: "https://example.com/razor-mx650",
    imageUrl:
      "https://images.unsplash.com/photo-1558981033-64b0f4f5f41e?auto=format&fit=crop&w=1200&q=60",
    highlights: ["Great starter", "Cheap fun", "Easy to find parts"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =========================
  // EBIKES (example)
  // =========================

  {
    id: "ebike-budget-hub",
    title: "Fat-tire e-bike — Example budget deal",
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
    highlights: ["Hub motor value buy", "Good for commuting", "Often discounted"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =========================
  // GEAR (example)
  // =========================

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
