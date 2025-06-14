export default function ModalPopup() {


    return (
        <div className="w-[340px] h-[600px] bg-white mx-auto absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-[20px] hidden" id="modal">
            <div className="flex justify-between items-center px-5 mt-5">
                <p className="text-black-15-0.9 text-M-20 font-bold">Settings</p>
                <button id="close"><img src="/images/close pict.svg" alt="cross pict" className="w-[25px] h-[25px]"></button>
            </div>
            <!-- Line -->
            <hr className="border-gray-DE border-1 mt-5" />
            <p className="text-M-14 text-black-15-0.9 font-semibold tracking-[0.15em] mt-9 mb-10 text-center">TIME ( MINUTES )</p>

            <!-- a group input pomodoro, short break and long break-->
            <div>
                <!--Pomodoro text input-->
                <div className="flex justify-between items-center px-5 mt-5">
                    <p className="text-gray-63 font-bold">pomodoro</p>
                    <div className="flex">
                        <input type="text" className="w-[40px] h-[35px] bg-white-EE rounded-tl-[10px] rounded-bl-[10px] text-center text-M-12 font-bold text-black-15-0.9 focus:outline-none" placeholder="25" id="pomodoroInput" />
                        <div className="flex flex-col w-[72px] h-[35px] bg-white-EE rounded-tr-[10px] rounded-br-[10px] justify-center items-center">
                            <button className="ml-9"><img src="/images/keyboard_arrow_up.svg" alt="" className="w-4 h-4"></button>
                            <button className="ml-9"><img src="/images/keyboard_arrow_down.svg" alt="" className="w-4 h-4"></button>
                        </div>
                    </div>
                </div>
                <!--short break text input-->
                <div className="flex justify-between items-center px-5 mt-5">
                    <p className="text-gray-63 font-bold">short break</p>
                    <div className="flex">
                        <input type="text" className="w-[40px] h-[35px] bg-white-EE rounded-tl-[10px] rounded-bl-[10px] text-center text-M-12 font-bold text-black-15-0.9 focus:outline-none" placeholder="5" />
                        <div className="flex flex-col w-[72px] h-[35px] bg-white-EE rounded-tr-[10px] rounded-br-[10px] justify-center items-center">
                            <button className="ml-9"><img src="/images/keyboard_arrow_up.svg" alt="" className="w-4 h-4"></button>
                            <button className="ml-9"><img src="/images/keyboard_arrow_down.svg" alt="" className="w-4 h-4"></button>
                        </div>
                    </div>
                </div>
            </div>
            <!--long break text input-->
            <div className="flex justify-between items-center px-5 mt-5 ">
                <p className="text-gray-63 font-bold">long break</p>
                <div className="flex">
                    <input type="text" className="w-[40px] h-[35px] bg-white-EE rounded-tl-[10px] rounded-bl-[10px] text-center text-M-12 font-bold text-black-15-0.9 focus:outline-none" placeholder="15" />
                    <div className="flex flex-col w-[72px] h-[35px] bg-white-EE rounded-tr-[10px] rounded-br-[10px] justify-center items-center">
                        <button className="ml-9"><img src="/images/keyboard_arrow_up.svg" alt="" className="w-4 h-4"></button>
                        <button className="ml-9"><img src="/images/keyboard_arrow_down.svg" alt="" className="w-4 h-4"></button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-DE border-1 w-[295px] mt-5 mx-auto " />

            <!--Font text-->
            <p className="text-M-14 text-black-15-0.9 font-bold tracking-[0.2em] text-center mt-3">FONT</p>
            <div className="flex justify-center items-center mt-5 mb-5 gap-10">
                <button className="bg-white-EE w-11 h-11 rounded-full  hover:bg-darkblue-1E">
                    <p className="flex justify-center items-center h-full text-gray-63 font-bold hover:text-white-EE">Aa</p>
                </button>
                <button className="bg-white-EE w-11 h-11 rounded-full text-gray-63 font-bold hover:bg-darkblue-1E">
                    <p className="flex justify-center items-center h-full font-crimson hover:text-white-EE">Aa</p>
                </button>
                <button className="bg-white-EE w-11 h-11 rounded-full text-gray-63 font-bold hover:bg-darkblue-1E">
                    <p className="flex justify-center items-center h-full font-Jua hover:text-white-EE">Aa</p>
                </button>
            </div>
            <hr className="border-gray-DE border-1 w-[295px]  mx-auto " />

            <p className="text-M-14 text-black-15-0.9 font-bold tracking-[0.2em] text-center mt-3">COLOR</p>
            <div className="flex justify-center items-center mt-5 mb-10 gap-10">
                <div className="bg-young-orange w-11 h-11 rounded-full">
                    <img src="/images/tick icon.svg" alt="tick icon" className=" flex justify-center items-center mx-auto mt-2">
                </div>
                <div className="bg-tosca-green w-11 h-11 rounded-full">
                </div>
                <div className="bg-young-purple w-11 h-11 rounded-full">
                </div>
            </div>
            <!--Apply Button-->
            <div className="w-[125px] h-[45px] rounded-[30px] bg-young-orange   absolute left-27 -bottom-5">
                <button className="flex justify-center items-center mx-auto mt-3" id="apply">
                    <p className="text-M-16 font-bold text-white-FF ">Apply</p>
                </button>
            </div>


        </div>
    )
}