'use client'
import React, { act, useState } from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import NavMenu from './NavMenu/NavMenu'
import LoginBtn from './UserActions/LoginBtn'
import GetStartBtn from './UserActions/GetStartBtn'
import ProductionMenuDetail from './NavMenu/ProductionMenu/ProductionMenuDetail'
import ResourcesMenuDetail from './NavMenu/ResourcesMenu/ResourcesMenuDetail'
import SolutionsMenuDetail from './NavMenu/SolutionsMenu/SolutionsMenuDetail'
const PublicHeader = () => {

  const [active, setActive] = useState(null)
  
  const handleMouseEnter = (menuName) =>{
      setActive(menuName)
  }
  
  const handleMouseLeave = () =>{
      setActive(null)
  }

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div className={styles.navbar}>
          <Logo />
          <NavMenu active={active} onMouseEnter={handleMouseEnter}/>
          <div className={styles['user-action']}>
            <LoginBtn />
            <GetStartBtn />
          </div>
      </div>
      {active === 'production' && <ProductionMenuDetail active={active} onMouseEnter={handleMouseEnter}/>}
      {active ==='resources' && <ResourcesMenuDetail active={active} onMouseEnter={handleMouseEnter} />} 
      {active === 'solutions' && <SolutionsMenuDetail active={active} onMouseEnter={handleMouseEnter} />}
    </div>
  )
}

export default PublicHeader