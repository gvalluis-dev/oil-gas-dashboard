import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SensorChart from './components/SensorChart'


/**
 * Main component
 * The Application Homepage 
 * @returns JSX.Element
 */

function App() {
  return (
    <>
      <div className="card">
        <SensorChart />
      </div>
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
      </p>
    </>
  )
}

export default App
