import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { InputText } from '../../components/InputText/InputText';
import { updateAppointment } from '../../services/apiCalls';
import { appointmentData } from '../appointmentSlice'
import { userData } from '../userSlice';



export const ModifyAppointment = () => {

  const [dataAppointment, setDataAppointment] = useState({
    date: "",

  })

  const inputHandler = (e) => {
    setDataAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const credentialsRdx = useSelector(userData);
  const appoimentSelectedRdx = useSelector(appointmentData)

  let params = appoimentSelectedRdx.choosenAppointment.id 



  

  const checkError = (e) => {}

  const updateApp = () => {
    console.log("entro en submit");  
    updateAppointment(params, dataAppointment, credentialsRdx.credentials.token);
    console.log(dataAppointment);
 
  };

  return (
    <>
    <div>

   
  
    {appoimentSelectedRdx.choosenAppointment.date }
    <InputText
                  // className={
                  //   credentialsError.nameError === ""
                  //     ? "inputBasicDesign"
                      
                  //     : "inputBasicDesign inputErrorDesign"
                  // }
                  type={"datetime-local"}
                  name={"date"}
                  
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
  </div>
    <div
    // type="submit"
    // className={
    //   updateAppointmentAct
    //     ? "registerSendDeac registerSendAct text-center"
    //     : "registerSendDeac text-center"
    // }
    onClick={
      // updateAppointmentAct
        () => { 
          updateApp();
          
        //   }
        // : () => {}
    }}
  >
    Submit
  </div>
</>
  )
}
