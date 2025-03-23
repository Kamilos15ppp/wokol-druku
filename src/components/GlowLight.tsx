'use client';

import { motion } from 'motion/react';
import styles from '@/styles/components/glowLight.module.scss';

const GlowLight = () => {
  return (
    <motion.div
      className={styles.glowLight}
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'anticipate', delay: 1.5 }}
    />
  );
};

export default GlowLight;
