import React from 'react';
import './Team.css';
import { teamData } from '../../utils/data';
import TeamCard from '../../components/TeamCard/TeamCard';
import PageHeader from '../../components/PageHeader/PageHeader';
import SEO from '../SEO';

const Team = () => {
  return (
    <div className="main-content" id="#top">
    <SEO title={'GIS Festival 2022 | Organizing Team'} url={'https://gisfest.org/team'}/>
        <PageHeader title={'Organizing Team'} color={'#084f41'} />
        <div className='page-content'>
          {teamData.map((Team,index) => {
                return (
                    <div key={index} className="team-content">
                      <div className="team-name flexbox">
                        <h1 className="team-title">{Team.team}</h1>
                        <img src={Team.emoji} alt="emoji" className="team-emoji"/>
                       </div>
                       <div className="team-member-card grid-container">
                        {Team.members.map((member,id)=> {
                          return (
                               <TeamCard key={id} className="Teamcard"
                               name={member.name}
                               img ={member.img}
                               twitter_link ={member.twitter}
                               linkedin_link ={member.linkedin}
                               />  
                          )
                        })}
                       </div>
                    </div>
                )
            })}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Team
