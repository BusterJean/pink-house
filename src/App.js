import styled, { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SearchResults from "./components/SearchResults"
import Footer from "./components/Footer"
import PropertyDetails from "./pages/PropertyDetails"
import AboutUs from "./pages/about-us"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap');

  :root {
    --color-primary: #FF69B4;
    --color-secondary: #FFC0CB;
    --color-accent: #FF1493;
    --color-white: #FFFFFF;
    --color-light-gray: #F8F8F8;
    --color-dark-gray: #333333;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
`

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  )
}

export default App

