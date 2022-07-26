import React from 'react';
import './Gallery.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import pic_1 from "../../media/images/gallery/Rectangle_36.jpg"
import pic_2 from "../../media/images/gallery/Rectangle_37.jpg"
import pic_3 from "../../media/images/gallery/Rectangle_38.jpg"
import pic_4 from "../../media/images/gallery/Rectangle_39.jpg"
import pic_5 from "../../media/images/gallery/Rectangle_40.jpg"
import pic_6 from "../../media/images/gallery/Rectangle_41.jpg"
import pic_7 from "../../media/images/gallery/Rectangle_42.jpg"
import pic_8 from "../../media/images/gallery/Rectangle_43.jpg"
import pic_9 from "../../media/images/gallery/Rectangle_44.jpg"
import pic_10 from "../../media/images/gallery/Rectangle_45.jpg"
import SEO from '../SEO';

const Gallery = () => {
  return (
    <div className="main-content" id="#top">
    <SEO title={'Gallery -- GIS Festival 2022'} url={'https://gisfest.org/gallery'}/>
        <PageHeader title={'Gallery'} color={'#084f41'} />
        <div className='gallery-conatiner page-content  grid-container'>
            <div className='picture'>
                <img src={pic_1} alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_2}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_3}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_4}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_5}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_6}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_7}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_8}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_9}  alt="gallery one" />
            </div>
            <div className='picture'>
                <img src={pic_10}  alt="gallery one" />
            </div>
        </div>
    </div>
  )
}

export default Gallery
