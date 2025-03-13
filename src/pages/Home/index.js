import style from './Home.module.css'

import posts from 'json/posts.json'
import PostCard from "components/PostCard";

export default function Home() {
    return (
        <ul className={style.posts}>
            {posts.map((post) => <li key={post.id}><PostCard post={post} /></li>)}
        </ul>

    )
}