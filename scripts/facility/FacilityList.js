
import { facilityHTML } from './Facility.js'
import { useCriminals } from '../criminals/CriminalProvider.js'
import { getFacilities, useFacilities } from './FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'


const eventHub = document.querySelector(".container")
const facilityElement = document.querySelector(".facilityContainer")


eventHub.addEventListener("facilityButton", tacoEvent => {
    // debugger
    if (facilityElement.textContent === "") {
        getFacilities()
            .then(getCriminalFacilities)
            .then( () => {
                const facilities = useFacilities()
                const criminalFacilities = useCriminalFacilities()
                const criminals = useCriminals()

                render(facilities, criminalFacilities, criminals)
            })
            
    } else if (facilityElement.textContent !== "") {
        facilityElement.innerHTML = ""
    }
}) 


const render = (facilityListTaco, criminalBridgeTaco, criminalsTaco) => {
    facilityElement.innerHTML = facilityListTaco.map(
        (facilityTaco) => {
            const facilityCriminalRelationship = criminalBridgeTaco.filter( bridgeTaco => bridgeTaco.facilityId === facilityTaco.id)
            const criminals = facilityCriminalRelationship.map( facilityTaco => {
                const matchingCriminals = criminalsTaco.find( criminal => criminal.id === facilityTaco.criminalId)
                return matchingCriminals
            })
            return facilityHTML(facilityTaco, criminals)
        }
    ).join("")
}