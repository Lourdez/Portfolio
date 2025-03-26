"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profile from "../components/assets/profile.jpg";

const typingTexts = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "database Administrator",
  "cloud Engineer",
  "DevOps Engineer",
  "Software Engineer",
  "freeLancer",
];

const HeroSection = () => {
  const [typingText, setTypingText] = useState(typingTexts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // cycle through the texts
      const nextIndex = (currentIndex + 1) % typingTexts.length;
      setCurrentIndex(nextIndex);
      setTypingText(typingTexts[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="home-section"
      className="h-screen min-h-[700px] flex flex-col md:flex-row relative pt-16"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-light-blue flex flex-col justify-center items-center relative z-10">
        <div className="container-custom mx-auto px-8 md:px-16 py-12 text-center md:text-left">
          <div className="mb-4 text-bright-blue uppercase tracking-wider font-medium">
            Hey! I am
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-navy-blue">
            Lourdez Parker
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 h-10">
            I&apos;m a{" "}
            <span className="text-bright-blue relative">
              {typingText}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-bright-blue"></span>
            </span>
          </div>

          <div className="absolute bottom-20 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 md:right-16 animate-bounce">
            <a href="#about-section" aria-label="Scroll down">
              <ChevronDown
                className="text-navy-blue opacity-70"
                size={36}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="w-full md:w-1/2 bg-white">
        <div
          className="h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/profile.png')",
          }}
        >
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// backgroundImage: "url('https://ext.same-assets.com/2568284105/3931261241.jpeg')",