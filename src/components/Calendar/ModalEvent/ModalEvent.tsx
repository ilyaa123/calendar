import classNames from "classnames";
import React, { Dispatch, FC, SetStateAction, useRef } from "react";
import { ICalendarEventItem } from "../../../hooks/useModalEvent";
import { useAppSelector } from "../../../redux/hooks";

import style from './ModalEvent.module.css';

interface IModalEvent{
    modalEventActive: boolean;
    setModalEventActive: Dispatch<SetStateAction<boolean>>;
    calendarEventItem: ICalendarEventItem;
    setCalendarEventItem: React.Dispatch<React.SetStateAction<ICalendarEventItem>>;
}

export const ModalEvent:FC<IModalEvent> = ({modalEventActive, setModalEventActive, calendarEventItem, setCalendarEventItem}) => {
    const modalEventRef = useRef(null);

    const { events } = useAppSelector(store => store.events);

    const event = events.filter((item) => {
        if (
            Number(item.year) === Number(calendarEventItem.year) &&
            Number(item.month) + 1 === Number(calendarEventItem.month) &&
            Number(item.day) === Number(calendarEventItem.day)
        ) {
            return true
        } else {
            return false
        }  
    })

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === modalEventRef.current){
            setModalEventActive(false);
            setTimeout(() => {
                setCalendarEventItem({});
            }, 360)
        }
    }

    return (
        <div onClick={handleOnClick} ref={modalEventRef} className={classNames(style.ModalEvent_Overlay, {[style.ModalEvent_Overlay_Active]: modalEventActive})}>
            <div className={style.ModalEvent}>
                {
                    event.map((item, key) => {
                        return (
                            <p className={style.ModalEventItem} key={key}>
                                <span className={style.ModalEventText}>{item.text}</span>
                                <span className={style.ModalEventDate}>{item.time}</span>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}