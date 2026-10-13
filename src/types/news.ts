export type DivisionId = 
  | 'dhaka' 
  | 'chittagong' 
  | 'sylhet' 
  | 'rajshahi' 
  | 'khulna' 
  | 'barisal' 
  | 'rangpur' 
  | 'mymensingh';

export type OutletCategory = 
  | 'national-daily' 
  | 'english-daily' 
  | 'regional' 
  | 'tv-channel' 
  | 'business' 
  | 'online-portal' 
  | 'magazine';

export type LanguageCode = 'bn' | 'en' | 'bilingual';

export interface Outlet {
  id: string;
  name: string;
  nameBn: string;
  url: string;
  category: OutletCategory;
  division: DivisionId;
  district: string;
  districtBn: string;
  language: LanguageCode;
  foundedYear: number;
  circulationTier: 'Top National' | 'High' | 'Regional Leading' | 'Specialized';
  format: 'Broadsheet Daily' | 'Online 24/7' | 'Satellite TV' | 'Financial Daily' | 'Tabloid';
  description: string;
  descriptionBn: string;
  editor?: string;
  accentColor: string;
  featured?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  titleBn: string;
  summary: string;
  summaryBn: string;
  content: string;
  contentBn: string;
  outletId: string;
  outletName: string;
  category: 'national' | 'regional' | 'business' | 'sports' | 'weather' | 'technology';
  division: DivisionId;
  district?: string;
  publishedAt: string; // ISO string or human relative time
  readTime: string;
  isBreaking?: boolean;
  imageUrl?: string;
  sourceUrl: string;
}

export interface DivisionInfo {
  id: DivisionId;
  name: string;
  nameBn: string;
  headquarters: string;
  headquartersBn: string;
  districtsCount: number;
  prominentDistricts: string[];
  prominentDistrictsBn: string[];
  regionalFocus: string;
  regionalFocusBn: string;
  imageUrl?: string;
}
