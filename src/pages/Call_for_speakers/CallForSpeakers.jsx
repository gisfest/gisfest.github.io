import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './CallForSpeakers.css';
import { FaMicrophoneAlt, FaLocationArrow } from 'react-icons/fa';
import {CallForSpeakersSessionDetails} from '../../utils/data';


const CallForSpeakers = () => {

  return (
    <div className="main-content" id="#top">
      <PageHeader title={'Call for Speakers'} color={'#62156f'} />
      <div className='page-content grid-container column-2'>
        <div className='paper-info'>
          <div className='speaker-requirements'>
            <h1>Speaker Session! <FaMicrophoneAlt /></h1>
            <p> Call for speakers is open for the Workshop and the Geo- Innovation session of the conference.</p>
          </div>
          <div className='speaker-requirements'>  
                {CallForSpeakersSessionDetails.map((speaker,id)=>{
                  return(
                    <div className="session-type">
                      <h2>{speaker.sessionType}</h2>
                      <p>{speaker.sessionInfo}</p>
                      {speaker.sessionAreas.map((sessionArea, id)=> {
                        return (
                          <div className="session-area">
                            <div className="flextext">
                              <FaLocationArrow className='arrow-icon'/>
                              <h3>{sessionArea.Name}</h3>
                            </div>
                            <p>{sessionArea.Description}</p>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
          </div>
        </div>
        <div className='column'>
           <div className='poster-deadline'>
              <h1>Deadline</h1>
              <h3>17th</h3>
              <h3>August</h3>
              <h3>2022</h3>
           </div>
              <a href='https://forms.gle/vAoVBcELPoRc8vDV7' target={'blank_'}>
              Submit Session
              </a>
        </div>
      </div>  
    </div>
  )
}

export default CallForSpeakers