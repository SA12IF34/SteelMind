import React, {useEffect} from 'react';
import Head from 'next/head';
import styles from '@/styles/Auth.module.css';
import Header from '@/components/Header';
import {BsGoogle, BsFacebook} from 'react-icons/bs'

function Login() {

  var num = 0;

  useEffect(()=> {  
    if (num < 1) {
        
        let form = document.querySelector("form") as HTMLFormElement;
        
        form.onsubmit = (e) => {
            e.preventDefault();
            alert("submit !");
        }
    }
  }, [])

  return (
    <>
        <Head>
            <title>SteelMind | Login</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.root}>
            <Header />
            <main className={styles.main}>
                <form action="">
                    <input type="email" name="email" id="email" placeholder='your email' required />
                    <br />
                    <input type="password" name="pswrd" id="pswrd" placeholder='password' />
                    <br />
                    <br />
                    <button type="submit">LogIn</button>
                    <br />
                    <div className={styles.external}>
                        <div>
                        <span>login with</span>
                        <ul>
                            <li>
                                <BsGoogle />
                            </li>
                            <li>
                                <BsFacebook />
                            </li>
                        </ul>
                        </div>
                    </div>
                    <br />
                    <span className={styles.ca}>create account</span>
                </form>
            </main>
        </div>
    </>
  )
}

export default Login;