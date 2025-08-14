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
    let [selectedId, setSelectedId] = useState('null')

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
        console.log(education.id)
        setSelectedId(education.id)
    }

    function handleRemove() {
        // remove the object with the current education.id in arr
        // return a new educationList without that object
    }

    function handleEdit(e, string) {
        // select object with selectedId in array
        // change that object field
        // return a new educationList with that object
    }

    function handleClose() {
        // set selectedId to null
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
                        <label htmlFor="date"></label>
                        <input type="text" name="date" id="date"
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