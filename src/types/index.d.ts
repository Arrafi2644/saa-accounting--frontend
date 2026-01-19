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
  _id: string;
  businessName: string;
  directorsAndShareholders: string;
  irdNumber: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  authorityConsent: boolean;
  documents: string[];
  createdAt?: string;
}

// For selecting Service Type
export interface IServiceType {
  _id?: string;
  name: string;
  description?: string;
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

export interface INewsletter {
  _id?: string;
  email: string;
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
  page?: number;
  limit?: number;
};


export interface ITestimonial {
  _id?: string,
  partnershipLabel: string;
  rating: number;
  content: string;
  clientName: string;
  designation?: string;
  companyName: string;
  location: string;
  industry: string;
  isApproved?: boolean;
  isFeatured?: boolean;
  createdAt?: sting
}

export interface ISEO {
  _id?: string;
  pagePath: string;
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
  siteTitle?: string;
  siteTagline?: string;
  mainLogo: string;
  faviconLogo?: string;
  footerLogo: string;
  mainEmail?: string;
  supportEmail?: string;
  phone?: string;
  supportPhone?: string;
  address?: string;
  mapEmbedUrl?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
  tiktok?: string;
  pinterest?: string;
  whatsapp?: string;
}

export interface ISiteInfoForPost {
  siteTitle?: string;
  siteTagline?: string;
  mainLogo: File;
  faviconLogo?: File;
  footerLogo: File;
  mainEmail?: string;
  supportEmail?: string;
  phone?: string;
  supportPhone?: string;
  address?: string;
  mapEmbedUrl?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
  twitter?: string;
  instagram?: string;
  tiktok?: string;
  pinterest?: string;
  whatsapp?: string;
}

export interface ISiteInfoResponse {
  data: ISiteInfo
}


export interface IBanner {
  title: string;
  subtitle: string;
}
export interface IServiceOverview {
  title: string;
  description: string;
  features: string[];
  serviceImage: string;
}

export interface IFeature {
  title: string;
  description: string;
  icon: string;
}

export interface IServiceMatter {
  matterSectionTitle: string;
  matterSectionSubTitle: string;
  withoutSaaS: {
    badgeTitle: string,
    badgeIcon: string,
    title: string,
    items: {
      icon: string;
      text: string;
    }[]
  };
  withSaaS: {
    badgeTitle: string,
    badgeIcon: string,
    title: string,
    items: {
      icon: string;
      text: string;
    }[]
  };
}

export interface IProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

export interface IRequirementDoc {
  title: string;
  icon: string;
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface IService {
  _id?: string;
  title: string;
  slug?: string;
  serviceSummary: string;
  shortDescription: string;
  serviceIcon: string;
  banner: IBanner;
  overView: IServiceOverview;
  serviceMatter: IServiceMatter;
  features: IFeature[];
  processSteps: IProcessStep[];
  requirementDocs: IRequirementDoc[];
  faqs: IFaq[];
  createdAt?: string;
  updatedAt?: string;
}

export interface IArticle {
  _id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  readTime: number;
}

export interface ITool {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  status: "active" | "inactive";
}

export interface IPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}



