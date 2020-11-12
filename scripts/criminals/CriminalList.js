
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js';
import { getFacilities, useFacilities } from '../facility/FacilityProvider.js';
import { useConvictions } from '../convictions/ConvictionProvider.js';
import { useCriminals, getCriminals } from './CriminalProvider.js';
import { useOfficers } from '../officers/OfficerProvider.js';
import { CriminalHTML } from './Criminal.js';


const eventHub = document.querySelector(".container")
const criminalElement = document.querySelector(".criminalsContainer")

let officers = []
let criminals = []
let facilities = []
let convictions = []
let criminalFacilities = []

// Renders Criminals to the DOM.
export const criminalList = () => {
    // debugger
    getCriminals()
        .then(getCriminalFacilities)
        .then(getFacilities)
        .then(() => {
            // debugger
            // let CriminalHtmlList = ``
            criminals = useCriminals()
            facilities = useFacilities()
            criminalFacilities = useCriminalFacilities()

            // fix render to account for facilities
            // for (const criminal of criminals) {
            //     CriminalHtmlList += CriminalHTML(criminal)
            // }
            render()
        })
}



// Renders an argument to an HTML element.
const render = () => {
    // debugger
    criminalElement.innerHTML = criminals.map(
        (criminalTaco) => {
            const facilityCriminalRelationship = criminalFacilities.filter( bridgeTaco => bridgeTaco.criminalId === criminalTaco.id )
            const filteredFacilities = facilityCriminalRelationship.map( facilityTaco => {
                const matchingFacility = facilities.find(facility => facility.id === facilityTaco.facilityId)
                return matchingFacility
            })
            return CriminalHTML(criminalTaco, filteredFacilities)
        }
    ).join("")
}


// Reacts to the 'crimeSelect' event and returns a filtered criminal list based on convictions.
eventHub.addEventListener("crimeSelect", event => {
    // debugger
    if (event.detail.crimeThatWasChosen !== 0) {

        criminals = useCriminals()
        convictions = useConvictions()

        const chosenConviction = convictions.find(certainConviction => {
            return certainConviction.id === event.detail.crimeThatWasChosen
        })

        criminals = criminals.filter(criminalObject => {
            return criminalObject.conviction === chosenConviction.name
        })

        // let filteredCriminalsHTML = ``
        // for (const criminal of filteredCriminals) {
        //     filteredCriminalsHTML += CriminalHTML(criminal)

        // }
        // console.log(filteredCriminalsHTML)
        render()

    } else if (event.detail.crimeThatWasChosen === 0) {

        criminalList()
    }

})

// Reacts to the 'officerSelect' event and returns a filtered criminal list based on the arresting officer.
eventHub.addEventListener("officerSelect", event => {
    // debugger
    if (event.detail.officerThatWasChosen !== 0) {

        criminals = useCriminals()
        officers = useOfficers()

        const chosenOfficer = officers.find(certainOfficer => {
            return certainOfficer.id === event.detail.officerThatWasChosen
        })

        criminals = criminals.filter(criminalObject => {
            return criminalObject.arrestingOfficer === chosenOfficer.name
        })

        // let filteredCriminalsHTML = ``
        // for (const criminal of filteredCriminals) {
        //     filteredCriminalsHTML += CriminalHTML(criminal)

        // }
        // console.log(filteredCriminalsHTML)
        render()

    } else {
        criminalList()
    }

})

