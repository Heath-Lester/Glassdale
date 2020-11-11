
import { facilityHTML } from './Facility.js'
import { getFacilities, useFacilitites } from './FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'

const eventHub = document.querySelector(".container")
const facilityElement = document.querySelector(".facilityContainer")