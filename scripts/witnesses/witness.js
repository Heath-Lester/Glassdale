
const witnessCard = (witness) => {
    return `
    <div class="witnessCard" id="witness--${witness.id}">
        <p class="witnessName">${witness.name}</p>
        <p class="witnessStatement">${witness.statements}</p>
    </div>
    `
}