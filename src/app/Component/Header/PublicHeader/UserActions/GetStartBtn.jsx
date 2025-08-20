import React from 'react'
import styles from './UserActions.module.css'
import { redirect } from 'next/navigation'

const GetStartBtn = () => {
  return (
    <button className={styles['get-started']} onClick={() => redirect('/login')}>
      Get started
    </button>
  )
}

export default GetStartBtn