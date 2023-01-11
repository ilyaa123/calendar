import classNames from "classnames";
import React, { FC } from "react";

import style from './Week.module.css';

const weeks = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

export const Week:FC = () => {

    return (
        <div className={style.Week}>
            {
                weeks.map((item, key) => {
                    return (
                        <div className={classNames(style.WeekItem, {[style.WeekItemEnd]: item === 'Sat' || item === 'Sun'})} key={key}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}