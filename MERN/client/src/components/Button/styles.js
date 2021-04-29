import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const MuiButton = styled(Button)`
   .MuiButton-label {
       font-size: 1rem;
       color: ${({ theme }) => theme.textColor};
       opacity 0.7;
       text-transform: none;
   }
   &.MuiButton-root {
       width: 100%;
       border-radius: 0.4rem;
       border: ${({ theme }) => `0.1rem solid ${theme.border}`};
   }
   &.MuiButton-root:hover {
       background-color: ${({ theme }) => theme.hoverColor}
   }
`