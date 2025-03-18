import { Link } from "react-router-dom";
import styles from './LinkButton.module.css'

export default function LinkButton({ to, children }) {
    return (
        <Link to={to}>
            <button className={styles.botaoLink}>
                {children}
            </button>
        </Link>
    )

    
}