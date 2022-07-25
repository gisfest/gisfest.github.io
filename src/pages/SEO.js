import React from "react";
import {Helmet} from "react-helmet";
const SEO = ({title,url})=>{

    return(

        <Helmet>
            <title>{title}</title>
            <meta name="title" content={title}></meta>
            <meta name="description" content="GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries."></meta>
            <meta name="keywords" content="Meetup, Africa GIS, GIS, Conference,Gathering" />
        
            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content={url}></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content="GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries."></meta>
            <meta property="og:image" content="https://gisfest.org/assets/og-image.png"></meta>
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        
            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:url" content={url}></meta>
            <meta property="twitter:title" content={title}></meta>
            <meta name="twitter:creator" content="@gis_fest" />
            <meta name="twitter:image:alt" content="GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries." />
            <meta property="twitter:description" content="GISfest is a conference bringing together geospatial professionals and enthusiasts to discuss geospatial technologies and it applications in numerous industries."></meta>
            <meta property="twitter:image" content="https://gisfest.org/assets/og-image.png"></meta>

            {/*Global site tag (gtag.js) - Google Analytics*/}

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3M4L6S7Z2"></script>
        </Helmet>
    )
}


export default SEO;