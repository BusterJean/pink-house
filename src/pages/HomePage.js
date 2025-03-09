"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "../components/HeroSection"
import FeaturedDestinations from "../components/FeaturedDestinations"
import MotorbikeRental from "../components/motorbike-rental"
import CarRentalWithDriver from "../components/car-rental-with-driver"

const HomeWrapper = styled.div`
  flex: 1;
`

const AnimatedIntro = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  z-index: 1000;
`

const IntroText = styled(motion.h1)`
  font-size: 3rem;
  color: var(--color-white);
  font-family: 'Playfair Display', serif;
`

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <HomeWrapper>
      <AnimatePresence>
        {showIntro && (
          <AnimatedIntro
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IntroText
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              Welcome to Pink House
            </IntroText>
          </AnimatedIntro>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: showIntro ? 1.5 : 0 }}
      >
        <HeroSection />
        <FeaturedDestinations />
        <MotorbikeRental />
        <CarRentalWithDriver />
      </motion.div>
    </HomeWrapper>
  )
}

export default HomePage

