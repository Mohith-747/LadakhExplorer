import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Define the endpoint route interfaces
interface PlaceInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  distance: string;
  highlights: string[];
  isFeatured: boolean;
}

interface ActivityInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  category: string;
  season: string;
}

interface TravelTip {
  id: string;
  title: string;
  category: string;
  content: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for Ladakh tourism website
  app.get("/api/places", (req, res) => {
    res.json({
      status: "success",
      message: "Successfully retrieved places",
      data: [
        {
          id: "pangong-lake",
          name: "Pangong Lake",
          description: "An enchanting high-altitude lake known for its ever-changing blue hues and stunning mountain backdrop.",
          image: "https://images.unsplash.com/photo-1598089842345-111fd96de59e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          location: "Eastern Ladakh",
          distance: "140 km from Leh",
          highlights: ["Stunning blue waters", "Changing colors throughout the day", "Featured in Bollywood movies"],
          isFeatured: true
        },
        {
          id: "leh-palace",
          name: "Leh Palace",
          description: "A historic royal palace and museum offering panoramic views of Leh town and surrounding mountains.",
          image: "https://images.unsplash.com/photo-1559385027-8cdba29f2784?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          location: "Leh City Center",
          distance: "In the heart of Leh",
          highlights: ["Panoramic views", "Historic architecture", "Royal heritage", "Museum artifacts"],
          isFeatured: true
        },
        {
          id: "thiksey-monastery",
          name: "Thiksey Monastery",
          description: "A magnificent 12-story monastery complex resembling the Potala Palace in Lhasa, with stunning Buddha statues and ancient artifacts.",
          image: "https://images.unsplash.com/photo-1582650692468-cde5a59394c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          location: "Thiksey Village",
          distance: "19 km from Leh",
          highlights: ["Giant Buddha statue", "Morning prayers", "Tibetan architecture", "Religious artifacts"],
          isFeatured: true
        },
        {
          id: "nubra-valley",
          name: "Nubra Valley",
          description: "A verdant valley with unique sand dunes, double-humped Bactrian camels, and charming villages set against towering mountains.",
          image: "https://images.unsplash.com/photo-1614607206234-f7446488c310?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          location: "North of Leh",
          distance: "150 km from Leh",
          highlights: ["Diskit Monastery", "Hunder Sand Dunes", "Bactrian camels", "Siachen River"],
          isFeatured: true
        },
        {
          id: "magnetic-hill",
          name: "Magnetic Hill",
          description: "A gravity-defying phenomenon where vehicles appear to roll uphill when placed in neutral, creating an optical illusion.",
          image: "https://images.unsplash.com/photo-1614607242094-765d181a4d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          location: "Leh-Kargil Highway",
          distance: "30 km from Leh",
          highlights: ["Gravity defying illusion", "Scenic landscapes", "Natural phenomenon", "Photography spot"],
          isFeatured: false
        },
        {
          id: "khardung-la",
          name: "Khardung La Pass",
          description: "One of the world's highest motorable passes at 17,982 feet, offering breathtaking views and a gateway to Nubra Valley.",
          image: "https://images.unsplash.com/photo-1516326659508-7bcd797448bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          location: "North of Leh",
          distance: "40 km from Leh",
          highlights: ["World's highest motorable road", "Snow-capped mountains", "Adventure route", "Gateway to Nubra"],
          isFeatured: true
        }
      ]
    });
  });

  app.get("/api/activities", (req, res) => {
    res.json({
      status: "success",
      message: "Successfully retrieved activities",
      data: [
        {
          id: "trekking",
          name: "Trekking Expeditions",
          description: "Explore stunning mountain trails from easy day hikes to challenging multi-day treks through remote valleys and high passes.",
          image: "https://images.unsplash.com/photo-1594791397698-636155a91518?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          duration: "1-14 days",
          price: "₹2,000 - ₹25,000",
          category: "Adventure",
          season: "Jun-Sep"
        },
        {
          id: "mountain-biking",
          name: "Mountain Biking",
          description: "Experience the thrill of cycling through high-altitude passes and picturesque valleys on well-maintained mountain bikes.",
          image: "https://images.unsplash.com/photo-1563016115-85ef00d7c050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          duration: "1-7 days",
          price: "₹3,500 - ₹20,000",
          category: "Adventure",
          season: "May-Oct"
        },
        {
          id: "monastery-tours",
          name: "Monastery Tours",
          description: "Visit ancient Buddhist monasteries to witness meditation sessions, religious ceremonies, and marvel at centuries-old art and architecture.",
          image: "https://images.unsplash.com/photo-1533625257312-05a66b6292cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          duration: "1-3 days",
          price: "₹1,500 - ₹8,000",
          category: "Cultural",
          season: "Year-round"
        },
        {
          id: "river-rafting",
          name: "River Rafting",
          description: "Navigate the thrilling rapids of the Zanskar and Indus rivers with experienced guides for an adrenaline-pumping adventure.",
          image: "https://images.unsplash.com/photo-1570817218203-737bbb553f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          duration: "Half day - 2 days",
          price: "₹1,800 - ₹12,000",
          category: "Adventure",
          season: "Jun-Aug"
        },
        {
          id: "camel-safari",
          name: "Bactrian Camel Safari",
          description: "Ride double-humped Bactrian camels across the sand dunes of Nubra Valley for a unique desert experience in the Himalayas.",
          image: "https://images.unsplash.com/photo-1452858421857-d2adecf0cbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          duration: "1-3 hours",
          price: "₹500 - ₹2,000",
          category: "Cultural",
          season: "May-Sep"
        },
        {
          id: "photography-tours",
          name: "Photography Tours",
          description: "Capture the stunning landscapes, vibrant festivals, and unique culture of Ladakh with guided photography expeditions.",
          image: "https://images.unsplash.com/photo-1625295225391-33a67a1be499?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          duration: "1-10 days",
          price: "₹3,000 - ₹30,000",
          category: "Cultural",
          season: "Year-round"
        }
      ]
    });
  });

  app.get("/api/cuisines", (req, res) => {
    res.json({
      status: "success",
      message: "Successfully retrieved cuisines",
      data: [
        {
          id: "thukpa",
          name: "Thukpa",
          description: "A hearty noodle soup with vegetables and meat, perfect for cold Ladakhi evenings.",
          image: "https://images.unsplash.com/photo-1603064434628-8c303aa63f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: ["Wheat noodles", "Vegetables", "Meat (optional)", "Spices", "Broth"],
          where_to_try: ["Tibetan Kitchen", "Gesmo Restaurant", "Local homestays"]
        },
        {
          id: "momos",
          name: "Momos",
          description: "Steamed dumplings filled with vegetables or meat, served with spicy chutney.",
          image: "https://images.unsplash.com/photo-1626921706635-95eb66c89a07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: ["Flour", "Vegetables", "Meat (optional)", "Spices", "Chili sauce"],
          where_to_try: ["Leh Market food stalls", "Tibetan Kitchen", "Lamayuru Restaurant"]
        },
        {
          id: "butter-tea",
          name: "Butter Tea (Po Cha)",
          description: "A traditional Ladakhi tea made with yak butter, salt, and tea leaves – a true local experience.",
          image: "https://images.unsplash.com/photo-1582360663422-a007635feffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          ingredients: ["Tea leaves", "Yak butter", "Salt", "Water"],
          where_to_try: ["Local homestays", "Monastery visits", "Traditional Ladakhi houses"]
        }
      ]
    });
  });

  app.get("/api/travel-tips", (req, res) => {
    res.json({
      status: "success",
      message: "Successfully retrieved travel tips",
      data: [
        {
          id: "altitude",
          title: "Altitude Acclimatization",
          category: "health",
          content: "Ladakh is situated at high altitudes (9,800 to 17,500 feet), which can cause altitude sickness. Plan for 2-3 days of acclimatization in Leh before venturing to higher areas. Drink plenty of water, avoid alcohol and heavy meals initially, and consider consulting your doctor about altitude medication before your trip."
        },
        {
          id: "permits",
          title: "Required Permits",
          category: "documentation",
          content: "Inner Line Permits (ILP) are required for visiting protected areas like Pangong Lake, Nubra Valley, and Tso Moriri. Foreign nationals need Protected Area Permits (PAP) for restricted areas. Always carry multiple photocopies of your ID/passport as permits are checked at various checkpoints."
        },
        {
          id: "best-time",
          title: "Best Time to Visit",
          category: "planning",
          content: "The best time to visit Ladakh is from June to September when all roads and passes are open. Summer (Jun-Aug) offers pleasant weather (10-25°C) but comes with more tourists. Autumn (Sep-Oct) has fewer crowds and clear skies. Winter (Nov-Mar) is extremely cold with limited accessibility but offers unique snow landscapes."
        },
        {
          id: "packing",
          title: "Packing Essentials",
          category: "preparation",
          content: "Ladakh has significant temperature variations between day and night. Pack layered clothing, warm jacket, UV protection (sunglasses, high SPF sunscreen, hat), comfortable hiking boots, reusable water bottle, power bank (electricity can be unreliable), and basic medications including altitude sickness pills."
        }
      ]
    });
  });

  app.get("/api/accommodations", (req, res) => {
    res.json({
      status: "success",
      message: "Successfully retrieved accommodations",
      data: [
        {
          id: "luxury",
          category: "Luxury Hotels & Resorts",
          description: "Experience Ladakh in style with premium accommodations offering panoramic mountain views, spa services, and authentic Ladakhi cuisine.",
          amenities: ["High-Speed WiFi", "Gourmet Dining", "Spa Services", "Mountain Views", "Heating systems"],
          price_range: "₹10,000 - ₹30,000 per night",
          options: [
            {
              name: "The Grand Dragon",
              location: "Old Road, Leh",
              rating: 4.7
            },
            {
              name: "Ladakh Sarai Resort",
              location: "Saboo, Leh",
              rating: 4.8
            },
            {
              name: "The Zen Ladakh",
              location: "Sheynam, Leh",
              rating: 4.6
            }
          ]
        },
        {
          id: "mid-range",
          category: "Boutique Guesthouses",
          description: "Charming guesthouses offering comfortable accommodations with local character and personalized service.",
          amenities: ["Homemade Breakfast", "WiFi Available", "Central Location", "Local Host", "Garden seating"],
          price_range: "₹3,000 - ₹8,000 per night",
          options: [
            {
              name: "Hotel Ladakh Palace",
              location: "Fort Road, Leh",
              rating: 4.3
            },
            {
              name: "Mogol Hotel",
              location: "Main Market, Leh",
              rating: 4.2
            },
            {
              name: "Shaolin Ladakh",
              location: "Changspa Road, Leh",
              rating: 4.4
            }
          ]
        },
        {
          id: "budget",
          category: "Authentic Homestays",
          description: "Experience genuine Ladakhi hospitality by staying with local families with simple accommodations and traditional cuisine.",
          amenities: ["Local Family Hosts", "Home-Cooked Meals", "Cultural Exchange", "Traditional Houses"],
          price_range: "₹800 - ₹2,500 per night",
          options: [
            {
              name: "Nubra Valley Homestays",
              location: "Nubra Valley",
              rating: 4.5
            },
            {
              name: "Pangong Lake Homestays",
              location: "Spangmik, Pangong Lake",
              rating: 4.3
            },
            {
              name: "Leh Town Homestays",
              location: "Various locations in Leh",
              rating: 4.4
            }
          ]
        }
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
