import React, { FC } from "react";

import style from './Header.module.css';
import { Month } from "./Month/Month";
import { Year } from "./Year/Year";

export const Header:FC = () => {
    return (
        <div className={style.Header}>
            <Year />
            <Month />
        </div>
    )
}