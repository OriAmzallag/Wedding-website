import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/rings.png'
import program_icon_2 from '../../assets/rings2.png'
import program_icon_3 from '../../assets/cheers.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Planning From Scratch</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Guiding Through The Process</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Making It Happen</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
