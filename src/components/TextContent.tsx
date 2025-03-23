'use client';

import { motion } from 'motion/react';
import styles from '@/styles/components/textContent.module.scss';

interface Props {
  text: string;
}

const TextContent = ({ text }: Props) => {
  return (
    <motion.p
      className={styles.text}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    >
      {text}
    </motion.p>
  );
};

export default TextContent;
