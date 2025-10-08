-- Create restaurants table
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  cuisine TEXT NOT NULL,
  price_range INTEGER CHECK (price_range BETWEEN 1 AND 4),
  rating DECIMAL(2,1) CHECK (rating BETWEEN 0 AND 5),
  image_url TEXT,
  description TEXT,
  address TEXT,
  phone TEXT,
  hours TEXT,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  owner_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reservations table
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  party_size INTEGER CHECK (party_size BETWEEN 1 AND 20),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create menu_items table
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  category TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Policies for restaurants (public read, owner write)
CREATE POLICY "Public can view restaurants" ON restaurants FOR SELECT USING (true);
CREATE POLICY "Owners can update their restaurants" ON restaurants FOR UPDATE USING (auth.uid() = owner_id);

-- Policies for reservations (users can view/create their own)
CREATE POLICY "Users can view their reservations" ON reservations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create reservations" ON reservations FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policies for reviews (public read, authenticated write)
CREATE POLICY "Public can view reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create reviews" ON reviews FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policies for menu_items (public read, owner write)
CREATE POLICY "Public can view menu items" ON menu_items FOR SELECT USING (true);
