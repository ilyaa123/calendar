import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calendarReducer from './slices/calendarSlice'
import eventReducer from './slices/eventsSlice'

const rootReducer = combineReducers({
    calendar: calendarReducer,
    events: eventReducer
})

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
