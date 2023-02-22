import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Examples (){
const letters = useLoaderData()

    return <>
    <h2>All Cover Letters</h2>
    <Link to="/coverletters/new">
        <button>New</button>
      </Link>
    {letters.map((letter) => (
        <Link to={`/coverletters/${letter.id}/`}>
            <h3>{letter.company}</h3>
        </Link>
    ))}
    </>
}