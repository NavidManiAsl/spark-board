
import { FormTitle, FormText, FormContainer } from "../components/components";
import {
    usernameValidation,
    passwordValidtion,
    passwordRepeatValidation,
    emailValidation
} from '../utils/validation'
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import SigninForm from "../components/SigninForm";


const Login = () => {
    const [register, SetRegister] = useState(false);
    const loginHandler = ()=>{
        console.log('click')
    }
    const forgotPasswordHandler = ()=>{
        console.log('click')
    }
    
    const createAccHandler = () => {
        SetRegister(!register)
    }

    const signinHandler = () => {

    }
    const backHandler = () => {
        SetRegister(!register);
    }

    return (
       <FormContainer>
        {!register &&
        <LoginForm
        loginClickHandler={loginHandler}
        forgotClickHandler={forgotPasswordHandler}
        createAccClickHandler={createAccHandler}/>}
        {register && 
        < SigninForm 
        signinClickHandler={signinHandler}
        backClickHandler={backHandler}
        />}
       </FormContainer>
    )
}

export default Login;