
export const CriminalHTML = (criminal) => {
    return `
    <section class="criminalCard" id="criminal--${criminal.id}">
        <p class="criminalName">${criminal.name}</p>
                <dt>Age: ${criminal.age}</dt>
                <dt>Crime: ${criminal.conviction}</dt>
                <dt>Arresting Officer: ${criminal.arrestingOfficer}</dt>
                <dt>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</dt>
                <dt>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</dt>
    </section>
    `
}