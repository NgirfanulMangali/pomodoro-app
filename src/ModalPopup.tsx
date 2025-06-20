import CloseIcon from './assets/close pict.svg'
import TickIcon from './assets/tick icon.svg'
import style from './ModalPopup.module.pcss'
import { useState } from 'react'
import settinglogo from './assets/setting icon.svg'



export default function ModalPopup() {

    const [show, setShow] = useState(false);

    const [firstName, setFirstName] = useState('');


    return (
        <>
            {/* Modal PopUp */}


            <div className="mx-auto mt-12 w-[300px] h-[300px] rounded-full items-center bg-radial-[at_20%_25%] from-darkblue-1E to-darkblue-29 to-85% shadow-white-black relative">
                <div className="absolute inset-0 m-auto w-[250px] h-[250px] rounded-full bg-darkblue-1E">
                    <div className="flex flex-col justify-center items-center h-full">
                        <span className=" font-extrabold text-white-8D text-M-64" id="numberTimer">
                            {firstName !== '' && <p>{firstName}:00</p>}
                        </span>
                        <button className="text-white-8D text-M-20 font-mediums tracking-[0.4em]  transition transform duration-200 active:scale-95 " id="start">
                            START
                        </button>
                    </div>
                </div>
            </div>


            {/* Modal PopUp */}

            <div className="flex justify-center mt-14 ">
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

                    {/* Pomodoro text input */}
                    <label className={style.mycontainer}>
                        <p className={style.texts}>pomodoro</p>
                        <input type="number" className={style.input} placeholder="25" value={firstName} onChange={e => setFirstName(e.target.value)} />

                    </label>
                    {/* short break text input */}
                    <label className={style.mycontainer}>
                        <p className={style.texts}>short break</p>
                        <input type="number" className={style.input} placeholder="5" />
                    </label>
                    {/* long break text input */}
                    <label className={style.mycontainer}>
                        <p className={style.texts}>long break</p>
                        <input type="number" className={style.input} placeholder="15" />
                    </label>
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
                        <button className="bg-young-orange w-11 h-11 rounded-full">
                            <img src={TickIcon} alt="tick icon" className=" flex justify-center items-center mx-auto mt-2" />
                        </button>
                        <button className="bg-tosca-green w-11 h-11 rounded-full">
                        </button>
                        <button className="bg-young-purple w-11 h-11 rounded-full">
                        </button>
                    </div>
                    {/* Apply Button */}
                    <div className="w-[125px] h-[45px] rounded-[30px] bg-young-orange absolute left-27 -bottom-5">
                        <button className="flex justify-center items-center mx-auto mt-3" id="apply">
                            <p className="text-M-16 font-bold text-white-FF ">Apply</p>
                        </button>
                    </div>


                </div>
            ) : null}
        </>

    )

}