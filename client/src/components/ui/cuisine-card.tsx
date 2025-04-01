import { motion } from "framer-motion";

interface CuisineProps {
  cuisine: {
    name: string;
    description: string;
    image: string;
    tags: string[];
  };
}

export function CuisineCard({ cuisine }: CuisineProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={cuisine.image}
        alt={cuisine.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
          {cuisine.name}
        </h3>
        <p className="text-neutral-dark mb-4">{cuisine.description}</p>
        <div className="flex items-center text-sm text-neutral-dark">
          {cuisine.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-neutral-light px-2 py-1 rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
