import styled from 'styled-components';
import Particles from 'react-particles-js';

import background from '../../assets/login_background.jpeg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BackgroundParticles = styled(Particles)`
  position: absolute;
  z-index: 1;
  
  width: 100%;
  height: 100%;

  user-select: none;
`;

export const Logo = styled.img`
  display: flex;

  margin-left: 180px;

  height: 312px;

  user-select: none;

  @media(max-width: 880px) {
    display: none;
  }
`;