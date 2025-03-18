import style from './Home.module.css'

import posts from 'json/posts.json'
import PostCard from "components/PostCard";
import TechHighlights from 'components/TechHighlights';

export default function Home() {
    return (

        <>
            <section className={style.postSection}>

                <ul className={style.posts}>
                    {posts.map((post) => <li key={post.id}><PostCard post={post} /></li>)}
                </ul>
            </section>

            <section>
                <TechHighlights></TechHighlights>
            </section>
        </>

    )
}