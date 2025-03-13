import styles from './AboutMe.module.css'
import PostTemplate from "components/PostTemplate";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function AboutMe() {
    return (
        <PostTemplate
            fotoCapa={fotoCapa}
            titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o João! :)
            </h3>

            <img src={fotoSobreMim} alt="Foto do Joao" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu é um prazer ter você aqui!
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou em 2019 na Universidade do Vale do Itajaí, em Santa Catarina. Eu aprendi lógica de programação e o básico de várias linguagens, como C++, PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Sistemas Para Internet. Logo no primeiro semestre da graduação, fui contratado como Jovem Aprendiz do departamento de TI da Unimed Litoral. Lá eu tive a oportunidade de vivenciar o ambiente profissional da área de TI, me aprofundar em banco de dados, APIs e JavaScript, além de descobrir minha paixão por Design quando comecei a estudar UX, UI e Design Conversacional.
            </p>
            <p className={styles.paragrafo}>
                Além dos projetos na empresa que trabalho, no tempo livro desenvolvo websites para comercialização. Isso me deu muita experiência não somente com programação, mas com design também. 

                Ainda não tive a oportunidade de trabalhar em um time de desenvolvimento, mas com sorte e muita dedicação, sei que esse dia chegará em breve.

                Minha vida tem sido aprendizados atrás de aprendizados. Felizmente tenho a oportunidade de contar com colegas de trabalho e da graduação que me mantém motivado a continuar apredendendo e ralizar o sonho de me tornar um desenvolvedor em uma software house. 
                
                Hoje sou muito feliz na minha atual posição, mas eu quero alcançar cada vez mais pessoas através do meu trabalho, desenvolvendo soluções para problemas reais, que transformam as pessoas.

            </p>

        </PostTemplate >
    )
}