
// Imports two functions from a source
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Stores an HTML class in a variable
const crimeFilterElement = document.querySelector(".filters__crime")

// 
export const ConvictionSelect = () => {
    debugger
    // getConvictions()
    // .then( () => {
        const convictionsData = useConvictions()
        crimesToHTML(convictionsData)   
    // })
    
}


const crimesToHTML = convictionsArray => {
    // 1) Tells HTML element that it is being written into.  2) Interpolates a section of HTML that creates an selection element dropdown menu.  3) Interpolates a .map() method that extracts the 'name' key from every object in an array.  4) Returns an interpolated and iterated setion of HTML from the data set.
    crimeFilterElement.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsArray.map(crime => {
                    const crimeName = crime.name
                    return `<option>${crimeName}</option>`
                })
            }
        </select>
    `
}