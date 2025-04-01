import { motion } from "framer-motion";

interface PlaceProps {
  place: {
    name: string;
    description: string;
    image: string;
    distance: string;
    isMustVisit?: boolean;
  };
}

export function PlaceCard({ place }: PlaceProps) {
  // Fallback image if the original image fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    e.currentTarget.alt = "Ladakh landscape";
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-60 object-cover"
          onError={handleImageError}
        />
        {place.isMustVisit && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            Must Visit
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
          {place.name}
        </h3>
        <p className="text-neutral-dark mb-4">{place.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm text-neutral-dark">{place.distance}</span>
          </div>
          <button className="text-primary hover:text-orange-500 font-semibold transition flex items-center">
            View Details{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
