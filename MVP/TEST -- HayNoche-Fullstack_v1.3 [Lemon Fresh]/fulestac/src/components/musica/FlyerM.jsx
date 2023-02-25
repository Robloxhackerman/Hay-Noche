import React, {useEffect, useState} from "react";
import style from "../../css/kards/Kard.module.css";

function Flyer({url, link}) {
    return (
        <div className={style.div_coso}>
            <a href={link}>
                <img className={style.img_teatros} src={'/assets/teatros/' + url + '.jpg'} alt={'s'} />
            </a>
        </div>
    )
}

export default Flyer;