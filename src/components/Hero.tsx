'use client';

import { motion } from 'motion/react';
import styles from '@/styles/components/hero.module.scss';

const header = 'Druk 3D na najwyższym poziomie';
const paragraph = 'Figurki, akcesoria, gadżety, samochody RC i wiele więcej...';

export default function Hero() {
  return (
    <section className={styles.page}>
      <div className={styles.glow_light_container}>
        <motion.div
          initial={{ opacity: 0, y: -140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'anticipate', delay: 0.5 }}
          className={styles.glow_light}
        ></motion.div>
      </div>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {header}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        >
          {paragraph}
        </motion.p>
      </div>
    </section>
  );
}
