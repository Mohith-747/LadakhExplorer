import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlaceCard } from "@/components/ui/place-card";
import { placesToVisit } from "@/lib/data";

export const PlacesToVisit = () => {
  return (
    <section id="places" className="py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Places to Visit
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Explore the most breathtaking destinations Ladakh has to offer, from
            serene lakes to ancient monasteries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {placesToVisit.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 text-center"
        >
          <Button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            size="lg"
          >
            View All Destinations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
