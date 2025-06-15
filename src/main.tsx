import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimeOption from './TimeOption.tsx'
import TimerSection from './TimerSection.tsx'
import settinglogo from './assets/setting icon.svg'
import ModalPopup from './ModalPopup.tsx'


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <h1 className="font-bold text-M-32 text-white-8D text-center my-9">Pomodoro</h1>
      < TimeOption />
      <TimerSection />
      < ModalPopup />
      <div className="flex justify-center mt-14 ">
        <img src={settinglogo} alt="settinglogo" className="w-8 h-8" />
      </div>

    </StrictMode>,
  )
}

