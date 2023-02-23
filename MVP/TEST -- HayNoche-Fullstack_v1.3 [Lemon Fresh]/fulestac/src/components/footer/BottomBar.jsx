import * as React from 'react';

import style from '../../css/footer/bottomBar.module.css'

import login from '../../assets/icons/usuario.png'
import home from  '../../assets/icons/hogar.png'
import map from  '../../assets/icons/marcador-de-mapa.png'

function BottomBar() {
    const [value, setValue] = React.useState(0);

    return (
        <div className={style.bar}>
            <a className={style.bar_btn}>
                <img src={login}></img>
            </a>
            <a className={style.bar_btn}>
                <img src={home}></img>
            </a>
            <a className={style.bar_btn}>
                <img src={map}></img>
            </a>
        </div>
    );
}

export default BottomBar;