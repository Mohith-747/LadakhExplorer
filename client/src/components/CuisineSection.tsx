import { motion } from "framer-motion";
import { cuisines, restaurants } from "@/lib/data";
import { CuisineCard } from "@/components/ui/cuisine-card";
import { RestaurantCard } from "@/components/ui/restaurant-card";

export const CuisineSection = () => {
  return (
    <section id="cuisine" className="py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Ladakhi Cuisine
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Experience the unique flavors of Ladakhi cuisine, influenced by
            Tibetan and Central Asian culinary traditions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cuisines.map((cuisine, index) => (
            <CuisineCard key={index} cuisine={cuisine} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">
            Where to Eat in Ladakh
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
