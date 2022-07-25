import React, {useEffect } from "react";
import EmailSubscription from "../../components/EmailSubscription.jsx/EmailSubscription";
import './home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from '../SEO'

const HomePage = () =>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return(
            <div className="home-container">
            <SEO title={'GIS Festival 2022'} url={'https://gisfest.org'}/>
                <div className="hero" id="top">
                    <div className="hero-content">
                        <div>
                            <img src="/assets/logo_colored.png" alt="Background"></img>
                        </div>
                        <div className="hero-info">
                            <h2>11 - 12th | November, 2022.</h2>
                            <h2>Lagos, Nigeria.</h2>
                        </div>
                    </div>
                </div>

                <main>
                    <aside>
                        <h1>LEARN.</h1>
                        <h1>NETWORK.</h1>
                        <h1>Discover.</h1>
                    </aside>
                    <aside className="main-about"> 
                        <p>GISfest is a conference bringing together geospatial professionals and enthusiasts in Africa and beyond to discuss geospatial technologies and its applications in numerous industries. This event is primed to put a spotlight on geospatial technology with respect to modern tools and innovation.
                        This 2 days event will feature workshops, presentations, panel discussions, hackathons and will provide a good way to connect with community members from all over Africa.</p>
                    </aside>
                </main>
    
                <EmailSubscription />
            </div>
    )
}

export default HomePage;