import React from 'react'
import ParticlesComponent from '../components/Particles'
import Footer from '../components/Footer'
import andy from '../images/andy1.png'
import Typewriter from 'typewriter-effect'

function home() {

  const introduction = ""
  return (
    <>
    <div className='introduction'>
        <h1>
            Hey there, I'm Andy 
        </h1>
        <ParticlesComponent id="tsparticles" />

    {/* About section */}
    <div className='about-section'>
      <h2 id="about"></h2>
      
      <div className='about-container'>
        <div className='about-container-text'>
        <Typewriter
            options={{
              autoStart:true,
              loop:true,
              delay:80,
              strings: ["I'm a Software Developer"]
            }}
          />
          <h3>
            I'm currently a last year Computer Science student studying at the University of Melbourne. As a student I have rich working experiences as an intern as a Software/Data Engineer at Walter and Eliza Hall Institute of Medical Research and Software Engineer at ITG
          </h3>
        </div>
        <img src={andy}></img>
      </div>
    </div>

    <div className='profi-section'>
    <h2 id="proficiency">Languages</h2>
    <p>
      Java
    </p>
    </div>
    
    <div></div>
    <Footer></Footer>

    </div>
    </>
  )
}

export default home