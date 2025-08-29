'use client'

// import AboutArc from '@/components/about/AboutArc';
import ServiceHeroSec from '@/components/service/ServiceHeroSec';
import ServiceDescription from '@/components/service/ServiceDescription';
import OtherServices from '@/components/service/OtherServices';
import ReadyToStart from '@/components/subComponents/ReadyToStart';
import Projects from '@/components/subComponents/Projects';
import Btn from '@/components/services/Btn';
import AppLayout from '@/layouts/AppLayout';
import React, {useState} from 'react'
import styled from 'styled-components';

const Service = () => {
    return (
        <Con>
            <AppLayout>
                <ServiceHeroSec />
                <ServiceDescription />
                <OtherServices />
                <Projects />
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

export default Service;