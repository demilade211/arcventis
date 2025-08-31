import React from 'react'
import styled from 'styled-components';
import Title1 from '../Title1';
import { motion } from 'framer-motion';

// Animation Variants
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const titleVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

// Service Data (to avoid repetition)
const services = [
  {
    icon: "/images/services/house 1.gif",
    title: "Architectural Design",
    description: "Creative and functional building designs tailored to client needs and regulatory standards."
  },
  {
    icon: "/images/services/house 2.gif",
    title: "Building Construction",
    description: "End-to-end execution of building projects, from foundation to finishing."
  },
  {
    icon: "/images/services/house 3.gif",
    title: "Structural Engineering",
    description: "Safe, durable structural solutions for residential, commercial, and industrial projects."
  },
  {
    icon: "/images/services/house 4.gif",
    title: "Renovation & Remodeling",
    description: "Upgrading existing structures to meet new aesthetic or functional demands."
  },
  {
    icon: "/images/services/house 5.gif",
    title: "Construction Consultancy",
    description: "Expert advice and feasibility analysis for project planning and risk mitigation."
  },
  {
    icon: "/images/services/house 6.gif",
    title: "Civil & Infrastructure Works",
    description: "Roads, drainage systems, and public infrastructure development."
  }
];

const Services = () => {
  return (
    <Con>
      {/* Section Title with Animation */}
      <motion.div
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Title1 
          to="/services" 
          heading="Our Services" 
          para="At Arcventives Ltd, we offer end-to-end construction solutions—from concept to completion. Our services are designed to meet the highest standards of quality, safety, and efficiency across every project" 
        />
      </motion.div>

      {/* Services Grid */}
      <ServicesCon>
        {services.map((service, i) => (
          <motion.div
            className="service"
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="learn-more">
              Learn More
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M1.5 7L16.5 7M16.5 7L10.875 1M16.5 7L10.875 13" stroke="#00AA59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className='green-bar'></div>
          </motion.div>
        ))}
      </ServicesCon>
    </Con>
  )
}

// Styled Components
const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: rgba(241, 241, 241, 1); 
    @media (max-width: 1200px) {  
        flex-direction: column-reverse;
        padding: 20px 20px;
    } 
`

const ServicesCon = styled.div`  
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 20px;
    row-gap: 80px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2,1fr); 
        column-gap: 10px;
        row-gap: 40px;
    } 
    .service{
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;  
        position: relative; 
        padding: 20px; 
        border-radius: 8px;
        transition: box-shadow 0.3s ease;
        @media (max-width: 1200px) {
            height: auto;
            justify-content: space-between;
            border: 1px solid #E0E0E0;
            min-height: 233px;
            padding: 10px;
        } 
 

        .green-bar{
            width: 100%;
            height: 0;
            background: #00AA59; 
            position: absolute;
            bottom: 0;
            left: 0;
            transition: height 0.3s ease;
            @media (max-width: 1200px) {
                display: none;
                width: 57px;
                height: 10px;
            }
        }
        &:hover .green-bar {
            height: 15px;
            @media (max-width: 1200px) {
                height: 0;
            }
        }

        .learn-more {
            color: rgba(82, 82, 82, 1);
            font-family: Manrope;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            display: inline-flex;
            align-items: center;
            white-space: nowrap; 
            @media (max-width: 1200px) {
                display: inline-flex;
                padding: 7px 45px;
                justify-content: center;
                align-items: center;  
                border-radius: 5px;
                background: #111;
                color: #FFF;
                font-size: 12px;
                font-weight: 400;
            }
            .arrow {
                display: none;
                margin-left: 8px;
            }
            &:hover {
                color: rgba(0, 170, 89, 1);
                @media (max-width: 1200px) {
                    color: #FFF;
                }
                .arrow {
                    display: inline;
                    @media (max-width: 1200px) {
                        display: none;
                    }
                }
            }
        }
        img{
            width: 100px;       
            height: 100px;
            margin-bottom: 20px;
            @media (max-width: 1200px) {
                width: 80px;
                height: 80px;
            }
        }
        h3{
            color: #404040;
            font-family: Manjari;
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
            @media (max-width: 1200px) {
                font-size: 16px;
            }
        }
        p{
            width: 98%;
            color: #525252;
            font-family: Manrope;
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 40px;
            @media (max-width: 1200px) {  
                margin-bottom: 10px;
                font-size: 12px;
                max-width: 250px;
            }
        }
    }
`

export default Services;
