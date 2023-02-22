import { useLoaderData } from "react-router-dom"

export default function Examples (){
const letters = useLoaderData()

    return <>
    <h2>All Cover Letters</h2>
    {letters.map((letter) => (
        <h3>{letter.company}</h3>
    ))}
    </>
}