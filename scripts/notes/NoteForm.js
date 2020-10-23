const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <input type="date" id="note--date" name="date">
        <input type="text" id="note--author" name="author">
        <input type="text" id="note--suspect" name="suspect">
        <textarea placeholder="Enter Note Here" id="note--content">
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}