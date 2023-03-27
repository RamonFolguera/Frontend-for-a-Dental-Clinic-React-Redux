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
        
  
        if (data === "" && required === true) {
  
          
          return {message: "Please fill the field", validated: false};
  
      
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
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-=?\[\]{};:<>,./]).{8,}$/g
        .test(data)) {
          return {message: "Passwords should contain: Uppercase letters: A-Z, Lowercase letters: a-z, Numbers: 0-9 and Special characters.", validated: false};
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
          /^[0-9]{3}?[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}$/.test(data)
          ) {
          return {message: "Invalid phone number format", validated: false};
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
  