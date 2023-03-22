export const validate = (name, data, required) => {
    switch (name) {
      case "name":
      case "surname":
      case "nombre":
      case "apellido":
      case "message":
      case "firstName":
      case "lastName":
      case "first_surname":
      case "second_surname":
        //Aqui evaluaremos strings que NO pueden tener números
  
        if (data === "" && required === true) {
  
          
          return {message: "Please fill the field", validated: false};
  
          //Evaluamos mediante la expresión regular 
        } else if (!/[a-z]/gi.test(data)) {
          return {message: "Invalid name format", validated: false};
        }
  
        return {message: "", validated: true};
  
      case "email":
        if (data === "" && required === true) {
          return {message: "Please fill the field", validated: false};
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
        ) {
          return {message: "Invalid e-mail format", validated: false};
        }
  
        return {message: "", validated: true};
  
      case "password":
        if (data === "" && required === true) {
          return {message: "Please fill the field", validated: false};
        } else if (!/[\d()+-]/g.test(data)) {
          return {message: "Invalid password format", validated: false};
        }
        return {message: "", validated: true};
        
      case "phone":
      case "tfno":
      case "telefono":
      case "phonenumber":
      case "mobile":
        if (data === "" && required === true) {
          return {message: "Please fill the field", validated: false};
        } else if (
          /\+?\(?\d{2,4}\)?[\d\s-]{12,}/.test(data)
          ) {
          return {message: "Invalid mobile format", validated: false};
        }

     
        return {message: "", validated: true};

  
      case "dni":
      case "document":
      case "nif":
        return {message: "", validated: true};

        
      case "address":
        if (data === "" && required === true) {
          return {message: "Please fill the field", validated: false};
        } else if (
          /^[a-zA-Z0-9_.-]*$/.test(data)
          ) {
          return {message: "Invalid address format", validated: false};
        }

        return {message: "", validated: true};

      
  
      default:
        console.log("Field not recognized");
    }
  };
  