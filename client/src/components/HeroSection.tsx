import { motion } from "framer-motion";
import { Link } from "wouter";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-40 w-full h-full absolute"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Discover the Magical Land of{" "}
          <span className="text-orange-500">Ladakh</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-accent italic text-white mb-8 max-w-3xl mx-auto"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Where mountains meet the sky and ancient traditions come alive
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#places"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            Explore Ladakh
          </a>
        </motion.div>
      </div>
    </section>
  );
};
