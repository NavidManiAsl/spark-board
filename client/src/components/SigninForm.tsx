import { 
    FormButton, 
    FormContainer, 
    FormLabel, 
    FormInput,
    FormIcon 
} from "./components";
import { BackIcon } from "../assets";
import { emailValidation, usernameValidation, passwordRepeatValidation, passwordValidation } from "../utils/validation";


const SigninForm = ({backClickHandler, formData, changeHandler, onSubmit}) => {

   const handelChange = (event)=>{
    const {name, value} =event.target;
    changeHandler(name, value);
   }
   
   
  // Todo: provide the user with appropriate validation rules  

    return (
       <FormContainer>
        <FormLabel>Username</FormLabel>
        <FormInput name="name" value={formData.name} onChange={handelChange} />
        <FormLabel>Email</FormLabel>
        <FormInput name="email" value={formData.email} onChange={handelChange}/>
        <FormLabel>Password</FormLabel>
        <FormInput name="password" value={formData.password} onChange={handelChange}/>
        <FormLabel>Repeat password</FormLabel>
        <FormInput name="repeat" value={formData.repeat} onChange={handelChange}/>
        <FormButton onClick={onSubmit} 
        disabled={
            !usernameValidation(formData.name)|| 
            !emailValidation(formData.email) ||
            !passwordValidation(formData.password) ||
            !passwordRepeatValidation(formData.password, formData.repeat)}>Sign in</FormButton>
        <FormIcon src={BackIcon} onClick={backClickHandler}/>
       </FormContainer>
    )
}

export default SigninForm;