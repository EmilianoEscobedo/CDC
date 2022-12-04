import React from 'react'
import { useDataContext } from '../contexts/DataContext'
import '../assets/css/whoWeAre.css'

export const WhoWeAre = () => {
  const {whoWeAre} = useDataContext();
  console.log(whoWeAre)
  return (
    <>
        <div className='w-100 py-5 d-flex justify-content-center align-items-center whoWeAre__container' id="whoWeAre">
            <div className="container d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className='whoWeAre__title'>
                La forma Confiable de construir
              </h2>
              <h3 className='whoWeAre__subtitle mb-5'>
              ¿Quiénes somos?
              </h3>
              <img src={whoWeAre && whoWeAre[0].image} alt="team photo" className='mb-5 whoWeAre__img img-fluid'/>
            <p className='whoWeAre__text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil fugiat laudantium omnis! Eum perspiciatis sed quo doloribus? Modi obcaecati dicta ex numquam ipsa cupiditate deserunt, culpa velit, harum beatae adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod voluptatibus corporis autem in, magnam voluptates natus alias saepe quia reprehenderit, deleniti soluta quidem rerum doloremque? Numquam quis distinctio sit voluptas.
            </p>
            </div>
        </div>
    </>
  )
}
