import localFont from 'next/font/local';

const bebasNeue = localFont({
  src: [
    {
      path: '../../public/fonts/bebas-neue/BebasNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

const exo = localFont({
  src: [
    {
      path: '../../public/fonts/exo2/Exo2.0-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/exo2/Exo2.0-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/exo2/Exo2.0-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/exo2/Exo2.0-Bold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
});

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter/Inter Desktop/Inter-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/Inter Desktop/Inter-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/Inter Desktop/Inter-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter/Inter Desktop/Inter-Bold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
});

const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/montserrat/Montserrat-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});

const orbitron = localFont({
  src: [
    {
      path: '../../public/fonts/orbitron/Orbitron Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/orbitron/Orbitron Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/orbitron/Orbitron Bold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/poppins/Poppins-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/poppins/Poppins-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

const rajdhani = localFont({
  src: [
    {
      path: '../../public/fonts/rajdhani/Rajdhani-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rajdhani/Rajdhani-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rajdhani/Rajdhani-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rajdhani/Rajdhani-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

export { bebasNeue, exo, inter, montserrat, orbitron, poppins, rajdhani };
