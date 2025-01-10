import { useState } from 'react'
import './App.css'

function App() {
  const price = 14083
  const [isHovering, setIsHovering] = useState(true)
  const hoverIn = () => {
    setIsHovering(true)
  }
  const hoverOut = () => {
    setIsHovering(false)
  }

  return (
    <>
      <div className="show">
        <div
          className={isHovering ? ' image hover' : 'image'}
          onMouseEnter={hoverIn}
          onMouseOut={hoverOut}
        >
          <div className="ad">바로 학습 가능</div>
          <img alt="이미지" src={'/tv.png'} />
        </div>
        <div>위대한 쇼 비즈니스 </div>
        <div className="price">
          <div>44%↓</div> <div>월 {price.toLocaleString()}원</div>{' '}
          <div>/12개월</div>
        </div>
      </div>
    </>
  )
}

export default App
