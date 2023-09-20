import React from 'react'
import ParticlesComponent from '../components/Particles'

function home() {
  return (
    <>
    <div className='App'>
        <header className='App-header'>
            Personal Portfolio
        </header>
        <ParticlesComponent id="tsparticles" />
    </div>
    </>
  )
}

export default home