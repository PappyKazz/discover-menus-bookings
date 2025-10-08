# Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Supabase account
- Vercel/Netlify account (for deployment)

## Local Development Setup

1. **Clone and Install**
```bash
npm install
```

2. **Set Up Supabase**
   - Create a new project at https://supabase.com
   - Go to SQL Editor and run the schema from `supabase-schema.sql`
   - Get your project URL and anon key from Settings > API

3. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Run Development Server**
```bash
npm run dev
```

## Production Deployment

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify Deployment

1. Push code to GitHub
2. New site from Git in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy!

## Database Seeding

To populate your database with sample data, run these SQL commands in Supabase:

```sql
-- Insert sample restaurants
INSERT INTO restaurants (name, cuisine, price_range, rating, image_url, description, address, phone, hours, latitude, longitude)
VALUES 
  ('La Bella Vista', 'Italian', 3, 4.8, 'https://...', 'Authentic Italian cuisine', '123 Main St', '(212) 555-0101', '11:00 AM - 10:00 PM', 40.7589, -73.9851),
  -- Add more restaurants...
```

## Post-Deployment Checklist

- [ ] Test authentication flow
- [ ] Verify restaurant search works
- [ ] Test reservation booking
- [ ] Check review submission
- [ ] Test on mobile devices
- [ ] Verify all images load correctly
