import { useDataContext } from "../contexts/DataContext"
import { Service } from "./Service";
export const Services = () => {
  const {servicesData} = useDataContext();
  return (
    <>
    <div className="container h-100">
      <div className="row">
        {servicesData && servicesData.map((srv, i) => <Service  key={i} service={srv} />)}
      </div>
    </div>
    </>
  )
}
