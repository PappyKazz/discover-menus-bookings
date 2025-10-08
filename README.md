# Restaurant Discovery Platform

A comprehensive restaurant discovery and reservation platform built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🔍 **Advanced Search & Filters**: Search restaurants by name, cuisine, location with real-time filtering
- 🍽️ **Restaurant Profiles**: Detailed pages with menus, photos, ratings, and contact information
- 📅 **Reservation System**: Book tables with date, time, and party size selection
- ⭐ **Review System**: Rate and review restaurants with star ratings and comments
- 🔐 **User Authentication**: Sign up/sign in with Supabase Auth
- 👤 **User Dashboard**: View and manage reservations and account settings
- 🏪 **Restaurant Owner Dashboard**: Manage menus, availability, and view reservations
- 📱 **Responsive Design**: Mobile-first design that works on all devices

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
3. Copy your project URL and anon key

### 3. Configure Environment Variables

Create a `.env` file in the root directory:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## Database Schema

The application uses the following tables:
- **restaurants**: Store restaurant information
- **reservations**: Manage table bookings
- **reviews**: Customer reviews and ratings
- **menu_items**: Restaurant menu items

All tables have Row Level Security (RLS) enabled for secure data access.

## Features Overview

### For Diners
- Browse restaurants with advanced filtering
- View detailed menus with prices and photos
- Make reservations with instant availability
- Leave reviews and ratings
- Track reservation history

### For Restaurant Owners
- Manage restaurant profiles
- Update menus and pricing
- View and manage reservations
- Respond to customer reviews

## Contributing

Feel free to submit issues and enhancement requests!
