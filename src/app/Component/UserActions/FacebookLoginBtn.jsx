import React from 'react'
import styles from './UserActions.module.css'
import Image from 'next/image'
const FacebookLoginBtn = () => {
  return (
    <div className={styles['provider-login-btn']}>
      <Image src='/facebook-logo.png' width={40} height={40} alt='facebook' />
      <span>Sign in with google</span>
    </div>
  )
}

export default FacebookLoginBtn