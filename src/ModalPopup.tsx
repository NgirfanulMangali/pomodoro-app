import CloseIcon from './assets/close pict.svg'
import KeyboardArrowUp from './assets/keyboard_arrow_up.svg'
import KeyboardArrowDown from './assets/keyboard_arrow_down.svg'
import TickIcon from './assets/tick icon.svg'
import style from './ModalPopup.module.pcss'
import { useState } from 'react'
import settinglogo from './assets/setting icon.svg'

export default function ModalPopup() {

    const [show, setShow] = useState(false);




    return (
        <>  <div className="flex justify-center mt-14 ">
            <img src={settinglogo} alt="settinglogo" className="w-8 h-8" onClick={() => setShow(true)} />
        </div>


            {show ? (
                <div className="w-[340px] h-[600px] bg-white mx-auto absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-[20px]" id="modal">
                    <div className={style.mycontainer}>
                        <p className="text-black-15-0.9 text-M-20 font-bold">Settings</p>
                        <button onClick={() => setShow(false)} > <img src={CloseIcon} alt="cross pict" className="w-[25px] h-[25px]" /></button>
                    </div>
                    {/* Line */}
                    <hr className="border-gray-DE border-1 mt-5" />
                    <p className="text-M-14 text-black-15-0.9 font-semibold tracking-[0.15em] mt-9 mb-10 text-center">TIME ( MINUTES )</p>

                    {/* a group input pomodoro, short break and long break */}
                    <div>
                        {/* Pomodoro text input */}
                        <div className={style.mycontainer}>
                            <p className={style.texts}>pomodoro</p>
                            <input type="number" className="w-[50px] h-[35px] bg-[#EEEEEE] text-center text-[12px] font-bold text-[rgba(21,21,21,0.7)] outline-none rounded-[10px] pr-1" placeholder="25" id="pomodoroInput" />
                        </div>
                        {/* short break text input */}
                        <div className={style.mycontainer}>
                            <p className={style.texts}>short break</p>
                            <input type="number" className="w-[50px] h-[35px] bg-[#EEEEEE] text-center text-[12px] font-bold text-[rgba(21,21,21,0.7)] outline-none rounded-[10px] pr-1" placeholder="5" id="pomodoroInput" />
                        </div>
                    </div>
                    {/* long break text input */}
                    <div className={style.mycontainer}>
                        <p className={style.texts}>long break</p>
                        <input type="number" className="w-[50px] h-[35px] bg-[#EEEEEE] text-center text-[12px] font-bold text-[rgba(21,21,21,0.7)] outline-none rounded-[10px] pr-1" placeholder="15" id="pomodoroInput" />
                    </div>
                    <hr className={`${style.hr} mt-5`} />

                    {/* Font text group */}
                    <p className={style.title}>FONT</p>
                    <div className={`${style.fontandcolor} mb-5`}>
                        <button className={style.button}>
                            <p className={style.TextFont} >Aa</p>
                        </button>
                        <button className={style.button}>
                            <p className={`font-crimson ${style.TextFont}`}>Aa</p>
                        </button>
                        <button className={style.button}>
                            <p className={`font-Jua ${style.TextFont}`}>Aa</p>
                        </button>
                    </div>
                    <hr className={`${style.hr}`} />
                    {/* color group */}
                    <p className={style.title}>COLOR</p>
                    <div className={` ${style.fontandcolor} mb-10`}>
                        <div className="bg-young-orange w-11 h-11 rounded-full">
                            <img src={TickIcon} alt="tick icon" className=" flex justify-center items-center mx-auto mt-2" />
                        </div>
                        <div className="bg-tosca-green w-11 h-11 rounded-full">
                        </div>
                        <div className="bg-young-purple w-11 h-11 rounded-full">
                        </div>
                    </div>
                    {/* Apply Button */}
                    <div className="w-[125px] h-[45px] rounded-[30px] bg-young-orange   absolute left-27 -bottom-5">
                        <button className="flex justify-center items-center mx-auto mt-3" id="apply">
                            <p className="text-M-16 font-bold text-white-FF ">Apply</p>
                        </button>
                    </div>


                </div>
            ) : null}
        </>

    )

}