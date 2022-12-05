import { InlineWidget } from 'react-calendly';
import '../assets/css/contact.css'

export const Contact = () => {
  return (
    <div className='contact__container text-center container' id='workWithUs'>
      <h2 className='contact__title'>Trabajemos juntos</h2>
      <h3 className='contact__subtitle'>Agendemos una llamada</h3>
      <p className='contact__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus et reiciendis quam maiores corrupti sed obcaecati ea mollitia, consequatur, delectus quidem vel itaque. Officiis provident praesentium optio facilis, esse tempora.</p>
      <InlineWidget url='https://calendly.com/cdc-cotizacion/30min?month=2022-12'/>
    </div>
  )
}
