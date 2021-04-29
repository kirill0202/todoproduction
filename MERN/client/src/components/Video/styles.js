import styled from 'styled-components';
import { pause, play } from '../../static';

export const VideoStyles = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`
export const Pause = styled.img`
  background: no-repeat url(${ pause });
  z-index: 30;
  cursor: pointer;
  padding: 1rem;
  position: absolute;
  top: 5px;
  right: 5px;
`
export const Play = styled.img`
  background: no-repeat url(${ play });
  z-index: 30;
  cursor: pointer;
  padding: 1rem;
  position: absolute;
  top: 5px;
  right: 5px;
`