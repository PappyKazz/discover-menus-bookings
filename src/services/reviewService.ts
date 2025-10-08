import { supabase } from '../lib/supabase';

export const reviewService = {
  async create(review: {
    restaurant_id: string;
    user_id: string;
    rating: number;
    comment: string;
  }) {
    const { data, error } = await supabase
      .from('reviews')
      .insert([review])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByRestaurantId(restaurantId: string) {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getAverageRating(restaurantId: string) {
    const { data, error } = await supabase
      .from('reviews')
      .select('rating')
      .eq('restaurant_id', restaurantId);
    
    if (error) throw error;
    
    if (!data || data.length === 0) return 0;
    
    const sum = data.reduce((acc, review) => acc + review.rating, 0);
    return sum / data.length;
  }
};
