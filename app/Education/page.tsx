"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import nspmLogo from "../images/nspm.jpg";
import jetLogo from "../images/jet.jpg";
import yandexLogo from "../images/yandex.png";
import nuLogo from "../images/nu.png";
import codelogo from "../images/code.png";
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
    title: "Nazarbayev University-Foundation, Astana",
    image: nuLogo,
    subtitle: "2025-current",
    desc: "Currently enrolled in the Foundation program, focusing on advanced mathematics and programming.",
  },
  {
    title: "National School of Physics and Mathematics (NSPM), Astana",
    image: nspmLogo,
    subtitle: "Grades 7–11, 2020–2025, 2 times proud of school",
    desc: "Specialized high school focused on advanced STEM education",
  },
  {
    title: "JetBrains Summer Program – The Algorithm and Code Training School",
    image: jetLogo,
    subtitle: "Summer 2024",
    desc: "Successfully passed the competitive selection and earned a certificate of completion in algorithms and competitive coding.",
  },
  {
    title: "Codeforces & ACMP",
    image: codelogo,
    subtitle: "2020–Present",
    desc: "Regularly solve competitive programming problems to enhance algorithmic thinking and time efficiency.",
  },
  {
    title: "Olympiad Programming Team (NSPM)",
    image: nspmLogo,
    subtitle: "2021–2024",
    desc: "Active team member focused on advanced algorithms and data structures. Also mentored junior participants.",
  },
  {
    title: "Yandex Lyceum – Python for Data Analysis",
    image: yandexLogo,
    subtitle: "2023–2024",
    desc: "Completed coursework in Python programming and data analysis.",
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
        <h2 className="text-2xl font-bold mb-4">Schools and clubs📖</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-16 h-16 mb-4 object-cover"
                  width={256}
                  quality={100}
                  height={256}
                />
              )}
              <h3 className="font-semibold text-md text-violet-600 dark:text-violet-400 mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.subtitle}
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
