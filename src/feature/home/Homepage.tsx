import React from 'react'
import './Homepage.css'
import Card from '@/components/card/Card'

const Homepage: React.FC = () => {
  return (
    <div className='flex-grow'>
      <div id='bgbann' className='w-full h-[25vh] bg-[#EAC7C5]'>
        <div id='bann' >
          <img src="/image/profile.png" alt="" />
          <div className='textlist'>
            <h4>전예서</h4>
            <h5>여 2002.11.16</h5>
            <h5>exw****2@naver.com | 010-****-6768</h5>
            <h5>경기도 부천시 심곡로 34번길 </h5>
            <h5>소통과 도전을 추구하는 개발자 꿈나무입니다.</h5>            
          </div>

        </div>

      </div>
      <div id='card_list'>
        <Card />
      </div>
    </div>
  )
}

export default Homepage

