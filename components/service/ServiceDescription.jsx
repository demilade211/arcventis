import React from 'react'
import styled from 'styled-components';

const ServiceDescription = () => {
    return (
        <Con>
            <p>Great construction begins with visionary design. At Arcventives, our architectural design services provide clients with more than just drawings — we offer holistic concepts that are functional, aesthetically balanced, and structurally viable.
            <br/><br/>
            Our process starts by understanding your goals, the intended use of the space, site constraints, and environmental considerations. From there, our team of architects and planners develop design proposals that blend creativity with compliance. Whether it’s a sleek modern residence, a commercial hub, or a public institution, we prioritize space optimization, sustainability, and local relevance.
            <br/><br/>
            Over the years, our design solutions have evolved into remarkable buildings that respond to user needs and stand as icons within their communities. Clients trust us for our transparency, adaptability, and the ability to bring their ideas to life with architectural integrity.
            </p>

            <Right>
                <div className='canva'></div>
                <div></div>
            </Right>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(82, 82, 82, 1);
    background: rgba(241, 241, 241, 1);
    padding: 90px;
    gap: 50px;
    @media (max-width: 1200px) { 
        flex-direction: column;
        align-items: start;
        height: auto;
        padding: 30px;
    }
    p{
        width: 50%;
        @media (max-width: 1200px) { 
            width: 100%;
        }
    }
`;

const Right = styled.div` 
    width: 50%;
    @media (max-width: 1200px) { 
        width: 100%;
    }
    .canva{
        width: 100%;
        height: 464px;
        background: rgba(238, 238, 238, 1);
        border-radius: 10px;
    }
`

export default ServiceDescription