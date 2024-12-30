export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'user';
  department: string;
  created_at: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  author_id: string;
  department: string;
  published_at: string;
  image_url?: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  manager_id: string;
}