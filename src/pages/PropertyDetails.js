"use client"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaUtensils,
  FaSpa,
  FaHiking,
  FaUmbrellaBeach,
  FaCamera,
  FaShip,
} from "react-icons/fa"
import { destinations } from "../data/destinations"

const PropertyWrapper = styled.div`
  flex: 1;
  min-height: calc(100vh - 300px);
`

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: white;
`

const PropertyTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`

const PropertyLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const PropertyRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
`

const ContentWrapper = styled.div`
  padding: 2rem;
`

const Section = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.8rem;
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-dark-gray);
`

const AmenitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`

const Amenity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: var(--color-dark-gray);
`

const ActivityList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`

const Activity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`

const PropertyDetails = () => {
  const { id } = useParams()
  const property = destinations.find((dest) => dest.id === Number.parseInt(id))

  if (!property) {
    return <div>Property not found</div>
  }

  const renderAmenityIcon = (amenity) => {
    switch (amenity) {
      case "wifi":
        return <FaWifi />
      case "restaurant":
        return <FaUtensils />
      case "spa":
        return <FaSpa />
      default:
        return null
    }
  }

  const renderActivityIcon = (activity) => {
    switch (activity.toLowerCase()) {
      case "hiking":
        return <FaHiking />
      case "beach":
        return <FaUmbrellaBeach />
      case "sightseeing":
        return <FaCamera />
      case "boat tours":
        return <FaShip />
      default:
        return null
    }
  }

  return (
    <PropertyWrapper>
      <HeroSection style={{ backgroundImage: `url(${property.image})` }}>
        <HeroOverlay />
        <HeroContent>
          <PropertyTitle>{property.name}</PropertyTitle>
          <PropertyLocation>
            <FaMapMarkerAlt />
            {property.location}
          </PropertyLocation>
          <PropertyRating>
            <FaStar style={{ color: "#ffc107" }} /> {property.rating}
          </PropertyRating>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        <Section>
          <SectionTitle>About this trip</SectionTitle>
          <Description>{property.fullDescription}</Description>
        </Section>

        <Section>
          <SectionTitle>Amenities</SectionTitle>
          <AmenitiesList>
            {property.amenities
              .filter((amenity) => amenity !== "pool")
              .map((amenity, index) => (
                <Amenity key={index}>
                  {renderAmenityIcon(amenity)} {amenity}
                </Amenity>
              ))}
          </AmenitiesList>
        </Section>

        <Section>
          <SectionTitle>Activities</SectionTitle>
          <ActivityList>
            {property.activities.map((activity, index) => (
              <Activity key={index}>
                {renderActivityIcon(activity)} {activity}
              </Activity>
            ))}
          </ActivityList>
        </Section>
      </ContentWrapper>
    </PropertyWrapper>
  )
}

export default PropertyDetails

