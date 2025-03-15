import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'
import MainButton from 'components/MainButton'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Joao Fiorini, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>

                <MainButton>Conecte-se ao meu Linkedin</MainButton>

            </div>

            <div className={styles.imagens}>

                <div className={styles.mascaraCirculoColorido}>

                    <img
                        className={styles.circuloColorido}
                        src={circuloColorido}
                        aria-hidden={true}
                    />

                </div>
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Joao'
                />

            </div>
        </div>
    )
}