import React from 'react'
import styles from './HeroSection.module.css'
import Image from 'next/image'
import { Clock, Video } from 'lucide-react'
const Card2 = ({active}) => {
  return (
    <div className={`${styles.card} ${active === 1? styles.show : styles.hide} ${styles['card-2']}`}>
        <h2 className={styles['card-title']}>Share your booking page</h2>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles['left-title']}>
                    ACME Inc.
                    <Image src='/facebook-logo.png' width={40} height={40} alt='image'/>
                    <div className={styles['person-infor']}>
                        <p>Fatima Sy</p>
                        <h2>Client Check-in</h2>
                    </div>
                    <div className={styles['meeting-infor']}>
                        <div className={styles.time}>
                            <Clock size={40}/>
                            30 min
                        </div>
                        <div className={styles['plat-form']}>
                            <Video size={40} />
                            zoom
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>

            </div>
            <div className={styles.right}>

            </div>
        </div>
    </div>
  )
}

export default Card2