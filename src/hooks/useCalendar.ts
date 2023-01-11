import moment from "moment";

export const useCalendar = (month:string, year:string) => {
    console.log(month, year)
    const startDay = moment(`${Number(month) + 1}.${year}`, 'MM.YYYY').clone().startOf('month').startOf('week');
    const endDay = moment(`${Number(month) + 1}.${year}`, 'MM.YYYY').clone().endOf('month').endOf('week');

    const calendar = [];
    const day = startDay.clone();

    while(!day.isAfter(endDay)){
        calendar.push({
            day: day.clone().format('DD'),
            month: day.clone().format('MM'),
        })
        day.add(1, 'day')
    }
    
    return calendar
}