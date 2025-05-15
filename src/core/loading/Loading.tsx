import React from 'react'
import './Loading.css'
import { Progress } from "@/components/ui/progress"

const Loading:React.FC = () => {
    const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id='load' className="size-full">
      <div>
        <div>
          <h1 className='loaddiv'>Loading...</h1>
          <Progress value={progress} className='loaddiv load_bar'/>
          <h4 className='loaddiv'>아주 잠시만 기다려 주세요...</h4>
        </div>
      </div>
    </div>
  )
}

export default Loading
