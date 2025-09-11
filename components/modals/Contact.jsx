import React, { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import TextBox from "../form-elements/TextBox";
import SelectInput from "../form-elements/SelectInput";
import TextArea from "../form-elements/TextArea";
import { AntSwitch } from '@/utils/CustomStyles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "764px",
    height: "80vh",
    maxHeight: "100vh",
    bgcolor: '#fff',
    borderRadius: "15px",
    outline: "none",
    overflowY: "auto",
    '@media (max-width: 500px)': {
        width: "90%",
        borderRadius: "10px",
    },
    // Custom scrollbar styles
    '&::-webkit-scrollbar': {
        width: '8px', // Adjust the width as needed
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
        borderRadius: '10px', // Apply border radius to the track
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '10px', // Apply border radius to the thumb
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
    // Firefox scrollbar styles
    scrollbarWidth: 'thin', // Makes the scrollbar thinner
    scrollbarColor: '#888 #f1f1f1', // Thumb and track colors
};

const Contact = ({ mOpen, handleModClose }) => {
    //const { user } = useSelector((state) => state.userReducer);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [openFeedback, setOpenFeedback] = React.useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [tab, setTab] = useState("profile");
    const [snackInfo, setSnackInfo] = useState({ openSnack: false, type: "", message: "" });
    const [formData, setFormData] = useState({
        apprenticeship_levy: "",
        tax_code: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Modal
            open={mOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleModClose}
        >

            <Box sx={style}>
                <ModCon>
                    <div className="head">
                        <div>
                            <h1>Contact Us</h1>
                            <p>Whether you're starting a new project, need a consultation, or have general inquiries — our team is ready to assist you.</p>
                        </div>
                        <svg className="cursor-pointer" onClick={handleModClose} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M14.1167 14.1167C14.3511 13.8826 14.6688 13.7511 15.0001 13.7511C15.3313 13.7511 15.649 13.8826 15.8834 14.1167L20.0001 18.2333L24.1167 14.1167C24.2312 13.9938 24.3692 13.8953 24.5225 13.827C24.6758 13.7587 24.8413 13.722 25.0092 13.719C25.177 13.716 25.3437 13.7469 25.4994 13.8098C25.655 13.8727 25.7964 13.9662 25.9151 14.0849C26.0338 14.2036 26.1274 14.345 26.1903 14.5007C26.2531 14.6563 26.284 14.823 26.281 14.9909C26.2781 15.1587 26.2413 15.3242 26.173 15.4776C26.1047 15.6309 26.0062 15.7689 25.8834 15.8833L21.7667 20L25.8834 24.1167C26.1042 24.3536 26.2244 24.667 26.2187 24.9909C26.213 25.3147 26.0818 25.6237 25.8528 25.8527C25.6237 26.0817 25.3148 26.2129 24.9909 26.2186C24.6671 26.2243 24.3537 26.1041 24.1167 25.8833L20.0001 21.7667L15.8834 25.8833C15.7689 26.0061 15.6309 26.1046 15.4776 26.173C15.3243 26.2413 15.1588 26.278 14.9909 26.281C14.8231 26.2839 14.6564 26.2531 14.5007 26.1902C14.3451 26.1273 14.2037 26.0338 14.085 25.9151C13.9663 25.7964 13.8727 25.655 13.8098 25.4993C13.747 25.3437 13.7161 25.177 13.7191 25.0091C13.722 24.8413 13.7588 24.6758 13.8271 24.5224C13.8954 24.3691 13.9939 24.2311 14.1167 24.1167L18.2334 20L14.1167 15.8833C13.8826 15.6489 13.7512 15.3312 13.7512 15C13.7512 14.6687 13.8826 14.351 14.1167 14.1167Z" fill="black" />
                        </svg>
                    </div>
                    <div className="main">
                        <Left>
                            <FormCon>
                                <p>
                                    Thanks for your interest in Arcventives Limited. Whether you are looking to start a project, get support, or just have a general question, we want to hear from you. Drop us a line and we will get back to you.
                                </p>
                                <TextBox
                                    name="full_name"
                                    placeholder={"Full Name"}
                                    value={formData.full_name}
                                    important={true}
                                    onChange={handleChange}
                                />
                                <TextBox
                                    name="email"
                                    placeholder={"Email Address"}
                                    value={formData.email}
                                    important={true}
                                    onChange={handleChange}
                                />
                                <TextBox
                                    name="phone_number"
                                    placeholder={"Phone Number"}
                                    value={formData.phone_number}
                                    important={true}
                                    onChange={handleChange}
                                />
                                <TextBox
                                    name="estimated_budget"
                                    placeholder={"Estimated Budget (₦)"}
                                    value={formData.project_details}
                                    important={true}
                                    onChange={handleChange}
                                    textarea
                                />
                                <TextArea placeholder={"Brief description"} />
                            </FormCon>
                            <Btn>Send Message</Btn>
                        </Left>
                        <Right>
                            <div className="row">
                                <div className="mb-5">
                                    <p className='flex mb-2'>
                                        <img className="mr-2 cursor-pointer" src="/images/contact/badd.svg" alt="address" />
                                        <a
                                            href="https://www.google.com/maps?q=350C+MCDonal+Akano,+Omole+Phase+1,+Ojodu+Berger+Lagos"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            350C MCDonal Akano, Omole Phase 1, <br />Ojodu Berger Lagos. Nigeria
                                        </a>
                                    </p>
                                    <p className='flex mb-2'>
                                        <img className="mr-2 cursor-pointer" src="/images/contact/bpho.svg" alt="phone" />
                                        <a href="tel:+2348023080175" className="hover:underline">+234 802 3080 175</a>,{" "}
                                        <a href="tel:+2348098008157" className="hover:underline">+234 809 8008 157</a>
                                    </p>
                                    <p className='flex mb-2'>
                                        <img className="mr-3 cursor-pointer" src="/images/contact/bmail.svg" alt="email" />
                                        <a href="mailto:Hello@arcventives.com" className="hover:underline">Hello@arcventives.com</a>
                                    </p>
                                </div>

                                <div>
                                    <h1 className="mb-2">Stay Tuned</h1>
                                    <p className="mb-2">Follow us on our socials</p>
                                    <div className='flex items-center gap-2'>
                                        <a href="https://facebook.com/arcventives" target="_blank" rel="noopener noreferrer">
                                            <img className="cursor-pointer" src="/images/contact/bfb.svg" alt="facebook" />
                                        </a>
                                        <a href="https://twitter.com/arcventives" target="_blank" rel="noopener noreferrer">
                                            <img className="cursor-pointer" src="/images/contact/btw.svg" alt="twitter" />
                                        </a>
                                        <a href="https://instagram.com/arcventives" target="_blank" rel="noopener noreferrer">
                                            <img className="cursor-pointer" src="/images/contact/binst.svg" alt="instagram" />
                                        </a>
                                        <a href="https://linkedin.com/company/arcventives" target="_blank" rel="noopener noreferrer">
                                            <img className="cursor-pointer" src="/images/contact/blinIn.svg" alt="linkedin" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row hidden lg:block">
                                <p className="mb-5">
                                    Can't wait? We get it. Chat with a customer agent on WhatsApp now.
                                </p>
                                <a
                                    href="https://wa.me/2348023080175"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Btn>Proceed to Chat</Btn>
                                </a>
                            </div>
                        </Right>

                    </div>
                </ModCon>

            </Box>
        </Modal>
    )
}

const ModCon = styled.div`
    width:100%; 
    height: 100%;  
    .head{
        width: 100%;
        height: 79px;
        border-bottom: 10px solid #00AA59;
        background: #FFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px 40px;
        @media (max-width: 1200px) {  
            height: auto;
            padding: 20px;
        }
        h1{
            color: #111;
            font-family: Manjari;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            @media (max-width: 1200px) { 
                font-size: 16px;    
                width: 90%;  
            }
        }
        p{
            color: #6A6A6A;
            font-family: Manrope;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            @media (max-width: 1200px) { 
                font-size: 10px;    
                width: 90%;
            }
        }
    }
    .main{
        width: 100%;
        display: flex; 
        height: calc(100% - 79px);
        @media (max-width: 1200px) {  
            flex-direction: column;
            height: auto;
        } 
    }
`;

const Left = styled.div`  
    width: 50%;  
    padding: 30px;
    border-right: 2px solid #E8E8E8;
    @media (max-width: 1200px) {  
        width:100%;
        padding: 20px;
        border-right: none;
        border-bottom: 2px solid #E8E8E8;
    }
    P{
        color: #3B3939;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal; 
        @media (max-width: 1200px) { 
            width: 100%;
            font-size: 12px;
        }
    }
`;

const Right = styled.div`
    width:50%;   

    @media (max-width: 1200px) {  
        width:100%;
    }
    h1{
        color: #111;
        font-family: Manrope;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        @media (max-width: 1200px) { 
            font-size: 16px;
        }
    }
    p{
        color: #3B3939;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 1200px) { 
            font-size: 13px;
        }
    }
    .row{
        padding: 30px 20px; 
        border-bottom: 1px solid #E8E8E8;
        @media (max-width: 1200px) { 
            border-bottom: none;
        }
    }
    
`;

const FormCon = styled.form` 
    border-radius: 20px; 
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    margin-bottom:20px;
    @media (max-width: 1200px) { 
        grid-template-columns:100%; 
    } 
    .first-item{
        grid-column:1/3;
        @media (max-width: 1200px) { 
        grid-column:1/2;
        } 
    }
`;


const Btn = styled.button`   
    height: 60px;
    display: flex;
    padding: 20px;
    justify-content:center;
    align-items:center;
    background: #242020;
    border-radius: 10px; 
    color: #FFF;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    cursor:pointer;
    transition: 300ms ease-in-out;
    @media (max-width: 1200px) {  
        border-radius: 5px;
        height: 30px;
        padding: 7px 12px 7px 13px;
    } 
    &:hover{
      transform: scale(1.05);
    }
`;

export default Contact