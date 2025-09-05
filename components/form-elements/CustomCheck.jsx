import React from 'react';
import styled from 'styled-components';

const CustomCheck = ({ checked, onChange, label }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <CheckBox>
        <HiddenCheckbox
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <AnimatedDiv className="transition" />
      </CheckBox>
    </Wrapper>
  );
};

export default CustomCheck;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  color: #666;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const CheckBox = styled.label`
  display: block;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px 2px #9B9B9B;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  left: 50px;
  visibility: hidden;

  &:checked + div {
    left: -10px;
    top: -10px;
  }
`;

const AnimatedDiv = styled.div`
  width: 60px;
  height: 60px;
  background-color: #1A73E8;
  top: -52px;
  left: -52px;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
  transition: 300ms ease;
`;
