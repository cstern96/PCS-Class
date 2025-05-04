import React, { useEffect, useState } from 'react';
import Post from './Post';
import io from 'socket.io-client';

export default function Posts({ setError }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    })();
  }, []);

  const socketIo = io('http://localhost:8080');
  useEffect(() => {
    const receivePosts = post => {
      setPosts((prevPosts) => [...prevPosts, post]);
    };

    const receiveComments = comment => {
      console.log('got comment', comment)
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if (post._id === comment.postId) {
            return {
              ...post,
              comments: [...post.comments, comment],
            };
          }
          return post;
        });
      })
    };

    socketIo.on('post', receivePosts);
    socketIo.on('comment', receiveComments);

    return () => {
      socketIo.off('post', receivePosts);
      socketIo.off('comment', receiveComments);
    };
  }, [socketIo]);

  return (
    <div>
      {posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}
