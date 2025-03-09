"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { FaStar, FaWifi, FaUtensils, FaSpa } from "react-icons/fa"
import { destinations } from "../data/destinations"

const SearchResultsWrapper = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 300px); // Adjust this value based on your header and footer height
  display: flex;
  flex-direction: column;
`

const SearchResultsTitle = styled.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
`

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  flex-grow: 1;
`

const DestinationCard = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`

const DestinationImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
`

const DestinationInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const DestinationName = styled.h3`
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`

const DestinationRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`

const StarIcon = styled(FaStar)`
  color: #ffc107;
`

const DestinationDescription = styled.p`
  color: var(--color-dark-gray);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  flex-grow: 1;
`

const DestinationPrice = styled.p`
  color: var(--color-dark-gray);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`

const AmenitiesList = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Amenity = styled.span`
  color: var(--color-primary);
  font-size: 1rem;
`

const NoResultsMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-dark-gray);
  margin-top: 2rem;
`

const SearchResults = () => {
  const [results, setResults] = useState([])
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("q")

    if (query) {
      const searchResults = destinations.filter(
        (dest) =>
          dest.name.toLowerCase().includes(query.toLowerCase()) ||
          dest.description.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(searchResults)
    }
  }, [location.search])

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

  return (
    <SearchResultsWrapper>
      <SearchResultsTitle>Search Results</SearchResultsTitle>
      {results.length > 0 ? (
        <ResultsGrid>
          {results.map((dest) => (
            <DestinationCard key={dest.id} onClick={() => handleCardClick(dest.id)}>
              <DestinationImage style={{ backgroundImage: `url(${dest.image})` }} />
              <DestinationInfo>
                <DestinationName>{dest.name}</DestinationName>
                <DestinationRating>
                  <StarIcon />
                  <span>{dest.rating.toFixed(1)}</span>
                </DestinationRating>
                <DestinationDescription>{dest.description}</DestinationDescription>
                <DestinationPrice>{dest.price}</DestinationPrice>
                <AmenitiesList>
                  {dest.amenities
                    .filter((amenity) => amenity !== "pool")
                    .slice(0, 3)
                    .map((amenity, index) => (
                      <Amenity key={index}>{renderAmenityIcon(amenity)}</Amenity>
                    ))}
                </AmenitiesList>
              </DestinationInfo>
            </DestinationCard>
          ))}
        </ResultsGrid>
      ) : (
        <NoResultsMessage>No results found.</NoResultsMessage>
      )}
    </SearchResultsWrapper>
  )
}

export default SearchResults

