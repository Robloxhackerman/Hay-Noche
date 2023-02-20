import React from "react";
import { styled } from '@mui/material/styles';
import img from '../../assets/images/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import style from '../../css/header/topBar.module.css';
import IconButton from "@mui/material/IconButton";


function TopBar () {
    return (
        <header className={style.top_bar}>
            <div>
                <img src={img} className={style.logo_png}/>
            </div>
            <div>
                <IconButton size="large" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
        </header>
    )
}
export default TopBar;
