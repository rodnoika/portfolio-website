"use client";
import yerassyl from "../images/yerassyl.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

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

const achievements = [
  {
    title: "2nd place (Silver)",
    desc: "Republican Scientific Projects Competition Daryn 2024–2025 – Presented project 'Cerebro Rhythm' on how music affects concentration and relaxation.",
  },
  {
    title: "2nd place ($400 prize)",
    desc: "Law_Code Hackathon by Terricon Valley – Developed a platform to train police cadets.",
  },
  {
    title: "5th place",
    desc: "International CTF Olympiad Adm CTF – Team-based cyber security competition.",
  },
  {
    title: "3rd place",
    desc: "International Olympiad in Physics and Mathematics StemCo – STEM Olympiad for school students.",
  },
  {
    title: "3rd place",
    desc: "Republican Cryptology Olympiad by Kazakhstan’s NSC – Cryptography competition for gifted students.",
  },
  {
    title: "37th overall / 2nd school team",
    desc: "Open Student Olympiad in Sports Programming, Nazarbayev University.",
  },
  {
    title: "21st of 350 teams",
    desc: "Hack The Code Challenge – Global hackathon by Italian IT company Reply.",
  },
  {
    title: "Finalist",
    desc: "Eurasian Olympiad in Informatics, VKOSHP – International team programming contests.",
  },
  {
    title: "Finalist",
    desc: "20th International Zhautykov Olympiad in Informatics – Prestigious regional Olympiad.",
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
        <h2 className="text-2xl font-bold mb-4">Achievements🏆</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-md text-violet-600 dark:text-violet-400 mb-2">{ach.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{ach.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
