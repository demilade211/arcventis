'use client'

import ServicesHeroSec from '@/components/services/ServicesHeroSec';
import ServicesSec from '@/components/services/ServicesSec';
import Btn from '@/components/services/Btn';
import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react'
import styled from 'styled-components';

const Services = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 👈 scroll to top
  };

  return (
    <Con>
      <AppLayout>
        <ServicesHeroSec />
        {modal == false ? (
          <>
            <ServicesSec
              image="/images/services/house 1.gif"
              title="Architectural Design"
              description="Great buildings begin with visionary design. At Arcventives Ltd, our architectural design services go beyond sketches and floor plans — we deliver holistic solutions that balance functionality, aesthetics, and structural integrity. From private residences and commercial hubs to public facilities, our designs consistently evolve into practical, beautiful structures that endure. With Arcventives, you get more than drawings — you get a blueprint for lasting value."
              coverImage="/images/services/simg1.png"
              position=""
            />
            <ServicesSec
              image="/images/services/house 2.gif"
              title="Building Construction"
              description="Arcventives Ltd transforms ideas into reality through construction services that embody quality, safety, and efficiency. Our expertise spans foundations, superstructures, roofing, finishing, and site installations. Over the years, we have delivered estates, office complexes, hotels, and institutional projects — many ahead of schedule while meeting the highest quality benchmarks. With Arcventives, you get structures that are built to last."
              coverImage="/images/services/simg2.png"
              position="reverse"
            />
            <ServicesSec
              image="/images/services/house 3.gif"
              title="Structural Engineering"
              description="The durability of any building lies in its structure. Our structural engineering service ensures every project rests on solid foundations. We provide structural analysis, load calculations, reinforcement detailing, and supervision to guarantee safety and resilience. From high-rise residences to industrial facilities, our projects are engineered for strength and reliability."
              coverImage="/images/services/simg3.png"
              position=""
            />
            <ServicesSec
              image="/images/services/house 4.gif"
              title="Renovation & Remodeling"
              description="Buildings need to adapt as times change. Our renovation and remodeling services breathe new life into old spaces, making them functional, modern, and valuable once more. From complete structural overhauls to interior reconfigurations, we deliver transformations that are seamless, cost-effective, and timeless."
              coverImage="/images/services/simg4.png"
              position="reverse"
            />
            <ServicesSec
              image="/images/services/house 5.gif"
              title="Construction Consultancy"
              description="Before the first brick is laid, the right guidance can save time, money, and effort. Our consultancy services provide expert insight into feasibility studies, site assessments, project planning, and procurement strategies. For investors, developers, and organizations, Arcventives is the trusted advisor that ensures every decision is strategic and sustainable."
              coverImage="/images/services/simg5.png"
              position=""
            />
          </>
        ) : (
          <>
            <ServicesSec
              image="/images/services/house 2.gif"
              title="Civil & Infrastructure Works"
              description="Communities thrive when supported by resilient infrastructure. Arcventives contributes to nation-building through the delivery of roads, drainage systems, culverts, and other civil works that improve access and functionality. From estate roads to drainage control systems, our projects shape environments that drive growth and opportunity."
              coverImage="/images/services/simg10.png"
              position="reverse"
            />
            <ServicesSec
              image="/images/services/house 1.gif"
              title="Interior Fit-Out & Finishing"
              description="A building’s interior is where users experience its true character. Our fit-out and finishing services transform raw structures into polished, functional, and inviting spaces. From flooring, ceilings, and painting to lighting and cabinetry, we deliver interiors that are durable, stylish, and tailored to client needs."
              coverImage="/images/services/simg9.png"
              position=""
            />
            <ServicesSec
              image="/images/services/house 4.gif"
              title="Quantity Surveying & Cost Estimation"
              description="Financial planning is key to project success. Our quantity surveying and cost estimation services provide clients with accurate, transparent, and reliable cost control throughout the project lifecycle. From BOQs to contractor bid analysis, we ensure value for money and safeguard your investment."
              coverImage="/images/services/simg8.png"
              position="reverse"
            />
            <ServicesSec
              image="/images/services/house 5.gif"
              title="Project Management & Supervision"
              description="Every project needs strong leadership to succeed. Our project management and supervision services ensure construction is delivered on time, within scope, and to the highest standards. Clients recognize Arcventives for our proactive communication and transparent reporting that keeps projects moving seamlessly from foundation to finish."
              coverImage="/images/services/simg7.png"
              position=""
            />
            <ServicesSec
              image="/images/services/house 2.gif"
              title="MEP Installations"
              description="Mechanical, Electrical, and Plumbing (MEP) systems are the lifelines of any modern building. At Arcventives, we design and install integrated systems such as HVAC, power distribution, water supply, drainage, and fire protection. Our MEP solutions are energy-efficient, sustainable, and built for reliability."
              coverImage="/images/services/simg6.png"
              position="reverse"
            />
          </>
        )}
        <Btn name={modal ? "Go Back" : "See more"} onClick={handleClick} />
      </AppLayout>
    </Con>
  );
};

const Con = styled.div`  
  width: 100%;
  max-width: 1600px; 
  margin: 0 auto;
  overflow: hidden;
  background: rgba(241, 241, 241, 1); 
`;

export default Services;
