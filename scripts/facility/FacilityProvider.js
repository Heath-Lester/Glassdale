
let facilities = []

export const useFacilitites = () => facilities.slice()

export const getFacilitites = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(taco => taco.json())
        .then( taco => {facilities = taco})
}