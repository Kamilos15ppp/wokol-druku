'use client';

import { motion } from 'motion/react';
import { rajdhani } from '@/styles/fonts';
import styles from '@/styles/components/header.module.scss';

interface Props {
  text: string;
  duration: number;
  delay?: number;
  fontSize?: string; //using rem
}

export default function Header({ text, duration, delay, fontSize }: Props) {
  return (
    <motion.div
      className={`${styles.header} ${rajdhani.className}`}
      style={{ fontSize: `${fontSize}rem` }}
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, ease: 'easeOut', delay: delay ?? 0 }}
      viewport={{ once: false }}
    >
      {text}
    </motion.div>
  );
}
