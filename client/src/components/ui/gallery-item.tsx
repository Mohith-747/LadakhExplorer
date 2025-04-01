import { motion } from "framer-motion";

interface GalleryItemProps {
  image: {
    src: string;
    alt: string;
  };
}

export function GalleryItem({ image }: GalleryItemProps) {
  return (
    <motion.div
      className="gallery-item aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
      whileHover={{ scale: 1.02, opacity: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
