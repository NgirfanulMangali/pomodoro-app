export default function TimerSection() {




    return (
        <div className="mx-auto mt-12 w-[300px] h-[300px] rounded-full items-center bg-radial-[at_20%_25%] from-darkblue-1E to-darkblue-29 to-85% shadow-white-black relative">
            <div className="absolute inset-0 m-auto w-[250px] h-[250px] rounded-full bg-darkblue-1E">
                <div className="flex flex-col justify-center items-center h-full">
                    <span className=" font-extrabold text-white-8D text-M-64" id="numberTimer">
                        12:00
                    </span>
                    <button className="text-white-8D text-M-20 font-mediums tracking-[0.4em]  transition transform duration-200 active:scale-95 " id="start">
                        START
                    </button>
                </div>
            </div>
        </div>
    )
}

