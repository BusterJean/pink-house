import styled from "styled-components"
import { FaFacebook, FaInstagram, FaWhatsapp, FaLine, FaTiktok } from "react-icons/fa"
import { SiWechat } from "react-icons/si"

const FooterWrapper = styled.footer`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 2rem;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`

const FooterSection = styled.div`
  margin-bottom: 1rem;
`

const FooterTitle = styled.h3`
  margin-bottom: 0.5rem;
`

const FooterLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  display: block;
  margin-bottom: 0.25rem;
  &:hover {
    text-decoration: underline;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialIcon = styled.a`
  color: var(--color-white);
  font-size: 1.5rem;
  &:hover {
    color: var(--color-secondary);
  }
`

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Pink House</FooterTitle>
          <FooterLink href="/about">About Us</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <FaWhatsapp /> WhatsApp: +62 81 703 206 909
          </ContactInfo>
          <ContactInfo>
            <FaLine /> Line: @pinkhouse
          </ContactInfo>
          <ContactInfo>
            <SiWechat /> WeChat: pinkhouse_tour
          </ContactInfo>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialIcons>
            <SocialIcon href="https://www.facebook.com/share/19TirisRkP/">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/pinkhousetourbali?igsh=MTZ6cGptbXRqYmlpeg==">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@pinkhousebali?_t=ZS-8tvZ3wUd4Do&_r=1">
              <FaTiktok />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer

