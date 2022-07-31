import React from 'react';
import Deadline from '../../components/Deadline/Deadline';
import PageHeader from '../../components/PageHeader/PageHeader';
import { talkTypes, workshopTypes } from '../../utils/data';
import './CallForSpeakers.css';


const CallForSpeakers = () => {

  return (
    <div className="main-content" id="#top">
      <PageHeader title={'Call for Speakers'} color={'#62156f'} />
      <div className='page-content grid-container column-2'>
        <div className='paper-info'>
          <div className='paper-requirements'>
            <h1>Submit an Abstract</h1>
            <p>GISfest is a conference bringing together geospatial professionals and enthusiasts in Africa and beyond to discuss geospatial technologies and it applications in numerous industries. This event is primed to put a spotlight on geospatial technology with respect to modern tools and innovation. 
              We aspire to organize GISfest with a wide range of trending topics that will put a spotlight on innovation and inspire participants to gather ideas for their own use-cases.</p>
            <p>This 2 days event will feature workshops, presentations, panel discussions, hackathons and will provide a good way to connect with community members from all over Africa.</p>

          </div>
          <div className='paper-requirements'>
            <h1>Tracks</h1>
            <p>We are accepting abstract submission for the following tracks: (More details below)</p>
            
            <ul>
              <li>Geospatial Development (GeoDev)</li>
              <li>Spatial Analytics</li>
              <li>Geo AI</li>
              <li>Cloud Computing</li>
              <li>Geospatial Innovation </li>
            </ul>
          </div>
          <div className='paper-requirements'>
            <h1>Submission Types</h1>
            <ul>
              <li>Workshop (1hr)</li> 
              <li>Talk (25 mins, 5 mins Q&A)</li>
            </ul>
          </div>
          <div className='paper-requirements'>
          <h1>WorkShops</h1>
          <p>We are looking for workshop focused on the following areas:</p>
          <ul>
          {
            workshopTypes.map((talk,id)=>(
              <>
                <li key={id} style={{fontWeight:'bold'}}>{talk.title}</li>
                <p>{talk.description}</p>
              </>
              
            ))
          }
          </ul>
          </div>

          <div className='paper-requirements'>
              <h1>Talks</h1>
              <p>Share Innovative/Enterprise use case of geospatial technology/Innovative solution integrating geospatial technology. For this session, we want to focus on Geo-Innovation.</p>
              <p>We are looking for startup and enterprise in the following (but not limited) sectors:</p>
              <ul>
                {
                  talkTypes.map((talk,id)=>(
                    <li key={id}>{talk}</li>
                  ))
                }
              </ul>
          </div>
        </div>
        <Deadline
          day={'13'}
          month={'August'}
          year={'2022'}
          color={'#62156f'}
          btnText={'Submit Now!'}
          link={'https://bit.ly/gisfest'}
        />
      </div>  
    </div>
  )
}

export default  CallForSpeakers;