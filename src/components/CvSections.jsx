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
        <div className="education-box" key={education.id}>
            <div className="schoolANDdate-container">
                <h3>{education.school}</h3>
                <span>{education.date}</span>
            </div>
            <p>{education.major}</p>
        </div>
    )
}