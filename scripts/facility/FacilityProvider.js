
let facilities = []

export const useFacilities = () => facilities.slice()

export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(taco => taco.json())
        .then( taco => {facilities = taco})
}