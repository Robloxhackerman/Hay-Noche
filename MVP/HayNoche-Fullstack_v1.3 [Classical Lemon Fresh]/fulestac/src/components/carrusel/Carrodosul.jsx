import React from 'react';
import style from '../../css/header/carrodosul.module.css'

import img1 from '../../assets/images/portadas/bar_de_carnes.jpeg'
import img2 from '../../assets/images/portadas/alba.jpeg'
import img3 from '../../assets/images/portadas/la_fabrica_bar.jpeg'
import img4 from '../../assets/images/portadas/mbc_pocitos.jpeg'

function Carrodosul() {
    return (
        <div className={style.body}>

            <div className={style.slider}>
                <div className={style.slides}>

                    <input type="radio" name="radio-btn" id="radio1"></input>
                    <input type="radio" name="radio-btn" id="radio2"></input>
                    <input type="radio" name="radio-btn" id="radio3"></input>
                    <input type="radio" name="radio-btn" id="radio4"></input>

                    <div className={`${style.slide} ${style.first}`}>
                        <img src={img1} alt=""></img>
                    </div>
                    <div className={style.slide}>
                        <img src={img2} alt=""></img>
                    </div>
                    <div className={style.slide}>
                        <img src={img3} alt=""></img>
                    </div>
                    <div className={style.slide}>
                        <img src={img4} alt=""></img>
                    </div>

                    <div className={style.navigation_auto}>
                        <div className={style.auto_btn1}></div>
                        <div className={style.auto_btn2}></div>
                        <div className={style.auto_btn3}></div>
                        <div className={style.auto_btn4}></div>
                    </div>

                </div>

                <div className={style.navigation_manual}>
                    <label htmlFor="radio1" className={style.manual_btn}></label>
                    <label htmlFor="radio2" className={style.manual_btn}></label>
                    <label htmlFor="radio3" className={style.manual_btn}></label>
                    <label htmlFor="radio4" className={style.manual_btn}></label>
                </div>

            </div>

        </div>
    )
}

export default Carrodosul