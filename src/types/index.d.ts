import { ISiteInfo } from '@/types';
export type UserRole = "ADMIN" | "EDITOR";
export type TRole = "EDITOR" | "ADMIN"

import type { ComponentType } from "react"

export type { ILogin, IRegister } from "./auth.type"

export interface IResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}

export interface ISidebarItem {
  title: string,
  items: {
    title: string,
    url: string,
    component: ComponentType
  }[]

}
export interface IUser {
  _id: string
  name: string
  email: string
  role: "EDITOR" | "ADMIN"
  password: string
  isDeleted: boolean
  isActive: string
  isVerified: boolean
  picture: string
  createdAt: string
  updatedAt: string
}

export interface IUserApiResponse {
  data: IUser;
}

export interface IJoiningRequest {
  _id?: string;
  companyName: string;
  companyDate: string;
  companyIRD: string;

  director1: {
    name: string;
    position: string;
    date: string;
    ird: string;
  };

  director2: {
    name: string;
    position: string;
    date: string;
    ird: number;
  };

  address: string;
  phoneBusiness: string;
  phoneHome: string;
  phoneMobile: string;
  email: string;
  isHuman: boolean;
  createdAt: string
}

// For selecting Service Type
export interface IServiceType {
  _id?: string;
  name: string;
  description?: string;
}


export interface IService {
  _id?: string;
  title: string;
  slug: string;
  description?: string;
  images?: string[];
  included?: string[];
  excluded?: string[];
  amenities?: string[];
  servicePlan?: string[];

  subServices?: ISubService[];

  serviceType: {
    _id: string,
    name: string
  };

  createdAt?: string;
  updatedAt?: string;

  // For deleting specific images
  deleteImages?: string[];
}

// Sub Service Type
export interface ISubService {
  title: string;
  description: string;
  image: string[];
}

// For API response wrapper
export interface IServiceApiResponse {
  success: boolean;
  data: IService;
}

export interface IServiceListApiResponse {
  success: boolean;
  data: IService[];
}

export interface IReferralForm {
  _id?: string
  referralName: string;
  yourName: string;
  referralEmail: string;
  yourEmail: string;
  referralPhone: string;
  helpDescription: string;
  referralAddress: string;
  referralSuburb?: string;
  isHuman: boolean;
  createdAt?: string
}

export interface IMessage {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isHuman: boolean;
  _id?: string;
  createdAt?: string;
}

export interface GetAllMessagesParams {
  sort?: "asc" | "desc";
  searchTerm?: string;
}

export type GetQueryParams = {
  searchTerm?: string;
  sort?: string;
  filter?: string;
  page?: number;
  limit?: number;
};


export interface ITestimonial {
  _id?: string;
  fullName: string;
  email: string;
  companyName?: string;
  designation?: string;
  rating: number;
  message: string;
  photoUrl?: string;
  isApproved?: boolean;
  createdAt?: sting
}

export interface ISEO {
  _id?: string;
  pagePath: string;
  pageTitle: string;     
  pageDescription: string;  
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string;
  canonicalURL: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISiteInfo {
  _id?: string;
  // Site & Branding
  siteTitle?: string;
  siteTagline?: string;
  logoUrl?: string;
  faviconUrl?: string;

  // Contact Details
  adminEmail?: string;
  supportEmail?: string;
  phone?: string;
  supportPhone?: string;
  address?: string;
  businessHours?: {
    days?: string[]; // e.g., ["Mon", "Tue"]
    start?: string;  // "09:00"
    end?: string;    // "17:00"
  };
  mapEmbedUrl?: string;

  // Social Media
  social?: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    pinterest?: string;
    whatsapp?: string;
  };
}
export interface ISiteInfoResponse {
  data: ISiteInfo
}
