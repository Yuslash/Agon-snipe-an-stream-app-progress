export default function StartingPage()
{

    return <>
        <div className="mass w-full h-full absolute top-0 left-0 bg-black object-cover bg-center bg-no-repeat overflow-hidden">
            <video
            autoPlay 
            className="ivanthanda"
            src="ivanthandamassuh.webm"
            loop
            muted   
            />
        </div>
        <div className="gradient-over flex absolute top-0 left-0 w-full h-full ">
            <div className="top-nav absolute top-0 left-0 w-full "></div>
                <div className="left-row w-full h-full justify-center flex flex-col ">
                
                    <div className="flex flex-col mt-20 gap-5 px-[180px] ">
                        <div className=" w-full flex px-28 ">
                            <span className="over">overwatch</span>
                        </div>
                        <span className="the-hunt">THE HUNT <br /> IS AWAIT</span>
                        <span className="kaka">Some Description about something that is
                        not look correct so be care full</span>
                        <div className=" flex px-20 mt-6 w-full">
                            <img className="fortnite-button" src="/Buttons/fortnite.png"></img>
                        </div>
                    </div>

                </div>

                <div className="right-row w-full h-full"></div>
        </div>
    </>
}