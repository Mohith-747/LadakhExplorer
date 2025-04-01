import { motion } from "framer-motion";

interface ActivityProps {
  activity: {
    name: string;
    description: string;
    image: string;
    season: string;
    category: "Adventure" | "Cultural";
  };
}

export function ActivityCard({ activity }: ActivityProps) {
  // Fallback image if the original image fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    e.currentTarget.alt = "Ladakh activity";
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-60 object-cover"
          onError={handleImageError}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute bottom-4 left-4">
          <span
            className={`${
              activity.category === "Adventure"
                ? "bg-orange-500"
                : "bg-secondary"
            } text-white text-xs font-bold px-3 py-1 rounded-full`}
          >
            {activity.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
          {activity.name}
        </h3>
        <p className="text-neutral-dark mb-4">{activity.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline text-orange-500 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>{" "}
            {activity.season}
          </span>
          <button className="text-primary hover:text-orange-500 font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}
