"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const cuisines = [
  "Traditional Telugu Andhra Banquet",
  "Royal Nizam & Awadhi Biryani",
  "Live Tandoor & Barbeque",
  "Coastal Seafood & Prawn Specialties",
  "Pure Vegetarian Satvik Feast",
  "Live Street Chaat & Pani Puri",
  "Artisan Desserts & Kulfi Bar",
  "South Indian Tiffin Counter",
  "Continental & Pasta Live Station",
  "Pan-Asian & Dim Sum Wok",
  "Mocktail & Fruit Punch Bar",
  "Traditional Sweet & Mithai Stalls",
];

export default function CuisineSelector() {
  const [selected, setSelected] = useState<string[]>(["Traditional Telugu Andhra Banquet"]);

  const toggleCuisine = (cuisine: string) => {
    setSelected((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    );
  };

  return (
    <div className="w-full bg-[#FCF9F5] p-6 rounded-3xl border border-[#E8DDCD]">
      <h3 className="text-[#34281F] text-2xl font-serif-editorial font-semibold mb-6 text-center">
        Select Your Banquet Cuisines & Live Counters
      </h3>
      <div className="max-w-[720px] mx-auto">
        <motion.div
          className="flex flex-wrap gap-2.5 justify-center"
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.5,
          }}
        >
          {cuisines.map((cuisine) => {
            const isSelected = selected.includes(cuisine);
            return (
              <motion.button
                key={cuisine}
                onClick={() => toggleCuisine(cuisine)}
                layout
                initial={false}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5,
                }}
                className={`
                  inline-flex items-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium
                  whitespace-nowrap overflow-hidden transition-all duration-200 cursor-pointer border
                  ${isSelected
                    ? "bg-gradient-to-r from-[#FFF8EE] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/50 shadow-xs font-semibold"
                    : "bg-[#F5ECDD]/50 text-[#6E5D4F] border-[#E8DDCD] hover:bg-[#F5ECDD]"}
                `}
              >
                <motion.div
                  className="relative flex items-center"
                  animate={{
                    width: isSelected ? "auto" : "100%",
                    paddingRight: isSelected ? "1.5rem" : "0",
                  }}
                  transition={{
                    ease: [0.175, 0.885, 0.32, 1.275],
                    duration: 0.3,
                  }}
                >
                  <span>{cuisine}</span>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          mass: 0.5,
                        }}
                        className="absolute right-0"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#B88A44] flex items-center justify-center shadow-2xs">
                          <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                        </div>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
