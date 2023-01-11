import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

interface ICalendar{
    year: string;
    month: string;
}

const initialState:ICalendar = {
    year: moment().year().toString(),
    month: moment().month().toString(),
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        removeYear: (state) => {
            state.year = moment(state.year).clone().subtract('years', 1).year().toString();
        },
        addYear: (state) => {
            state.year = moment(state.year).clone().add('years', 1).year().toString();
        },
        removeMonth: (state) => {
            state.month = moment(Number(state.month) + 1, 'MM').clone().subtract(1, 'months').month().toString()
        },
        addMonth: (state) => {
            state.month = moment(Number(state.month) + 1, 'MM').clone().add(1, 'months').month().toString()  
        },
    }
})

export default calendarSlice.reducer;
export const { removeYear, addYear, removeMonth, addMonth} = calendarSlice.actions