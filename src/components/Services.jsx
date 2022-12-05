import { useDataContext } from '../contexts/DataContext'
import { Service } from './Service';
import '../assets/css/services.css'

export const Services = () => {
  const {servicesData} = useDataContext();
  return (
    <div id='services'>
      <div className='d-flex flex-column justify-content-center align-items-center text-center my-5' >
        <h2 className='services__title mb-2'>La forma integral de construir.</h2>
        <h3 className='services__subtitle'>Conocé nuestros servicios</h3>
      </div>
      <div className='container'>
        <div className='row'>
          {servicesData && servicesData.map((srv, i) => <Service  key={i} service={srv} />)}
        </div>
      </div>
    </div>
  )
}
