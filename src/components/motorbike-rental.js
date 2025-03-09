import styled from "styled-components"

const RentalSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--color-light-gray);
`

const RentalTitle = styled.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
`

const RentalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const BikeCard = styled.div`
  background-color: var(--color-white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 192, 203, 0.3);
  
  &:hover {
    box-shadow: 0 6px 12px rgba(255, 192, 203, 0.2);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`

const BikeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
  background: white;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const BikeName = styled.h3`
  color: var(--color-primary);
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: 600;
`

const PriceList = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
  color: var(--color-dark-gray);
`

const Price = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  
  &:hover {
    color: var(--color-primary);
  }
`

const ContactButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--color-secondary);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const MoreRentals = styled.a`
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: var(--color-primary);
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    color: var(--color-secondary);
  }
`

const MotorbikeRental = () => {
  const bikes = [
    {
      id: 1,
      name: "HONDA PCX",
      image: "https://cdn.discordapp.com/attachments/1320801849921634398/1340246735091531847/6c3ff32499b23880e01e59dbc2701fe1.jpg?ex=67b1a98a&is=67b0580a&hm=0c550b2c3c40ecb9780ef0b6cce3cb861c0facd5dd7cbf2293812a14095ad8de&",
      prices: {
        daily: "IDR 125,000 /DAY",
        weekly: "IDR 810,000 /WEEK",
        monthly: "IDR 2,625,000 /MONTH",
      },
    },
    {
      id: 2,
      name: "HONDA VARIO 125",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vario.png-UOTnoG8qfjCXH2ePNGzFqMkyQ4EzBO.jpeg",
      prices: {
        daily: "IDR 125,000 /DAY",
        weekly: "IDR 810,000 /WEEK",
        monthly: "IDR 2,625,000 /MONTH",
      },
    },
    {
      id: 3,
      name: "HONDA SCOOPY",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scoopy.jpg-nRKg80xyqkavZZFWgSTc3YF6rGMYBR.jpeg",
      prices: {
        daily: "IDR 125,000 /DAY",
        weekly: "IDR 810,000 /WEEK",
        monthly: "IDR 2,625,000 /MONTH",
      },
    },
  ]

  const handleContact = () => {
    // Scroll to the footer
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleImageError = (e) => {
    e.currentTarget.src = "/placeholder.svg"
    e.currentTarget.alt = "Placeholder image"
  }

  return (
    <RentalSection>
      <RentalTitle>MOTORBIKE RENTAL</RentalTitle>
      <RentalGrid>
        {bikes.map((bike) => (
          <BikeCard key={bike.id}>
            <BikeImage src={bike.image} alt={`${bike.name} motorcycle`} onError={handleImageError} loading="lazy" />
            <BikeName>{bike.name}</BikeName>
            <PriceList>
              <Price>{bike.prices.daily}</Price>
              <Price>{bike.prices.weekly}</Price>
              <Price>{bike.prices.monthly}</Price>
            </PriceList>
            <ContactButton onClick={handleContact} aria-label={`Contact us about renting a ${bike.name}`}>
              CONTACT NOW
            </ContactButton>
          </BikeCard>
        ))}
      </RentalGrid>
      <MoreRentals
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View more rental options"
      >
        MORE RENTALS {">>>"}
      </MoreRentals>
    </RentalSection>
  )
}

export default MotorbikeRental

