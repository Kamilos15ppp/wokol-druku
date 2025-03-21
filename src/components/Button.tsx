'use client';

import { motion } from 'motion/react';
import { scrollTo } from '@/utils/hooks';
import { rajdhani } from '@/styles/fonts';
import styles from '@/styles/components/button.module.scss';

interface Props {
  text: string;
  duration: number;
  delay?: number;
  idToScroll: string;
}

export default function Button({ text, duration, delay, idToScroll }: Props) {
  return (
    <motion.button
      className={`${styles.button} ${rajdhani.className}`}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, ease: 'easeOut', delay: delay ?? 0 }}
      onClick={() => scrollTo(idToScroll)}
    >
      {text}
    </motion.button>
  );
}
