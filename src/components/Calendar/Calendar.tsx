import React, { FC, memo, useContext } from "react";
import moment from "moment";

import { useCalendar } from "../../hooks/useCalendar";
import { useAppSelector } from "../../redux/hooks";
import { ModalContext, setCalendarItem, setModalActive } from "../../context/modalContext";

import { CalendarEvent } from "./CalendarEvent/CalendarEvent";
import { ModalEvent } from "./ModalEvent/ModalEvent";
import { Week } from "./Week/Week";
import { Modal } from "./Modal/Modal";

import classNames from "classnames";
import style from './Calendar.module.css';


const CalendarNoMemo:FC = () => {
    const {month, year} = useAppSelector(store => store.calendar);
    const { events } = useAppSelector(store => store.events);

    const calendar = useCalendar(month, year);
    
    const { state: {}, dispatchModal } = useContext(ModalContext)

    const hanleOnClick = (event:React.MouseEvent<HTMLDivElement>, day: string, month: string, i: number) => {
        event.stopPropagation()
        if (event.target === document.querySelectorAll(`.${style.CalendarItem}`)[i]){
            dispatchModal({
                type: setModalActive,
                payload: true
            })
            dispatchModal({
                type: setCalendarItem,
                payload: {
                    day: day, 
                    month: month, 
                    year: year
                    }
                })
            }
    }

    return (
        <>
            <Week />
            <div className={style.Calendar}>
                {
                    calendar.map((item, i) => {
                        const day = item.day;

                        const itemActive = moment().format('DD') === item.day && 
                            Number(month) === moment().month() &&
                            Number(month + 1) === Number(item.month) &&
                            moment().year() === Number(year);
                            
                        const itemPrev = Number(item.month) !== Number(month) + 1

                        return (
                            <div 
                                onClick={ (event) => hanleOnClick(event, day, month, i)}
                                className={classNames(style.CalendarItem, {[style.CalendarItemActive]: itemActive, [style.CalendarItemPrev]: itemPrev})} 
                                key={i}
                            >
                                <p className={style.CalendarItemDay}>{item.day}</p>
                                <CalendarEvent 
                                    events={events} 
                                    year={year} 
                                    month={item.month} 
                                    day={item.day}
                            />
                            </div>
                        )
                    })
                }
            </div>
            <Modal />
            <ModalEvent />
        </>
    )
}
export const Calendar = memo(CalendarNoMemo)