import { ContactCV, EducationCV, ExperienceCv } from "./components/CvSections"
import { useState } from "react";
import { ContactForm, EducationForm, ExperienceForm } from "./components/CvForms";

// let app be the global state
function App() {
    const [contact, setContact] = useState({
      name: 'Your Name',
      mail: 'yourmail@gmail.com',
      phone: 'Phone Number',
      address: 'Address'
    })

    const [educationList, setEducationList] = useState([{
      id: crypto.randomUUID(),
      school: 'School Name',
      date: 'Start Date - End Date',
      major: 'Your Major'
    }])

    const [experienceList, setExperienceList] = useState([{
      id: crypto.randomUUID(),
      job: 'Your Job',
      position: 'Your Position',
      description: 'Your Experience Description (eg: contributed to something, increased revenue or something like that)',
      date: 'Start Date - End Date'
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
          <section id="cv-experience">
            <ExperienceCv listOfExperience={experienceList}/>
          </section>
        </section>

        <section id="cv-forms">
          <form id="form-detail">
            <ContactForm contact={contact} onChange={setContact} />
          </form>
          <form id="form-education">
            <EducationForm listOfEducations={educationList} setEducationList={setEducationList}/>
          </form>
          <form id="form-experience">
            <ExperienceForm listOfExperience={experienceList} setExperienceList={setExperienceList}/>
          </form>
        </section>  
      </main>
    </>
  )
}

export default App
