'use client'

import AboutArc from '@/components/about/AboutArc';
import AboutHeroSec from '@/components/about/AboutHeroSec';
import Legacy from '@/components/about/Legacy';
import OurCulture from '@/components/about/OurCulture';
import OurTeam from '@/components/about/OurTeam';
import WhoAreWe from '@/components/about/WhoAreWe';
import Culture from '@/components/subComponents/Culture';
import AppLayout from '@/layouts/AppLayout';
import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <Con>
      <AppLayout>
        <AboutHeroSec />
        <AboutArc />
        <WhoAreWe />
        <Legacy/>
        <OurCulture/>
        <Culture no/>
        <OurTeam/>
      </AppLayout>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;
  max-width: 1600px; 
  margin: 0 auto; /* Centers the content */
  overflow: hidden;
  
`;

export default About