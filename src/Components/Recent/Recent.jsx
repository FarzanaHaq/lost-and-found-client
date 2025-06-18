import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Recent = () => {
  const tips = [
    {
      title: "Found a Wallet Near the Library",
      description: "Brown leather wallet with some IDs and cards.",
    },
    {
      title: "Lost Headphones in Bus",
      description: "Black Sony over-ear headphones lost on Route 27.",
    },
    {
      title: "Found a Cute Puppy",
      description: "Golden retriever puppy found near the park entrance.",
    },
  ];

  return (
    <section className="relative  py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-sky-800 flex items-center justify-center gap-2">
          Featured Posts
        </h2>
        <motion.div
          className="absolute top-5 right-5 text-sky-500"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Sparkles size={40} />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-sky-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
