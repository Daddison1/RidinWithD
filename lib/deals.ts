export type Region = "US";
export type DealKind = "Bike" | "Ebike" | "Gear";
export type DriveType = "Mid-Drive" | "Hub Motor" | "Unknown";
export type PriceTier = "Budget" | "Mid" | "Premium";

export type Deal = {
  id: string;
  title: string;
  brand: string;
  retailer: string;
  region: Region;
  kind: DealKind;
  driveType?: DriveType;
  price: number;
  tier: PriceTier;
  url: string;
  imageUrl?: string;
  highlights: string[];
  lastUpdatedISO: string;
};

export const REGIONS = [{ code: "US", label: "United States" }];

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1558981033-64b0f4f5f41e?auto=format&fit=crop&w=1200&q=60";

export const SAMPLE_DEALS: Deal[] = [
  // =====================================================
  // BUDGET ELECTRIC DIRT BIKES (≤ ~$1,500)
  // =====================================================
  {
    id: "razor-mx350",
    title: "Razor MX350 Dirt Rocket (Youth)",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 299,
    tier: "Budget",
    url: "https://razor.com/product/mx350-dirt-rocket/",
    imageUrl: PLACEHOLDER,
    highlights: ["Youth bike", "Chain drive", "Great starter"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "razor-mx650",
    title: "Razor MX650 Dirt Rocket",
    brand: "Razor",
    retailer: "Razor",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 599,
    tier: "Budget",
    url: "https://razor.com/product/mx650-dirt-rocket/",
    imageUrl: PLACEHOLDER,
    highlights: ["Teen bike", "17 mph", "Popular backyard ripper"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "hiboy-dk1",
    title: "Hiboy DK1 Electric Dirt Bike (Youth)",
    brand: "Hiboy",
    retailer: "Hiboy",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 399,
    tier: "Budget",
    url: "https://www.hiboy.com/products/hiboy-dk1-electric-dirt-bike-for-kids",
    imageUrl: PLACEHOLDER,
    highlights: ["Hub motor", "Quiet", "Kids friendly"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "mototec-36v",
    title: "MotoTec 36V 1000W Dirt Bike",
    brand: "MotoTec",
    retailer: "MotoTec USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 650,
    tier: "Budget",
    url: "https://mototecusa.com",
    imageUrl: PLACEHOLDER,
    highlights: ["1000W", "Adjustable speed", "Youth/teen"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "qronge-x1",
    title: "Qronge X1 Spark",
    brand: "Qronge",
    retailer: "Qronge",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1149,
    tier: "Budget",
    url: "https://www.qronge.com/products/x1-spark",
    imageUrl: PLACEHOLDER,
    highlights: ["4500W peak (claimed)", "Mini dirt bike", "Budget mid-drive"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "yozma-in10",
    title: "Yozma IN 10",
    brand: "Yozma",
    retailer: "Yozma Sport",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1259,
    tier: "Budget",
    url: "https://yozmasport.com/products/in-10",
    imageUrl: PLACEHOLDER,
    highlights: ["2600W", "Mini size", "Teen-friendly"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "tuttio-soleil01",
    title: "Tuttio Soleil01",
    brand: "Tuttio",
    retailer: "TuttioSport",
    region: "US",
    kind: "Bike",
    driveType: "Unknown",
    price: 1299,
    tier: "Budget",
    url: "https://tuttiosport.com/products/tuttio-soleil01-electric-bike",
    imageUrl: PLACEHOLDER,
    highlights: ["2000W claimed", "Pit-bike style", "Budget option"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =====================================================
  // MID-RANGE ELECTRIC DIRT BIKES (~$1,500–$3,500)
  // =====================================================
  {
    id: "mototec-48v-pro",
    title: "MotoTec 48V Pro",
    brand: "MotoTec",
    retailer: "MotoTec USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1099,
    tier: "Mid",
    url: "https://mototecusa.com",
    imageUrl: PLACEHOLDER,
    highlights: ["1800W", "Step-up performance", "Adjustable limiter"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "freego-nova3",
    title: "Freego Nova 3",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 1699,
    tier: "Mid",
    url: "https://freegobikes.com",
    imageUrl: PLACEHOLDER,
    highlights: ["3000W", "Full suspension", "Mid-drive"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "freego-x2-pro",
    title: "Freego X2 Pro",
    brand: "Freego",
    retailer: "Freego Bikes",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 2499,
    tier: "Mid",
    url: "https://freegobikes.com",
    imageUrl: PLACEHOLDER,
    highlights: ["Hub motor", "Dirt styling", "Adult-capable"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "happyrun-g300",
    title: "HappyRun G300 Pro",
    brand: "HappyRun",
    retailer: "Electric Ride Co",
    region: "US",
    kind: "Bike",
    driveType: "Hub Motor",
    price: 3299,
    tier: "Mid",
    url: "https://electricrideco.com",
    imageUrl: PLACEHOLDER,
    highlights: ["72V system", "Full-size look", "Hub motor"],
    lastUpdatedISO: new Date().toISOString(),
  },

  // =====================================================
  // PREMIUM ELECTRIC DIRT BIKES (~$3,500–$7,000)
  // =====================================================
  {
    id: "talaria-sting-r",
    title: "Talaria Sting R MX4",
    brand: "Talaria",
    retailer: "Luna Cycle",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4099,
    tier: "Premium",
    url: "https://lunacycle.com",
    imageUrl: PLACEHOLDER,
    highlights: ["Mid-drive", "Sur-Ron competitor", "Trail-ready"],
    lastUpdatedISO: new Date().toISOString(),
  },
  {
    id: "surron-light-bee",
    title: "Sur-Ron Light Bee X",
    brand: "Sur-Ron",
    retailer: "Sur-Ron USA",
    region: "US",
    kind: "Bike",
    driveType: "Mid-Drive",
    price: 4600,
    tier: "Premium",
    url: "https://sur-ronusa.com",
    imageUrl: PLACEHOLDER,
    highlights: ["Most popular platform", "Huge aftermarket", "Mid-drive"],
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
    url: "https://sur-ronusa.com",
    imageUrl: PLACEHOLDER,
    highlights: ["Bigger chassis", "More power", "Serious trail bike"],
    lastUpdatedISO: new Date().toISOString(),
  },
];


