const URL = "https://coverletter-backend.onrender.com/coverletters/"

export const examplesLoader = async () => {
    const response = await fetch(URL)
    const letters = await response.json()
    return letters

}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `${params.id}/`)
    const letters = await response.json()
    return letters
}