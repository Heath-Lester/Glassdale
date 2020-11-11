
import { useCriminals, getCriminals } from './CriminalProvider.js';
import { CriminalHTML } from './Criminal.js';
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { useOfficers } from '../officers/OfficerProvider.js';
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js';
import { getFacilitites, useFacilitites } from '../facility/FacilityProvider.js';


const eventHub = document.querySelector(".container")
const criminalElement = document.querySelector(".criminalsContainer")


// Renders Criminals to the DOM.
export const criminalList = () => {
    // debugger
    getCriminals()
        .then(getCriminalFacilities)
        .then(getFacilitites)
        .then(() => {
            // debugger
            let CriminalHtmlList = ``
            const criminals = useCriminals()
            const facilities = useFacilitites()
            const criminalFacilities = useCriminalFacilities()

            // fix render to account for facilities
            // for (const criminal of criminals) {
            //     CriminalHtmlList += CriminalHTML(criminal)
            // }
            render(criminals, facilities, criminalFacilities)
        })
}



// Renders an argument to an HTML element.
const render = (criminalListTaco, facilityListTaco, facilityBridgeTaco) => {

    criminalElement.innerHTML = criminalListTaco.map(
        (criminalTaco) => {
            const facilityCriminalRelationship = facilityBridgeTaco.filter( bridgeTaco => bridgeTaco.criminalId === criminalTaco.id )
            const facilities = facilityCriminalRelationship.map( facilityTaco => {
                const matchingFacility = facilityListTaco.find(facility => facility.id === facilityTaco.facilityId)
                return matchingFacility
            })
            return CriminalHTML(criminalTaco, facilities)
        }
    ).join("")
}


// Reacts to the 'crimeSelect' event and returns a filtered criminal list based on convictions.
eventHub.addEventListener("crimeSelect", event => {
    // debugger
    if (event.detail.crimeThatWasChosen !== 0) {

        const appStateCriminals = useCriminals()
        const appStateConvictions = useConvictions()

        const chosenConviction = appStateConvictions.find(certainConviction => {
            return certainConviction.id === event.detail.crimeThatWasChosen
        })

        const filteredCriminals = appStateCriminals.filter(criminalObject => {
            return criminalObject.conviction === chosenConviction.name
        })

        let filteredCriminalsHTML = ``
        for (const criminal of filteredCriminals) {
            filteredCriminalsHTML += CriminalHTML(criminal)

        }
        // console.log(filteredCriminalsHTML)
        render(filteredCriminalsHTML)

    } else if (event.detail.crimeThatWasChosen === 0) {

        render(criminalList())
    }

})

// Reacts to the 'officerSelect' event and returns a filtered criminal list based on the arresting officer.
eventHub.addEventListener("officerSelect", event => {
    // debugger
    if (event.detail.officerThatWasChosen !== 0) {

        const appStateCriminals = useCriminals()
        const appStateOfficers = useOfficers()

        const chosenOfficer = appStateOfficers.find(certainOfficer => {
            return certainOfficer.id === event.detail.officerThatWasChosen
        })

        const filteredCriminals = appStateCriminals.filter(criminalObject => {
            return criminalObject.arrestingOfficer === chosenOfficer.name
        })

        let filteredCriminalsHTML = ``
        for (const criminal of filteredCriminals) {
            filteredCriminalsHTML += CriminalHTML(criminal)

        }
        // console.log(filteredCriminalsHTML)
        render(filteredCriminalsHTML)

    } else {
        render(criminalList())
    }

})

