import About from '@/pages/About';
import Hero from '@/pages/Hero';
import SocialMedia from '@/pages/SocialMedia';
import styles from '@/styles/page.module.scss';

const Home = () => {
  return (
    <main className={styles.page}>
      <Hero />
      <About />
      <SocialMedia />
    </main>
  );
};

export default Home;
