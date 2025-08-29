import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

const ServiceCard = ({image, name, description}) => {
    return (
        <Con>
            <div className='col'>
                <img className="mb-4" src={image} alt="img" />
                <h2 className='name mt-1 mb-1'>{name}</h2>
                <p className='role mt-4 mb-8'>{description}</p>
                <Link href={"/service"} className='action font-bold'>Read More</Link>
            </div>
        </Con>
    )
}

const Con = styled.section`  
  width: 286px;
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
  p .action{
    width: 286px;
    color: rgba(82, 82, 82, 1);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    margin-top: 20px;
    @media (max-width: 1200px) {   
        font-size: 14px; 
    }
  }
`;

export default ServiceCard