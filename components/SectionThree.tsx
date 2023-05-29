import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

function SectionThree() {
  return (
    <section className={`${styles.section} ${styles.sectionThree}`}>
      <h1>What people say about us</h1>
      <div className={styles.reviews}>
        <div className={styles.first}>
          <div className={styles.imgContainer}>
            <Image
              src={"/guy1.jpg"}
              alt={"seelmind review 1"}
              fill={true}
              priority
            />
          </div>
          <p>
            I was feeling lost and alone, struggling with anxiety and
            depression. But then I found SteelMind
            organization, and it changed everything. The staff is amazing and
            really cares about your well-being. They listened to me, offered
            support, and helped me find the resources I needed to start feeling
            better. I'm so grateful for this organization and all the wonderful
            people who work there.
          </p>
        </div>
        <br />
        <div className={styles.second}>
          <div className={styles.imgContainer}>
            <Image
              src={"/girl.jpg"}
              alt={"steelmind review 2"}
              fill={true}
              priority
            />
          </div>
          <p>
            As someone who has struggled with mental health issues for years, I
            can't say enough good things about this organization. They provide a
            safe and supportive environment where you can talk about your
            struggles without fear of judgment. The staff is incredibly kind and
            compassionate, and they go above and beyond to help you in any way
            they can. I've been able to make meaningful connections with others
            who understand what I'm going through, and I'm so thankful for this
            organization and the work they do.
          </p>
        </div>
        <br />
        <div className={styles.third}>
          <div className={styles.imgContainer}>
            <Image
              src={"/guy2.jpg"}
              alt={"steelmind review 3"}
              fill={true}
              priority
            />
          </div>
          <p>
            I never thought I would find a mental health support organization
            that really "got" me, but then I found this place. The staff is so
            knowledgeable and understanding, and they really know how to support
            people who are struggling. They offer a wide range of services and
            resources, from counseling to group therapy to wellness programs, so
            you can find what works best for you. I'm so glad I found this
            organization, and I would recommend it to anyone who needs support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
