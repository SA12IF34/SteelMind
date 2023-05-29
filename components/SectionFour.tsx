import React from 'react';
import styles from '@/styles/Home.module.css';

function SectionFour() {
  return (
    <section className={`${styles.section} ${styles.sectionFour}`}>
        <div className={styles.nop}>
            <h1 >
                Not Only People
            </h1>
        </div>
        <br />
        <br />
        <h1>
                We are also trusted by 
            </h1>
        <div className={styles.companies}>
            
            <br />
            <div className={styles.cOne}>
                <h2>Big Company 1</h2>
            </div>
            <div className={styles.cTwo}>
                <h2>Big Company 2</h2>
            </div>
            <div className={styles.cThree}>
                <h2>Big Company 3</h2>
            </div>
        </div>
    </section>
  )
}

export default SectionFour;