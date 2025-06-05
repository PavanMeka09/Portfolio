import { LuSun, LuMoon } from 'react-icons/lu';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const ThemeSwitcher = (props) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === null) {
      localStorage.setItem("isDark", systemPrefersDark);
      return systemPrefersDark;
    }
    return savedTheme === "true";
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (localStorage.getItem("isDark") === null) {
        localStorage.setItem("isDark", e.matches);
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    isDark
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
    isAnimating
      ? document.querySelector("body").classList.add("overflow-hidden")
      : document.querySelector("body").classList.remove("overflow-hidden");

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isDark, isAnimating]);

  const toggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      localStorage.setItem("isDark", !isDark);
      setIsDark((prev) => !prev);
    }, 300);
  };

  const renderIcon = () => {
    const Icon = isDark ? LuSun : LuMoon;
    return (
      <button onClick={toggle}>
        <Icon size={40} className={ props.className + " text-zinc-800 dark:text-zinc-100 active:translate-y-1 transition-[transform]"} />
      </button>
    );
  };

  return (
    <div className="flex items-center justify-center">
      {renderIcon()}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ scale: 0}}
            animate={{ scale: 1, opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: .3}}
            className= "h-[300rem] w-[300rem] bg-[#18181b] dark:bg-zinc-100 rounded-full absolute mix-blend-difference"
            onAnimationComplete={() => setIsAnimating(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
