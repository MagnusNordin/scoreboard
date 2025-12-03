import { useState } from 'react'
import './App.css'

function App() {
  const [leftScore, setLeftScore] = useState(0)
  const [rightScore, setRightScore] = useState(0)
  const [leftColor, setLeftColor] = useState('#000000')
  const [rightColor, setRightColor] = useState('#ffffff')

  return (
    <div className="container">
      <div 
        className="side left" 
        style={{ backgroundColor: leftColor, color: leftColor === '#ffffff' ? 'black' : 'white' }}
        onClick={() => setLeftScore(leftScore + 1)}
      >
        <input 
          type="color" 
          value={leftColor} 
          onChange={(e) => setLeftColor(e.target.value)} 
          onClick={(e) => e.stopPropagation()}
          style={{ position: 'absolute', top: '10px', left: '10px' }}
        />
        <div className="score" style={{ color: leftColor === '#ffffff' ? 'black' : 'white' }}>{leftScore}</div>
      </div>
      <div 
        className="side right" 
        style={{ backgroundColor: rightColor, color: rightColor === '#ffffff' ? 'black' : 'white' }}
        onClick={() => setRightScore(rightScore + 1)}
      >
        <input 
          type="color" 
          value={rightColor} 
          onChange={(e) => setRightColor(e.target.value)} 
          onClick={(e) => e.stopPropagation()}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        />
        <div className="score" style={{ color: rightColor === '#ffffff' ? 'black' : 'white' }}>{rightScore}</div>
      </div>
    </div>
  )
}

export default App
