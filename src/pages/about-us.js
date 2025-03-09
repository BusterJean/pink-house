import styled from "styled-components"

const AboutWrapper = styled.div`
  background-color: #FFE4E1;
  min-height: 100vh;
  padding: 4rem 2rem;
`

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ContentSection = styled.div`
  flex: 1;
`

const Title = styled.h1`
  text-align: center;
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Playfair Display', serif;
`

const Text = styled.div`
  color: var(--color-dark-gray);
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }
`

const ImageSection = styled.div`
  flex: 1;
  position: sticky;
  top: 2rem;

  @media (max-width: 768px) {
    position: static;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export default function AboutUs() {
  return (
    <AboutWrapper>
      <Title>ABOUT US</Title>
      <AboutContainer>
        <ContentSection>
          <Text>
            <p>Pink House Travel - Your Trusted Guide to Indonesia's Rich Landscapes and Culture!</p>
            <p>
              As a professional, local tour agency based in Surabaya, Yogyakarta, and Bali, Indonesia, we specialize in
              offering diverse travel experiences that showcase the best of Indonesia's natural beauty and cultural
              heritage. With over 10 years of experience, we proudly provide affordable, family-friendly tour packages
              that include everything from thrilling volcano tours of Mount Bromo to fun Grade B sightseeing and
              cultural tours across Bali and Yogyakarta.
            </p>
            <p>
              Our curated tour options include popular destinations like temples, art markets, and traditional
              performance arts, ensuring that every traveler, whether adventure seeker or culture enthusiast, can find a
              package tailored to their interests. Pink House Travel's well-maintained vehicles and experienced local
              guides—fluent in both Indonesian and English—are dedicated to creating memorable journeys for you, your
              family, and your friends.
            </p>
            <p>
              Explore Indonesia's stunning volcanoes, vibrant markets, ancient temples, and lively cultural performances
              with us. We designed this website with you in mind, making it easy to browse through our packages and plan
              your dream vacation with Pink House Travel and experience the heart of Indonesia with a trusted, local
              guide.
            </p>
          </Text>
        </ContentSection>
        <ImageSection>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-kZQwxKQ2jEqaTg5Y2GMaIwZn1nP9FA.png"
            alt="Tour guide at a scenic location in Indonesia"
          />
        </ImageSection>
      </AboutContainer>
    </AboutWrapper>
  )
}

