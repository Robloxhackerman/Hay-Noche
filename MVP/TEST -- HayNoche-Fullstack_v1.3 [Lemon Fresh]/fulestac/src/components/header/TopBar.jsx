import React from "react";

import logo from '../../assets/images/Logo.png';
import icono from '../../assets/icons/busqueda.png'
import style from '../../css/header/topBar.module.css';


function TopBar () {
    return (
        <header className={style.top_bar}>
            <div>
                <img src={logo} className={style.logo_png}/>
            </div>
        </header>
    )
}
export default TopBar;
