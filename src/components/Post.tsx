import React from 'react'
import styles from '../styles/post.module.css'

interface Props {
  post: {
    userId: number,
    title: string,
    body: string
  },
  onClick: (post: any) => void
}

const Post: React.FC<Props> = ({post, onClick}) => {
  return (
    <article className={styles.post}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.body}>{post.body}</p>
        <div className={styles.info}>
            <span className={styles.user}>user id: {post.userId}</span>
            <button 
              className="delete"
              onClick={() => onClick(post)}
            >
              delete
            </button>
        </div>
    </article>
  )
}

export default Post
