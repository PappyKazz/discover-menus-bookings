import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  restaurants: {
    id: string;
    name: string;
    cuisine: string;
    price_range: number;
    rating: number;
    image_url: string;
    description: string;
    address: string;
    phone: string;
    hours: string;
    latitude: number;
    longitude: number;
    owner_id: string;
  };
  reservations: {
    id: string;
    restaurant_id: string;
    user_id: string;
    date: string;
    time: string;
    party_size: number;
    status: string;
    created_at: string;
  };
  reviews: {
    id: string;
    restaurant_id: string;
    user_id: string;
    rating: number;
    comment: string;
    created_at: string;
  };
  menu_items: {
    id: string;
    restaurant_id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image_url: string;
  };
};
