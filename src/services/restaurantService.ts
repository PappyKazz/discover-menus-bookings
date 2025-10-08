import { supabase } from '../lib/supabase';

export const restaurantService = {
  async getAll() {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .order('rating', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async search(query: string) {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .or(`name.ilike.%${query}%,cuisine.ilike.%${query}%`);
    
    if (error) throw error;
    return data;
  },

  async filterByCuisine(cuisine: string) {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('cuisine', cuisine);
    
    if (error) throw error;
    return data;
  }
};
