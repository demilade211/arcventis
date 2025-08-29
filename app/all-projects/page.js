'use client'

// import AboutArc from '@/components/about/AboutArc'; AllProjectDetails
import AllProjectsHeroSec from '@/components/allProjects/AllProjectsHeroSec';
import AllProjectDetails from '@/components/allProjects/AllProjectDetails';
import ReadyToStart from '@/components/subComponents/ReadyToStart';
import AppLayout from '@/layouts/AppLayout';
import React, {useState} from 'react'
import styled from 'styled-components';

const Services = () => {
  return (
    <Con>
      <AppLayout>
        <AllProjectsHeroSec />
        <AllProjectDetails />
        <ReadyToStart />
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

export default Services