import About from '@/pages/About';
import Hero from '@/pages/Hero';
import styles from '@/styles/page.module.scss';

const Home = () => {
  return (
    <main className={styles.page}>
      <Hero />
      <About />
    </main>
  );
};

export default Home;
