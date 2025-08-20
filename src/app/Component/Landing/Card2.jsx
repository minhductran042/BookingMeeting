import React from 'react'
import styles from './HeroSection.module.css'
const Card2 = ({active}) => {
  return (
   <div className={`${styles.card} ${active === 1? styles.show : styles.hide} ${styles['card-2']}`}>

    </div>
  )
}

export default Card2