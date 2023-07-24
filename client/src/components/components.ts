import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`
const FormInput = styled.input`
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`
const FormLabel = styled.label`
    font-size: 16px;
    margin-bottom: 8px;
`
const FormButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
const FormTitle = styled.h1`
color: purple;
font-family: monospace;
`
export {
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    FormTitle
}