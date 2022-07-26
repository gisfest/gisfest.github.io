import React from 'react';
import './Travel.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import SEO from '../SEO';

const Travel = () => {
  return (
    <div className="main-content" id="#top">
    <SEO title={'Travel -- GIS Festival 2022'} url={'https://gisfest.org/travel'}/>
        <PageHeader title={'Travel'} color={'#62156f'} />
        <div className='page-content travel-guide-container'>
            <div className='travel-content'>
                <h2>NIGERIA BASICS</h2>
                <p>Nigeria is one of the liveliest places in Africa that continues to attract visitors from different parts of the world with a population of over 170 million people. Nigeria comprises of 36 states with beautiful beaches, ultra-modern city centers, houses built with opulent luxury, great architecture, scenic attraction sites, universities, museums, national parks, zoos, hotels, resorts and many other amenities visitors see.</p>
            </div>
            <div className='travel-content'>
                <h2>COVID GUIDELINES</h2>
                <p>We intend to strictly observe all COVID-19 guidelines throughout the duration of the festival. Please endeavour to observe the following guidelines:</p>
                <ul>
                    <li>All attendees are to wear a nose mask during the festival.</li>
                    <li>Social distancing will be maintained in all the halls used for the festival.</li>
                    <li>For attendees and speakers travelling to Nigeria, you must complete an online declaration form</li>
                    <li>Upload a copy of a negative PCR COVID-19 test, and book post-arrival tests via the online portal. Once you have done this, you will be issued with a “permit to travel” via the portal.</li>
                </ul>
                <p>The following protocols are in place for travellers to Nigeria:</p>
                <ul>
                    <li>All travellers arriving in Nigeria must present a negative COVID-19 PCR test result conducted no more than 48 hours before departure. For passengers with multiple connections before arrival in Nigeria,the PCR test must be valid within 48 hours of boarding from the first point of departure.</li>
                    <li>All travellers are required to do a COVID-19 PCR test on day 2 after arrival. Unvaccinated and partially vaccinated (1 dose only) travellers are required to self-isolate for 7 days and to do a COVID-19 test on day 2 and day 7 after arrival in order to exit isolation.</li>
                    <li>All outbound travellers departing Nigeria must present evidence of full COVID-19 vaccination OR a negative COVID-19 PCR test conducted no more than 48 hours before departure. This must be done regardless of the entry requirements of the destination country</li>
                </ul>
            </div>
            <div className='travel-content'>
                <h2>VISA INFORMATION</h2>
                <p>Are you a citizen of a Benin, Burkina Faso, Cameroon, Cape Verde, Chad, Côte d'ivoire, Gambia, Ghana? Then you do not require a visa to visit Nigeria. Citizens of all other countries require a visa obtainable from any Nigerian Embassy or Consulate close to them. Kindly visit here to apply for Visa. If you have an African passport, you can visit here here to apply for Visa-on-Arrival (VoA). You will also be required to have proof of polio, yellow fever, and Covid19 vaccinations to enter Nigeria.</p>
            </div>
            <div className='travel-content'>
                <h2>AIRPORT AND TRAVEL</h2>
                <p>All international travel will be through Murtala Muhammed International Airport, Lagos main international airport. Major airlines provide daily services to many international destinations. The airport is about 17-24 minutes’ drive from Zone Tech Park, the conference venue. Some hotels also offer pick-up services and we encourage participants with such options to use the services. Airport pick-up will be available on request for attendees arriving from the 23rd of March, 2022. Please email the event organizers with your arrival details ahead of time to allow us to plan for pick-ups. Taxis are also available in addition to Uber and Bolt services.</p>
            </div>
            <div className='travel-content'>
                <h2>ADVICE FOR INTERNATIONAL VISITORS</h2>
                <p>We are super excited about your visit and we can’t wait to welcome you to the OSCA FESTIVAL. Please read this information carefully, and check every item. Some of it is crucial and it will help you have a better travel process.</p>
                <div>
                    <h3>Visa:</h3>
                    <p>You may need a visa to enter Nigeria. You must check this, otherwise, you will likely be denied entry, or probably not even be allowed to board your plane. If you have any questions, please contact us immediately.</p>
                </div>
                <div>
                    <h3>Vaccination certificate: </h3>
                    <p>You must have yellow fever, polio vaccination, and Covid19 certificate to enter Nigeria. Otherwise, you will likely be denied entry. Please ensure you have this in advance, do not leave it until the last minute. Other optional certificates include Hepatitis A, Tetanus, and Typhoid. Malaria precautions: All of Nigeria, including Lagos, is indicated as a high-risk zone for malaria. Travelers are advised to take antimalarial medication such as Malarone (atovaquone/proguanil hydrochloride) and other precautions. After sunset, avoid mosquito bites by covering up with clothing (long sleeves, long trousers), using insect repellents on exposed skin, and when necessary: sleeping under a mosquito net. Ensure to bring the appropriate clothing and creams.</p>
                </div>
                <div>
                    <h3>Arrival times: </h3>
                    <p>We hope to co-ordinate transport on arrival at the airport for some groups. We might not be able to do this for everyone, but please let us know:</p>
                    <ul>
                        <li>The date and time of your arrival in Nigeria</li>
                        <li>The date and time of your departure from Nigeria</li>
                        <li>Your airline and flight numbers</li>
                        <li>Your accommodation location</li>
                        <li>We will help if we can, please provide this information in good time.</li>
                    </ul>
                </div>
                <div>
                    <h3>Movies Recommendation: </h3>
                    <p>You can watch any of the following Nigerian movies on Netflix if you can to get a feel of the vibe of urban Nigeria.</p>
                    <ul>
                        <li>The Wedding Party</li>
                        <li>Up North</li>
                        <li>Fifty</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Travel
