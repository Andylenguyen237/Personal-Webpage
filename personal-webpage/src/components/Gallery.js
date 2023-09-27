import React from 'react';
import { Fade } from 'react-slideshow-image';
import Carousel from 'react-bootstrap/Carousel';
import 'react-slideshow-image/dist/styles.css'
import kid from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/kid.jpg'
import family from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/family.jpg'
import pet from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/pet.jpg'
import travel from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/travel.heic'
import friend from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/f1.HEIC'
import au from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/au.jpg'
import highschool from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/highschool.jpg'
import uni from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/uni.jpg'
import unifriend from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/f3.jpg'


function Gallery() {

    const fadeImages = [
        {
          url: kid,
          caption: 'This is me 3 years old Andy'
        },
        {
          url: family,
          caption: 'My family'
        },
        {
          url: pet,
          caption: 'My awesome pet name Bon'
        },
        {
          url: travel,
          caption: 'I love travelling'
        },
        {
          url: friend,
          caption: 'This is my pack, we travel a lot'
        },
        {
          url: au,
          caption: 'I came to Australia for education since 2019'
        },
        {
          url: highschool,
          caption: 'I had 3 years at ISHCMC highschool before study abroad'
        },
        {
          url: uni,
          caption: "I'm a computer science student at the University of Melbourne"
        },
        {
          url: unifriend,
          caption: 'I love taking picture on a old film camera, this picture is captures when me and my friends had a picnic day'
        },
        
      ];
  return (
    <div className="gallery-container">
      
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <>
          
          <div key={index} className='image-container'>
            <img src={fadeImage.url} />
          </div>
          <div className='image-title'><p>{fadeImage.caption}</p></div>
          
          </>
        ))}
      </Fade>
    </div>
  )
}

export default Gallery

