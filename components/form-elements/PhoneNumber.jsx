import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumber = ({
  placeholder,
  label,
  classs,
  onChange,
  name,
  value,
  errors,
  light,
  important,
}) => {
  const [phoneValue, setPhoneValue] = useState(value || '');

  const handleChange = (phone) => {
    setPhoneValue(phone);
    if (onChange) {
      onChange({ target: { name, value: phone } });
    }
  };

  return (
    <InputLabelCon className={classs}>
      {light ? (
        <Label2>
          {label}
          {!important && <span>*</span>}
        </Label2>
      ) : (
        <Label>
          {label}
          {!important && <span>*</span>}
        </Label>
      )}
      <InputWrapper>
        <PhoneInput
          country={'gb'}
          value={phoneValue}
          onChange={handleChange}
          inputProps={{
            name: name,
            required: !important,
            placeholder: placeholder,
          }}
          inputStyle={{
            width: '100%',
            height: '44px',
            background: 'rgb(255, 255, 255)',
            borderRadius: '10px',
            border: '1px solid #E0E0E0',
            color: '#545454',
            fontFamily: 'Poppins',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 275,
            lineHeight: 'normal',
            paddingLeft: '48px',
            outline: 'none',
          }}
          containerStyle={{
            width: '100%',
          }}
          buttonStyle={{
            border: 'none',
            background: 'transparent',
            border: '1px solid #E0E0E0',
            borderRadius: '10px',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
          }}
          dropdownStyle={{
            fontFamily: 'Poppins',
            
          }}
        />
      </InputWrapper>
      {errors?.inputName === name && errors?.isError && (
        <ErrorMessage>{errors.message}</ErrorMessage>
      )}
    </InputLabelCon>
  );
};

const InputLabelCon = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
`;

const Label = styled.p`
  color: #666;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
  span {
    color: #dc3545;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: relative;
    bottom: 2px;
  }
`;

const Label2 = styled.p`
  color: #666;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
  span {
    color: #dc3545;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: relative;
    bottom: 2px;
  }
`;

export default PhoneNumber;
