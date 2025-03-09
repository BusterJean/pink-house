import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"
import { SiWechat } from "react-icons/si"
import { HiMail } from "react-icons/hi"

const Section = styled.section`
  background-color: #FFE4E1;
  display: flex;
  flex-direction: row;
  min-height: 400px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ContentSide = styled.div`
  flex: 1;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ImageSide = styled.div`
  flex: 1;
  background-image: url('https://cdn.discordapp.com/attachments/1320801849921634398/1340247229444788266/OIP_1.png?ex=67b1aa00&is=67b05880&hm=750da3b9c90b7bf8c9d8cb3ccde18d953e69872882a78d1cc37e24373748cc6e&');
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(255, 228, 225, 0.2),
      rgba(255, 228, 225, 0)
    );
  }
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
`

const Subtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
`

const PriceText = styled.p`
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: 500;
`

const ContactIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`

const IconLink = styled.a`
  color: var(--color-primary);
  font-size: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`

const CarRentalWithDriver = () => {
  return (
    <Section>
      <ContentSide>
        <Title>HAVE YOUR OWN TOUR PLAN?</Title>
        <Subtitle>RENT A CAR WITH A DRIVER FROM US</Subtitle>
        <PriceText>START FROM IDR 700,000 /10HRS</PriceText>
        <ContactIcons>
          <IconLink
            href="https://wa.me/6281703206909"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
          >
            <FaWhatsapp />
          </IconLink>
          <IconLink
            href="weixin://dl/chat?pinkhouse_tour"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WeChat"
          >
            <SiWechat />
          </IconLink>
          <IconLink href="mailto:contact@pinkhouse.com" aria-label="Contact via Email">
            <HiMail />
          </IconLink>
        </ContactIcons>
      </ContentSide>
      <ImageSide />
    </Section>
  )
}

export default CarRentalWithDriver

