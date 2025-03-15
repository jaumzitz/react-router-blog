import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {

    

    return (
        <header className={styles.testeira}>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>Início</MenuLink>
                <MenuLink to='/sobremim'>Sobre mim</MenuLink>
                <MenuLink to='/projetos'>Projetos</MenuLink>
            </nav>
        </header>
    )
}