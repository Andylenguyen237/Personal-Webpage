import React from 'react'
import ParticlesComponent from '../components/Particles'
import Footer from '../components/Footer'
import andy from '../images/intro.JPG'
import Typewriter from 'typewriter-effect'
import { Button } from 'react-bootstrap'

function home() {

  const introduction = ""
  return (
    <>
    <div className='introduction'>
        <h1>
            Hey there, I'm Andy 
        </h1>
        <button>So</button>
        <ParticlesComponent id="tsparticles" />
        
        </div>
    {/* About section */}
    <div id="about" className='about-section'>

      <div className='about-container'>
        <div className='about-container-text'>
        <Typewriter
            options={{
              autoStart:true,
              loop:true,
              delay:80,
              strings: ["I'm Andy, a Software Developer"]
            }}
          />
          <h3>
            I'm currently a last year Computer Science student studying at the University of Melbourne. As a student I have rich working experiences as an Software/Data Engineer intern at Walter and Eliza Hall Institute of Medical Research and Software Engineer at ITG.{'\n\n'}
            During my uni-year, I've done over 10+ projects and accomplished as top 5 project in WIT Hackathon 2021
          </h3>
          <Button>S</Button>
        </div>
        <img src={andy}></img>
      </div>
              
      
    </div>
    
    <div className='footer-section'></div>
    <Footer></Footer>

    
    </>
  )
}

export default home