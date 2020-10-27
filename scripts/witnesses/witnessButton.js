
const eventHub = document.querySelector(".container")

const buttonElement = document.querySelector("#witnesses")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnesses") {
        const customEvent = new CustomEvent("witnessClick")

        console.log("witnessEvent")
        eventHub.dispatchEvent(customEvent)
    }
})
