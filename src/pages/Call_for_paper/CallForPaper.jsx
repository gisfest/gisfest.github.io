import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './CallForPaper.css';


const CallForPaper = () => {

  return (
    <div className="main-content" id="#top">
      <PageHeader title={'Call for Academic Paper'} color={'#62156f'} />
      <div className='page-content grid-container column-2'>
        <div className='paper-info'>
          <div className='paper-requirements'>
            <h1>Submit a poster today!</h1>
            <p>Building on previous State of the Map culture, we love to hear what has been done with OpenStreetMap data, but we also love seeing it too. Therefore, we invite you to participate in our poster exhibition for the virtual State of the Map 2020!</p>
            <p>Your poster could show how well your home region is mapped, it could be a beautiful new style or map. 
              It might focus on a community project or statistics, it might be a poster explaining and inviting people to OpenStreetMap. 
              What’s important, is we want it to be about OSM. We’re also welcoming academic posters about research around OpenStreetMap data.
            </p>
          </div>
          <div className='paper-requirements'>
            <h1>Rules for submission</h1>
            <ul>
              <li>Poster should be for A0 size (841×1189mm)</li>
              <li>Poster should be related to OpenStreetMap</li>
              <li>Poster should be open, innovative and transparent (no-copying)</li>
              <li>Poster must be your own work (individual, team or institution)</li>
              <li>Poster should been under open licence (CC-BY-SA 3.0 or later recommended or CC0 :)</li>
              <li>Maximum 2 entries per person, team or institution</li>
            </ul>
          </div>
          <div className='paper-requirements'>
            <h1>How to enter ?</h1>
            <ul>
              <li>Upload your poster to OSM wiki, attach to email, or provide a download link.</li>
              <li>File size maximum 30-40 MB</li>
              <li>Format should be in PDF</li>
              <li>Please send an email to sotm@openstreetmap.org with a description of your poster, for the example the background of the project or whatever you find important to mention in the context of the poster - all what you would tell people if you show them your poster.
                 We will publish this text together with the poster at the SotM website.</li>
            </ul>
            <p></p>
          </div>
        </div>
        <div className='column'>
           <div className='poster-deadline'>
              <h1>Deadline</h1>
              <h3>18th</h3>
              <h3>December</h3>
              <h3>2022</h3>
           </div>
        </div>
      </div>  
    </div>
  )
}

export default  CallForPaper