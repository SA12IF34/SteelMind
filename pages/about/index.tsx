import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/About.module.css';
import Header from '@/components/Header';
import img from '@/public/about.jpg';

function About() {
  return (
    <>
    <Head>
        <title>SteelMind | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={styles.root}>
    <Header />
    <main className={styles.main}>
        <div className={styles.one}>
            <h1>
            Hello and welcome to SteelMind!
            </h1>
            <br />
            <br />
            <p>
            We are a mental health support organization. Our brand name doesn't mean the rigidity or inflexibility, But our brand name means resilience, strength, and durability.
            </p>
            <br />
            <p>
            Our work is to solve relationships problems (serious ones), stress and tension, disquiet, depression, and sorrow problems.
            </p>
            <br />
            <p>
            take a look at <span style={{textDecoration:'underline'}}>our services</span> or if you want <span style={{textDecoration:'underline'}}>here is some reviews about us</span>, feel free to do what you want ;).
            </p>
        </div>
        <br />
        <br />
        <div className={styles.two}>
            <Image src={img} alt='about image' priority  />
            <br />
            <br />
            <p className={styles.special}>please share this to help people strengthen their minds and make them steely.</p>
        </div>
        
    </main>
    </div>
    </>
  )
}

export default About;