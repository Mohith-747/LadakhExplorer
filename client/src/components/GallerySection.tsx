import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/data";
import { GalleryItem } from "@/components/ui/gallery-item";

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Ladakh Gallery
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Explore the stunning beauty of Ladakh through our photo collection
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 text-center"
        >
          <Button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            size="lg"
          >
            View Full Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
