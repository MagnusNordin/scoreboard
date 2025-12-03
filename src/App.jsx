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
        <div
          className="decrement-icon"
          onClick={(e) => {
            e.stopPropagation();
            setLeftScore(Math.max(0, leftScore - 1));
          }}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '2px solid currentColor',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '32px',
            userSelect: 'none',
            paddingBottom: '4px'
          }}
        >
          -
        </div>
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
        <div
          className="decrement-icon"
          onClick={(e) => {
            e.stopPropagation();
            setRightScore(Math.max(0, rightScore - 1));
          }}
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '2px solid currentColor',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '32px',
            userSelect: 'none',
            paddingBottom: '4px'
          }}
        >
          -
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLeftScore(0);
          setRightScore(0);
          setLeftColor('#000000');
          setRightColor('#ffffff');
        }}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: 'black',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0
        }}
        title="Reset Scores"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      </button>
    </div>
  )
}

export default App
