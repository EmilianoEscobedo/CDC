export const CounterServices = () => {
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
