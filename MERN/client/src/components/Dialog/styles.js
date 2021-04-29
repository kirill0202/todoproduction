import { Dialog } from "@material-ui/core";
import styled from 'styled-components';

export default styled(({ ...otherProps }) => <Dialog {...otherProps} classes={{ root: 'root', paper: 'paper ' }} />)`
  &.root {
      background-color: ${(props) => props.theme.dialogBackground};
      box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.5);
  }
  .paper {
    background-color: ${(props) => props.theme.background};
    border-radius: 0.6rem;
    width: 40rem;
    height: 12rem;
    overflow-x: hidden;
  }
  .MuiButtonBase-root {
    margin-bottom: 1rem;
  }
`