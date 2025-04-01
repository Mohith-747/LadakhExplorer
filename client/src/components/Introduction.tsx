import { motion } from "framer-motion";

export const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight"
            >
              Welcome to the Land of High Passes
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-dark mb-6"
            >
              Nestled in the northernmost region of India, Ladakh is a
              mesmerizing destination where dramatic landscapes, vibrant Buddhist
              culture, and warm hospitality create an unforgettable travel
              experience.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-dark mb-6"
            >
              From the pristine blue waters of Pangong Lake to the ancient
              monasteries perched on rocky outcrops, Ladakh offers a unique
              blend of natural beauty and spiritual tranquility.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <div className="bg-neutral-lightest p-4 rounded-lg shadow-sm flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-primary">
                    Majestic Mountains
                  </h4>
                  <p className="text-sm text-neutral-dark">
                    Home to the mighty Himalayas
                  </p>
                </div>
              </div>
              <div className="bg-neutral-lightest p-4 rounded-lg shadow-sm flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-primary">
                    Ancient Monasteries
                  </h4>
                  <p className="text-sm text-neutral-dark">
                    Buddhist heritage sites
                  </p>
                </div>
              </div>
              <div className="bg-neutral-lightest p-4 rounded-lg shadow-sm flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold text-primary">Stunning Lakes</h4>
                  <p className="text-sm text-neutral-dark">
                    Crystal clear alpine waters
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1598026595474-0ff411907904?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Ladakh monastery"
                className="rounded-lg shadow-md h-48 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1625211118243-35e5ad668c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Pangong Lake"
                className="rounded-lg shadow-md h-48 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1623776025328-27171f168c47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Ladakh mountains"
                className="rounded-lg shadow-md h-48 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Local culture"
                className="rounded-lg shadow-md h-48 object-cover w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
