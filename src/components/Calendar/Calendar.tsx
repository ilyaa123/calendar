import React, { FC, useRef } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { useAppSelector } from "../../redux/hooks";
import { Week } from "./Week/Week";
import classNames from "classnames";

import style from './Calendar.module.css';
import { Modal } from "./Modal/Modal";
import moment from "moment";
import { useModal } from "../../hooks/useModal";
import { CalendarEvent } from "./CalendarEvent/CalendarEvent";
import { ModalEvent } from "./ModalEvent/ModalEvent";
import { useModalEvent } from "../../hooks/useModalEvent";

export const Calendar:FC = () => {
    const {month, year} = useAppSelector(store => store.calendar);
    const { events } = useAppSelector(store => store.events);

    const calendar = useCalendar(month, year);
    
    const {modalActive, setModalActive, setCalendarItem, calendarItem} = useModal();

    const {modalEventActive, setModalEventActive, calendarEventItem, setCalendarEventItem} = useModalEvent()

    return (
        <>
            <Week />
            <div className={style.Calendar}>
                {
                    calendar.map((item, i) => {
                        const day = item.day;
                        if (
                            moment().format('DD') === item.day && 
                            Number(month) === Number(moment().month()) &&
                            Number(month) + 1 === Number(item.month) &&
                            moment().year() === Number(year)
                        ){
                            return (
                                <div 
                                    onClick={(event:React.MouseEvent<HTMLDivElement>) => {
                                        event.stopPropagation()
                                        if (event.target === document.querySelectorAll(`.${style.CalendarItem}`)[i]){
                                            setModalActive(prev=> !prev);
                                            setCalendarItem({day: day, month: month, year: year})
                                        }
                                    }}
                                    className={classNames(style.CalendarItem, style.CalendarItemActive)} 
                                    key={i}
                                >
                                    <p className={style.CalendarItemDay}>{item.day}</p>
                                    <CalendarEvent 
                                        events={events} 
                                        year={year} 
                                        month={item.month} 
                                        day={item.day}
                                        setModalEventActive={setModalEventActive}
                                        setCalendarEventItem={setCalendarEventItem}
                                    />
                                </div>
                            )
                        }
                        if (Number(item.month) !== Number(month) + 1) {
                            return (
                                <div className={classNames(style.CalendarItem, style.CalendarItemPrev)} key={i}>
                                    <p className={style.CalendarItemDay}>{item.day}</p>
                                    <CalendarEvent 
                                        events={events} 
                                        year={year} 
                                        month={item.month} 
                                        day={item.day}
                                        setModalEventActive={setModalEventActive}
                                        setCalendarEventItem={setCalendarEventItem}
                                    />
                                </div>
                            )
                        } else {
                            return (
                                <div 
                                    onClick={(event:React.MouseEvent<HTMLDivElement>) => {
                                        event.stopPropagation()
                                        if (event.target === document.querySelectorAll(`.${style.CalendarItem}`)[i]){
                                            setModalActive(prev=> !prev);
                                            setCalendarItem({day: day, month: month, year: year})
                                        }
                                    }}
                                    className={style.CalendarItem} 
                                    key={i}
                                >
                                    <p className={style.CalendarItemDay}>{item.day}</p>
                                    <CalendarEvent 
                                        events={events} 
                                        year={year} 
                                        month={item.month} 
                                        day={item.day}
                                        setModalEventActive={setModalEventActive}
                                        setCalendarEventItem={setCalendarEventItem}
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive} calendarItem={calendarItem} />
            <ModalEvent modalEventActive={modalEventActive} setModalEventActive={setModalEventActive} calendarEventItem={calendarEventItem} setCalendarEventItem={setCalendarEventItem} />
        </>
    )
}