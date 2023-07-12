export const formValidator = (values) => {
    const errors = {};
    if (!values.userId) {
      errors.userId = "userId is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    else if(values.password.length < 5){
      errors.password= "min 5 character password"
    }
    return errors;
  }