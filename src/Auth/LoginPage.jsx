import './Auth.css'

export default function LoginPage()
{
    return <div className="login-image w-full h-full absolute top-0 left-0 bg-center bg-no-repeat bg-cover flex justify-center items-center" style={{ backgroundImage: "url('/authentication/5.png')" }}>
        <div className="login-panel px-9 relative flex flex-col justify-center items-center w-[430px]">
            <img className='relative top-[-50px]' src='/authentication/profile.png' />
            <span className='welcome-text'>WELCOME</span>
            <div className='main-buttons-hold flex w-full p-1 mt-7 tracking-wider rounded-2xl justify-center'>
                    <button className='regiser-button w-full rounded-2xl'>REGISTER</button>
                    <button className='login-button w-full rounded-2xl'>LOGIN</button>
            </div>
            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='above-text'>Username</span>
                <input 
                className='text-input p-4'
                placeholder='Enter Your Username'
                type='text'                    
                />
            </div>

            <div className=' w-full flex gap-1 flex-col mt-4'>
                <span className='above-text'>Password</span>
                <input 
                className='text-input p-4'
                placeholder='Enter Your Password'
                type='password'                    
                />
            </div>

            <div className='flex flex-col gap-5 w-full justify-center mt-[60px]'>
                <button className='to-account w-full py-4'><span>LOGIN TO ACCOUNT</span></button>
            <img className='' src='/authentication/orline.png'></img>
            <button className='discord-button mb-[30px] py-[15px] flex justify-center items-center gap-[10px]'><img src='/authentication/discord.png'></img><span>LOGIN WITH DISCORD</span></button>
            </div>
        </div>
    </div>
}