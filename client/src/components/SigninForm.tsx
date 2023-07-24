import { 
    FormButton, 
    FormContainer, 
    FormLabel, 
    FormInput, 
} from "./components";

const SigninForm = ({signinClickHandler}) => {

    
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
       </FormContainer>
    )
}

export default SigninForm;