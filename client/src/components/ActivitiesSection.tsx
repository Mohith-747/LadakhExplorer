import { motion } from "framer-motion";
import { activities } from "@/lib/data";
import { ActivityCard } from "@/components/ui/activity-card";

export const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Adventures & Activities
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Discover thrilling experiences and cultural immersions in the
            breathtaking landscapes of Ladakh
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
