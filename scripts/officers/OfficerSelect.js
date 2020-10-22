

// Imports two functions from a source
import { getOfficers, useOfficers } from "./OfficerProvider.js";

// Stores an HTML class in a variable
const officerFilterElement = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")


export const OfficerSelect = () => {
    // debugger
    getOfficers()
    .then( () => {
        const officerData = useOfficers()
        officersToHTML(officerData)   
    })
    
}


const officersToHTML = officerArray => {
    // 1) Tells HTML element that it is being written into.  2) Interpolates a section of HTML that creates an selection element dropdown menu.  3) Interpolates a .map() method that extracts the 'name' key from every object in an array.  4) Returns an interpolated and iterated setion of HTML from the data set.
    officerFilterElement.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an Officer...</option>
            ${
                officerArray.map(officer => {
                    return `<option value="${officer.id}">${officer.name}</option>`
                }).join("")
            }
        </select>
    `
}

eventHub.addEventListener("change", event => {
    // debugger
    if (event.target.id === "officerSelect") {
        
        const customEvent = new CustomEvent("officerSelect", {
            detail: {
                officerThatWasChosen: parseInt(event.target.value)
            }
        })
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
    }
})