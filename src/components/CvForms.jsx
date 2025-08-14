import { useState } from "react";

export function ContactForm({contact, onChange}) {
    return (
        <>
            <h2>Details</h2>
            <hr />
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                    value={contact.name}
                    onChange={(e) => onChange({...contact, name: e.target.value})}
                />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"
                    value={contact.mail}
                    onChange={(e) => onChange({...contact, mail: e.target.value})}
                />
            </p>
            <p>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone"
                    value={contact.phone}
                    onChange={(e) => onChange({...contact, phone: e.target.value})}
                />
            </p>
            <p>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address"
                    value={contact.address}
                    onChange={(e) => onChange({...contact, address: e.target.value})}
                />
            </p>
        </>
    )
}

export function EducationForm({ listOfEducations, setEducationList }) {
    let [selectedId, setSelectedId] = useState(null)

    function handleAddEducation(){
        // create new education object
        // return a new educationList with that object
        let newEducation = {
            id: crypto.randomUUID(),
            school: 'School Name',
            date: 'Start Date - End Date',
            major: 'Major'
        }
        setEducationList([...listOfEducations, newEducation])
    }

    return (
        <>
            <h2>Education</h2>
            <hr />
            <div className="education-form-box-container">
                {listOfEducations.map((item) => {
                    return <EducationFormBox education={item} 
                                          setSelectedId={setSelectedId}
                                          selectedId={selectedId}
                                          setEducationList={setEducationList}
                                          listOfEducations={listOfEducations}
                            />
                })}
            </div>
            <button onClick={handleAddEducation} type="button">Add Education</button>
        </>
    )
}

function EducationFormBox({ education, setSelectedId, selectedId, setEducationList, listOfEducations }) {
    function handleSelect() {
        // set selectedId to current education.id
        setSelectedId(education.id)
    }

    function handleRemove() {
        // remove the object with the current education.id
        // return a new educationList without that object
        
        let listCopy = listOfEducations.map((object) => {
            return {...object}
        })  
        let remainingList = listCopy.filter((object) => {
            if (object.id !== education.id) return true
            else return false
        })
        setEducationList(remainingList)
    }

    function handleEdit(e, field) {
        // select object with selectedId in listOfEducation
        // change that object field
        // return a new educationList with that object

        let changedList = listOfEducations.map((object) => {
            if (object.id === education.id) {
                return {...object, [field]: e.target.value}
            } else {
                return {...object}
            }
        })

        setEducationList(changedList)
    }

    function handleClose() {
        // set selectedId to null
        setSelectedId(null)
    }
    
    if (selectedId === education.id) {
        return (
            <div className="education-box">
                <div className="education-header-container">
                    <h3>{education.school}</h3>
                    <button onClick={handleSelect} type="button">Edit</button>
                    <button onClick={handleRemove} type="button">Remove</button>
                </div>
                <div className="education-form">
                    <p>
                        <label htmlFor="school"></label>
                        <input type="text" name="school" id="school"
                            value={education.school}
                            onChange={(e) => {
                                handleEdit(e, 'school')}
                            }
                        />
                    </p>    
                    <p>
                        <label htmlFor="major"></label>
                        <input type="text" name="major" id="major"
                            value={education.major}
                            onChange={(e) => {
                                handleEdit(e, 'major')}
                            }
                        />
                    </p>       
                    <p>
                        <label htmlFor="date-education"></label>
                        <input type="text" name="date-education" id="date-education"
                            value={education.date}
                            onChange={(e) => {
                                handleEdit(e, 'date')}
                            }
                        />
                    </p>
                </div>
                <button onClick={handleClose} type="button">Close</button>
                <hr />
            </div>
        )
    } else {
        return (
            <>
                <div className="education-box">
                    <div className="education-header-container">
                        <h3>{education.school}</h3>
                        <button onClick={handleSelect} type="button">Edit</button>
                        <button onClick={handleRemove} type="button">Remove</button>
                    </div>
                </div>
                <hr />
            </>
        )
    }  
}

export function ExperienceForm({ listOfExperience, setExperienceList }) {
    let [selectedId, setSelectedId] = useState(null)

    function handleAddExperience() {
        // create new experience object
        // return a new experienceList with that object
        let newExperience = {
            id: crypto.randomUUID(),
            job: 'Your Job',
            position: 'Your Position',
            description: 'Your Experience Description (eg: contributed to something, increased revenue or something like that)',
            date: 'Start Date - End Date'
        }
        setExperienceList([...listOfExperience, newExperience])
    }
    
    return (
        <>
            <h2>Experience</h2>
            <hr />
            <div className="experience-form-box-container">
                {listOfExperience.map((item) => {
                    return <ExperienceBox experience={item}
                                          selectedId={selectedId} 
                                          listOfExperience={listOfExperience}
                                          setSelectedId={setSelectedId}
                                          setExperienceList={setExperienceList}
                                          />
                })}
            </div>
            <button onClick={handleAddExperience} type="button">Add Experience</button>
        </>
    )
}

function ExperienceBox({ experience, selectedId, listOfExperience, setSelectedId, setExperienceList }) {
    function handleSelect() {
        // set selectedId to current experience.id
        setSelectedId(experience.id)
    }

    function handleRemove() {
        // remove the object with the current experience.id
        // return a new experienceList without that object
        
        let listCopy = listOfExperience.map((object) => {
            return {...object}
        })  
        let remainingList = listCopy.filter((object) => {
            if (object.id !== experience.id) return true
            else return false
        })
        setExperienceList(remainingList)
    }

    function handleEdit(e, field) {
        // select object with selectedId in listOfExperience
        // change that object field
        // return a new experienceList with that object

        let changedList = listOfExperience.map((object) => {
            if (object.id === experience.id) {
                return {...object, [field]: e.target.value}
            } else {
                return {...object}
            }
        })

        setExperienceList(changedList)
    }

    function handleClose() {
        // set selectedId to null
        setSelectedId(null)
    }
    
    
    if (selectedId === experience.id) {
        return (
            <div className="experience-box">
                <div className="experience-header-container">
                    <h3>{experience.job}</h3>
                    <button onClick={handleSelect} type="button">Edit</button>
                    <button onClick={handleRemove} type="button">Remove</button>
                </div>
                <div className="experience-form">
                    <p>
                        <label htmlFor="job"></label>
                        <input type="text" name="job" id="job"
                            value={experience.job}
                            onChange={(e) => {
                                handleEdit(e, 'job')}
                            }
                        />
                    </p>    
                    <p>
                        <label htmlFor="position"></label>
                        <input type="text" name="position" id="position"
                            value={experience.position}
                            onChange={(e) => {
                                handleEdit(e, 'position')}
                            }
                        />
                    </p>       
                    <p>
                        <label htmlFor="description"></label>
                        <textarea type="text" name="description" id="description"
                            value={experience.description}
                            onChange={(e) => {
                                handleEdit(e, 'description')}
                            }
                        />
                    </p>
                    <p>
                        <label htmlFor="date-experience"></label>
                        <input type="text" name="date-experience" id="date-experience"
                            value={experience.date}
                            onChange={(e) => {
                                handleEdit(e, 'date')}
                            }
                        />
                    </p>
                </div>
                <button onClick={handleClose} type="button">Close</button>
                <hr />
            </div> 
        )
    } else {
        return (
            <>
                <div className="experience-box">
                    <div className="experience-header-container">
                        <h3>{experience.job}</h3>
                        <button onClick={handleSelect} type="button">Edit</button>
                        <button onClick={handleRemove} type="button">Remove</button>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}