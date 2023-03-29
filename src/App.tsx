import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import NewProductForm from './components/NewProductForm';



interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface NewPostData {
  userId: number,
  id: number,
  title: string;
  body: string;
}

function App(): JSX.Element {
  const [postsList, setPostsList] = useState<PostData[]>([]);
  const [isAddPostClicked, setIsAddPostClicked] = useState<boolean>(false);
  const [newPost, setNewPost] = useState<NewPostData>({
    userId: 1,
    id: Number(Date.now().toString() + Math.floor(Math.random() * 1000)),
    title: '',
    body: '',
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setPostsList(data.slice(0, 10)));
  }, []);

  const renderPosts = postsList.map((post: PostData) => (
    <Post
      key={post.id}
      post={post}
      onClick={handlePostDelete}
    />
  ));

  function handleNewPostClick() {
    setIsAddPostClicked((prev) => !prev);
  }

  function handleChange(event:any){
    const name = event.target.name 
    const value = event.target.value
    setNewPost({...newPost, [name]: value})
  }


  function handleFormSubmit(event:any){
    event.preventDefault()
    setNewPost({
      userId: 1,
      id: Math.floor(Math.random() * 100),
      title: newPost.title,
      body: newPost.body
    })
    setPostsList([newPost, ...postsList])
    setNewPost({
      userId: 1,
      id: Number(Date.now().toString() + Math.floor(Math.random() * 1000)),
      title: '',
      body: ''
    })
    setIsAddPostClicked(false)
  }

  function handlePostDelete(post: any){
    const updatedPostsList = postsList.filter((p) => p.id !== post.id);
    setPostsList(updatedPostsList);
  }

  return (
    <div className="App">
      <Header onClick={handleNewPostClick} />

      {
        isAddPostClicked 
        && 
        <NewProductForm 
          newPost={newPost} 
          onChange={handleChange} 
          onSubmit={handleFormSubmit}
        />
      }

      {renderPosts}
    </div>
  );
}

export default App;
