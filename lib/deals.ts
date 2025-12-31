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
  {
    id: "bike-mid-talaria",
    title: "Talaria Sting R MX4 — Example listing",
    brand: "Talaria",
    retailer: "Dealer",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4499,
    wasPrice: 4999,
    tier: "Mid",
    url: "https://example.com/talaria-mx4",
    imageUrl:
      "https://images.unsplash.com/photo-1517949908119-7202500241de?auto=format&fit=crop&w=1200&q=60",
    highlights: ["Mid-drive style", "Strong aftermarket", "Trail/track capable"],
    lastUpdatedISO: new Date().toISOString(),
  },
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
