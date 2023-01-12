import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Events{
    day?: string;
    month?: string;
    year?: string;
    time?: string;
    text?: string;
}

interface IEvent extends Object{
    events: Events[]
}

const initialState:IEvent = {
    events: Object(JSON.parse(localStorage.getItem('event')!))
}

export const eventsSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addEvent: (state, action: PayloadAction<Events>) => {
            state.events = [...state.events, action.payload];
            console.log(state.events)
            localStorage.setItem('event', JSON.stringify(state.events));
        }
    }
})

export default eventsSlice.reducer;
export const { addEvent} = eventsSlice.actions