
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
import { useApiRequest } from "../utils/ApiRequest";



const Login = () => {
    const [register, SetRegister] = useState(false);
    const [signinFormData, setSigninFormdata] = useState({
        name: '',
        email: '',
        password: '',
        repeat: '',
    })
    const {data, error, loading, apiCall} = useApiRequest()
    const [message, setMessage] = useState(false) 

    const handelSigninFormChange = (name, value) =>{
        setSigninFormdata({
            ...signinFormData,
            [name]:value})
    }
    
    const signinHandler = (event)=>{
       event.preventDefault();
       const url = 'http://localhost/register'
       const method = 'post'
       apiCall(url, method, signinFormData)
       setMessage(true)
       setSigninFormdata({
        name: '',
        email: '',
        password: '',
        repeat: '',
    })
    }
    
     
    const loginHandler = ()=>{
        console.log('click')
    }
    const forgotPasswordHandler = ()=>{
        console.log('click')
    }
    
    const createAccHandler = () => {
        SetRegister(!register)
    }

    
    const backHandler = () => {
        SetRegister(!register);
        setMessage(false)
    }

    return (
       <FormContainer>
        {!register &&
        <LoginForm
        loginClickHandler={loginHandler}
        forgotClickHandler={forgotPasswordHandler}
        createAccClickHandler={createAccHandler}/>}
        {register && 
        <SigninForm 
        formData={signinFormData}
        backClickHandler={backHandler}
        changeHandler= {handelSigninFormChange}
        onSubmit = {signinHandler}
        showMessage={message}
        />}
       </FormContainer>
    )
}

export default Login;