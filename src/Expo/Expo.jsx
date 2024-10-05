import { Link } from "react-router-dom"

export default function Expo()
{
  
    return <>
        <Link to={`/start`} >
            <button className=" text-white">start</button>
        </Link>
    </>
}