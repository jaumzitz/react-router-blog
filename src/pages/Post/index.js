import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostTemplate from "components/PostTemplate";
import Markdown from "react-markdown";
import './Post.css'
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import OtherPosts from "components/OtherPosts";

export default function Post() {
    const parameters = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameters.id)
    })

    if (!post) {
        return <NotFound />
    }

    return (
        <>
            <Routes>
                <Route path="*" element={<DefaultPage />}>
                    <Route index element={
                        <>

                            <PostTemplate
                                fotoCapa={`/assets/posts/${parameters.id}/capa.png`}
                                title={post.titulo}
                            >
                                <div className="post-markdown-container">
                                    <Markdown>{post.texto}</Markdown>
                                </div>
                            </PostTemplate >

                            <OtherPosts></OtherPosts>
                        </>
                    }
                    />
                </Route>
            </Routes >

        </>
    )
}