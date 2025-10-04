import OtherPosts from 'components/OtherPosts'
import styles from './PostTemplate.module.css'

export default function PostTemplate({ fotoCapa, title, children }) {
    return (
        <section>

            <article className={styles.postModeloContainer}>

                <div
                    className={styles.fotoCapa}
                    style={{ backgroundImage: `url(${fotoCapa})` }}
                ></div>

                <h2 className={styles.titulo}>
                    {title}
                </h2>


                <div className={styles.postConteudoContainer}>
                    {children}
                </div>
                   
            </article>
        </section>
    )
}