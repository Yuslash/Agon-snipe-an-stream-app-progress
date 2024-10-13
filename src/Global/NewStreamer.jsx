export default function NewStreamer({ newstream, isCollapsed }) {

    

    return <>
        <div className={` transition-all duration-300 w-full flex flex-wrap mt-5 p-3 gap-3 ${isCollapsed ? 'justify-center': 'justify-between'}`}>
            {newstream.map(game => (
                <div key={game.id} className="newStreamer-card flex flex-col justify-between w-[485px] p-1 transition-all duration-500 ease-in-out">
                    <img className="newStreamer-main-image w-full h-[255px] object-cover" src={game.imageFile} />
                    
                    <div className="flex p-4 gap-4 items-start ">
                        <img src="/mainstream/videothumb/profile.png" />
                        
                        <div className="mainstream-video-card-title flex flex-col justify-center">
                            <span>{game.title}</span>
                            <p>{game.username}</p>
                        </div>
                    
                    </div>
                
                </div>
                ))}
        </div>
    </>
}