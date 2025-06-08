import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimeOption from './TimeOption.jsx'
import TimerSection from './TimerSection.jsx'
import settinglogo from './assets/setting icon.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className="font-bold text-M-32 text-white-8D text-center my-9">Pomodoro</h1>
    < TimeOption />
    <TimerSection />
    <div className="flex justify-center mt-14 ">
      <img src={settinglogo} alt="settinglogo" className="w-8 h-8" />
    </div>
  </StrictMode>,
)
