import React from "react";
import styled from "styled-components";
import Title1 from "../Title1";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <Con>
      <div className="row1">
        <Title1
          heading="Our Clients"
          para="We've had the privilege of working with forward-thinking individuals, organizations, and institutions. Their trust drives our commitment to deliver excellence on every project."
        />
      </div>

      <div className="row2">
        {/* First row (scrolls to the right) */}
        <Marquee speed={40} gradient={false} direction="right">
          {[
            "cliImg1.png",
            "cliImg2.png",
            "cliImg3.png",
            "cliImg1.png",
            "cliImg4.png",
            "cliImg6.png",
            "cliImg7.png",
            "cliImg8.png",
          ].map((img, i) => (
            <div className="brand-box" key={i}>
              <img src={`/images/clients/${img}`} alt="brand" />
            </div>
          ))}
        </Marquee>

        {/* Second row (scrolls to the left) */}
        <Marquee speed={40} gradient={false} direction="left">
          {[
            "cliImg9.png",
            "cliImg7.png",
            "cliImg10.png",
            "cliImg4.png",
            "cliImg9.png",
            "cliImg8.png",
            "cliImg1.png",
            "cliImg8.png",
          ].map((img, i) => (
            <div className="brand-box no-top" key={i}>
              <img src={`/images/clients/${img}`} alt="brand" />
            </div>
          ))}
        </Marquee>
      </div>
    </Con>
  );
};

const Con = styled.section`
    width: 100%;
    background: #fff;
    padding: 90px 0;
    @media (max-width: 1200px) {   
        padding: 20px 0px;
    } 

    .row1 {
        padding: 0 90px;
        @media (max-width: 1200px) {   
            padding: 0px 20px;
        } 
    }

    .row2 {
        margin-top: 40px;
        .brand-box {
            display: flex;
            width: 216px;
            height: 200px;
            padding: 25px 33px;
            justify-content: center;
            align-items: center;
            border: 1px solid #c6c6c6;
            border-left: none;

            @media (max-width: 1200px) {
                width: 98px;
                height: 91px;
                padding: 12px 15px;
            }
        }
        .no-top{
            border-top: none;
        }
    }
`;

export default Clients;
