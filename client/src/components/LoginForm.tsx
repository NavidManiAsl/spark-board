import { 
    FormButton, 
    FormContainer, 
    FormLabel, 
    FormInput, 
    FormTitle, 
    FormText,
    FormLink,
    FormLine
} from "./components";

const LoginForm = ({loginClickHandler, forgotClickHandler, createAccClickHandler}) => {
    
    return(
        <>
            
            <FormContainer>
                <FormLabel>Username</FormLabel>
                <FormInput/>
                <FormLabel>Password</FormLabel>
                <FormInput/>
                <FormButton onClick={loginClickHandler}>Login</FormButton>
                <FormLink onClick={forgotClickHandler}>Forgot password?</FormLink>
                <FormLine/>
                <FormButton onClick={createAccClickHandler}>Create new account</FormButton>
            </FormContainer>
        </>
    )
}

export default LoginForm;