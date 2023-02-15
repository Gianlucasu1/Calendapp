import React from 'react'

export const CalendarEvent = ({event}) => {
    console.log(event);
    const { title,name } = event;
    return (
        <>
            <strong>{title}</strong>
            <strong> - {name}</strong>
        </>
    )
}
