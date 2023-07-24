import { 
    FormButton, 
    FormContainer, 
    FormLabel, 
    FormInput, 
} from "./components";

const SigninForm = () => {

    
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
        <FormButton>Sign in</FormButton>
       </FormContainer>
    )
}

export default SigninForm;