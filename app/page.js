'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from '@/components/subComponents/HeroSection';
import Trusted from '@/components/subComponents/Trusted';

const Home = () => {
  return (

    <Con>
      <AppLayout>
        <HeroSection />
        <Trusted />
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