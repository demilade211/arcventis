import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import Quote from '../modals/Contact';

const AboutHeroSec = () => {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [showModal, setShowModal] = React.useState({
    contact: false,
    quote: false,
  });

  // Variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <Con>
      <Quote mOpen={showModal.quote} handleModClose={() => setShowModal(prev => ({ ...prev, quote: false }))} />
      <Left
        as={motion.div}
        variants={staggerContainer}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate="visible"
      >
        <motion.h1
          className="mb-8"
          variants={reduceMotion ? {} : fadeLeft}
          style={{ willChange: 'transform' }}
        >
          Building More Than <br /> Structures We Build Legacies.
        </motion.h1>

        <motion.p
          className="sub"
          variants={reduceMotion ? {} : fadeUp}
          style={{ willChange: 'transform' }}
        >
          At Arcventives Ltd, construction goes beyond concrete. It's about shaping communities,
          solving real-world challenges, and creating structures that stand the test of time.
        </motion.p>

        <motion.div
          className="xl:flex items-center gap-2.5 hidden"
          variants={reduceMotion ? {} : fadeUp}
        >
          <MotionBtn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            Request a Quote
          </MotionBtn>
          <MotionBtn
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/all-projects`)}
          >
            View our projects
          </MotionBtn>
        </motion.div>

        <div className="btns w-full lg:hidden mt-5 flex flex-col items-center">
          <MotionGBtn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Request a Quote
          </MotionGBtn>
        </div>
      </Left>

      <Right
        as={motion.div}
        initial={reduceMotion ? { opacity: 1 } : 'hidden'}
        whileInView={reduceMotion ? { opacity: 1 } : 'visible'}
        viewport={{ once: true, amount: 0.4 }}
        variants={reduceMotion ? {} : fadeRight}
        style={{ willChange: 'transform' }}
      >
        <img className="mt-5" src="/images/abhero.png" alt="img" />
      </Right>

      <div className="green-rec"></div>
      <div className="white-rec"></div>
    </Con>
  );
};

const Con = styled.section`
  width: 100%;
  display: flex;
  background: #111;
  flex-direction: row-reverse;
  background: url('/images/abg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 90px;
  position: relative;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    background: url('/images/mabhero.png') center/cover no-repeat;
    padding: 30px 20px;
  }
  .btns {
    padding: 0 30px;
  }
  .green-rec {
    width: 50%;
    height: 100px;
    position: absolute;
    bottom: 50px;
    left: 30px;
    background: #00aa59;
    z-index: 5;
    @media (max-width: 1200px) {
      height: 50px;
      bottom: 25px;
    }
  }
  .white-rec {
    width: 50%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    @media (max-width: 1200px) {
      height: 50px;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 30px;
  }
  h1 {
    color: #fff;
    font-family: var(--font-phosphate-inline);
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    white-space: nowrap;
    @media (max-width: 1200px) {
      font-size: 30px;
      white-space: normal;
    }
  }
  .sub {
    width: 90%;
    color: #fff;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      width: 100%;
      font-size: 12px;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 80px;
  padding-bottom: 80px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 30px;
  }
  img {
    width: 97%;
    height: auto;
    margin-left: 15px;
    @media (max-width: 1200px) {
      margin: 0;
      width: 100%;
    }
  }
`;

const Btn = styled.button`
  width: 160px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    border-radius: 5px;
    height: 50px;
  }
`;

const MotionBtn = motion(Btn);
const MotionGBtn = motion(styled(Btn)`
  width: 100%;
  background: #00aa59;
  border: none;
  margin-bottom: 10px;
`);

export default AboutHeroSec;
