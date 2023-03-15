import React from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import "./Register.css";

export const Register = () => {
  return (
    <div className="registerBody">
      <div className="registerContent">
        <div className="registerInfo">
          IDIM. DENTAL CLINIC
          <p>Plaza América, 5 . 46006 València america@idim.es</p>
          <p>How to get there by public transport</p>
          <p>Bus lines</p>
          <p>
            Pl. América – Conde Salvatierra: lines 1 – 4 – 10 América – Marqués
            del Turia: lines 25 – 47 – 95
          </p>
          <p>Underground</p>
          <p>Alameda or Colón stations</p>
          <p>Parking</p>
          <p>Paseo Alameda area (between 3pm and 4pm)</p>
          <p>Mercado de Colón parking lot</p>
        </div>
        <div className="registerFormBox">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
