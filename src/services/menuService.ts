import { supabase } from '../lib/supabase';

export const menuService = {
  async getByRestaurantId(restaurantId: string) {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('category', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async create(menuItem: {
    restaurant_id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image_url?: string;
  }) {
    const { data, error } = await supabase
      .from('menu_items')
      .insert([menuItem])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<{
    name: string;
    description: string;
    price: number;
    category: string;
    image_url: string;
  }>) {
    const { data, error } = await supabase
      .from('menu_items')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('menu_items')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
