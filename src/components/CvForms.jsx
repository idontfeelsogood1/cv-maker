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
    }

    return (
        <>
            <h2>Education</h2>
            <hr />
            <div className="education-form-box-container">
                {listOfEducations.map((item) => {
                    return <EducationForm education={item} 
                                          setSelectedId={setSelectedId}
                                          selectedId={selectedId}
                                          setEducationList={setEducationList}
                                          listOfEducations={listOfEducations}
                            />
                })}
            </div>
            <button onClick={handleAddEducation}>Add education</button>
        </>
    )
}

function EducationFormBox({ education, setSelectedId, selectedId, setEducationList, listOfEducations }) {
    function handleEdit(e, string) {
        // select object with selectedId in array
        // change that object field
        // return a new educationList with that object
    }

    function handleRemove() {
        // remove the object with the current education.id in arr
        // return a new educationList without that object
    }

    function handleClose() {
        // set selectedId to null
    }

    function handleSelect() {
        // set selectedId to current education.id
    }

    if (selectedId === education.id) {
        return (
            <div className="education-box">
                <div className="education-header-container">
                    <h3>{education.school}</h3>
                    <button onClick={handleSelect}>Edit</button>
                    <button onClick={handleRemove}>Remove</button>
                </div>
                <div className="education-form">
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" 
                        value={education.school}
                        onChange={handleEdit(e, 'school')}
                    />      
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" 
                        value={education.major}
                        onChange={handleEdit(e, 'major')}
                    />        
                    <label htmlFor=""></label>
                    <input type="text" name="" id="" 
                        value={education.date}
                        onChange={handleEdit(e, 'date')}
                    />        
                </div>
                <button onClick={handleClose}>Close</button>
                <hr />
            </div>
        )
    } else {
        return (
            <>
                <div className="education-box">
                    <div className="education-header-container">
                        <h3>{education.school}</h3>
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
                </div>
                <hr />
            </>
        )
    }  
}