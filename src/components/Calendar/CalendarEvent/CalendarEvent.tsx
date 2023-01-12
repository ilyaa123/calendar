import { FC, useContext } from "react";
import { ModalContext, setCalendarEventItem, setModalEventActive } from "../../../context/modalContext";
import { Events } from "../../../redux/slices/eventsSlice";

import style from './CalendarEvent.module.css';

interface ICalendarEvent{
    events: Events[];
    year: string;
    month: string;
    day: string;
}

export const CalendarEvent:FC<ICalendarEvent> = ({events, year, month, day}) => {

    const { dispatchModal } = useContext(ModalContext)

    const event = events.filter((item) => {
        if (
            Number(item.year) === Number(year) &&
            Number(item.month) + 1 === Number(month) &&
            Number(item.day) === Number(day)
        ) {
            return true
        } else {
            return false
        }  
    })

    const handleOnClick = () => {
        dispatchModal({
            type: setModalEventActive,
            payload: true 
        })
        dispatchModal({
            type: setCalendarEventItem,
            payload: {
                year: year,
                month: month,
                day: day
            }
        })
    }

    return (
        <div onClick={handleOnClick} className={style.Event}>
            {
                event.length !== 0 && (<p className={style.EventItem}>{event[event.length - 1].text}</p>)
            }
        </div>
    )
}