import React from 'react'
import styled from 'styled-components';

const ServiceDescription = ({ description1, description2, description3, image }) => {
    return (
        <Con>
            <p>
                {description1}
                <br /><br />
                {description2}
                <br /><br />
                {description3}
            </p>

            <Right>
                <img src={image} alt="Service" />
            </Right>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(82, 82, 82, 1);
    background: rgba(241, 241, 241, 1);
    padding: 90px;
    gap: 50px;

    @media (max-width: 1200px) { 
        flex-direction: column;
        align-items: flex-start;
        min-height: auto;
        padding: 30px;
    }

    p {
        width: 50%;
        line-height: 1.6;
        font-size: 1rem;

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

    img {
        width: 100%;
        height: auto;
        max-height: 464px;
        object-fit: cover;
        border-radius: 10px;
    }
`;

export default ServiceDescription
