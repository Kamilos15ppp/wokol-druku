import Hero from '@/components/Hero';
import styles from '@/styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
    </main>
  );
}
