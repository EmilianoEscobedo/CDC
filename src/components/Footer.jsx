import { HashLink } from 'react-router-hash-link'
import '../assets/css/footer.css'

export const Footer = () => {
  return (
    <footer className='text-center text-white mt-5'>
      <div className='container'>
        <section className='mt-5'>
          <div className='row text-center d-flex justify-content-center pt-5'>
            <div className='col-md-4'>
              <h6 className='text-uppercase font-weight-bold'>
                <HashLink smooth to='#services' className='text-white'>Servicios</HashLink >
              </h6>
            </div>
            <div className='col-md-4'>
              <h6 className='text-uppercase font-weight-bold'>
                <HashLink  smooth to='#whoWeAre' className='text-white'>Quiénes somos</HashLink >
              </h6>
            </div>
            <div className='col-md-4'>
              <h6 className='text-uppercase font-weight-bold'>
                <HashLink  smooth to='#workWithUs' className='text-white'>Cotiza tu obra</HashLink >
              </h6>
            </div>
          </div>
        </section>
        <hr className='my-5' />
        <section className='mb-5'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-8'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti
                dicta, aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
        <section className='text-center mb-5'>
          <a href='https://wa.me/2317538930' className='text-white'>
            <i className='fa-brands fa-whatsapp fa-2xl'></i>
          </a>
          <a href='https://www.instagram.com/be.creativecloud/' className='text-white ms-5'>
            <i className='fa-brands fa-instagram fa-2xl'></i>
          </a>
          <a href='https://www.google.com.ar/maps/@-34.9219017,-57.9488299,16z' className='text-white ms-5'>
            <i className='fa-solid fa-location-dot fa-2xl'></i>
          </a>
        </section>
      </div>
      <div className='text-center p-3'>
        <a className='text-white footer__copyright' href='https://www.linkedin.com/in/emiliano-escobedo/'
          > 2022 Copyright © | Built by Emi
        </a>
      </div>
    </footer>
  )
}
