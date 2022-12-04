import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import '../assets/css/detail.css'

export const Detail = () => {
  const {serviceId} = useParams();
  const {servicesData} = useDataContext();
  const service = servicesData.find(e => e.title === serviceId);
  return (
    <div className='row detail__container'>
      <div className='col-sm-1'></div>
      <div className='col-sm-3 text-center mb-4'>
        <img className='detail__image' src={service.image} alt='service image' />
      </div>
      <div className='col-sm-7'>
        <h1 className='detail__title'>{service.title}</h1>
        <p className='detail__text'>{service.description}</p>
      </div>
      <div className='col-sm-1'></div>
    </div>
  )
}
