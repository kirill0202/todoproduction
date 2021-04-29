import styled from 'styled-components';
import { Link } from "react-router-dom";

export const WrapperForm = styled.div`
  padding-top: 1rem;

 .MuiFormControl-root{
    margin-bottom: 1rem;
  }
  .MuiButtonBase-root {
    margin-bottom: 1rem;
  }
  
  .MuiFormLabel-root{
    color: #000;
  }
`
export const WrapperLink = styled(Link)`
  cursor: poiner;
  text-decoration: none;
`
export const BoxForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .MuiContainer-root {
      position: relative;
    }
`