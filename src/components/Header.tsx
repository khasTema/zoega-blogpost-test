import React from 'react'
import styles from '../styles/header.module.css'

interface Props {
  onClick: () => void
}

const Header:React.FC<Props> = ({onClick}) => {


  return (
    <header className={styles.header}>
        <h1 className={styles.logo}>Blog & Post</h1>
        <button onClick={onClick}>+new post</button>
    </header>
  )
}

export default Header