import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "../../../src/index.css";

const Recent = () => {
  const tips = [
    {
      title: "Found a Wallet Near the Library",
      description:
        "Brown leather wallet with some IDs and cards has been found.",
    },
    {
      title: "Lost Headphones in Bus",
      description: "Black Sony over-ear headphones lost on Route 27.",
    },
    {
      title: "Found a Cute Puppy",
      description: "Golden retriever puppy found near the park entrance.",
    },
    {
      title: "Lost Smartphone at Cafe",
      description:
        "Blue Samsung Galaxy S21 left on a table at Central Perk Cafe.",
    },
    {
      title: "Found Set of Car Keys",
      description:
        "Silver keychain with three keys and a small red flashlight.",
    },
    {
      title: "Lost Backpack in Train Station",
      description:
        "Black Adidas backpack with notebooks and a water bottle inside.",
    },
  ];

  return (
    <section className="relative pb-5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#292A35]  flex items-center justify-center gap-2 sora-font">
          Featured Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-lg p-6 hover:bg-[#F0F5F3] "
            >
              <h3 className="text-xl font-semibold text-[#292A35]  mb-2">
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
