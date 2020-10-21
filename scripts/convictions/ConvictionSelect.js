
// Imports two functions from a source
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Stores an HTML class in a variable
const crimeFilterElement = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

// 
export const ConvictionSelect = () => {
    
    getConvictions()
    .then( () => {
        const convictionsData = useConvictions()
        crimesToHTML(convictionsData)   
    })
    
}


const crimesToHTML = convictionsArray => {
    // 1) Tells HTML element that it is being written into.  2) Interpolates a section of HTML that creates an selection element dropdown menu.  3) Interpolates a .map() method that extracts the 'name' key from every object in an array.  4) Returns an interpolated and iterated setion of HTML from the data set.
    crimeFilterElement.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsArray.map(crime => {
                    return `<option value="${crime.id}">${crime.name}</option>`
                }).join("")
            }
        </select>
    `
}

eventHub.addEventListener("change", event => {
    // debugger
    if (event.target.id === "crimeSelect") {
        
        const customEvent = new CustomEvent("crimeSelect", {
            detail: {
                crimeThatWasChosen: parseInt(event.target.value)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})