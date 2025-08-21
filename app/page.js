'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from '@/components/subComponents/HeroSection';
import Trusted from '@/components/subComponents/Trusted';
import TracingFootprints from '@/components/subComponents/TracingFootprints';
import Services from '@/components/subComponents/Services';

const Home = () => {
  return (

    <Con>
      <AppLayout>
        <HeroSection />
        <Trusted />
        <TracingFootprints/>
        <Services/>
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