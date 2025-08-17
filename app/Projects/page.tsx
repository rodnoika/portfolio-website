"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FlashLogo from "../images/flashcards.png";
import { image } from "@heroui/theme";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const education = [
  {
    title: "Flashcard Generator powered by AI",
    image: FlashLogo,
    subtitle: "https://skill-set-ai-hack.vercel.app",
    desc: "The Educational web platform where users input any subject or topic and receive AI-generated dynamic flashcards (powered by Gemini API).Useful for self-study and test preparation across various fields. ",
  },
  {
    title: "Flashcard Generator powered by AI",
    image: FlashLogo,
    subtitle: "https://skill-set-ai-hack.vercel.app",
    desc: "The Educational web platform where users input any subject or topic and receive AI-generated dynamic flashcards (powered by Gemini API).Useful for self-study and test preparation across various fields. ",
  },
  
];
export default function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center gap-6 p-8 md:p-12 rounded-2xl bg-white/90 shadow-xl backdrop-blur-sm border border-gray-200 dark:bg-neutral-900/80 dark:border-neutral-700 dark:text-gray-100 text-gray-900 transition-all duration-500"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-start w-full max-w-6xl"
      >
        <h2 className="text-2xl font-bold mb-4">💻Projects💻</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              {item.image && (
                <div className="mb-4 flex justify-center width-full hover:scale-105 transition-transform">
                  <Image
                    src={item.image}
                    alt={item.title}
                    onClick={() => window.open(item.subtitle, "_blank")}
                    style={{ cursor: "pointer" }}
                    className="rounded-full mb-4 object-cover"
                    width={256}
                    quality={100}
                    height={256}
                  />
                </div>
              )}
              <h3 className="font-semibold text-md text-violet-600 dark:text-violet-400 mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1"><a href={item.subtitle} className="text-blue-500 hover:underline">
                  {item.subtitle}
                  </a>
                </p>
              )}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
