'use client'

// import AboutArc from '@/components/about/AboutArc';
import ProductHeroSec from '@/components/product/ProductHeroSec';
import ProductDescription from '@/components/product/ProductDescription';
import Gallery from '@/components/product/Gallery';
import Projects from '@/components/subComponents/Projects';
import ReadyToStart from '@/components/subComponents/ReadyToStart';
import AppLayout from '@/layouts/AppLayout';
import React, {useState} from 'react'
import styled from 'styled-components';

const Product = () => {
    return (
        <Con>
            <AppLayout>
                <ProductHeroSec />
                <ProductDescription />
                <Gallery />
                <Projects />
                <ReadyToStart />
            </AppLayout>
        </Con>
    )
}

const Con = styled.div`  
  width: 100%;
  max-width: 1600px; 
  margin: 0 auto; /* Centers the content */
  overflow: hidden;
  
`;

export default Product;