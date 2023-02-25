import { redirect } from "react-router-dom"

const URL = "https://coverletter-backend.onrender.com/coverletters/"

export const createAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()

    // construct request body
    const newLetter = {
        name: formData.get("name"),
        position: formData.get("position"),
        date: formData.get("date"),
        company: formData.get("company"),
        yoe: formData.get("yoe"),
        skill: formData.get("skill"),
        expertise: formData.get("expertise"),
        passion: formData.get("passion"),
        products: formData.get("products")
    }

    // send request to backend
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLetter)
    })

    // redirect back to the index page
    return redirect("/coverletters")
}

export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()

    // get the cover letters id
    const id = params.id

    // construct request body
    const updatedLetter = {
        name: formData.get("name"),
        position: formData.get("position"),
        date: formData.get("date"),
        company: formData.get("company"),
        yoe: formData.get("yoe"),
        skill: formData.get("skill"),
        expertise: formData.get("expertise"),
        passion: formData.get("passion"),
        products: formData.get("products")
    }

    // send request to backend
    await fetch(URL + `${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedLetter)
    })

    // redirect back to the show page
    return redirect(`/coverletters/${id}`)
}

export const deleteAction = async ({params}) => {
    // get the cover letters id
    const id = params.id

    // send request to backend
    await fetch(URL + `${id}/`, {
        method: "delete",
    })

    // redirect back to the index page
    return redirect(`/coverletters`)
}