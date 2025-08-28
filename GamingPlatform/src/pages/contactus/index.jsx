import Contact from '../../components/contactcomp/contact'
import ContactTel from '../../components/contactcomp/contacttel'
import Country from '../../components/contactcomp/contry'
import Countries from '../../components/contactcomp/countries'
import ContactHome from '../../components/homecomp/contacyhome'

function ContactUs() {
  return (
    <div className='space-y-12'>
      <Countries />
      <Country />
      <ContactTel />
      <Contact />
      <ContactHome />
    </div>
  )
}

export default ContactUs