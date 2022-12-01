import { InlineWidget } from "react-calendly";


export const Contact = () => {
  return (
    <div className="mt-5 services__container-title text-center container">
              <h2 className="text-tertiary font-monospace">Trabajemos juntos</h2>
              <p className="fs-3">Agendemos una llamada</p>
              <InlineWidget url="https://calendly.com/cdcconstrucciones?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=224962&text_color=ffffff&primary_color=bba14f" />
    </div>
  )
}
