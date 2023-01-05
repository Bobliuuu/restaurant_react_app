import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../images/logo.png'
import Image from 'next/image'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink
} from './navbarelements';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo href='/'>
            <Image src={logo} alt="Logo" />
            Ratatouille
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="menu">Menu</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="locations">Locations</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Contact</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="signup">Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink href="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;