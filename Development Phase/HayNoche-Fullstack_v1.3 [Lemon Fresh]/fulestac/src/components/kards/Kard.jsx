import React, {useEffect, useState} from "react";
import {styled} from '@mui/material/styles';

import style from '../../css/kards/Kard.module.css'

import iconDay from '../../assets/icons/lineas-de-calendario.png'
import iconTime from '../../assets/icons/reloj-tres.png'
import iconDir from '../../assets/icons/marcador.png'
import iconGluten from '../../assets/icons/gluten-free.png'
import iconVegan from '../../assets/icons/vegan.png'
import iconAdult from '../../assets/icons/plus-18-movie.png'
import imj from '../../assets/images/portadas/alba.jpeg'

function Kard({name, timeOpens, timeCloses, adress, dayOpens, dayCloses, url}) {
    return (
        <div>
            <div className={style.full_kard}>
                <div className={style.true_kard}>
                    <div className={style.kard_info}>
                        <div className={style.kard_heather}>
                            <div className={style.kard_price}>
                                <h4>$$$</h4>
                            </div>
                            <div className={style.kard_name}>
                                <h1>{name}</h1>
                            </div>
                        </div>
                        <div className={style.kard_vody}>
                            <div className={style.kard_day}>
                                <img className={style.icon} src={iconDay} alt={'s'}></img>
                                <h3>{dayOpens} a</h3>

                                <h3> {dayCloses}</h3>
                            </div>
                            <div className={style.kard_time}>
                                <img className={style.icon} src={iconTime} alt={'s'} ></img>
                                <h4>{timeOpens}-</h4>
                                <h4>{timeCloses}</h4>
                            </div>
                            <div className={style.kard_adress}>
                                <img className={style.icon} src={iconDir} alt={'s'} ></img>
                                <h3>{adress}</h3>
                            </div>

                        </div>
                    </div>
                    <img className={style.kard_img} src={'/assets/portadas/' + url + '.jpeg'} alt={'s'} />
                </div>
                <div className={style.kard_money}>
                    <img className={style.true} src={iconGluten} alt={'s'}></img>
                    <img className={style.false} src={iconVegan} alt={'s'}></img>
                    <img className={style.true} src={iconAdult} alt={'s'}></img>
                </div>
            </div>
        </div>
    );
}

export default Kard;