import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";

// Important Links
// https://www.canva.com/colors/color-meanings/violet/
// https://www.canva.com/colors/color-meanings/green/

export default function Home() {
  return (
    <>
      <Head>
        <title>SteelMind</title>
        <meta name="description" content="Mental Health Support Compnay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.main}>
        <Header />
        <main>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </main>
      </div>
    </>
  );
}
