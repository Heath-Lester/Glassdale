
export const OfficerHTML = (officer) => {
    return `
    <section class="officerCard" id="officer--${officer.id}">
        <p class="officerName">${officer.name}</p>
                <dt>ID: ${officer.id}</dt>
                
    </section>
    `
}