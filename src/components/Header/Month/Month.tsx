import classNames from "classnames";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addMonth, removeMonth } from "../../../redux/slices/calendarSlice";

import style from './Month.module.css';

const monts = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const Month:FC = () => {

    const { month } = useAppSelector(store => store.calendar)

    const dispatch = useAppDispatch();

    const handleToRemoveMonth = () => {
        dispatch(removeMonth())
    }

    const handleToAddMonth = () => {
        dispatch(addMonth())
    }

    return (
        <div className={style.Month}>
            <div className={style.MonthContainer}>
                <button onClick={handleToRemoveMonth} className={classNames(style.MonthButton, style.MonthPrev)}>
                    <svg width="25" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9167 29.625L5.625 15L17.9167 0.375L19.2708 2.125L8.75 15L19.2708 27.875L17.9167 29.625Z" fill="white"/>
                    </svg>
                </button>
                <p className={style.MonthTitle}>{monts[Number(month)]}</p>
                <button onClick={handleToAddMonth} className={classNames(style.MonthButton, style.MonthNext)}>
                    <svg width="25" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.08333 0.375001L19.375 15L7.08333 29.625L5.72917 27.875L16.25 15L5.72917 2.125L7.08333 0.375001Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}