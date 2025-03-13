import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostTemplate from "components/PostTemplate";
import Markdown from "react-markdown";
import './Post.css'
import NotFound from "pages/NotFound";

export default function Post() {
    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id)
    })

    if (!post) {
        return <NotFound/>
    }

    return (
        <PostTemplate
            fotoCapa={`/assets/posts/${parameters.id}/capa.png`}
            title={post.titulo}
        >
            <div className="post-markdown-container">
                <Markdown>{post.texto}</Markdown>
            </div>
        </PostTemplate >
    )
}