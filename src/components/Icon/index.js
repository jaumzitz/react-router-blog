import { ReactComponent as ReactIcon } from 'assets/react.svg'
import { ReactComponent as FigmaIcon } from 'assets/figma.svg'
import { ReactComponent as DatabaseIcon } from 'assets/oracle.svg'
import { ReactComponent as JavascriptIcon } from 'assets/javascript.svg'
import { ReactComponent as PHPIcon } from 'assets/php.svg'
import styles from './Icon.module.css'

export default function Icon({ id, size, color }) {

    const icons = {
        react: ReactIcon,
        figma: FigmaIcon,
        db: DatabaseIcon,
        js: JavascriptIcon,
        php: PHPIcon
    }

    const IconComponent = icons[id]

    

    return (

        <IconComponent
            className={styles.iconArea}
            style={{ color }}
            width={size}
            height={size}
            
        />

    )
}