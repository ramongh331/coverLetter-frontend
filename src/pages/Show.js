import { useLoaderData } from "react-router-dom"

export default function Show (){
const letter = useLoaderData()

    return <>
    <h2>Dear {letter.company} Hiring Manager,</h2>
    </>
}