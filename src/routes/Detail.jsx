import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const {serviceId} = useParams();
  const {servicesData} = useDataContext();
  const service = servicesData.find(e => e.title === serviceId);
  return (
    <div>
      <h1>{service.title}</h1>
      <img src={service.image} alt="" />
      <p>{service.description}</p>
    </div>
  )
}
