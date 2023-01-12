import { createContext, Dispatch, Reducer } from "react"

export const setModalEventActive = 'setModalEventActive';
export const setCalendarEventItem = 'setCalendarEventItem';
export const setModalActive = 'setModalActive';
export const setCalendarItem = 'setCalendarItem';

type EventItem = {
    year?: string,
    month?: string,
    day?: string
}

interface ActionToModal{
    type: 'setModalEventActive' | 'setModalActive';
    payload: boolean;
}

interface ActionToCalendar{
    type: 'setCalendarEventItem' | 'setCalendarItem';
    payload: EventItem;
}

type Action = ActionToModal | ActionToCalendar;

interface IModal{
    modalActive: boolean;
    modalEventActive: boolean;
    calendarItem: EventItem;
    calendarEventItem: EventItem;
}

export const initialState: IModal = {
    modalActive: false,
    modalEventActive: false,
    calendarItem: {},
    calendarEventItem: {}
}

export const ModalContext = createContext<{
    state: IModal;
    dispatchModal: Dispatch<Action>;
  }>({
    state: initialState,
    dispatchModal: () => null
  });

export const reducer:Reducer<IModal, Action> = (state, action): IModal => {
    const { type, payload } = action;
    switch(type){
        case setModalActive:
            return {...state, modalActive: payload}
        case setModalEventActive:
            return {...state, modalEventActive: payload}
        case setCalendarEventItem:
            return {...state, calendarEventItem: payload}
        case setCalendarItem:
            return {...state, calendarItem: payload}
        default:
            return state
    }
    
}