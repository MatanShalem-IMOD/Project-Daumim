export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  picture: string;
  date: string;
}

export interface ProductDataToDB {
  name: string;
  category: string;
  description: string;
  location: string;
  picture: string; // Assuming this is a base64-encoded string or a URL
}