import React from 'react'
import './Campus.css'
import campus_1 from '../../assets/campus-1.png'
import campus_2 from '../../assets/campus-2.png'
import campus_3 from '../../assets/campus-3.png'
import campus_4 from '../../assets/campus-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={campus_1} alt="" />
            <img src={campus_2} alt="" />
            <img src={campus_3} alt="" />
            <img src={campus_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus