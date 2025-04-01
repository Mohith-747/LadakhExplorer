import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for travel tips, seasonal offers, and the
            latest updates about Ladakh
          </p>

          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
              size="lg"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
