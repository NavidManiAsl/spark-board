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
  &:disabled {
    opacity: 0.5;
    &:hover {
      background-color: #007bff;
    }
  }

  &:hover {
    background-color: #0056b3;
  }
`
const FormTitle = styled.h1`
color: darkgray;
font-family: monospace;
`
const FormText = styled.p`
    font-size: 16px;
    margin-bottom: 8px;
`
const FormLink = styled.a`
color: darkblue;
text-decoration:none;
font-size: 16px;
margin: 8px auto;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }


`
const FormLine = styled.hr`
color:black;
opacity:0.5;
size:2;
width:100%;
margin-bottom:20px;
`
const FormIcon = styled.img`
width:30px;
height:auto;
&:hover {
  cursor: pointer;
}
`
export {
    FormButton,
    FormContainer,
    FormInput,
    FormLabel,
    FormTitle,
    FormText,
    FormLink,
    FormLine,
    FormIcon
}