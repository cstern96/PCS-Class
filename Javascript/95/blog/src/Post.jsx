import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import './Post.css';

export default function Post() {
    const { userId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState({});
    const [loadingComments, setLoadingComments] = useState({});
    const [commentShowing, setCommentShowing] = useState({});


    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError(null);
                const p = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                if (!p.ok) {
                    throw new Error(`${p.status} - ${p.statusText}`);
                }
                const posts = await p.json();
                setPosts(posts);
            } catch (e) {
                console.error(e);
                setError(e.message);
            }
            setLoading(false);


        })();
    }, [userId]);

    const fetchComments = async (postId) => {
        if (commentShowing[postId]) {
            setComments((prevComments) => ({
                ...prevComments,
                [postId]: null,
            }));
            setCommentShowing((prevShowing) => ({
                ...prevShowing,
                [postId]: false,
            }));
        } else {
            if (!comments[postId]) {
                setLoadingComments((prevLoading) => ({
                    ...prevLoading,
                    [postId]: true
                }));
                try {
                    const c = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                    if (!c.ok) {
                        throw new Error(`${c.status} - ${c.statusText}`);
                    }
                    const fetchedComments = await c.json();

                    setComments((prevComments) => ({
                        ...prevComments,
                        [postId]: fetchedComments,
                    }));
                    setCommentShowing((prevShowing) => ({
                        ...prevShowing,
                        [postId]: true,
                    }));
                } catch (e) {
                    console.error(e);
                    setError(e.message);
                }
                setLoadingComments((prevLoading) => ({
                    ...prevLoading,
                    [postId]: false,
                }));
            } else {
                setCommentShowing((prevShowing => ({
                    ...prevShowing,
                    [postId]: true,
                })));
            }
        }
    };

    return (
        <>
            <Link to="/">← Back to Users</Link>
            {loading && <h2>loading...</h2>}
            {error && <h2>oops - failed to load posts.</h2>}
            {!loading && !error && posts.length > 0 &&
                (<div>
                    <h3>Posts by User {userId}</h3>
                    <ul>
                        {posts.map((post) => (
                            <li className= "postBlock" key={post.id}>
                                <strong>{post.title}</strong>
                                <p>{post.body}</p>

                                <button className= "commentButton" onClick={() => fetchComments(post.id)}>{commentShowing[post.id] ? 'Hide Comment' : 'Comments'}</button>

                                {loadingComments[post.id] && <p>Loading comments...</p>}

                                {comments[post.id] && comments[post.id] !== null && (
                                    <div>
                                        <h4>Comments:</h4>
                                        <ul>
                                            {comments[post.id].map((comment) => (
                                                <li key={comment.id}>
                                                    <strong>{comment.name}</strong>
                                                    <p>{comment.body}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>)}
        </>
    )
}
