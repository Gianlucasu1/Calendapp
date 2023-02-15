import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { Navbar,CalendarEvent } from "../index"


import enUS from 'date-fns/locale/en-US'
import { localizer } from '../../helpers/'

import { getMessagesES } from '../../helpers/'


const events = [{
    title: "cumpleanos del jefe",
    note: "hay que comprar el pastel",
    name: "Gianluca",
    start: new Date(),
    end: addHours( new Date(), 2)
}]


export const CalendarPage = () => {

    const eventStyleGetter = (event,start,end,isSelected) => {
        const style = {
            backgroundColor:'#347CF7',
            borderRadius:'0px',
            opacity:0.8,
            color: 'white'
        }

    return {style}
    }

    return (
        <>
            <Navbar />
            <Calendar
                messages={getMessagesES()}
                culture='es'
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                eventPropGetter={eventStyleGetter}
                components={
                    {
                        event:CalendarEvent
                    }
                }
            />


        </>
    )
}
