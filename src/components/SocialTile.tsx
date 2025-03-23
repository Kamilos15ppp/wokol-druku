'use client';

import styles from '@/styles/components/socialTile.module.scss';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  text: string;
  link: string;
}

const SocialTile = ({ icon, text, link }: Props) => {
  return (
    <li className={styles.tile}>
      <a className={styles.link} href={link} target='blank'>
        <p className={styles.icon}>{icon}</p>
        <p className={styles.text}>{text}</p>
      </a>
    </li>
  );
};

export default SocialTile;
