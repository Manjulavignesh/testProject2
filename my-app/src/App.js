import React, { Fragment,useState } from "react";
import Input from "./components/Input";
import ShowMedicineOnScreen from "./components/ShowMedicineOnScreen";


const App=()=> {
  const [availableMedicine,setAvailableMedicine]=useState([]);    
    const inputHandler=(obj)=>{
    setAvailableMedicine((prevMedicine)=>{
        return [...prevMedicine,obj];
    })

    }
  return (
    <Fragment>
      <Input onInput={inputHandler} />
      <ShowMedicineOnScreen MedicineDetails={availableMedicine}/>
      </Fragment>
  );
}

export default App;
