'use client'
import React, { useState } from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import NavMenu from './NavMenu/NavMenu'
import LoginBtn from './UserActions/LoginBtn'
import GetStartBtn from './UserActions/GetStartBtn'
import ProductionMenuDetail from './NavMenu/ProductionMenu/ProductionMenuDetail'
const PublicHeader = () => {

  const [active, setActive] = useState(null)
  
  const handleMouseEnter = (menuName) =>{
      setActive(menuName)
  }
  
  const handleMouseLeave = () =>{
      setActive(null)
  }

  return (
    <div>
      <div className={styles.navbar} onMouseLeave={handleMouseLeave}>
          <Logo />
          <NavMenu active={active} onMouseEnter={handleMouseEnter}/>
          <div className={styles['user-action']}>
            <LoginBtn />
            <GetStartBtn />
          </div>
      </div>
      {active === 'production' && <ProductionMenuDetail />}
    </div>
  )
}

export default PublicHeader