import { Link } from "react-router-dom";

export default function SignUpPage()
{
    return <div className="text-white">
        <h1>how are you this is signup page</h1>
        <Link to={'/login'} title="login">Login</Link>
    </div>
}