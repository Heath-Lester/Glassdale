
let criminalFacilities = []

export const useCriminalFacilities = () => criminalFacilities.slice()

export const getCriminalFacilities = () => {
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        .then(taco =>  taco.json())
        .then(taco => criminalFacilities = taco)
}