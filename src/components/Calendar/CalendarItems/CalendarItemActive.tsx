import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";
import { ICalendarItem, useModal } from "../../../hooks/useModal";
import { ICalendarEventItem, useModalEvent } from "../../../hooks/useModalEvent";
import { Events } from "../../../redux/slices/eventsSlice";
import { CalendarEvent } from "../CalendarEvent/CalendarEvent";

type Item = {
    day: string;
    month: string;
}

interface CalendarItemActiveProps{
    item: Item;
    style: any;
    day: string;
    month: string;
    year: string;
    events: Events[];
    i: number;
    setModalActive: Dispatch<SetStateAction<boolean>>;
    setCalendarItem: Dispatch<SetStateAction<ICalendarItem>>;
    setModalEventActive: Dispatch<SetStateAction<boolean>>;
    setCalendarEventItem: Dispatch<SetStateAction<ICalendarEventItem>>;
}

export const CalendarItemActive:FC<CalendarItemActiveProps> = ({
    item, 
    style, 
    day, 
    month, 
    year, 
    events, 
    i, 
    setModalActive, 
    setCalendarItem, 
    setModalEventActive, 
    setCalendarEventItem}) => {

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