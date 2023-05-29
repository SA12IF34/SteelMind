import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import img from "@/public/img.png";

function SectionOne() {
  return (
    <section className={`${styles.section} ${styles.sectionOne}`}>
      <div className={styles.foundation}>
        <div>
          <h1 className={styles.headLine}>
          Let us help you strengthen your mind and the minds of the people you love.
          </h1>
          <p className={styles.description}>
            We are a Mental health support organiation founded to help people
            and create better world.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={img} alt="main image" width={300}></Image>
          <span>
            Image by <a href="https://www.freepik.com/free-vector/mental-health-awareness-concept_7851315.htm#query=mental%20health&position=7&from_view=keyword&track=ais">Freepik</a>
          </span>
        </div>
      </div>
      <div className={styles.emotional}>
        <div>
          <h3>remember, the hope is alway there .</h3>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
