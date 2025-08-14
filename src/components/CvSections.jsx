export function ContactCV({ contact }) {
    return (
        <>
            <h1>{contact.name}</h1>
            <div id="contact-info">
                <span>{contact.mail}</span>
                <span>{contact.phone}</span>
                <span>{contact.address}</span>
            </div>
        </>
    )
}

export function EducationCV({ listOfEducations }) {
    return (
        <>
            <h2>Education</h2>
            <hr />
            <div id="education-container">
                {listOfEducations.map((item) => {
                    return <EducationBox education={item} /> 
                })}
            </div>
        </>
    )
}

function EducationBox({ education }) {
    return (
        <div className="education-box">
            <div className="schoolANDdate-container">
                <h3>{education.school}</h3>
                <span>{education.date}</span>
            </div>
            <p>{education.major}</p>
        </div>
    )
}

export function ExperienceCv({ listOfExperience }) {
    return (
        <>
            <h2>Experience</h2>
            <hr />
            <div id="experience-container">
                {listOfExperience.map((item) => {
                    return <ExperienceBox experience={item} />
                })}
            </div>
        </>
    )
}

function ExperienceBox({ experience }) {
    return (
        <div className="experience-box">
            <div className="experienceANDdate-container">
                <h3>{experience.job}</h3>
                <span>{experience.date}</span>
            </div>
            <p>{experience.position}</p>
            <p>{experience.description}</p>
        </div>
    )
}