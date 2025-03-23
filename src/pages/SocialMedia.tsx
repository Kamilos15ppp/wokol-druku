'use client';

import { Header, TextContent, SocialTiles } from '@/components';
import content from '@/utils/textContent';
import styles from '@/styles/pages/socialMedia.module.scss';

const { header, text } = content.social;

const SocialMedia = () => {
  return (
    <section className={styles.page}>
      <Header text={header} duration={0.8} delay={0.2} />
      <TextContent text={text} />
      <SocialTiles />
    </section>
  );
};

export default SocialMedia;
