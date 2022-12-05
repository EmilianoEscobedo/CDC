import { useDataContext } from '../contexts/DataContext'
import { Experience } from './Experience'
import '../assets/css/experiences.css'

export const Experiences = () => {
  const {experience} = useDataContext();
  return (
    <div id='services'>
      <div className='d-flex flex-column justify-content-center align-items-center text-center my-5' >
        <h2 className='experiences__title mb-2'>La forma experimentada de construir.</h2>
        <h3 className='experiences__subtitle'>Conocé nuestro últimos proyectos</h3>
      </div>
      <div className='container'>
        <div className='row text-center'>
          {experience && experience.map((exp, i) => <Experience  key={i} experience={exp} />)}
        </div>
      </div>
    </div>
  )
}
