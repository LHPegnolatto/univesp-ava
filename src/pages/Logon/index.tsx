import React from 'react';

import { Container, Logo, BackgroundParticles } from './styles';

import LogonProvider from '../../context/Logon';

import LogonAction from '../../components/LogonAction';

import logo from '../../assets/univesp_logo.svg';

const Logon: React.FC = () => {
  return (
    <LogonProvider>
      <Container>
        <LogonAction />
            
        <Logo src={logo} alt="UNIVESP" />

        <BackgroundParticles
          params={{ 
            fps_limit: 60,
            particles: {
              color: { value: "#ffffff" },
              line_linked: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.8,
                width: 1
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 2,
                straight: false
              },
              number: { density: { enable: true, value_area: 500 }, value: 30 },
              opacity: {
                anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                random: false,
                value: 0.8
              },
              shape: {
                type: "circle"
              },
              size: {
                anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                random: true,
                value: 5
              }
            },
            polygon: {
              draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
              move: { radius: 10 },
              scale: 1,
              type: "none",
              url: ""
            },
            retina_detect: true
          }}
        />
      </Container>
    </LogonProvider>
  );
}

export default Logon;