import ContactTel from '../../components/contactcomp/contacttel'
import Country from '../../components/contactcomp/contry'
import Countries from '../../components/contactcomp/countries'

function ContactUs() {
  return (
    <div className='space-y-12'>
      <Countries />
      <Country />
      <ContactTel />
    </div>
  )
}

export default ContactUs