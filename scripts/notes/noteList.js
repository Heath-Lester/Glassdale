
import { getNotes, useNotes } from "./NoteProvider.js"
import { notesToHTML } from "./Note.js"

const eventHub = document.querySelector(".container")
const notesElement = document.querySelector(".notesContainer")

export const notesList = () => {
    // debugger
    getNotes()
        .then(() => {
            let noteHtmlList = ``
            const notes = useNotes()
            for (const note of notes) {
                noteHtmlList += notesToHTML(note)
            }
            render(noteHtmlList)
        })

}


eventHub.addEventListener("noteStateChanged", event => {
    console.log("Render Listener Pinged")
    // debugger
    const updatedNotes = useNotes()
    let noteHtmlList = ``
    for (const note of updatedNotes) {
        noteHtmlList += notesToHTML(note)
        render(noteHtmlList)
    }
})


const render = string => {
    notesElement.innerHTML = string
}