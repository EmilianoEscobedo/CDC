import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import '../assets/css/detailServices.css'

export const DetailExperiences = () => {
  const {experienceId} = useParams();
  const {experience} = useDataContext();
  const exp = experience.find(e => e.title === experienceId);
  return (
    <div className='row detail__container'>
      <div className='col-md-1'></div>
      <div className='col-md-3 text-center mb-4'>
        <img className='detail__image' src={exp.image} alt='service image' />
      </div>
      <div className='col-md-7'>
        <h1 className='detail__title detail__mobile'>{exp.title}</h1>
        <p className='detail__text detail__mobile'>{exp.description}</p>
      </div>
      <div className='col-md-1'></div>
    </div>
  )
}