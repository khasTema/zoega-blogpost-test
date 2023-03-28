import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

function App() {

  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => setPostsList(data.slice(0, 10)))
  }, [])

  interface PostData {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  const renderPosts = postsList.map((post: PostData )=> 
        <Post 
          key={post.id} 
          userId={post.userId}
          title={post.title}
          body={post.body}
          /> )


  return (
    <div className="App">
      <Header />
      {renderPosts}
    </div>
  );
}

export default App;
