/// import team emoji

import logistics from '../media/icons/emoji/logistic.svg';
import tech from '../media/icons/emoji/tech.svg';
import media from '../media/icons/emoji/media.svg';
import inivitation from '../media/icons/emoji/invitation.svg';
import funds from '../media/icons/emoji/funds.svg';
import speaker from '../media/icons/emoji/speaker.svg';
import budget from '../media/icons/emoji/budget.svg';


/// import team pictures
import ademoyero from '../media/images/team/ademoyero_victor.webp';
import akintola_mercy from '../media/images/team/akintola_mercy.webp';
import akintola_omowonuola from '../media/images/team/akintola_omowonuola.webp';
import emmanuel_jolaiya from '../media/images/team/emmanuel_jolaiya.webp';
import fortune_emeka from '../media/images/team/fortune_emeka.webp';
import joseph_aro from '../media/images/team/joseph_aro.webp';
import juwon_ishola from '../media/images/team/juwon_ishola.webp';
import oladejo_olasunkanmi from '../media/images/team/oladejo_olasunkanmi.webp';
import justice_obaje from '../media/images/team/justice_obaje.webp';
import shehu_muhammed from '../media/images/team/shehu_muhammed.webp';
import oluwadamilola_salua from '../media/images/team/oluwadamilola_salau.webp';



// Social media data 

export const socialMediaLinks=[
    {
        "social":"Gmail",
        "url":"mailto:support@gisfest.org",
        "handle":"GIS Festival"
    },
    {
        "social":"Linkedin",
        "url":"https://www.linkedin.com/in/gis-fest-352a3323b/",
        "handle":"GIS Festival"
    },
    {
        "social":"Instagram",
        "url":"https://instagram.com/gisfest",
        "handle":"gisfest"
    },
    {
        "social":"Twitter",
        "url":"https://twitter.com/gis_fest",
        "handle":"gis_fest"
    },
    {
        "social":"Github",
        "url":"https://github.com/gisfest/gisfest.github.io",
    }

]

// Page Navigation links for Header

export const MenuItems=[
    {
       "title": "Home",
       "url": "/#top",
       "cName": "nav-link"
    },
    // {
    //     "title": "Schedule",
    //     "url": "/schedule",
    //     "cName": "nav-link"
    //  },
    //  {
    //     "title": "Travel",
    //     "url": "/travel",
    //     "cName": "nav-link"
    //  },
    //  {
    //     "title": "Hackhathon",
    //     "url": "/hackathon",
    //     "cName": "nav-link"
    //  },
    
    //  {
    //     "title": "Gallery",
    //     "url": "/gallery",
    //     "cName": "nav-link"
    //  },
     {
        "title": "FAQS",
        "url": "/faqs#top",
        "cName": "nav-link"
     },
    //  {  
    //     "title": "Call for Paper",
    //     "url": "/CallForPaper",
    //     "cName": "nav-link"
    //  },
     {
        "title": "Team",
        "url": "/team#top",
        "cName": "nav-link"
     },
       
]

// Page Navigation links for Footer

export const footerMenuItems = [
  
    {
        "title": "Subscribe",
        "url": "/#email-subscription",
        "sign": "|"
     },
     {
        "title": "Organizing Team",
        "url": "/team#top",
        "sign": "|"
     },
    //  {
    //     "title": "Schedule",
    //     "url": "/schedule",
    //     "sign": "|"
    //  },
    //  {
    //     "title": "Hackathon",
    //     "url": "/hackathon",
    //     "sign": "|"
    //  },
    //  {
    //     "title": "Travel",
    //     "url": "/travel",
    //     "sign": "|"
    //  },
    //   {
    //     "title": "Gallery",
    //     "url": "/gallery",
    //     "sign": "|"
    //  },
     {
        "title": "FAQS",
        "url": "/faqs#top"
     },
]

// All Team's data 

export const teamData = [
     // Logistics Team - (1 member)
        {
        "team":"Logistics",
        "emoji":logistics,
        "members":[
            {
                "name":"Mercy Akintola",
                "twitter":"http://twitter.com/Mercixs20",
                "linkedin":"http://linkedin.com/in/akintola-mercy/",
                "img": akintola_mercy
            }
        ]
    }, 
     // Speakers engagement Team - (2 member)
    {
        "team":"Speakers engagement",
        "emoji":speaker,
        "members":[
            {
                "name":"Omowonuola Akintola",
                "twitter":"http://twitter.com/Svelte_mo",
                "linkedin":"http://linkedin.com/in/omowonuolaakintola/",
                "img": akintola_omowonuola
            },{
                "name":"Emeka Igwe",
                "twitter":"http://twitter.com/",
                "linkedin":"http://linkedin.com/in/chukwuemeka-igwe-34819593",
                "img": fortune_emeka
            }
        ]
    },
     // Invitation   Team - (1 member)
    {
        "team":"Invitation & Registration",
        "emoji":inivitation,
        "members":[
            {
                "name":"Justice Obaje",
                "twitter":"http://twitter.com/Joaiservices",
                "linkedin":"http://linkedin.com/in/justice-obaje-81781023b",
                "img": justice_obaje
            }
        ]
    },
     // Fundraising and Sponsorship  Team - (1 member)
    {
        "team":"Fundraising & Sponsorship",
        "emoji":funds,
        "members":[
            {
                "name":"Joseph Aro ",
                "twitter":"http://twitter.com/joceemycin",
                "linkedin":"http://linkedin.com/in/joseph-aro-923ab453/",
                "img": joseph_aro
            } 
        ]
    },
       // Design and Tech. Team - (3 members)
    {
        "team":"Design and Tech",
        "emoji":tech,
        "members":[
            {
                "name":"Emmanuel Jolaiya",
                "twitter":"http://twitter.com/jeafreezy",
                "linkedin":"http://linkedin.com/in/emmanueljolaiya/",
                "img": emmanuel_jolaiya
            },{
                "name":"Victor Ademoyero ",
                "twitter":"http://twitter.com/vickystickz",
                "linkedin":"http://linkedin.com/in/victorademoyero/",
                "img": ademoyero
            },{
                "name":"Olasunkanmi Oladejo",
                "twitter":"http://twitter.com/Eaglekonnect",
                "linkedin":"http://linkedin.com/oladejoolasunkanmi",
                "img": oladejo_olasunkanmi
            }
        ]
    },
       // Budget Team - (1 member)
    {
        "team":"Budget",
        "emoji":budget,
        "members":[
            {
                "name":"Oluwadamilola Salau",
                "twitter":"http://twitter.com/Damixlove/",
                "linkedin":"http://linkedin.com/in/oluwadamilola-salau/",
                "img": oluwadamilola_salua
            }
        ]
    },
    // Media Team - (2 members)
    {
        "team":"Media",
        "emoji":media,
        "members":[
            {
                "name":"Juwon Ishola",
                "twitter":"http://twitter.com/Thajadens_",
                "linkedin":"http://linkedin.com/in/juwon-ishola-556471184/",
                "img": juwon_ishola
            },{
                "name":"Shehu Muhammed",
                "twitter":"http://twitter.com/sanizy1",
                "linkedin":"linkedin.com/in/shehu-sani-49b327154",
                "img": shehu_muhammed 
            }
        ]
    }
]


export const FAQData = [
    {
        "id": 0,
        "Question":"When and where will GISFest take place?",
        "Answer":"GISFest will take place on the 11-12th of November. The conference will take place at Lagos, Nigeria."
    },
    {
        "id": 1,
        "Question":"What is the ticket cost for GISFest?",
        "Answer":"The ticket cost is $10USD for students and $30 for Professionals. Transactions will be charged in your local currency."
    },
    {
        "id": 2,
        "Question":"What is included in the ticket?",
        "Answer":"You will receive access to GISFest (in-person) including the hackathon, trainings, certification, workshops, all sessions, all meals and all social activities."
     },
    {
        "id": 3,
        "Question":"What is the refund policy?",
        "Answer":"Tickets are non-refundable, but they are transferable. In case of emergencies, please email support@gisfest.org."
    },
    {
        "id": 4,
        "Question":"What is the refund policy?",
        "Answer":"Tickets are non-refundable, but they are transferable. In case of emergencies, please email support@gisfest.org."
    },
    {
        "id": 5,
        "Question":"How do I become a Speaker?",
        "Answer":"Submit your session ideas to the call for proposals by September 31st, 2022."
    },
    {
        "id": 6,
        "Question":"How do I become a Sponsor?",
        "Answer":" If you have questions about sponsorship, please email sponsor@gisfest.org."
    },
    {
        "id": 7,
        "Question":"Will sessions be recorded?",
        "Answer":"All conference sessions at GISFest 2022 will be recorded and available to attendees after the event."
    },
    {
        "id": 8,
        "Question":"I am coming from abroad and will need invitation letter for Visa application, what is the procedure?",
        "Answer":`Please send a request to visa@gisfest.org and include the following (Full name of person for whom you are requesting the letter, Date of Birth,
            Passport Number and include Country of Issuance, issue date and expiration date, Job Title, Company Name)`
    },
    {
        "id": 9,
        "Question":"Who should I contact if I have questions?",
        "Answer":`Please email support@gisfest.org if you have questions.`
    },  

]



export const agendaData = [
    {
        "day": "DAY 1: November 1st",
        "timeContent": [
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Mapping ",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Mapping | Cartography | Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Career",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Mapping | Cartography | Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            
        ]
    },
    {
        "day": "DAY 2: November 2nd",
        "timeContent": [
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Mapping | Cartography | Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Mapping | Cartography | Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Mapping | Cartography | Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Mapping | Cartography | Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            {
                "time": "10:00 am",
                "title": "Opening Speech",
                "Speaker": "John Oluwatoba",
                "tag": "Web mapping",
                "sessionTitle": "lessons learned from a building footprints import",
                "sessionContent": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database."
            },
            
        ]

    }
]


export const speakerData = [
    {
        "name": "Claire Halleux",
        "bioData": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database.",
        "lesson": "Lessons learned from a building footprints import",
        "picture": oluwadamilola_salua

    },
    {
        "name": "Claire Halleux",
        "bioData": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database.",
        "lesson": "Lessons learned from a building footprints import",
        "picture": oluwadamilola_salua

    },
    {
        "name": "Claire Halleux",
        "bioData": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database.",
        "lesson": "Lessons learned from a building footprints import",
        "picture": oluwadamilola_salua

    },
    {
        "name": "Claire Halleux",
        "bioData": "From mid-2020 to 2021, a number of mappers in both Uganda and the DRC joined a participatory buildings footprint import. The data was produced by Ecopia based on an imagery mosaic provided by Maxar and contained more than 6.6 millions building footprints. During this session, we’ll explain what worked well and less well and what we learned from the process of integrating this data into the OpenStreetMap database.",
        "lesson": "Lessons learned from a building footprints import",
        "picture": oluwadamilola_salua

    }
]