import { motion } from "framer-motion";

export const MapSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Explore Ladakh
            </h2>
            <p className="text-lg text-neutral-dark mb-6">
              Navigate through the key attractions of Ladakh with our interactive
              map. Discover monasteries, lakes, mountain passes, and cultural
              sites across this breathtaking region.
            </p>

            <div className="space-y-4 mt-8">
              <div className="bg-neutral-lightest p-4 rounded-lg hover:bg-neutral-light transition cursor-pointer">
                <h4 className="font-semibold text-primary flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>{" "}
                  Mountain Passes
                </h4>
                <p className="text-sm text-neutral-dark mt-1">
                  Khardung La, Chang La, Zoji La and more
                </p>
              </div>

              <div className="bg-neutral-lightest p-4 rounded-lg hover:bg-neutral-light transition cursor-pointer">
                <h4 className="font-semibold text-primary flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>{" "}
                  Lakes
                </h4>
                <p className="text-sm text-neutral-dark mt-1">
                  Pangong Tso, Tso Moriri, Tso Kar and more
                </p>
              </div>

              <div className="bg-neutral-lightest p-4 rounded-lg hover:bg-neutral-light transition cursor-pointer">
                <h4 className="font-semibold text-primary flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>{" "}
                  Monasteries
                </h4>
                <p className="text-sm text-neutral-dark mt-1">
                  Thiksey, Hemis, Diskit, Alchi and more
                </p>
              </div>

              <div className="bg-neutral-lightest p-4 rounded-lg hover:bg-neutral-light transition cursor-pointer">
                <h4 className="font-semibold text-primary flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>{" "}
                  Culinary Hotspots
                </h4>
                <p className="text-sm text-neutral-dark mt-1">
                  Traditional eateries and local restaurants
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border-4 border-neutral-light rounded-xl overflow-hidden shadow-lg">
              {/* Interactive Map Placeholder */}
              <div className="bg-neutral-light h-96 relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526142741775-85a0fca0c2a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Map of Ladakh"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-primary mb-4 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <h4 className="font-heading font-bold text-xl">
                      Interactive Map
                    </h4>
                    <p className="text-sm text-neutral-dark mt-2">
                      Click to explore destinations
                    </p>
                  </div>
                </div>

                {/* Map Markers (Simplified representation) */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-bold bg-white px-2 py-1 rounded shadow-sm">
                    Leh
                  </span>
                </div>

                <div className="absolute top-1/3 right-1/4 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-bold bg-white px-2 py-1 rounded shadow-sm">
                    Pangong
                  </span>
                </div>

                <div className="absolute bottom-1/3 left-1/3 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-bold bg-white px-2 py-1 rounded shadow-sm">
                    Nubra
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-neutral-dark">
              <p>
                Tap on markers to discover more information about each location
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
