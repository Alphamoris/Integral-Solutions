# 🌍 Integral Trip Planner

<div align="center">
  <img src="public/p1.png" alt="Integral Trip Planner" width="600"/>
  <p><i>Your personalized travel companion for memorable journeys</i></p>
</div>

## ✨ Overview

Integral Trip Planner is a modern, feature-rich travel planning application built with Next.js and React. It helps users plan their trips, organize activities, manage accommodations, and track flight details - all in one beautiful, intuitive interface.

## 🚀 Features

- **Trip Dashboard**: Overview of upcoming trips with essential information
- **Flight Management**: Track flight details with departure and arrival information
- **Accommodation Booking**: Manage hotel reservations with check-in/check-out dates
- **Activity Planning**: Organize daily activities with time slots and location details
- **Beautiful UI**: Dark-themed, responsive interface with modern design elements
- **Interactive Calendar**: Day-by-day itinerary visualization

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React framework with App Router)
- **UI Library**: React with custom components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Icons**: [Lucide React](https://lucide.dev/docs/lucide-react) for beautiful icons
- **Utility Libraries**: clsx and tailwind-merge for conditional class merging

## 📂 Project Structure

```
integral/
├── app/                    # Next.js app router pages
│   ├── activities/         # Activities page
│   ├── api/                # API routes
│   ├── login/              # Authentication pages
│   ├── on-board/           # Onboarding experience
│   ├── profile/            # User profile management
│   ├── trip-overview/      # Trip details and itinerary view
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
│
├── components/             # Reusable React components
│   ├── auth/               # Authentication components
│   ├── figma/              # Design components
│   ├── trip/               # Trip-related components
│   │   ├── ActivityCard.tsx       # Individual activity display
│   │   ├── ActivitiesSection.tsx  # Activities collection view
│   │   ├── AccommodationCard.tsx  # Hotel card component
│   │   ├── AccommodationList.tsx  # Accommodations list
│   │   ├── FlightDetails.tsx      # Flight information display
│   │   ├── Header.tsx             # Section headers
│   │   └── TripCard.tsx           # Trip overview card
│   │
│   ├── ui/                 # UI primitives (buttons, cards, etc.)
│   ├── navigation-menu.tsx # Navigation component
│   ├── providers.tsx       # Context providers
│   └── theme-toggle.tsx    # Dark/light mode toggle
│
├── lib/                    # Utility functions and shared logic
│   └── utils.ts            # Helper functions
│
├── public/                 # Static assets
│
└── ... configuration files
```

## 🧩 Component Hierarchy

The application follows a component-based architecture with a clear hierarchy:

- **Layout Component**: Provides the shell for all pages with navigation and theme
- **Page Components**: Main views for different sections (trip overview, activities, etc.)
- **Section Components**: Organize related content within pages
- **Card Components**: Display specific information units (trips, activities, hotels)
- **UI Components**: Basic building blocks (buttons, inputs, etc.)

## 🔍 Key Components

- **TripCard**: Showcases trip details with a beautiful image and essential info
- **FlightDetails**: Visual representation of flight information with origin and destination
- **AccommodationList/Card**: Hotel details with check-in/out dates and confirmation status
- **ActivitiesSection**: Collection of activities with filtering options
- **ActivityCard**: Individual activity details with time, duration, and location

## 💪 Challenges and Solutions

### Responsive Design
**Challenge**: Creating a consistent experience across multiple device sizes
**Solution**: Leveraged Tailwind CSS's responsive utility classes and built mobile-first layouts

### State Management
**Challenge**: Managing complex trip state across multiple components
**Solution**: Implemented React context providers for global state with optimized renders

### UI/UX Design
**Challenge**: Creating an intuitive yet feature-rich interface
**Solution**: Followed a dark-themed modern design language with high contrast for readability

### Data Organization
**Challenge**: Structuring trip data efficiently for various views
**Solution**: Created modular components that can consume standardized data formats

## 🏁 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📝 Usage

1. **Start Planning**: Begin by clicking "Start Planning" on the home page
2. **View Demo Trip**: Explore a sample trip to Tokyo to see the capabilities
3. **Customize Itinerary**: Add activities, accommodations, and flight details
4. **Manage Schedule**: Organize activities by day and time
5. **Share Plans**: (Coming soon) Share itineraries with travel companions

## 🔮 Future Roadmap

- **User Authentication**: Complete login/signup flow
- **Social Sharing**: Share trips with friends and family
- **Offline Support**: PWA capabilities for on-the-go access
- **AI Recommendations**: Smart activity suggestions based on preferences
- **Budget Tracking**: Expense management for trips

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - explore utility-first styling

## 🚀 Deployment

The app is easily deployed using [Vercel](https://vercel.com), the platform from the creators of Next.js.

---

<div align="center">
  <p>Made with ❤️ for travelers everywhere by Alphamoris &copy 2025</p>
</div>
