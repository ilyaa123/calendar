import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import classNames from "classnames";

import style from './Year.module.css';
import { addYear, removeYear } from "../../../redux/slices/calendarSlice";

export const Year:FC = () => {
    const { year } = useAppSelector(store => store.calendar);

    const dispatch = useAppDispatch();

    const handleToRemoveYear = () => {
        dispatch(removeYear())
    }

    const handleToAddYear = () => {
        dispatch(addYear())
    }

    return (
        <div className={style.Year}>
            <button onClick={handleToRemoveYear} className={classNames(style.YearButton, style.YearPrev)}>
                <svg width="25" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9167 29.625L5.625 15L17.9167 0.375L19.2708 2.125L8.75 15L19.2708 27.875L17.9167 29.625Z" fill="white"/>
                </svg>
            </button>
            <p className={style.YearTitle}>{year}</p>
            <button onClick={handleToAddYear} className={classNames(style.YearButton, style.YearNext)}>
                <svg width="25" height="20" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.08333 0.375001L19.375 15L7.08333 29.625L5.72917 27.875L16.25 15L5.72917 2.125L7.08333 0.375001Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}