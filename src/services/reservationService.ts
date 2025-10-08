import { supabase } from '../lib/supabase';

export const reservationService = {
  async create(reservation: {
    restaurant_id: string;
    user_id: string;
    date: string;
    time: string;
    party_size: number;
  }) {
    const { data, error } = await supabase
      .from('reservations')
      .insert([reservation])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByUserId(userId: string) {
    const { data, error } = await supabase
      .from('reservations')
      .select('*, restaurants(*)')
      .eq('user_id', userId)
      .order('date', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async getByRestaurantId(restaurantId: string) {
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('date', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async updateStatus(id: string, status: string) {
    const { data, error } = await supabase
      .from('reservations')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async cancel(id: string) {
    const { error } = await supabase
      .from('reservations')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
