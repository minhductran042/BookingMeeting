'use client'
import React, { useEffect, useState } from 'react'
import styles from './HeroSection.module.css'
import GoogleLoginBtn from '../UserActions/GoogleLoginBtn'
import FacebookLoginBtn from '../UserActions/FacebookLoginBtn'
import Link from 'next/link'
import Card1 from './Card1'
import Card2 from './Card2'
const HeroSection = () => {

    const [active, setActive] = useState(0)

    useEffect(() =>{
        const internal = setInterval(() =>{
            setActive((prev) => (prev === 0 ? 1: 0))
        }, 3000)
        return () => clearInterval(internal)
    },[])

  return (
    <section className={styles['hero-section']}>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>
                    Easy scheduling ahead
                </div>
                <div className={styles['sub-title']}>
                    Join 20 million professionals who easily book meetings with the #1 scheduling tool.
                </div>
                <div className={styles['user-action']}>
                    <GoogleLoginBtn />
                    <FacebookLoginBtn />
                    <div className={styles.dividers}>
                        <span className={styles.text}>OR</span>
                    </div>
                    <div className={styles['sign-up']}>
                        <Link href='/' className={styles.link}>Sign up free with email</Link>. 
                        No credit card required
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <Card1 active={active}/>
                <Card2 active={active}/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection