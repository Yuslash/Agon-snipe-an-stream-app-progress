export default function MainStreamVideoCard() {
    
    return <>
        <div className='p-3 w-full h-full '>
            <div className='main-video-card-top w-full py-5 flex gap-9'>
                <button className="hover:text-purple-500 hover:underline">Top Streamer</button>
                <button className="hover:text-purple-500 hover:underline">Hot Streamer</button>
                <button className="hover:text-purple-500 hover:underline">New Streamer</button>
                <button className="hover:text-purple-500 hover:underline">Top Clip</button>
            </div>
        </div>
    </>
}