import React from 'react'
import styled from 'styled-components';

const Btn = ({name, onClick}) => {
    return (
        <Con>
            <span onClick={onClick} className="see-more font-bold cursor-pointer">
                {name}
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                    <path d="M1.5 7L16.5 7M16.5 7L10.875 1M16.5 7L10.875 13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: rgba(241, 241, 241, 1);
    .see-more{
        width: 158px;
        height: 60px;
        padding: 20px;
        margin: 50px 0;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background: rgba(46, 49, 119, 1);
    }
`;

export default Btn