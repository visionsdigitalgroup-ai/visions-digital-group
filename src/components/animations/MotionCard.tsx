"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionCard({
  children,
  className = "",
}: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
