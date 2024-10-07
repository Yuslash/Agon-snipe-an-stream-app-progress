import { Link } from "react-router-dom";

export default function LoginPage()
{
    return <div className="text-white">
            <h1>how are you da mentals this is login page the ui is pretty hard how im gonna do it</h1>
            <Link to={'/signup'}>signup</Link>
    </div>
}