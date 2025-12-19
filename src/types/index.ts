
export type PageId = 'home' | 'market' | 'section8' | 'course' | 'about' | 'contact';

export interface Deal {
  id: string;
  address: string;
  price: string;
  rent: string;
  roi: string;
  cashFlow: string;
  marketValue: string;
  rehab: string;
  piti: string;
  yearBuilt: string;
  sqft: string;
  lotSize: string;
  image: string;
  badge: string;
  tags: string[];
  type?: string;
  equity?: string;
}

export interface SupportStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  phone: string;
}
