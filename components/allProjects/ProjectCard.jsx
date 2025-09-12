import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const ProjectCard = ({ image, title, description }) => {
  return (
    <Con>
      <div className="col">
        <img src={image} alt={title} />
        <div className="green-con">
          <h1>{title}</h1>
          <p>{description}</p>
          <Link href={`/all-projects/${title}`} className="view">View All</Link>
        </div>
      </div>
    </Con>
  )
}

const Con = styled.section`
  max-width: 463px;
  max-height: 688px;

  .col {
    width: 100%;
    border-radius: 10px;
    background: #FFF;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .green-con {
      width: 100%;
      position: absolute;
      z-index: 4;
      bottom: 0;
      left: 0;
      background: #00AA59;
      border-radius: 0 0 10px 10px;
      padding: 30px 40px;
      transition: all 0.4s ease;
      
      /* Desktop default: slide & fade hidden */
      transform: translateY(100%);
      opacity: 0;

      @media (max-width: 1200px) {
        /* Mobile/tablet: always visible */
        transform: translateY(0);
        opacity: 1;
        padding: 12px 16px;
      }

      h1 {
        color: #FFF;
        font-family: Manjari;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
        @media (max-width: 1200px) {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }

      p {
        color: #FFF;
        font-family: Manrope;
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 20px;
        line-height: 1.4;
        @media (max-width: 1200px) {
          font-size: 12px;
          margin-bottom: 10px;
        }
      }

      .view {
        display: inline-flex;
        padding: 7px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background: #FFF;
        color: #000;
        font-family: Manrope;
        font-size: 12px;
        font-weight: 500;
        transition: background 0.3s ease, color 0.3s ease;

        &:hover {
          background: #111;
          color: #FFF;
        }
      }
    }

    /* Hover reveal on desktop */
    &:hover .green-con {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export default ProjectCard;
