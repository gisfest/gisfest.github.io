import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Hackathon.css';
import {hackathonPrizeDetails} from '../../utils/data';
import Deadline from '../../components/Deadline/Deadline';
import { Icon } from '@iconify/react';

const Hackathon = () => {
  return (
    <div className="main-content" id="#top">
        <PageHeader title={'Hackathon 2022'} color={'#f49c0f'} />
        <div className='page-content grid-container column-2'>
            <div className='hackathon'> 
                <div className='hackathon-goal-content'>
                <div>   
                    <h1>GIS Festival Hackathon "22</h1>
                    <h3>Theme: Powering Innovative Solutions with Geospatial Data and Technology</h3>
                </div> 
                <div className='hackathon-goal'>
                    <h2>Goals</h2>
                    <ul>
                        <li>To encourage problem driven solutions in the continent as there are many problems that can be solved by geospatial technology and data.</li>
                        <li>To further promote innovation thinking and the use of geospatial technology to solve global challenges, participants are encouraged to think outside the box by leveraging geospatial data and technology to create innovative solutions to pressing challenges</li>
                    </ul>
                </div>
                </div>
                <div className='Hackathon-focus-industry'>
                    <h2>Focus Industry</h2>
                    <ul className='Hackathon-focus-content'>
                        <li className='Hackathon-industry-details'>
                            <h3 className='Industry name'>Energy</h3>
                        </li>
                        <li className='Hackathon-industry-details'>
                            <h3 className='Industry name'>Environment</h3>
                        </li>
                        <li className='Hackathon-industry-details'>
                            <h3 className='Industry name'>Oil and Gas</h3>
                        </li>
                        <li className='Hackathon-industry-details'>
                            <h3 className='Industry name'>Fintech</h3>
                        </li>
                        <li className='Hackathon-industry-details'>
                            <h3 className='Industry name'>Logistics</h3>
                        </li>
                    </ul>
                </div>
                <div className='Hackathon-prize grid-container'>
                    {hackathonPrizeDetails.map((prize,id)=>{
                        return(
                            <div className='prize-card'>
                                <h3>{prize.name}</h3>
                                <ul>
                                    <Icon icon="fxemoji:trophy" className='trophy-icon' />
                                    <li className='prize-list'>
                                        <Icon icon="fluent:certificate-20-filled" inline={true} className="prize-icon" />
                                        {prize.prizeList1}
                                    </li>
                                    <li className='prize-list'>
                                        <Icon icon="fa6-solid:sack-dollar" inline={true} className="prize-icon" />
                                        {prize.prizeList2}
                                    </li>
                                </ul>
                            </div>
                        )
                            })}
                    
                </div>
                <div>
                    <h2>Helpful Tips</h2>
                    <p>Work with a team. Building innovative solutions can be daunting, working with a team will be extremely helpful in ideation and developing.</p>
                </div>
            </div>
            <Deadline day={'13'}
            month={'August'}
            year={'2022'}
            color={'#f49c0f'}
            btnText={'Register'}
            link={'https://forms.gle/vAoVBcELPoRc8vDV7'}
            />
        </div>
    </div>
  )
}


export default Hackathon
