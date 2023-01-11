import { useState } from "react";

export interface ICalendarEventItem{
    day?: string;
    month?: string;
    year?: string;
}
export const useModalEvent = () => {
    const [modalEventActive, setModalEventActive] = useState<boolean>(false)
    const [calendarEventItem, setCalendarEventItem] = useState<ICalendarEventItem>({})

    return {modalEventActive, setModalEventActive, calendarEventItem, setCalendarEventItem}
}