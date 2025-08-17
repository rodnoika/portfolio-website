"use client";
import yerassyl from "../images/yerassyl.jpeg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {

  return (
    <>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center justify-center gap-6 p-8 md:p-12 rounded-2xl bg-white/90 shadow-xl backdrop-blur-sm border border-gray-200 dark:bg-neutral-900/80 dark:border-neutral-700 dark:text-gray-100 text-gray-900 transition-all duration-500"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-start justify-between text-center md:text-left gap-8"
          >
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-extrabold text-violet-600 dark:text-violet-400">
                My name is Yerassyl Satymbekov
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                I’m a Full Stack Developer passionate about building robust, elegant, and scalable applications. Currently seeking internship or job opportunities.
              </p>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Tech Stack</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Python, FastAPI, C++, JS, TS, React, Next.js, Node.js, MongoDB, PostgreSQL
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Technical Skills</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong knowledge of algorithms and data structures.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">General Skills</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fast learner, team player, strong communication and problem-solving skills.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Languages</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  English (B2), Russian (C2), Kazakh (C2)
                </p>
              </div>

              <hr className="border-t border-gray-300 dark:border-gray-700 my-4" />

              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                Hobbies: video games, movies, table tennis
              </p>
            </div>


            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-[256px] lg:w-[320px] ml-auto self-start mt-0"
            >
              <Image
                src={yerassyl}
                alt="Yerassyl Satymbekov"
                width={512}
                height={512}
                className="rounded-full w-full h-auto object-cover shadow-lg"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.section>
    </>
  );
}
