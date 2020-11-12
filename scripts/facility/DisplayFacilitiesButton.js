
const buttonElement = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

export const facilityButton = () => {
    return buttonElement.innerHTML = `
        <button id="facilities">Facilities</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "facilities") {
    const facilityEvent = new CustomEvent("facilityButton")

    console.log("Facility Button Pinged")
    eventHub.dispatchEvent(facilityEvent)
    }
})