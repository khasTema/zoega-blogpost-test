import React from 'react'
import styles from '../styles/newProductForm.module.css'

type Props = {
    newPost: {
        title: string,
        body: string
    }
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const NewProductForm:React.FC<Props> = ({newPost, onChange, onSubmit}) => {
  return (
    <form 
        action="post" 
        className={styles.form}
        onSubmit={(event)=>onSubmit(event)}
    >
        <input 
            type='text' 
            name='title' 
            className={styles.title} 
            placeholder='post title...'
            value={newPost.title}
            onChange={onChange}
        />

        <textarea 
            name="body" 
            className={styles.body} 
            placeholder='post content...'
            value={newPost.body}
            onChange={onChange}
        ></textarea>

        <button 
            type='submit'
            className={styles.submit}
        >
            post
        </button>
    </form>
  )
}

export default NewProductForm