import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimeOption from './TimeOption.tsx'


import ModalPopup from './ModalPopup.tsx'



const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <h1 className="font-bold text-M-32 text-white-8D text-center my-9">Pomodoro</h1>
      < TimeOption />
      < ModalPopup />
    </StrictMode>,
  )
}

