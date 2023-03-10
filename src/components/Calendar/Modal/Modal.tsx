import classNames from "classnames";
import React, { Dispatch, FC, SetStateAction, useContext, useRef } from "react";
import { ModalContext, setModalActive } from "../../../context/modalContext";
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

export const Modal:FC = () => {

    const { state:{ modalActive, calendarItem }, dispatchModal } = useContext(ModalContext)

    const modalOverlay = useRef<HTMLDivElement>(null);
    const textInp = useRef<HTMLInputElement>(null);
    const timeInp = useRef<HTMLInputElement>(null);
    const modalForm = useRef<HTMLFormElement>(null)

    const dispatch = useAppDispatch()

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === modalOverlay.current){
            dispatchModal({
                type: setModalActive,
                payload: false
            })
        }
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (calendarItem){
            
            const text = textInp.current!.value;
            const time = timeInp.current!.value;
            dispatch(addEvent({...calendarItem, time, text}));

            modalForm.current?.reset();
            dispatchModal({
                type: setModalActive,
                payload: false
            })
        }
    }

    return (
        <div onClick={handleOnClick} className={classNames(style.ModalOverlay, {[style.ModalOverlay_Active]: modalActive})} ref={modalOverlay}>
            <div className={style.Modal}>
                <form ref={modalForm} onSubmit={handleOnSubmit} className={style.ModalForm}>
                    <input ref={textInp} className={style.ModalText} type="text" placeholder="??????????????????????" />
                    <input ref={timeInp} className={style.ModalDate} type="time" placeholder="??????????" />
                    <button className={style.ModalButton}>??????????????????????</button>
                </form>
            </div>
        </div>
    )
}