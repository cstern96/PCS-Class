import React, { useEffect, useState } from 'react'
import Comment from './Comment';

export default function Comments(props) {
  const { id } = props;
  const [comments, setComments] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:8080/:${id}/comments`);
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const comments = await response.json();
        setComments(comments);
      }
      catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  return (
    <>
      {comments?.map(c => <Comment key={c.id} comment={c}/>)}
    </>
  )
}
