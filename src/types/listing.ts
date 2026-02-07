export interface Listing {
  mlsNumber: string;
  status: 'Active';
  listPrice: number;
  address: {
    street: string;
    unit?: string;
    city: string;
    province: string;
    postalCode: string;
    neighbourhood?: string;
    community?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  propertyType: PropertyType;
  buildingType: string;
  bedrooms: number;
  bedroomsPlus?: number;
  bathrooms: number;
  sqft?: string;
  lotSize?: string;
  parkingSpaces?: number;
  garageType?: string;
  yearBuilt?: number;
  description: string;
  features: string[];
  photos: string[];
  listDate: string;
  daysOnMarket: number;
  listBrokerage: string;
  listAgent: string;
  isAgentListing: boolean;
  isFeatured: boolean;
  taxes?: number;
  taxYear?: number;
  maintenanceFee?: number;
  basement?: string;
  heating?: string;
  cooling?: string;
  virtualTourUrl?: string;
}

export type PropertyType =
  | 'Detached'
  | 'Semi-Detached'
  | 'Townhouse'
  | 'Condo Apartment'
  | 'Condo Townhouse'
  | 'Link'
  | 'Multiplex'
  | 'Vacant Land'
  | 'Commercial';

export interface SearchFilters {
  query?: string;
  city?: string;
  neighbourhood?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: PropertyType | '';
  bedrooms?: number;
  bathrooms?: number;
  minSqft?: number;
  sortBy?: 'price_asc' | 'price_desc' | 'date_desc' | 'date_asc';
  page?: number;
  isAgentListing?: boolean;
}

export interface AgentInfo {
  name: string;
  title: string;
  brokerage: string;
  brokerageLegalName: string;
  registrationNumber: string;
  phone: string;
  email: string;
  photo: string;
  bio: string;
  specializations: string[];
  serviceAreas: string[];
}

export interface City {
  name: string;
  slug: string;
  count: number;
  image: string;
}
