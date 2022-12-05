import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import '../assets/css/detailServices.css'

export const DetailServices = () => {
  const {serviceId} = useParams();
  const {servicesData} = useDataContext();
  const service = servicesData.find(e => e.title === serviceId);
  return (
    <div className='row detail__container'>
      <div className='col-md-1'></div>
      <div className='col-md-3 text-center mb-4'>
        <img className='detail__image' src={service.image} alt='service image' />
      </div>
      <div className='col-md-7'>
        <h1 className='detail__title detail__mobile'>{service.title}</h1>
        <p className='detail__text detail__mobile'>{service.description}</p>
      </div>
      <div className='col-md-1'></div>
    </div>
  )
}
