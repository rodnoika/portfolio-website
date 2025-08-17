"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Intro from "./intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      router.push("/about");
    }, 6300);

    return () => clearTimeout(timer);
  }, [router]);

  return showIntro ? <Intro setShowIntro={() => {}} /> : null;
}