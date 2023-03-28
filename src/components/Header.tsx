import React from 'react'
import styles from '../styles/header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.logo}>Blog & Post</h1>
        <button>+new post</button>
    </header>
  )
}

export default Header