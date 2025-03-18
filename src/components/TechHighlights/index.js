import { useEffect, useRef, useState } from 'react'
import style from './TechHighlights.module.css'
import Icon from 'components/Icon'

export default function TechHighlights() {

    const [techName, setTechname] = useState('...')



    return (
        <div className={style.tecnologias}>
            <div className={style.descricao}>

                <h2>Desenvolvendo soluções</h2>
                <h3>com carinho e{`${techName}`}</h3>
            </div>
            <ul className='icon-list'>
                <li onMouseEnter={() => setTechname(' React.')}>
                    <Icon id='react' size={50} color="#363636" key="React"></Icon>
                </li>
                <li onMouseEnter={() => setTechname(' Figma.')}>
                    <Icon id='figma' size={50} color="#363636" key="Figma"></Icon>
                </li>
                <li onMouseEnter={() => setTechname(' Oracle.')}> 
                    <Icon id='db' size={50} color="#363636" key="Oracle"></Icon>
                </li>
                <li onMouseEnter={() => setTechname(' Javascript.')}>
                    <Icon id='js' size={50} color="#363636" key="Javascript"></Icon>
                </li>
                <li onMouseEnter={() => setTechname(' PHP.')}>
                    <Icon id='php' size={50} color="#363636" key="PHP"></Icon>
                </li>

            </ul>
        </div>
    )
}