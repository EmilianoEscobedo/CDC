import { useEffect } from "react";
import '../assets/css/counterServices.css'
export const CounterServices = () => {
  useEffect(()=>{
    const counters = document.getElementsByClassName('number');
    const animateCounters = () => {
        for (const counter of counters) {
            let max_quantity =+ counter.dataset.total,
                actual_value =+ counter.innerText
                if (actual_value != max_quantity){
                    const time = setInterval(()=> {
                    counter.innerText = (actual_value +=1);
                    if (actual_value === max_quantity){
                        clearInterval(time)
                        counter.style.color='#BBA14F';
                    }
                },150);
            }}
    }
    //API intersectionObserver
    const showCounters = elements => {
        elements.forEach(e => {
            if(e.isIntersecting) {
                e.target.classList.add('animate');
                e.target.classList.remove('dontShow');
                setTimeout(animateCounters,300);
            }
        });
    }
    const observer = new IntersectionObserver(showCounters, {
        threshold: 0.75
    })
    const elementHTML = document.getElementById('counters')
    observer.observe(elementHTML)
  },[])
  
  return (
    <div id="counters" className="counterServices__container container text-center text-white rounded-3 dontShow">
            <div className="row">
              <div className="col-12 col-sm-4 counter--container-responsive rounded-3">
                <div className="counterServices__number number" data-total="10">00</div>
                <i className="fa-solid fa-clock-rotate-left fa-2x pb-3"></i>
                <h3>Años de <span className="counterServices__hightlight">experiencia</span> </h3>
              </div>
              <div className="col-12 col-sm-4 counter--container-responsive rounded-3">
                <div className="counterServices__number number" data-total="39">00</div>
                <i className="fa-solid fa-user-check fa-2x pb-3"></i>
                <h3>Clientes <span className="counterServices__hightlight">satisfechos</span></h3>
              </div>
              <div className="col-12 col-sm-4 counter--container-responsive rounded-3">
                <div className="counterServices__number number" data-total="51">00</div>
                <i className="fa-solid fa-house-circle-check fa-2x pb-3"></i>
                <h3>Proyectos <span className="counterServices__hightlight">finalizados</span></h3>
              </div>
            </div>
    </div>
  )
}
