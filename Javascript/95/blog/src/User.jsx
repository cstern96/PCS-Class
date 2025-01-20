import { useState, useEffect } from "react";
import { Link } from "react-router";
import './User.css';

export default function User() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError(null);
                const u = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!u.ok) {
                    throw new Error(`${u.status} - ${u.statusText}`);
                }
                const users = await u.json();
                setUsers(users);
            } catch (e) {
                console.error(e)
                setError(e.message);
            } 
            setLoading(false);


        })();
    }, []);

    return (
        <>
            {loading && <h2>loading...</h2>}
            {error && <h2>oops - failed to load users.</h2>}
            {<div>
                    <h3>Users</h3>
                    {users.map((u) => 
                        <div className="userName" key={u.id}>
                            <Link to={`/post/${u.id}`}>
                                {u.name}
                            </Link>
                            {" | "}{u.website}{" | "}{u.company.name}
                        </div>
                    )}
                </div>}
        </>
    )
}
