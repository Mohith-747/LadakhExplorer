import { motion } from "framer-motion";
import { accommodations } from "@/lib/data";

export const AccommodationSection = () => {
  return (
    <section id="stay" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Where to Stay
          </h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            From luxury hotels to authentic homestays, find the perfect
            accommodation for your Ladakh adventure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-8"
        >
          {accommodations.map((accommodation, index) => (
            <div
              key={index}
              className="bg-neutral-lightest rounded-xl shadow-md overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src={accommodation.image}
                    alt={accommodation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-heading font-bold text-primary-dark">
                      {accommodation.title}
                    </h3>
                    <span
                      className={`${accommodation.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {accommodation.badge}
                    </span>
                  </div>
                  <p className="text-neutral-dark my-4">
                    {accommodation.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {accommodation.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-orange-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={amenity.icon}
                          />
                        </svg>
                        <span className="text-sm">{amenity.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <span className="font-bold text-primary-dark">
                      {accommodation.optionsTitle}:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {accommodation.options.map((option, i) => (
                        <span
                          key={i}
                          className="bg-white px-3 py-1 rounded-full text-sm shadow-sm"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
