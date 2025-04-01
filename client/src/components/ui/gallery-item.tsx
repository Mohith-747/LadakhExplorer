import { motion } from "framer-motion";

interface GalleryItemProps {
  image: {
    src: string;
    alt: string;
  };
}

export function GalleryItem({ image }: GalleryItemProps) {
  // Fallback image if the original image fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
    e.currentTarget.alt = "Ladakh landscape fallback";
  };

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
        onError={handleImageError}
      />
    </motion.div>
  );
}
