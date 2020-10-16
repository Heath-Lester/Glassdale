
// creates an array to store the objects fetched by the getOfficers function
let officers = []

// creates an exported copy of the array above
export const useOfficers = () => {
    return officers.slice()
}

// Provides a function that 'fetches' information from a remote server.
// THEN the fetched information is converted into a JSON string. (so it can be read by the JavaScript engine)
// THEN the JSON string is logged to the console in the form of a table. 
// AND the JSON string is stored in the officers variable.
export const getOfficers = () => {
    //debugger
    return fetch("https://criminals.glassdale.us/officers")
                        // the 'response' perameter below, because the function is written as a single line, is inheretly understood as a 'return' statement.
        .then(response => response.json())

        .then(
            parsedOfficers => {

                console.table(parsedOfficers)

                officers = parsedOfficers
            }
        )
}