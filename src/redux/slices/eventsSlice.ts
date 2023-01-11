import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Events{
    day: string;
    month: string;
    year: string;
    time: string | undefined;
    text: string | undefined;
}

interface IEvent extends Object{
    events: Events[]
}

const initialState:IEvent = {
    events: []
}

export const eventsSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addEvent: (state, action: PayloadAction<Events>) => {
            state.events = [...state.events, action.payload]
        }
    }
})

export default eventsSlice.reducer;
export const { addEvent} = eventsSlice.actions