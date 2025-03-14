import posts from 'json/posts.json'
import { useParams } from "react-router-dom";
import PostCard from "components/PostCard";
import styles from './OtherPosts.module.css'


export default function OtherPosts() {
    const parameters = useParams()
    return (
        <section >

            <h3 className={styles.sectionTitle}>Outros posts que você pode gostar...</h3>


            <ul className={styles.otherPosts}>


                {
                    posts
                        .filter((post) => post.id !== Number(parameters.id))
                        .slice(0, 4)
                        .map((post) =>
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>)
                }


            </ul>

        </section>
    )
}