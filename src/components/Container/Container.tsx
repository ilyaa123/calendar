import React, { FC } from "react";

import style from './Container.module.css';

interface IContainer{
    children: React.ReactNode
}

export const Container:FC<IContainer> = ({children}) => {

    return (
        <div className={style.Container}>
            {children}
        </div>
    )
}