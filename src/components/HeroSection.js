import styled from "styled-components"
import { motion } from "framer-motion"
import { FaInstagram, FaTiktok } from "react-icons/fa"

const HeroWrapper = styled.div`
  background-color: #FFD1DC;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
  max-width: 800px;
  width: 100%;
`

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  background: linear-gradient(45deg, #FF69B4, #FF1493);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #333;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const ExploreButton = styled(motion.button)`
  background-color: #FF69B4;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF1493;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  }
`

const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`

const SocialIcon = styled(motion.a)`
  color: #FF69B4;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #FF1493;
    transform: scale(1.1);
  }
`

const FloatingEmoji = styled(motion.span)`
  position: absolute;
  font-size: 3rem;
  user-select: none;
`

const HeroSection = () => {
  const emojis = ["🌴", "🏖️", "🌺", "🍹", "🏄‍♀️", "🌊", "🍍", "🐠"]

  const scrollToDestinations = () => {
    const destinationsSection = document.querySelector('#featured-destinations')
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroWrapper>
      {emojis.map((emoji, index) => (
        <FloatingEmoji
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: [100, -100],
            x: Math.sin(index) * 100,
            transition: {
              duration: 10 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
          style={{
            left: `${(index / emojis.length) * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {emoji}
        </FloatingEmoji>
      ))}
      <HeroContent initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Pink Paradise Vibes 🌸
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover your dream getaway in Indonesia's hottest spots
        </HeroSubtitle>
        <ExploreButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={scrollToDestinations}
        >
          Start Your Adventure
        </ExploreButton>
        <SocialIcons initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </SocialIcon>
        </SocialIcons>
      </HeroContent>
    </HeroWrapper>
  )
}

export default HeroSection

