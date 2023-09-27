import React from 'react'
import Footer from '../components/Footer'
import java from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/program lang/java.jpeg'
import python from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/program lang/python.png'
import c from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/program lang/C.png'
import htmlcssjs from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/program lang/htmlcssjs.png'
import sql from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/program lang/sql.png'
import js from '/Users/andylenguyen/Documents/Personal-Webpage/personal-webpage/src/images/program lang/javascript.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function ProficiencyPage() {

    const percentage = 100;

  return (
    <>  
        <div id='languages' className='languages-section'>
            <div className='langim-container'>
                <img src={java}/>
                <img src={python}/>
                <img src={js}/>
                

            </div>
            <div className='progress-container'>
            </div>
            
            <div className='langim-container'>
                <img src={c}/>
                <img src={htmlcssjs}/>
                <img src={sql}/>
            </div>
            
        </div>

        <div id='skills' className='skills-section'>
            <h1>Skills</h1>
            <div className='table-skill'>
                <div className='program-skill'>
                    Y
                </div>
                <div className='soft-skill'>

                </div>
            </div>
        </div>


        <div className='footer-section'><Footer></Footer></div>
    </>
  )
}

export default ProficiencyPage