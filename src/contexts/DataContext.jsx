import {createContext, 
    useContext, 
  } from "react";
  import {useCollectionData} from "react-firebase-hooks/firestore";
  import {app} from "../firebase/credentials";
  import {
    collection,
    query,
    getFirestore
  } from "firebase/firestore";
  
  
  export const dataContext = createContext();
  export const useDataContext = () => {
    const context = useContext(dataContext);
    return context;
  };
  export default function DataContextProvider(props) {
    const {children} = props;
    const db = getFirestore(app);
    
    //Slider data
    const sliderRef = collection(db, 'assets/images/Slider');
    const querySlider = query(sliderRef);
    const [imgSlider] = useCollectionData(querySlider);

    //Services data
    const servicesRef = collection(db, 'assets/services/services');
    const queryServices = query(servicesRef);
    const [servicesData] = useCollectionData(queryServices);

    return (
      <dataContext.Provider
        value={{
          imgSlider,
          servicesData,
        }}
      >
        {children}
      </dataContext.Provider>
    );
  }
  