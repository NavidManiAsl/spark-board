const usernameValidation = (userName:string) => {
   
   const regPattern= /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,19}$/

   return regPattern.test(userName);
}

const emailValidation = (email:string) => {
    const regPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/

    return regPattern.test(email);
}

const passwordValidtion = (password:string) => {
    
    const regPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

    return regPattern.test(password);
}

const passwordRepeatValidation = (password:string, repeatPassword:string) => {

    return password === repeatPassword;
}

export {
    usernameValidation,
    emailValidation,
    passwordValidtion,
    passwordRepeatValidation,
}