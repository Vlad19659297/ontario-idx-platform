import type { Listing, City } from '@/types/listing';

const PHOTO_PLACEHOLDERS = {
  modern: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
  suburban: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  condo: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
  townhouse: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop',
  luxury: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
  interior1: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
  interior2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
  bathroom: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
  backyard: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
};

export const MOCK_LISTINGS: Listing[] = [
  {
    mlsNumber: 'W7892341',
    status: 'Active',
    listPrice: 1299000,
    address: {
      street: '142 Oakwood Avenue',
      city: 'Toronto',
      province: 'Ontario',
      postalCode: 'M6E 2T5',
      neighbourhood: 'Oakwood Village',
      community: 'York',
    },
    coordinates: { lat: 43.6891, lng: -79.4339 },
    propertyType: 'Detached',
    buildingType: '2-Storey',
    bedrooms: 4,
    bedroomsPlus: 1,
    bathrooms: 3,
    sqft: '2,200-2,500',
    lotSize: '30 x 120 Feet',
    parkingSpaces: 2,
    garageType: 'Detached',
    yearBuilt: 1928,
    description: 'Stunning renovated 4+1 bedroom detached home in the heart of Oakwood Village. This character-filled home features original hardwood floors, a modern chef\'s kitchen with quartz countertops, and a fully finished basement with separate entrance. Steps to TTC, parks, and amenities.',
    features: ['Hardwood Floors', 'Renovated Kitchen', 'Finished Basement', 'Separate Entrance', 'Mature Trees', 'Private Backyard'],
    photos: [PHOTO_PLACEHOLDERS.suburban, PHOTO_PLACEHOLDERS.interior1, PHOTO_PLACEHOLDERS.kitchen, PHOTO_PLACEHOLDERS.bathroom, PHOTO_PLACEHOLDERS.backyard],
    listDate: '2024-11-15',
    daysOnMarket: 12,
    listBrokerage: 'HomeKey Realty Inc., Brokerage',
    listAgent: 'Sarah Mitchell',
    isAgentListing: true,
    isFeatured: true,
    taxes: 5842,
    taxYear: 2023,
    basement: 'Finished',
    heating: 'Forced Air Gas',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'C8901234',
    status: 'Active',
    listPrice: 749900,
    address: {
      street: '2520 Eglinton Avenue West',
      unit: 'Suite 1205',
      city: 'Toronto',
      province: 'Ontario',
      postalCode: 'M6M 1T1',
      neighbourhood: 'Forest Hill',
      community: 'Midtown',
    },
    coordinates: { lat: 43.6945, lng: -79.4502 },
    propertyType: 'Condo Apartment',
    buildingType: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    sqft: '950-1,100',
    parkingSpaces: 1,
    garageType: 'Underground',
    yearBuilt: 2019,
    description: 'Luxurious 2-bedroom, 2-bathroom condo in a prestigious boutique building. Floor-to-ceiling windows with breathtaking city views. Premium finishes throughout including engineered hardwood, custom cabinetry, and marble countertops. Building amenities include concierge, gym, and rooftop terrace.',
    features: ['Floor-to-Ceiling Windows', 'City Views', 'Concierge', 'Gym', 'Rooftop Terrace', 'Visitor Parking'],
    photos: [PHOTO_PLACEHOLDERS.condo, PHOTO_PLACEHOLDERS.interior2, PHOTO_PLACEHOLDERS.kitchen],
    listDate: '2024-11-20',
    daysOnMarket: 7,
    listBrokerage: 'HomeKey Realty Inc., Brokerage',
    listAgent: 'Sarah Mitchell',
    isAgentListing: true,
    isFeatured: true,
    taxes: 3200,
    taxYear: 2023,
    maintenanceFee: 685,
    heating: 'Fan Coil',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'W7654321',
    status: 'Active',
    listPrice: 1089000,
    address: {
      street: '88 Queensbridge Drive',
      city: 'Mississauga',
      province: 'Ontario',
      postalCode: 'L5R 3K7',
      neighbourhood: 'Meadowvale',
      community: 'Mississauga',
    },
    coordinates: { lat: 43.5937, lng: -79.7399 },
    propertyType: 'Detached',
    buildingType: '2-Storey',
    bedrooms: 4,
    bathrooms: 3,
    sqft: '2,500-2,800',
    lotSize: '45 x 110 Feet',
    parkingSpaces: 2,
    garageType: 'Built-In',
    yearBuilt: 2005,
    description: 'Beautiful 4-bedroom family home in the desirable Meadowvale neighbourhood. Open concept main floor with 9-foot ceilings, gourmet kitchen with island and stainless steel appliances. Large master bedroom with walk-in closet and ensuite. Professional landscaped backyard.',
    features: ['Open Concept', '9ft Ceilings', 'Gourmet Kitchen', 'Walk-in Closet', 'Ensuite', 'Landscaped Backyard'],
    photos: [PHOTO_PLACEHOLDERS.modern, PHOTO_PLACEHOLDERS.interior1, PHOTO_PLACEHOLDERS.kitchen, PHOTO_PLACEHOLDERS.backyard],
    listDate: '2024-11-10',
    daysOnMarket: 17,
    listBrokerage: 'RE/MAX Professionals Inc., Brokerage',
    listAgent: 'James Wilson',
    isAgentListing: false,
    isFeatured: false,
    taxes: 5100,
    taxYear: 2023,
    basement: 'Finished',
    heating: 'Forced Air Gas',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'N6543210',
    status: 'Active',
    listPrice: 1549000,
    address: {
      street: '25 Royal Orchard Boulevard',
      city: 'Markham',
      province: 'Ontario',
      postalCode: 'L3T 3C9',
      neighbourhood: 'Royal Orchard',
      community: 'Markham',
    },
    coordinates: { lat: 43.8448, lng: -79.3786 },
    propertyType: 'Detached',
    buildingType: '2-Storey',
    bedrooms: 5,
    bedroomsPlus: 1,
    bathrooms: 4,
    sqft: '3,200-3,500',
    lotSize: '50 x 130 Feet',
    parkingSpaces: 3,
    garageType: 'Attached',
    yearBuilt: 2012,
    description: 'Executive 5+1 bedroom home on a premium lot in prestigious Royal Orchard. Grand foyer with soaring ceilings, formal living and dining rooms, chef\'s kitchen with custom cabinetry. Finished basement with recreation room, wet bar, and bedroom. Minutes to excellent schools.',
    features: ['Grand Foyer', 'Custom Cabinetry', 'Wet Bar', 'Recreation Room', 'Premium Lot', 'Near Top Schools'],
    photos: [PHOTO_PLACEHOLDERS.luxury, PHOTO_PLACEHOLDERS.interior2, PHOTO_PLACEHOLDERS.kitchen, PHOTO_PLACEHOLDERS.bathroom],
    listDate: '2024-11-05',
    daysOnMarket: 22,
    listBrokerage: 'Royal LePage Connect Realty, Brokerage',
    listAgent: 'Karen Chen',
    isAgentListing: false,
    isFeatured: true,
    taxes: 7200,
    taxYear: 2023,
    basement: 'Finished',
    heating: 'Forced Air Gas',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'W8765432',
    status: 'Active',
    listPrice: 629900,
    address: {
      street: '10 Park Lawn Road',
      unit: 'Unit 712',
      city: 'Toronto',
      province: 'Ontario',
      postalCode: 'M8Y 3H8',
      neighbourhood: 'Mimico',
      community: 'Etobicoke',
    },
    coordinates: { lat: 43.6141, lng: -79.4842 },
    propertyType: 'Condo Apartment',
    buildingType: 'Apartment',
    bedrooms: 1,
    bedroomsPlus: 1,
    bathrooms: 1,
    sqft: '650-750',
    parkingSpaces: 1,
    garageType: 'Underground',
    yearBuilt: 2018,
    description: 'Modern 1+1 bedroom waterfront condo with stunning lake views. Open concept living with floor-to-ceiling windows, modern kitchen with integrated appliances, and a spacious balcony. Building features include pool, gym, party room, and direct access to waterfront trail.',
    features: ['Lake Views', 'Waterfront', 'Pool', 'Gym', 'Party Room', 'Waterfront Trail Access'],
    photos: [PHOTO_PLACEHOLDERS.condo, PHOTO_PLACEHOLDERS.interior1],
    listDate: '2024-11-18',
    daysOnMarket: 9,
    listBrokerage: 'Keller Williams Referred Urban Realty, Brokerage',
    listAgent: 'Mike Thompson',
    isAgentListing: false,
    isFeatured: false,
    taxes: 2800,
    taxYear: 2023,
    maintenanceFee: 520,
    heating: 'Fan Coil',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'W9012345',
    status: 'Active',
    listPrice: 879000,
    address: {
      street: '155 Sandalwood Parkway East',
      city: 'Brampton',
      province: 'Ontario',
      postalCode: 'L6Z 1Y5',
      neighbourhood: 'Sandalwood',
      community: 'Brampton',
    },
    coordinates: { lat: 43.7620, lng: -79.7129 },
    propertyType: 'Semi-Detached',
    buildingType: '2-Storey',
    bedrooms: 3,
    bedroomsPlus: 1,
    bathrooms: 3,
    sqft: '1,800-2,000',
    lotSize: '25 x 100 Feet',
    parkingSpaces: 2,
    garageType: 'Attached',
    yearBuilt: 2015,
    description: 'Beautiful 3+1 bedroom semi-detached home in a family-friendly neighbourhood. Upgraded kitchen with granite countertops and backsplash. Hardwood floors on main level, pot lights throughout. Fully finished basement with bedroom and full bathroom. Close to schools, parks, and transit.',
    features: ['Granite Countertops', 'Hardwood Floors', 'Pot Lights', 'Finished Basement', 'Close to Transit', 'Family-Friendly'],
    photos: [PHOTO_PLACEHOLDERS.townhouse, PHOTO_PLACEHOLDERS.kitchen, PHOTO_PLACEHOLDERS.interior2],
    listDate: '2024-11-12',
    daysOnMarket: 15,
    listBrokerage: 'HomeKey Realty Inc., Brokerage',
    listAgent: 'Sarah Mitchell',
    isAgentListing: true,
    isFeatured: true,
    taxes: 4500,
    taxYear: 2023,
    basement: 'Finished',
    heating: 'Forced Air Gas',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'N7890123',
    status: 'Active',
    listPrice: 1199000,
    address: {
      street: '50 Confederation Parkway',
      city: 'Vaughan',
      province: 'Ontario',
      postalCode: 'L4K 5R2',
      neighbourhood: 'Vaughan Metropolitan Centre',
      community: 'Vaughan',
    },
    coordinates: { lat: 43.7942, lng: -79.5279 },
    propertyType: 'Townhouse',
    buildingType: '3-Storey',
    bedrooms: 3,
    bathrooms: 3,
    sqft: '1,900-2,200',
    parkingSpaces: 1,
    garageType: 'Built-In',
    yearBuilt: 2021,
    description: 'Stunning 3-storey modern townhouse in the heart of Vaughan Metropolitan Centre. Steps to the subway. Open concept living with 10-foot ceilings on the main floor, rooftop terrace with city views, and premium finishes throughout. Smart home features included.',
    features: ['10ft Ceilings', 'Rooftop Terrace', 'Smart Home', 'Near Subway', 'Modern Design', 'City Views'],
    photos: [PHOTO_PLACEHOLDERS.townhouse, PHOTO_PLACEHOLDERS.interior1, PHOTO_PLACEHOLDERS.kitchen],
    listDate: '2024-11-08',
    daysOnMarket: 19,
    listBrokerage: 'Century 21 Leading Edge Realty, Brokerage',
    listAgent: 'David Park',
    isAgentListing: false,
    isFeatured: false,
    taxes: 5800,
    taxYear: 2023,
    heating: 'Forced Air Gas',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'E6789012',
    status: 'Active',
    listPrice: 2199000,
    address: {
      street: '8 Bayview Ridge',
      city: 'Richmond Hill',
      province: 'Ontario',
      postalCode: 'L4B 3M8',
      neighbourhood: 'Bayview Hill',
      community: 'Richmond Hill',
    },
    coordinates: { lat: 43.8688, lng: -79.4327 },
    propertyType: 'Detached',
    buildingType: '2-Storey',
    bedrooms: 5,
    bedroomsPlus: 2,
    bathrooms: 6,
    sqft: '4,500-5,000',
    lotSize: '60 x 150 Feet',
    parkingSpaces: 4,
    garageType: 'Attached',
    yearBuilt: 2016,
    description: 'Magnificent 5+2 bedroom luxury estate on a ravine lot in prestigious Bayview Hill. This custom-built home features a grand staircase, gourmet kitchen with Wolf and Sub-Zero appliances, home theatre, wine cellar, and an outdoor oasis with saltwater pool and cabana.',
    features: ['Custom-Built', 'Ravine Lot', 'Wolf/Sub-Zero', 'Home Theatre', 'Wine Cellar', 'Saltwater Pool'],
    photos: [PHOTO_PLACEHOLDERS.luxury, PHOTO_PLACEHOLDERS.interior2, PHOTO_PLACEHOLDERS.kitchen, PHOTO_PLACEHOLDERS.bathroom, PHOTO_PLACEHOLDERS.backyard],
    listDate: '2024-11-01',
    daysOnMarket: 26,
    listBrokerage: 'Sotheby\'s International Realty Canada, Brokerage',
    listAgent: 'Amanda Wright',
    isAgentListing: false,
    isFeatured: true,
    taxes: 12500,
    taxYear: 2023,
    basement: 'Finished',
    heating: 'Forced Air Gas',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'W5678901',
    status: 'Active',
    listPrice: 499900,
    address: {
      street: '3515 Kariya Drive',
      unit: 'Unit 1806',
      city: 'Mississauga',
      province: 'Ontario',
      postalCode: 'L5B 0C1',
      neighbourhood: 'City Centre',
      community: 'Mississauga',
    },
    coordinates: { lat: 43.5928, lng: -79.6413 },
    propertyType: 'Condo Apartment',
    buildingType: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    sqft: '550-600',
    parkingSpaces: 1,
    garageType: 'Underground',
    yearBuilt: 2017,
    description: 'Bright and spacious 1-bedroom condo in the heart of Mississauga City Centre. Walking distance to Square One, restaurants, and transit. Modern open concept with upgraded finishes. Building amenities include indoor pool, gym, sauna, and party room.',
    features: ['Near Square One', 'Indoor Pool', 'Sauna', 'Transit Access', 'Modern Finishes', 'Open Concept'],
    photos: [PHOTO_PLACEHOLDERS.condo, PHOTO_PLACEHOLDERS.interior1],
    listDate: '2024-11-22',
    daysOnMarket: 5,
    listBrokerage: 'HomeKey Realty Inc., Brokerage',
    listAgent: 'Sarah Mitchell',
    isAgentListing: true,
    isFeatured: false,
    taxes: 2100,
    taxYear: 2023,
    maintenanceFee: 450,
    heating: 'Fan Coil',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'W4567890',
    status: 'Active',
    listPrice: 949900,
    address: {
      street: '2295 Upper Middle Road West',
      city: 'Oakville',
      province: 'Ontario',
      postalCode: 'L6M 0A5',
      neighbourhood: 'West Oak Trails',
      community: 'Oakville',
    },
    coordinates: { lat: 43.4255, lng: -79.7459 },
    propertyType: 'Condo Townhouse',
    buildingType: '2-Storey',
    bedrooms: 3,
    bathrooms: 2,
    sqft: '1,600-1,800',
    parkingSpaces: 2,
    garageType: 'Attached',
    yearBuilt: 2020,
    description: 'Executive condo townhouse in sought-after West Oak Trails. End unit with lots of natural light. Designer kitchen with waterfall island, spa-like ensuite, and a private rooftop terrace. Walking trails, parks, and top-rated schools nearby.',
    features: ['End Unit', 'Waterfall Island', 'Spa-like Ensuite', 'Rooftop Terrace', 'Walking Trails', 'Top-Rated Schools'],
    photos: [PHOTO_PLACEHOLDERS.townhouse, PHOTO_PLACEHOLDERS.kitchen, PHOTO_PLACEHOLDERS.interior2],
    listDate: '2024-11-14',
    daysOnMarket: 13,
    listBrokerage: 'Coldwell Banker RMR Real Estate, Brokerage',
    listAgent: 'Lisa Hernandez',
    isAgentListing: false,
    isFeatured: false,
    taxes: 4800,
    taxYear: 2023,
    maintenanceFee: 380,
    heating: 'Forced Air Gas',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'C3456789',
    status: 'Active',
    listPrice: 1875000,
    address: {
      street: '100 Harbour Street',
      unit: 'PH 4201',
      city: 'Toronto',
      province: 'Ontario',
      postalCode: 'M5J 0B5',
      neighbourhood: 'Harbourfront',
      community: 'Downtown',
    },
    coordinates: { lat: 43.6394, lng: -79.3773 },
    propertyType: 'Condo Apartment',
    buildingType: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    sqft: '1,800-2,000',
    parkingSpaces: 2,
    garageType: 'Underground',
    yearBuilt: 2022,
    description: 'Breathtaking penthouse suite with panoramic lake and city views in Toronto\'s iconic waterfront. Floor-to-ceiling windows in every room, designer chef\'s kitchen, and an expansive wrap-around terrace. Premium building with 24/7 concierge, infinity pool, and private dining room.',
    features: ['Penthouse', 'Panoramic Views', '24/7 Concierge', 'Infinity Pool', 'Wrap-Around Terrace', 'Private Dining'],
    photos: [PHOTO_PLACEHOLDERS.condo, PHOTO_PLACEHOLDERS.interior2, PHOTO_PLACEHOLDERS.kitchen],
    listDate: '2024-11-03',
    daysOnMarket: 24,
    listBrokerage: 'HomeKey Realty Inc., Brokerage',
    listAgent: 'Sarah Mitchell',
    isAgentListing: true,
    isFeatured: true,
    taxes: 8500,
    taxYear: 2023,
    maintenanceFee: 1250,
    heating: 'Fan Coil',
    cooling: 'Central Air',
  },
  {
    mlsNumber: 'N2345678',
    status: 'Active',
    listPrice: 799000,
    address: {
      street: '380 Highway 7 East',
      unit: 'Unit 415',
      city: 'Richmond Hill',
      province: 'Ontario',
      postalCode: 'L4B 3N2',
      neighbourhood: 'Beaver Creek',
      community: 'Richmond Hill',
    },
    coordinates: { lat: 43.8527, lng: -79.3702 },
    propertyType: 'Condo Apartment',
    buildingType: 'Apartment',
    bedrooms: 2,
    bedroomsPlus: 1,
    bathrooms: 2,
    sqft: '1,100-1,200',
    parkingSpaces: 1,
    garageType: 'Underground',
    yearBuilt: 2023,
    description: 'Brand new 2+1 bedroom suite in Richmond Hill\'s most anticipated new development. Modern finishes with engineered hardwood, quartz countertops, and integrated appliances. Steps to shopping, dining, and transit. Investment opportunity with strong rental demand.',
    features: ['Brand New', 'Quartz Countertops', 'Integrated Appliances', 'Near Transit', 'Investment Opportunity', 'Strong Rental Demand'],
    photos: [PHOTO_PLACEHOLDERS.condo, PHOTO_PLACEHOLDERS.interior1, PHOTO_PLACEHOLDERS.kitchen],
    listDate: '2024-11-19',
    daysOnMarket: 8,
    listBrokerage: 'Sutton Group Summit Realty Inc., Brokerage',
    listAgent: 'Robert Kim',
    isAgentListing: false,
    isFeatured: false,
    taxes: 3400,
    taxYear: 2023,
    maintenanceFee: 580,
    heating: 'Fan Coil',
    cooling: 'Central Air',
  },
];

export const CITIES: City[] = [
  { name: 'Toronto', slug: 'toronto', count: 4, image: 'https://images.unsplash.com/photo-1517090504332-8615a4e3c2a3?w=600&h=400&fit=crop' },
  { name: 'Mississauga', slug: 'mississauga', count: 2, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop' },
  { name: 'Brampton', slug: 'brampton', count: 1, image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&fit=crop' },
  { name: 'Markham', slug: 'markham', count: 1, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop' },
  { name: 'Vaughan', slug: 'vaughan', count: 1, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop' },
  { name: 'Richmond Hill', slug: 'richmond-hill', count: 2, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop' },
  { name: 'Oakville', slug: 'oakville', count: 1, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop' },
  { name: 'Burlington', slug: 'burlington', count: 0, image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop' },
  { name: 'Hamilton', slug: 'hamilton', count: 0, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop' },
  { name: 'Milton', slug: 'milton', count: 0, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop' },
];

export function searchListings(filters: import('@/types/listing').SearchFilters): { listings: Listing[]; total: number } {
  let results = [...MOCK_LISTINGS];

  if (filters.query) {
    const q = filters.query.toLowerCase();
    results = results.filter(
      (l) =>
        l.address.street.toLowerCase().includes(q) ||
        l.address.city.toLowerCase().includes(q) ||
        l.address.neighbourhood?.toLowerCase().includes(q) ||
        l.address.postalCode.toLowerCase().replace(/\s/g, '').includes(q.replace(/\s/g, '')) ||
        l.mlsNumber.toLowerCase().includes(q) ||
        l.propertyType.toLowerCase().includes(q)
    );
  }

  if (filters.city) {
    results = results.filter((l) => l.address.city.toLowerCase() === filters.city!.toLowerCase());
  }

  if (filters.neighbourhood) {
    results = results.filter((l) => l.address.neighbourhood?.toLowerCase() === filters.neighbourhood!.toLowerCase());
  }

  if (filters.minPrice) {
    results = results.filter((l) => l.listPrice >= filters.minPrice!);
  }
  if (filters.maxPrice) {
    results = results.filter((l) => l.listPrice <= filters.maxPrice!);
  }

  if (filters.propertyType) {
    results = results.filter((l) => l.propertyType === filters.propertyType);
  }

  if (filters.bedrooms) {
    results = results.filter((l) => l.bedrooms >= filters.bedrooms!);
  }

  if (filters.bathrooms) {
    results = results.filter((l) => l.bathrooms >= filters.bathrooms!);
  }

  if (filters.isAgentListing) {
    results = results.filter((l) => l.isAgentListing);
  }

  switch (filters.sortBy) {
    case 'price_asc':
      results.sort((a, b) => a.listPrice - b.listPrice);
      break;
    case 'price_desc':
      results.sort((a, b) => b.listPrice - a.listPrice);
      break;
    case 'date_asc':
      results.sort((a, b) => new Date(a.listDate).getTime() - new Date(b.listDate).getTime());
      break;
    case 'date_desc':
    default:
      results.sort((a, b) => new Date(b.listDate).getTime() - new Date(a.listDate).getTime());
      break;
  }

  const total = results.length;
  const page = filters.page || 1;
  const perPage = 12;
  const start = (page - 1) * perPage;
  const paginated = results.slice(start, start + perPage);

  return { listings: paginated, total };
}

export function getListingByMls(mlsNumber: string): Listing | undefined {
  return MOCK_LISTINGS.find((l) => l.mlsNumber === mlsNumber);
}

export function getFeaturedListings(): Listing[] {
  return MOCK_LISTINGS.filter((l) => l.isFeatured);
}

export function getAgentListings(): Listing[] {
  return MOCK_LISTINGS.filter((l) => l.isAgentListing);
}
