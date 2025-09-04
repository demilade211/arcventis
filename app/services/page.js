'use client'

// import AboutArc from '@/components/about/AboutArc';
import ServicesHeroSec from '@/components/services/ServicesHeroSec';
import ServicesSec from '@/components/services/ServicesSec';
import Btn from '@/components/services/Btn';
import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react'
import styled from 'styled-components';

const Services = () => {

    const [modal, setModal] = useState(false);

    const handleClick = () => {
        setModal(!modal)
    }

    return (
        <Con>
            <AppLayout>
                <ServicesHeroSec />
                {modal == false ? (
                    <>
                        <ServicesSec
                            image="/images/services/house 1.gif"
                            title="Architectural Design"
                            description="Great construction begins with visionary design. At Arcventives, our architectural design services provide clients with more than just drawings, we offer holistic concepts that are functional, aesthetically balanced, and structurally viable."
                            coverImage="/images/services/simg1.png"
                            position=""
                        />
                        <ServicesSec
                            image="/images/services/house 2.gif"
                            title="Building Construction"
                            description="From blueprint to reality, Arcventives Ltd delivers construction services that meet the highest standards of quality, safety, and efficiency. Our construction process is structured, disciplined, and scalable — suitable for projects of various scopes and complexity."
                            coverImage="/images/services/simg2.png"
                            position="reverse"
                        />
                        <ServicesSec
                            image="/images/services/house 3.gif"
                            title="Structural Engineering"
                            description="The backbone of every resilient building lies in its structure. At Arcventives, our structural engineering team ensures that every project is founded on accurate calculations, expert analysis, and proven design principles."
                            coverImage="/images/services/simg3.png"
                            position=""
                        />
                        <ServicesSec
                            image="/images/services/house 4.gif"
                            title="Renovation & Remodeling"
                            description="Buildings evolve — and when they do, we help them transform with purpose. Arcventives offers specialized renovation and remodeling services that redefine spaces without losing their soul."
                            coverImage="/images/services/simg4.png"
                            position="reverse"
                        />
                        <ServicesSec
                            image="/images/services/house 5.gif"
                            title="Construction Consultancy"
                            description="Informed decisions are the foundation of successful construction. Our consultancy services guide clients through the entire building journey — from concept to completion."
                            coverImage="/images/services/simg5.png"
                            position=""
                        />

                    </>) : (<>
                        <ServicesSec
                            image="/images/services/house 2.gif"
                            title="ME  Installations"
                            description="No modern building is complete without reliable systems behind the walls. Our MEP installation services ensure that your mechanical, electrical, and plumbing systems are designed and integrated with precision...."
                            coverImage="/images/services/simg6.png"
                            position="reverse"
                        />
                        <ServicesSec
                            image="/images/services/house 1.gif"
                            title="Project Management & Supervision"
                            description="Successful projects demand strong leadership and clear direction. Our project management and supervision service ensures that your build is executed smoothly, efficiently, and with full accountability."
                            coverImage="/images/services/simg7.png"
                            position=""
                        />
                        <ServicesSec
                            image="/images/services/house 4.gif"
                            title="Quantity Surveying & Cost Estimation"
                            description="Every construction project is an investment — and we make sure it’s a smart one. Our quantity surveying and cost estimation service offers financial oversight and cost control throughout the project lifecycle."
                            coverImage="/images/services/simg8.png"
                            position="reverse"
                        />
                        <ServicesSec
                            image="/images/services/house 5.gif"
                            title="Interior Fit-Out & Finishing"
                            description="A building's true character is revealed in its interior. Our interior fit-out and finishing service turns concrete shells into inspiring, comfortable, and fully functional spaces."
                            coverImage="/images/services/simg9.png"
                            position=""
                        />
                        <ServicesSec
                            image="/images/services/house 2.gif"
                            title="Civil & Infrastructure Works"
                            description="Our cities depend on functional, well-built infrastructure — and Arcventives is proud to play a role in shaping that foundation. We offer civil works and infrastructure development that meet urban and rural demands for mobility, drainage, and public access."
                            coverImage="/images/services/simg10.png"
                            position="reverse"
                        />
                    </>)}
                <Btn name={modal ? "Go Back" : "See more"} onClick={handleClick} />
            </AppLayout>
        </Con>
    )
}

const Con = styled.div`  
  width: 100%;
  max-width: 1600px; 
  margin: 0 auto; /* Centers the content */
  overflow: hidden;
  background: rgba(241, 241, 241, 1); 
`;

export default Services