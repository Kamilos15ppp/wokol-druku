'use client';

import { Button, GlowLight, Header } from '@/components';
import content from '@/utils/textContent';
import styles from '@/styles/pages/hero.module.scss';

const { header, seeMoreBtn } = content.hero;

export default function Hero() {
  return (
    <section className={styles.page}>
      <GlowLight />
      <div className={styles.content}>
        <Header text={header} duration={1} fontSize='5.5' />
        <Button text={seeMoreBtn} duration={1} delay={0.5} idToScroll='about' />
      </div>
    </section>
  );
}
