import React from 'react'
import Image from 'next/image'
import styles from './UserActions.module.css'
const GoogleLoginBtn = () => {
  return (
    <div className={styles['provider-login-btn']}>
      <Image src='/google-logo.png' width={40} height={40} alt='google'/>
      <span>Sign in with google</span>
    </div>
  )
}

export default GoogleLoginBtn