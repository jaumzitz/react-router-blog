import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink({ children, to }) {

    const localization = NavLink;
    

    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}>
            {children}
        </NavLink>
    )
}