'use client';

import { Header, TextContent } from '@/components';
import content from '@/utils/textContent';
import styles from '@/styles/pages/about.module.scss';

const { header, text } = content.about;

const About = () => {
  return (
    <section id='about' className={styles.page}>
      <Header text={header} duration={0.8} delay={0.2} />
      <TextContent text={text} />
    </section>
  );
};

export default About;
