import React from 'react'
import styled from 'styled-components';

const ServiceDescription = ({description}) => {
    return (
        <Con>
            <p> 
                {description}
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