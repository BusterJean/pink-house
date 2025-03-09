import styled from "styled-components"

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const MapPlaceholder = styled.div`
  text-align: center;
  color: var(--color-dark-gray);
`

const Map = ({ location }) => {
  return (
    <MapContainer>
      <MapPlaceholder>
        <h3>Map</h3>
        <p>Location: {location}</p>
        <p>(Map integration would go here)</p>
      </MapPlaceholder>
    </MapContainer>
  )
}

export default Map

