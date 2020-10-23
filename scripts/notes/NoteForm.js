import{ saveNote } from './NoteProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
    contentTarget.innerHTML = `
        <input type="date" id="note--date" name="date">
        <input type="text" id="note--author" name="author">
        <input type="text" id="note--suspect" name="suspect">
        <textarea placeholder="Enter Note Here" id="note--content"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    console.log("Click Event")
    debugger

    if (clickEvent.target.id === "saveNote") {
        
        const date = document.querySelector("#note--date").value
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const content = document.querySelector("#note--content").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date,
            author,
            suspect,
            content
        }

        // Change API state and application state
        saveNote(newNote)
    }
})




export const NoteForm = () => {
    render()
}