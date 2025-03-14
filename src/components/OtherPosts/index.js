import posts from 'json/posts.json'
import { useParams } from "react-router-dom";
import PostCard from "components/PostCard";


export default function OtherPosts() {
    const parameters = useParams()
    return (
        <div>
            <ul>
                {posts.map((post) => {
                    if (post.id !== Number(parameters.id)) {
                        return <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                        console.log(post)
                    }
                })}
            </ul>
        </div>
    )
}