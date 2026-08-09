export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  year?: number;
  budget?: string;
  scopeOfService?: string[];
  client?: string;
  gallery?: string[];
}
