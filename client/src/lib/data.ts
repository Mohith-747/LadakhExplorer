// Places to Visit Data
export const placesToVisit = [
  {
    name: "Pangong Lake",
    description:
      "An enchanting high-altitude lake known for its ever-changing blue hues and stunning mountain backdrop.",
    image: "/images/pangong.jpg",
    distance: "Leh, 140 km",
    isMustVisit: true,
  },
  {
    name: "Leh Palace",
    description:
      "A historic royal palace and museum offering panoramic views of Leh town and surrounding mountains.",
    image: "/images/lehpalace.jpg",
    distance: "Leh City Center",
  },
  {
    name: "Thiksey Monastery",
    description:
      "A magnificent 12-story monastery complex resembling the Potala Palace in Lhasa, with stunning Buddha statues and ancient artifacts.",
    image: "/images/monastery.jpg",
    distance: "19 km from Leh",
  },
  {
    name: "Nubra Valley",
    description:
      "A verdant valley with unique sand dunes, double-humped Bactrian camels, and charming villages set against towering mountains.",
    image: "/images/nubra.jpg",
    distance: "150 km from Leh",
  },
  {
    name: "Magnetic Hill",
    description:
      "A gravity-defying phenomenon where vehicles appear to roll uphill when placed in neutral, creating an optical illusion.",
    image: "/images/place1.jpg",
    distance: "30 km from Leh",
  },
  {
    name: "Khardung La Pass",
    description:
      "One of the world's highest motorable passes at 17,982 feet, offering breathtaking views and a gateway to Nubra Valley.",
    image: "/images/khardung.jpg",
    distance: "40 km from Leh",
  },
];

// Cuisine Data
export const cuisines = [
  {
    name: "Thukpa",
    description:
      "A hearty noodle soup with vegetables and meat, perfect for cold Ladakhi evenings.",
    image: "/images/food1.jpg",
    tags: ["Local Favorite", "Vegetarian Options"],
  },
  {
    name: "Momos",
    description:
      "Steamed dumplings filled with vegetables or meat, served with spicy chutney.",
    image: "/images/food3.jpg",
    tags: ["Must Try", "Street Food"],
  },
  {
    name: "Butter Tea (Po Cha)",
    description:
      "A traditional Ladakhi tea made with yak butter, salt, and tea leaves – a true local experience.",
    image: "/images/food2.jpg",
    tags: ["Traditional", "Beverage"],
  },
];

// Restaurant Data
export const restaurants = [
  {
    name: "Tibetan Kitchen",
    description:
      "Authentic Tibetan and Ladakhi cuisine in the heart of Leh town.",
    image: "/images/cuisine1.jpg",
    rating: 4.5,
    location: "Main Market, Leh",
  },
  {
    name: "Lamayuru Restaurant",
    description: "Local cuisine with panoramic mountain views.",
    image: "/images/cuisine2.jpg",
    rating: 4.0,
    location: "Fort Road, Leh",
  },
  {
    name: "Gesmo Restaurant",
    description:
      "Popular among travelers for its diverse menu and cozy ambiance.",
    image: "/images/cuisine3.jpg",
    rating: 4.8,
    location: "Changspa Road, Leh",
  },
  {
    name: "Bon Appetit",
    description:
      "A blend of local and international cuisine with garden seating.",
    image: "/images/cuisine4.jpg",
    rating: 4.2,
    location: "Upper Tukcha Road, Leh",
  },
];

// Accommodation Data
export const accommodations = [
  {
    title: "Luxury Hotels & Resorts",
    description:
      "Experience Ladakh in style with premium accommodations offering panoramic mountain views, spa services, and authentic Ladakhi cuisine. These properties blend modern comforts with traditional architecture.",
    image: "/images/hotel1.jpg",
    badge: "Premium",
    badgeColor: "bg-primary",
    amenities: [
      {
        icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
        text: "High-Speed WiFi",
      },
      {
        icon: "M12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        text: "Gourmet Dining",
      },
      {
        icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
        text: "Spa Services",
      },
      {
        icon: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25",
        text: "Mountain Views",
      },
    ],
    optionsTitle: "Popular Options",
    options: ["The Grand Dragon", "Ladakh Sarai Resort", "The Zen Ladakh"],
  },
  {
    title: "Boutique Guesthouses",
    description:
      "Charming guesthouses offering comfortable accommodations with local character. These properties provide a perfect balance of comfort and authenticity with personalized service.",
    image: "/images/accommodation1.jpg",
    badge: "Mid-Range",
    badgeColor: "bg-secondary",
    amenities: [
      {
        icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
        text: "Homemade Breakfast",
      },
      {
        icon: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z",
        text: "WiFi Available",
      },
      {
        icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
        text: "Central Location",
      },
      {
        icon: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
        text: "Local Host",
      },
    ],
    optionsTitle: "Popular Options",
    options: ["Hotel Ladakh Palace", "Mogol Hotel", "Shaolin Ladakh"],
  },
  {
    title: "Authentic Homestays",
    description:
      "Experience genuine Ladakhi hospitality by staying with local families. These homestays offer simple accommodations and the opportunity to experience daily life and traditional cuisine in Ladakh.",
    image: "/images/hotel3.jpg",
    badge: "Budget-Friendly",
    badgeColor: "bg-orange-500",
    amenities: [
      {
        icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
        text: "Local Family Hosts",
      },
      {
        icon: "M12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        text: "Home-Cooked Meals",
      },
      {
        icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
        text: "Cultural Exchange",
      },
      {
        icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
        text: "Traditional Houses",
      },
    ],
    optionsTitle: "Popular Areas",
    options: [
      "Nubra Valley Homestays",
      "Pangong Lake Homestays",
      "Leh Town Homestays",
    ],
  },
];

// Activities Data
export const activities = [
  {
    name: "Trekking Expeditions",
    description:
      "Explore stunning mountain trails from easy day hikes to challenging multi-day treks through remote valleys and high passes.",
    image: "/images/trekking.jpg",
    season: "Jun-Sep",
    category: "Adventure",
  },
  {
    name: "Mountain Biking",
    description:
      "Experience the thrill of cycling through high-altitude passes and picturesque valleys on well-maintained mountain bikes.",
    image: "/images/biking.jpg",
    season: "May-Oct",
    category: "Adventure",
  },
  {
    name: "Monastery Tours",
    description:
      "Visit ancient Buddhist monasteries to witness meditation sessions, religious ceremonies, and marvel at centuries-old art and architecture.",
    image: "/images/monastery.jpg",
    season: "Year-round",
    category: "Cultural",
  },
  {
    name: "River Rafting",
    description:
      "Navigate the thrilling rapids of the Zanskar and Indus rivers with experienced guides for an adrenaline-pumping adventure.",
    image: "/images/rafting.jpg",
    season: "Jun-Aug",
    category: "Adventure",
  },
  {
    name: "Bactrian Camel Safari",
    description:
      "Ride double-humped Bactrian camels across the sand dunes of Nubra Valley for a unique desert experience in the Himalayas.",
    image: "/images/camel.jpg",
    season: "May-Sep",
    category: "Cultural",
  },
  {
    name: "Photography Tours",
    description:
      "Capture the stunning landscapes, vibrant festivals, and unique culture of Ladakh with guided photography expeditions.",
    image: "/images/photography.jpg",
    season: "Year-round",
    category: "Cultural",
  },
];

// Gallery Images Data
export const galleryImages = [
  {
    src: "/images/pangong.jpg",
    alt: "Pangong Lake",
  },
  {
    src: "/images/monastery.jpg",
    alt: "Ladakh monastery",
  },
  {
    src: "/images/nubra.jpg",
    alt: "Nubra Valley",
  },
  {
    src: "/images/cuisine1.jpg",
    alt: "Ladakhi culture",
  },
  {
    src: "/images/khardung.jpg",
    alt: "Mountain pass",
  },
  {
    src: "/images/hotel3.jpg",
    alt: "Local people",
  },
  {
    src: "/images/activity1.jpg",
    alt: "Prayer flags",
  },
  {
    src: "/images/landscape.jpg",
    alt: "Ladakh landscapes",
  },
];
