import React from 'react'
import Footer from '../components/Footer'
import wehi from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/experiences/wehi.jpeg'
import itg from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/experiences/itg.webp'
import longbeachplace from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/experiences/longbeachplace.jpeg'

function Experiences() {
  return (
    <>
        <div className='info-container'>
        <img src={wehi} className='work-img'></img>
        <div className='work-body'>
          <a href='https://www.wehi.edu.au/?gclid=CjwKCAjwgsqoBhBNEiwAwe5w01SQDzMVU7XUkfnzpRIlBBylQrIFtbBgMLoJPgwZ_ZdiqaStHACVFxoCU7sQAvD_BwE' target="_blank"><h2>WEHI - Walter and Eliza Hall Institute of Medical Research</h2></a>
        </div>
        </div>

        <div className='info-container'>
        
        <div className='work-body'>
          <a href='https://itgtechnology.vn/en/' target="_blank"><h2>ITG Technology</h2></a>
        </div>
        <img src={itg} className='work-img'></img>
        </div>

        <div className='info-container'>
        <img src={longbeachplace} className='work-img'></img>
        <div className='work-body'>
          <a href='https://www.longbeachplace.org.au/' target="_blank"><h2>LongBeachPlace Inc.</h2></a>
        </div>
        </div>

      <div className='footer-section'><Footer></Footer></div>

    </>
  )
}

export default Experiences