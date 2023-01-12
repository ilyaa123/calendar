import classNames from "classnames";
import React, { FC, useContext, useRef } from "react";
import { ModalContext, setCalendarEventItem, setModalEventActive } from "../../../context/modalContext";
import { useAppSelector } from "../../../redux/hooks";

import style from './ModalEvent.module.css';

export const ModalEvent:FC = () => {
    const modalEventRef = useRef(null);

    const { events } = useAppSelector(store => store.events);

    const { state: {modalEventActive, calendarEventItem}, dispatchModal } = useContext(ModalContext)

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
            dispatchModal({
                type: setModalEventActive,
                payload: false
            })
            setTimeout(() => {
                dispatchModal({
                    type: setCalendarEventItem,
                    payload: {}
                })
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