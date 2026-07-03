export interface TechArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
  views: number;
  tags: string[];
  coverImage?: string;
}

export interface CaseItem {
  id: string;
  title: string;
  department: string;
  technology: string;
  difficulty: '初级' | '中级' | '高级';
  equipmentBrand: string;
  equipmentModel: string;
  summary: string;
  patientInfo: string;
  diagnosis: string;
  treatment: string;
  content: string;
  images: string[];
  author: string;
  publishDate: string;
  views: number;
  likes: number;
}

export interface Equipment {
  id: string;
  brand: string;
  model: string;
  name: string;
  description: string;
  parameters: Record<string, string>;
  features: string[];
  images: string[];
  releaseDate: string;
  sourceUrl?: string;
  sourceName?: string;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  hospital: string;
  department: string;
  avatar: string;
  bio: string;
  articleCount: number;
}

export interface ExpertArticle {
  id: string;
  expertId: string;
  title: string;
  summary: string;
  content: string;
  publishDate: string;
  views: number;
}

export interface WechatAccount {
  id: string;
  name: string;
  avatar: string;
  description: string;
  followerCount: number;
  lastUpdate: string;
}

export interface WechatArticle {
  id: string;
  accountId: string;
  accountName: string;
  title: string;
  summary: string;
  coverImage: string;
  content?: string;
  publishDate: string;
  views: number;
  category: string;
  sourceUrl?: string;
  sourceName?: string;
}

export type SearchCategory = 'all' | 'technology' | 'cases' | 'equipment' | 'experts' | 'wechat';

export interface SearchResult {
  type: SearchCategory;
  id: string;
  title: string;
  summary: string;
  date: string;
  views?: number;
  extra?: string;
}
