import classNames from "classnames";
import React, { Dispatch, FC, SetStateAction, useRef } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { addEvent } from "../../../redux/slices/eventsSlice";

import style from './Modal.module.css';

interface ICalendarItem extends Object{
    day: string;
    month: string;
    year: string;
}

interface IModal{
    modalActive: boolean;
    setModalActive: Dispatch<SetStateAction<boolean>>;
    calendarItem: ICalendarItem | undefined
}

export const Modal:FC<IModal> = ({modalActive, setModalActive, calendarItem}) => {

    const modalOverlay = useRef<HTMLDivElement>(null);
    const textInp = useRef<HTMLInputElement>(null);
    const timeInp = useRef<HTMLInputElement>(null);
    const modalForm = useRef<HTMLFormElement>(null)

    const dispatch = useAppDispatch()

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === modalOverlay.current){
            setModalActive(prev => !prev)
        }
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (calendarItem){
            
            const text = textInp.current?.value;
            const time = timeInp.current?.value;
            dispatch(addEvent({...calendarItem, time, text}));

            modalForm.current?.reset();
            setModalActive(prev => !prev);
        }
    }

    return (
        <div onClick={handleOnClick} className={classNames(style.ModalOverlay, {[style.ModalOverlay_Active]: modalActive})} ref={modalOverlay}>
            <div className={style.Modal}>
                <form ref={modalForm} onSubmit={handleOnSubmit} className={style.ModalForm}>
                    <input ref={textInp} className={style.ModalText} type="text" placeholder="Мероприятие" />
                    <input ref={timeInp} className={style.ModalDate} type="time" placeholder="Время" />
                    <button className={style.ModalButton}>Подтвердить</button>
                </form>
            </div>
        </div>
    )
}