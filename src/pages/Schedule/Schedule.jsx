  import React, { useState } from 'react';
import './Schedule.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import { agendaData, speakerData } from '../../utils/data';
import SEO from '../SEO';

const Schedule = () => {
  const types = ['Agenda', 'Sessions', 'Speakers']
  const[active, setActive] = useState(types[0])


  return (
    <div className="main-content" id="#top">
    <SEO title={'Schedule -- GIS Festival 2022'} url={'https://gisfest.org/schedule'}/>
      <PageHeader title={'Schedule'} color={'#084f41'} />
      <div className='page-content schedule-container '>              
              <div className='flexbox navigation'>
                {types.map((type,index) => {
                  return (
                <div key={index} onClick={() => setActive(type)} className={active === type ? "button active-button" : "button"}>{type}</div>
                )
                })}
               </div>
              {active === "Agenda" ? 
              <div className='agenda-content'>
                {agendaData.map((agendaItem, index) => {
                  return (
                    <div key={index} className="agenda-day-content">
                      <div className='date-container'>{agendaItem.day}</div>
                      {agendaItem.timeContent.map((agendaSchedule,id) => {
                        return (
                          <div className='agenda-schedule-container'>
                            <div key={id} className='agenda-time'>{agendaSchedule.time}</div>
                            <div className='agenda-schedule-content'>
                              <h3>{agendaSchedule.title}</h3>
                              <p>{agendaSchedule.Speaker}</p>
                            </div>
                          </div>
                        )
                      })}
                       
                    </div>
                  )
                })}

              </div> :""}

              {active === "Speakers" ? 
              <div className='speakers-content'>
                {speakerData.map((speaker, index)=> {
                  return(
                    <div key={index} className='speaker-container'>
                      <div className='speaker-picture'>
                        <img src={speaker.picture} alt={speaker.name}/>
                      </div>
                        <div className='speaker-details-content'>
                          <h3>{speaker.name}</h3>
                          <p>{speaker.bioData}</p>
                          <p>{speaker.lesson}</p>
                        </div>
                    </div>
                  )
                })}
              </div> :""}

              {active === "Sessions" ? 
               <div className='agenda-content'>
               {agendaData.map((agendaItem, index) => {
                 return (
                   <div key={index} className="agenda-day-content">
                     <div className='date-container'>{agendaItem.day}</div>
                     {agendaItem.timeContent.map((agendaSchedule,id) => {
                       return (
                         <div className='agenda-schedule-container'>
                           <div key={id} className='agenda-time'>{agendaSchedule.time}</div>
                           <div className='agenda-schedule-content'>
                             <h3>{agendaSchedule.sessionTitle}</h3>
                             <p className='session-speaker'>{agendaSchedule.Speaker}</p>
                             <p className='session-content'>{agendaSchedule.sessionContent}</p>
                             <p className='session-tag'>{agendaSchedule.tag}</p>
                           </div>
                         </div>
                       )
                     })}
                      
                   </div>
                 )
               })}

             </div> :""}
      </div>
    </div>  
  )
} 
export default Schedule
