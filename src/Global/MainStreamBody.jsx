import './MainStream.css'

export default function MainStreamBody({scrollRef, handleHorizontalScroll, isCollapsed, animateCard}) {

    return <>
        <div className='mainstream-mainbody flex flex-col justify-between w-full h-full px-10 py-5'>
            <div className='popular-parent-holder flex flex-col w-full h-full gap-5'>
                <div className='popular-header w-full px-3 flex justify-between items-center'>
                    <span>Popular Games</span>
                    <p className='flex gap-1 items-center'>See All<img src='mainstream/arrow.png' /></p>
                </div>
                <div
                    className={`popular-card transition-all p-3 duration-300 flex gap-6 overflow-x-auto`}
                    style={{ maxWidth: isCollapsed ? '1671px' : '1509px' }}
                    ref={scrollRef}
                    onWheel={handleHorizontalScroll}
                >
                    <div ref={animateCard} className='card-of-fate  min-w-[274px] h-[465px]'>
                        <img src='mainstream/popular.png' />
                        <div className='popular-card-text-holder w-full px-4 h-[70px]  flex items-center'>
                            <span>Valorant</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-3 w-full h-full'></div>
        </div>
    </>
}