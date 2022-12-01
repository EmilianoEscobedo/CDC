import { useEffect } from "react";
export const CounterServices = () => {
  useEffect(()=>{
    const counters = document.getElementsByClassName('number');
    const animateCounters = () => {
        for (const counter of counters) {
            let max_quantity =+ counter.dataset.total,
                actual_value =+ counter.innerText
                if (actual_value != max_quantity){
                    let time = setInterval(()=> {
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
    <div id="counters" className="container my-5 text-center bg-primary text-white rounded-3 dontShow">
            <div className="row">
              <div className="col-12 col-sm-4 counter--container-responsive rounded-3">
                <div className="counter--container-number number" data-total="10">00</div>
                <i className="fa-solid fa-clock-rotate-left fa-2x pb-3"></i>
                <h3>Años de <span className="text-tertiary">experiencia</span> </h3>
              </div>
              <div className="col-12 col-sm-4 counter--container-responsive rounded-3">
                <div className="counter--container-number number" data-total="39">00</div>
                <i className="fa-solid fa-user-check fa-2x pb-3"></i>
                <h3>Clientes <span className="text-tertiary">satisfechos</span></h3>
              </div>
              <div className="col-12 col-sm-4 counter--container-responsive rounded-3">
                <div className="counter--container-number number" data-total="51">00</div>
                <i className="fa-solid fa-house-circle-check fa-2x pb-3 "></i>
                <h3>Proyectos <span className="text-tertiary">finalizados</span></h3>
              </div>
            </div>
    </div>
  )
}
