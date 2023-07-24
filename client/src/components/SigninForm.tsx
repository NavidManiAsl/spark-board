import { 
    FormButton, 
    FormContainer, 
    FormLabel, 
    FormInput,
    FormIcon 
} from "./components";
import { BackIcon } from "../assets";

const SigninForm = ({signinClickHandler, backClickHandler}) => {

    
    
    return (
       <FormContainer>
        <FormLabel>Username</FormLabel>
        <FormInput/>
        <FormLabel>Email</FormLabel>
        <FormInput/>
        <FormLabel>Password</FormLabel>
        <FormInput/>
        <FormLabel>Repeat password</FormLabel>
        <FormInput/>
        <FormButton onClick={signinClickHandler}>Sign in</FormButton>
        <FormIcon src={BackIcon} onClick={backClickHandler}/>
       </FormContainer>
    )
}

export default SigninForm;