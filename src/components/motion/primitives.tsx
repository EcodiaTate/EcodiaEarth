"use client";
import { motion } from "framer-motion";

export const Fade = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.4, delay }}>
    {children}
  </motion.div>
);

export const Rise = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.32, ease: "easeOut", delay }}>
    {children}
  </motion.div>
);

export const Stagger = ({ children, gap = 0.08 }: { children: React.ReactNode; gap?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-10% 0px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
  >
    {children}
  </motion.div>
);

export const Item = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.24 } } }}>
    {children}
  </motion.div>
);
