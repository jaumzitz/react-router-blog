import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import MainButton from 'components/MainButton'
import Markdown from 'react-markdown'
import LinkButton from 'components/LinkButton'

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />
                <div className={styles.cardContent}>
                    <h2 className={styles.titulo}>{post.titulo}</h2>
                    
                        <p className={styles.descricao}>{
                            post
                                .texto
                                .replaceAll('#', '')
                                .substr(0, 50)
                        }...</p>
                    <LinkButton to={`/posts/${post.id}`}>Ler mais</LinkButton>
                    
                </div>
            </div>
        </Link>
    )
}