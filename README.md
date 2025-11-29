# FixIt - Local Home Services Booking App

A React Native mobile application for booking local home services with trusted professionals.

## Features

- **Welcome Screen**: Onboarding experience with app introduction
- **Service Categories**: Browse different service categories (Plumbing, Electrical, Cleaning, AC Repair, Painting)
- **Provider Listings**: View available service providers with ratings and pricing
- **Booking System**: Book services with preferred time slots and add notes
- **Booking History**: Track all your service bookings and their status
- **Favorites**: Save your preferred service providers
- **Dashboard**: Overview of your account and services

## Tech Stack

- **React Native** with Expo
- **React Navigation** for navigation
- **AsyncStorage** for local data persistence
- **Expo Vector Icons** for UI icons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Jaypatil25/FixIt-Local-Home-Services-Booking-App.git
cd FixIt-Local-Home-Services-Booking-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on device:
```bash
npm run ios    # for iOS
npm run android # for Android
```

## Project Structure

```
src/
├── modules/
│   ├── welcome/         # Welcome screen
│   ├── categories/      # Service categories
│   ├── providers/       # Provider listings
│   ├── booking/         # Booking form
│   ├── history/         # Booking history
│   ├── favourites/      # Favorite providers
│   └── dashboard/       # User dashboard
├── navigation/          # App navigation setup
└── data/               # Mock data for providers
```

## Team Contributors

- **Dashboard Module**: Team Member 1
- **Booking & Favourites**: Team Member 2  
- **Providers & Categories**: Team Member 3
- **Welcome & History**: Atharv Soni (@ath1614)

## Available Services

- **Plumbing**: Pipe repairs, drain cleaning, installations
- **Electrical**: Wiring, repairs, maintenance
- **Cleaning**: Deep cleaning, regular house cleaning, eco-friendly options
- **AC Repair**: Installation, servicing, maintenance
- **Painting**: Interior, exterior, decorative painting

## License

This project is developed as part of a team collaboration for learning purposes.