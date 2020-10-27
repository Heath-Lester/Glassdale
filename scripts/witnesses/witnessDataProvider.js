
let witnessArray = []

export const useWitnesses = () => {
    debugger
    return witnessArray.slice()    
}

export const getWitnesses = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
        .then( response => response.json() )
        .then( paresedWitenesses => witnessArray = paresedWitenesses)
}