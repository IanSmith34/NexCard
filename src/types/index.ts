// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'individual' | 'team_admin' | 'team_member';
  createdAt: Date;
  teamId?: string;
}

// Authentication Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Card Types
export type CardTheme = 'classic' | 'modern' | 'minimal' | 'bold' | 'elegant';

export interface BusinessCard {
  id: string;
  userId: string;
  teamId?: string;
  title: string;
  theme: CardTheme;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  profileData: ProfileData;
}

// Profile Types
export interface ProfileData {
  fullName: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  address?: string;
  photo?: string;
  logo?: string;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  bio?: string;
  achievements?: string[];
  certifications?: string[];
  portfolio?: PortfolioItem[];
  socialMedia?: SocialMedia;
  website?: string;
  customFields?: CustomField[];
}

export interface PortfolioItem {
  id: string;
  type: 'pdf' | 'image' | 'document';
  title: string;
  url: string;
}

export interface SocialMedia {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  tiktok?: string;
}

export interface CustomField {
  id: string;
  label: string;
  value: string;
}

// Team Types
export interface Team {
  id: string;
  name: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  members: TeamMember[];
}

export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  role: 'admin' | 'member';
  inviteStatus: 'pending' | 'accepted';
  email: string;
  name?: string;
}

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'annually';
  features: string[];
  isPopular: boolean;
}