"use client"

import { useState } from "react"
import styled from "styled-components"
import { FaStar, FaWifi, FaUtensils, FaSpa, FaPlane, FaCar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { destinations } from "../data/destinations"

const FeaturedWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: var(--color-light-gray);
  font-family: 'Lato', sans-serif;
`

const FeaturedTitle = styled.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
`

const DestinationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const DestinationCard = styled.div`
  background-color: var(--color-white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(255, 105, 180, 0.2);
  }
`

const DestinationImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`

const DestinationInfo = styled.div`
  padding: 1.5rem;
`

const DestinationName = styled.h3`
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
`

const DestinationRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
`

const StarIcon = styled(FaStar)`
  color: #ffc107;
`

const DestinationDescription = styled.p`
  color: var(--color-dark-gray);
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-weight: 300;
`

const AmenitiesList = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const Amenity = styled.span`
  color: var(--color-primary);
  font-size: 1.2rem;
`

const TripInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 0.9rem;
  margin-top: 1rem;
  font-weight: 600;
`

const FeaturedDestinations = () => {
  const navigate = useNavigate()
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleCardClick = (destId) => {
    navigate(`/property/${destId}`)
  }

  const renderAmenityIcon = (amenity) => {
    switch (amenity) {
      case "wifi":
        return <FaWifi title="Free Wi-Fi" />
      case "restaurant":
        return <FaUtensils title="Restaurant" />
      case "spa":
        return <FaSpa title="Spa" />
      default:
        return null
    }
  }

  const getDestinationDescription = (dest) => {
    if (dest.id === 1) {
      // Bali
      return dest.description
    } else {
      return `Start your journey from Bali to ${dest.name}. ${dest.description}`
    }
  }

  return (
    <FeaturedWrapper id="featured-destinations">
      <FeaturedTitle>Discover Pink Paradise Destinations</FeaturedTitle>
      <DestinationGrid>
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            onClick={() => handleCardClick(dest.id)}
            onMouseEnter={() => setHoveredCard(dest.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <DestinationImage style={{ backgroundImage: `url(${dest.image})` }} />
            <DestinationInfo>
              <DestinationName>{dest.name}</DestinationName>
              <DestinationRating>
                <StarIcon />
                <span>{dest.rating.toFixed(1)}</span>
              </DestinationRating>
              <DestinationDescription>
                {hoveredCard === dest.id ? dest.fullDescription.slice(0, 100) + "..." : getDestinationDescription(dest)}
              </DestinationDescription>
              <AmenitiesList>
                {dest.amenities
                  .filter((amenity) => amenity !== "pool")
                  .map((amenity, index) => (
                    <Amenity key={index}>{renderAmenityIcon(amenity)}</Amenity>
                  ))}
              </AmenitiesList>
              {dest.id !== 1 && (
                <TripInfo>
                  <FaPlane /> <FaCar /> Trip starts from Bali
                </TripInfo>
              )}
            </DestinationInfo>
          </DestinationCard>
        ))}
      </DestinationGrid>
    </FeaturedWrapper>
  )
}

export default FeaturedDestinations

