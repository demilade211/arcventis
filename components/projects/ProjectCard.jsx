import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';

const ProjectCard = ({ image, name, location, description }) => {
  const reduceMotion = useReducedMotion();

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Con
      as={motion.section}
      variants={reduceMotion ? {} : cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="col">
        <div className="img-wrapper">
          <img className="mb-4" src={image} alt={name} />
        </div>
        <h2 className="name">{name}</h2>
        <p className="location mt-1 mb-1">Location: {location}</p>
        <p className="role mt-4 mb-8">{description}</p>
        <Link href={"/product"} className="action">
          View Details
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M1.5 7L16.5 7M16.5 7L10.875 1M16.5 7L10.875 13" stroke="#00AA59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <div className="green-bar"></div>
    </Con>
  )
}

const Con = styled(motion.section)`   
  margin: 20px 0;
  position: relative;
  padding: 23px 0;

  .img-wrapper {
    overflow: hidden;
  }

  img {
    width: 100%; 
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  h2 {
    color: #5D5D5D;
    font-family: Manjari;
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 1200px) {
        font-size: 16px;
    }
  }

  p {
    color: #525252;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 1200px) {   
        font-size: 14px; 
    }
  }

  .location {
    font-weight: 500;
  }

  .action {
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    color: #525252;  
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s ease;
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
      opacity: 0;
      transform: translateX(-5px);
      transition: all 0.3s ease;
      @media (max-width: 1200px) {
        display: none;
      }
    }

    &:hover {
      color: #00AA59;
      .arrow {
        opacity: 1;
        transform: translateX(2px);
      }
    }
  }

  .green-bar {
    width: 100%;
    height: 0;
    background: #00AA59; 
    position: absolute;
    bottom: 0;
    left: 0;
    transition: height 0.3s ease;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  &:hover .green-bar {
    height: 8px;
  }
`;

export default ProjectCard;
