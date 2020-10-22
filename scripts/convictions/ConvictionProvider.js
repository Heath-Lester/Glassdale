
// Holds the original data set
let convictions = []

// Provides a copy of the data set
export const useConvictions = () => convictions.slice()


export const getConvictions = () => {
    // Fetches a data set from the API
    return fetch("https://criminals.glassdale.us/crimes")
        // Pushes the data set through the .json() function
        .then(response => response.json())
        
        // stores the data set into the variable 'convictions'
        .then( parsedCrimes => {
            console.table(parsedCrimes)
            convictions = parsedCrimes
        })
}