"use client"

import { useState } from "react"
import styled from "styled-components"
import { FaSearch, FaUser, FaHome } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Nav = styled.nav`
  background-color: var(--color-white);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
`

const LogoIcon = styled(FaHome)`
  color: var(--color-primary);
  font-size: 1.5rem;
  margin-right: 0.5rem;
`

const SearchBar = styled.form`
  display: flex;
  align-items: center;
  background-color: var(--color-light-gray);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`

const SearchInput = styled.input`
  border: none;
  background: transparent;
  margin-left: 0.5rem;
  &:focus {
    outline: none;
  }
`

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-primary);
`

const UserIcon = styled(FaUser)`
  color: var(--color-primary);
  font-size: 1.5rem;
  cursor: pointer;
`

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Logo href="/">
            <LogoIcon />
            Pink House
          </Logo>
        </LogoContainer>
        <SearchBar onSubmit={handleSearch}>
          <SearchButton type="submit">
            <FaSearch />
          </SearchButton>
          <SearchInput
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
        <UserIcon />
      </NavContainer>
    </Nav>
  )
}

export default Navbar

