import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";




export default class EventCalender extends React.Component {

  render() {
    return (
      
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridWeek"

        weekends={false}

        
        
      /> 

    )
  } 
}