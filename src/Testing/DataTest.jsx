import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function DataTest() {

    const [userData, setUserData] = useState([])

    useEffect(() => {

        const fetchUserData = async () => {

            const resposne = await fetch("http://localhost:3000/test")
            const {data} = await resposne.json()
            setUserData(data)
        }

        fetchUserData()

    }, [])

    return <div className="text-white">
        <h1>Data Test Page</h1>
        {userData.map(user => (
            <Link className="flex flex-col" key={user.id} to={`/data/${user.id}`}>
                <button>{user.username}</button>
            </Link>
        ))}
    </div>
}