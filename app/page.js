'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from '@/components/subComponents/HeroSection';
import Trusted from '@/components/subComponents/Trusted';
import TracingFootprints from '@/components/subComponents/TracingFootprints';
import Services from '@/components/subComponents/Services';
import Culture from '@/components/subComponents/Culture';
import Projects from '@/components/subComponents/Projects';
import Clients from '@/components/subComponents/Clients';
import ReadyToStart from '@/components/subComponents/ReadyToStart';

const Home = () => {
  return (

    <Con>
      <AppLayout>
        <HeroSection />
        <Trusted />
        <TracingFootprints />
        <Services />
        <Culture />
        <Projects />
        <Clients />
        <ReadyToStart/>
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

export default Home