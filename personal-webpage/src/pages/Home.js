import React from 'react'
import ParticlesComponent from '../components/Particles'

function home() {
  return (
    <>
    <div className='App'>
        <header className='App-header'>
            Andy's Portfolio
        </header>
        <ParticlesComponent id="tsparticles" />

    {/* About section */}
    <div className='about-section'>
    <h2 id="about">About Me</h2>
    <p>
      I'm Nguyen Linh Dan Le (Andy Le), I'm currently a last year Computer Science students stuyding at the University of Melbourne
    </p>
    </div>

    <div className='profi-section'>
    <h2 id="proficiency">Languages</h2>
    <p>
      Java
    </p>
    </div>


    </div>
    </>
  )
}

export default home