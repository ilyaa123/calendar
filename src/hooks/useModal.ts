import React, { useState } from "react"

export interface ICalendarItem extends Object{
    day: string;
    month: string;
    year: string;
}

interface IUseModal{
    modalActive: boolean;
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
    setCalendarItem: React.Dispatch<React.SetStateAction<ICalendarItem | undefined>>;
    calendarItem: ICalendarItem | undefined
}

export const useModal = (): IUseModal => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [calendarItem, setCalendarItem] = useState<ICalendarItem>()

    return {modalActive, setModalActive, setCalendarItem, calendarItem}
}