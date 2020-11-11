

// takes object properties and adds them to and html template
const eventHub = document.querySelector(".container")

export const CriminalHTML = (criminal, facilities) => {
    return `
    <section class="criminalCard" id="criminal--${criminal.id}">
        <p class="criminalName">${criminal.name}</p>
                <dt>Age: ${criminal.age}</dt>
                <dt>Crime: ${criminal.conviction}</dt>
                <dt>Arresting Officer: ${criminal.arrestingOfficer}</dt>
                <dt>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</dt>
                <dt>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</dt>
                <h3>Facilities</h3>
                <ul>${facilities.map(taco => `<li>${taco.facilityName}</li>`).join("")}</ul>
                <button id="associates--${criminal.id}">Associate Alibis</button>
    </section>
    `
}


// Dispatches a 'alibiList' click event that sends the id of the criminal.
eventHub.addEventListener("click", criminalObj => {
    // debugger
    const [prefix, criminalID] = criminalObj.target.id.split("--")

    if (criminalObj.target.id.startsWith("associates--")) {
        const AlibiEvent = new CustomEvent("alibiList", {
            detail: {
                criminalID: parseInt(criminalID)
            }
        })
        eventHub.dispatchEvent(AlibiEvent)
        console.log(criminalID)
    }
})
