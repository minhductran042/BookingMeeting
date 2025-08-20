import React from 'react'
import styles from '../NavMenu.module.css'
const SolutionsMenu = ({active}) => {
  return (
    <div 
    className={`${styles.menu} ${active === 'solutions'?styles.active:''}`}>
        <div className={styles['menu-name']}>
            Solutions
            <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="1" 
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </div>
    </div>
  )
}

export default SolutionsMenu