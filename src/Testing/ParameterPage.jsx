import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ParameterPage() {

    const { id } = useParams()
    const [cardData, setCardData] = useState([])

    const card = cardData.find((c) => c.id === parseInt(id))

    useEffect(() => {

        const fetchUserData = async () => {
            const resposne = await fetch('http://localhost:3000/test') 
            const {data} = await resposne.json()
            setCardData(data)
        }

        fetchUserData()

    }, [])


    return <div className="text-white">
        <h1>Hello Parameteres</h1>
        {card ? (<>
            <h1>{card.title}</h1>
            <h1>{card.description}</h1>
        </>) : <p>Loading....</p>}
    </div>
}