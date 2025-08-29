import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const ProjectCard = ({image, name, location, description}) => {
    return (
        <Con>
            <div className='col'>
                <img className="mb-4" src={image} alt="img" />
                <h2 className='name'>{name}</h2>
                <p className='location mt-1 mb-1'>Location: {location}</p>
                <p className='role mt-4 mb-8'>{description}</p>
                <Link href={"/product"} className='action font-[700] text-[18px] text-[#525252]'>View Details</Link>
            </div>
            <div className='green-bar'></div>
        </Con>
    )
}

const Con = styled.section`  
  width: 286px;
  margin: 20px 0;
  position: relative;
  padding: 23px 0;
  img{
    width: 100%;
    height: 174px;
    border-radius: 10px;
  }
  h2{
    width: 100%;
    color: #5D5D5D;
    font-family: Manjari;
    font-size: 20px;
    font-weight: 700;
  }
  p{
    width: 286px;
    color: rgba(82, 82, 82, 1);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 1200px) {   
        font-size: 14px; 
    }
  }
  a{
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    color: #525252;  
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
        height: 10px;
        @media (max-width: 1200px) {
            height: 0;
        }
    }
`;

export default ProjectCard