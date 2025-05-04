import React from 'react';
import { useState } from 'react';
import Comments from './Comments';

export default function Post(props) {
  const { title, author, date, body, id} = props.post;
  const [commentsShowing, setCommentsShowing] = useState();

  return (
    <div className="post">
      <h2>{title}</h2>
      <h3>by {author} on {new Date(date).toLocaleString()}</h3>
      <p>{body}</p>
      <div className="commentsArea">
        <button onClick={() => setCommentsShowing(!commentsShowing)}>{commentsShowing ? 'Hide' : 'Show'} comments</button>
        <div className={`comments ${commentsShowing ? '' : 'closed'}`}>
          <Comments id={id} />
        </div>
      </div>
    </div>
  )
}
