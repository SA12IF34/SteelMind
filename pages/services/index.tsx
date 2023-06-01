import React, {useEffect} from 'react';
import Head from 'next/head';
import styles from '@/styles/Services.module.css';
import Header from '@/components/Header';

function Services() {

    var num = 0;
    useEffect(() => {
        if (num < 1) {
            document.querySelector("#main h3")?.addEventListener('click', (e) => {
                alert("h3 got clicked")
            });
            num+=1;
        }
        
    }, [])
    

  return (
    <>
    <Head>
        <title>SteelMind | Services & Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={styles.root}>
    <Header />
    <main id="main" className={styles.main}>
        <div>
            <h1>
                Here are our services
            </h1>
            <br />
            <br />
            <div className={styles.services}>
                <div className={styles.service}>
                    <h2>Counseling & therapy</h2>
                    <br />
                    <h4>
                        We offer the support and guidance for 
                        individuals, couples, families, and groups.
                    </h4>
                </div>
                <div className={styles.service}>
                    <h2>Self-Help</h2>
                    <br />
                    <h4>
                        We provide you with resources, strategies, and techniques that
                        will help you and people you know to independently improve mental well-being.
                    </h4>                                                                                   
                </div>
                <div className={styles.service}>
                    <h2>Monitoring</h2>
                    <br />
                    <h4>
                        We can provide you with best plan for your mental-health depending 
                        on our professional self tracking and monitoring systems.
                    </h4>
                </div>
                <div className={styles.service}>
                    <h2>Immediate Help</h2>
                    <br />
                    <h4>
                        We offer hotlines to help individuals Immediately in their crisis.
                    </h4>
                </div>
            </div>
            <div className={styles.contact}>
                <div>
                    
                </div>
            </div>
        </div>
    </main>
    </div>
    </>
  )
}

export default Services;
