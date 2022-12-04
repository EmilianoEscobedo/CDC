import { InlineWidget } from "react-calendly";
import '../assets/css/contact.css'

export const Contact = () => {
  return (
    <div className="contact__container text-center container" id="workWithUs">
              <h2 className="contact__title">Trabajemos juntos</h2>
              <h3 className="contact__subtitle">Agendemos una llamada</h3>
              <p className="contact__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus et reiciendis quam maiores corrupti sed obcaecati ea mollitia, consequatur, delectus quidem vel itaque. Officiis provident praesentium optio facilis, esse tempora.</p>
              <InlineWidget url="https://calendly.com/cdcconstrucciones?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=224962&text_color=ffffff&primary_color=bba14f" />
    </div>
  )
}
