import React from 'react'
import styled from 'styled-components';
import ServiceCard from './ServiceCard';

const cardDatas = [
    {
        image: "/images/services/simg2.png",
        name: "Building Construction",
        description: "From blueprint to reality, Arcventives Ltd delivers construction services that meet the highest standards of quality, safety...."
    },
    {
        image: "/images/services/simg3.png",
        name: "Structural Engineering",
        description: "The backbone of every resilient building lies in its structure. At Arcventives, our structural engineering team ensures that..."
    },
    {
        image: "/images/services/simg4.png",
        name: "Renovation & Remodeling",
        description: "Buildings evolve — and when they do, we help them transform with purpose. Arcventives offers specialized renovation and remodeling ..."
    },
    {
        image: "/images/services/simg5.png",
        name: "Construction Consultancy",
        description: "Informed decisions are the foundation of successful construction. Our consultancy services guide clients through the entire building..."
    },
]

const OtherServices = () => {
    return (
        <Con>
            <Title>
                <div className='r2 flex items-end justify-between lg:items-center'>
                    <h1>Other Services</h1>
                    <span>
                        See All 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M4.5 12.5H19.5M19.5 12.5L13.875 6.5M19.5 12.5L13.875 18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
                <p>Read more about some of the services we offer at Arcventives Limited</p>
            </Title>

            <div className='flex gap-2 justify-between flex-wrap w-full mt-20'>
                {cardDatas.map((data, i) => (
                    <ServiceCard
                        key={i}
                        image={data.image}
                        name={data.name}
                        description={data.description}
                    />
                ))}
            </div>


        </Con>
    )
}

const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: rgba(245, 245, 249, 1);
    @media (max-width: 1200px) {  
        flex-direction: column-reverse;
        padding: 20px 20px;
    } 
`

const Title = styled.div`
    h1{
        color: rgba(0, 170, 89, 1);font-family: Manjari;
        font-size: 44px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 1200px) {
        font-size: 22px;
        width: 100%;
        }
    }
    span {
        white-space: nowrap;
        color: ${({ $dark }) => ($dark ? '#FFF' : '#525252')}; /* ✅ white if dark */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        display: flex;

        @media (max-width: 1200px) {
            display: inline-flex;
            padding: 7px 16px 7px 17px;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            background: ${({ $dark }) => ($dark ? '#FFF' : '#00AA59')};
            color: ${({ $dark }) => ($dark ? '#000' : '#FFF')}; /* ✅ inverted text if dark */
            font-family: Manrope;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        img {
            margin-left: 10px;
            @media (max-width: 1200px) {
                display: none;
            }
        }
        svg{
            margin-left: 10px;
            color: #000;
            @media (max-width: 1200px) {
                display: none;
        }
        }
    }

    p {
        width: 100%;
        color: ${({ $dark }) => ($dark ? '#FFF' : '#525252')}; /* ✅ white if dark */
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        @media (max-width: 1200px) {
        font-size: 14px;
        width: 100%;
        }
    }
`

export default OtherServices
