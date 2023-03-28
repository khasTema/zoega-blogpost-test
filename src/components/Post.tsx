import React from 'react'
import styles from '../styles/post.module.css'

interface Props {
    userId: number,
    title: string,
    body: string
}

const Post: React.FC<Props> = (props: Props) => {
  return (
    <article className={styles.post}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.body}>{props.body}</p>
        <div className={styles.info}>
            <span className={styles.user}>user id: {props.userId}</span>
            <button className="delete">delete</button>
        </div>
    </article>
  )
}

export default Post
