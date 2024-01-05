export interface IPostAd {
  name: string;
  description: string;
  price: number | string | null;
  location: string;
  images?: string[];
  category?: string;
}
