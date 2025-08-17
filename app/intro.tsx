"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IntroProps {
  setShowIntro: (show: boolean) => void;
}
export default function Intro({setShowIntro}: IntroProps) {
  const [showHey, setShowHey] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const heyTimer = setTimeout(() => {
      setShowHey(false); 
    }, 2000); 

    const fadeOutDuration = setTimeout(() => {
      setFadeOut(true);
    }, 4000);
    const fullIntroTimer = setTimeout(() => {
      setShowIntro(false);
    }, 6300);

    return () => {
      clearTimeout(heyTimer);
      clearTimeout(fadeOutDuration);
      clearTimeout(fullIntroTimer);
    };
  }, []);

  return (
    <AnimatePresence>
        {!fadeOut && (
            <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            >
            <AnimatePresence mode="wait">
                {showHey ? (
                <motion.h1
                    key="hey"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-white text-4xl md:text-6xl font-semibold font-[Pacifico]"
                >
                    Hello!
                </motion.h1>
                ) : (
                <motion.h1
                    key="whatsup"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-white text-4xl md:text-6xl font-semibold font-[Pacifico]"
                >
                    Welcome to my website!
                </motion.h1>
                )}
            </AnimatePresence>
            </motion.div>
        )}
    </AnimatePresence>
  );
}
