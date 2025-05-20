import React from 'react'
import './Card.css'

const Card: React.FC= () => {
  return (
    <div>
      <div id='card'>
          <div id='c_top'>
            <h4>이음</h4>
            <h5>2025-05-04</h5>
          </div>
          <div id='c_img'>
            <img src="/image/mingle_img.png" alt="" />
          </div>
          <div id='c_bottom'>
            <div className='c_tag'> 
              <img src="image\tag\Css 3.png" alt="" />
            </div>
            <div>더보기 ></div>
          </div>
        </div>
    </div>
  )
}

export default Card

