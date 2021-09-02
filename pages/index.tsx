import About from '@components/about';
import Hero from '@components/hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Oare | Music Composer and Arranger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
    </>
  );
}
