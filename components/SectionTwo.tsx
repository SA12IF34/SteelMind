import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

function SectionTwo() {
  return (
    <section className={`${styles.section} ${styles.sectionTwo}`}>
      <h1>We can help you with</h1>
      <div className={styles.services}>
        <ul>
          <li>
            <Link href={"/services/counseling-therapy"} passHref>
              <h3>Counseling & Therapy</h3>
            </Link>
          </li>
          <li>
            <Link href={"/services/self-help"} passHref>
              <h3>Self-Help</h3>
            </Link>
          </li>
          <li>
            <Link href={"/services/monitoring"} passHref>
              <h3>Monitoring</h3>
            </Link>
          </li>
          <li>
            <Link href={"/services/immediate-help"} passHref>
              <h3>Immediate Help</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SectionTwo;
