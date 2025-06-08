import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimeOption from './TimeOption.jsx'
import TimerSection from './TimerSection.jsx'
import settinglogo from './assets/setting icon.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Pomodoro</h1>
    < TimeOption />
    <TimerSection />
    <div>
      <img src={settinglogo} alt="settinglogo" />
    </div>
  </StrictMode>,
)
