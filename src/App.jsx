import { ContactCV, EducationCV } from "./components/CvSections"
import { useState } from "react";
import { ContactForm } from "./components/CvForms";

// let app be the global state
function App() {
    const [contact, setContact] = useState({
      name: 'Set Your Name',
      mail: 'someoneexample@gmail.com',
      phone: 'Your phone number',
      address: 'Your address'
    })

    const [educationList, setEducationList] = useState([{
      school: 'Your Education',
      date: 'Started - Ended',
      major: 'Some major in example'
    }])

  return (
    <>
      <header id="app-name">
        <span>CV Maker</span>
        <button id="download-btn">Download</button>
      </header>

      <main>
        <section id="cv-paper">
          <header id="cv-contact">
            <ContactCV contact={contact}/>
          </header>
          <section id="cv-education">
            <EducationCV listOfEducations={educationList}/>
          </section>
          <section id="cv-experience"></section>
        </section>

        <section id="cv-forms">
          <form id="form-detail">
            <ContactForm contact={contact} onChange={setContact} />
          </form>
          <form id="form-education"></form>
          <form id="form-experience"></form>
        </section>  
      </main>
    </>
  )
}

export default App
