import {createContext, 
    useContext, 
  } from 'react';
  import {useCollectionData} from 'react-firebase-hooks/firestore';
  import {app} from '../firebase/credentials';
  import {
    collection,
    query,
    getFirestore
  } from 'firebase/firestore';
  
  
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

    //whoWeAre data
    const whoWeAreRef = collection(db, 'assets/images/WhoWeAre');
    const querywhoWeAre = query(whoWeAreRef);
    const [whoWeAre] = useCollectionData(querywhoWeAre);

    //Experience data
    const experienceRef = collection(db, 'assets/experiences/experiences');
    const queryexperience = query(experienceRef);
    const [experience] = useCollectionData(queryexperience);

    return (
      <dataContext.Provider
        value={{
          imgSlider,
          servicesData,
          whoWeAre,
          experience,
        }}
      >
        {children}
      </dataContext.Provider>
    );
  }
  