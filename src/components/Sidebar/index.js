import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap, 
    SidebarRoute 
} from './sidebarelements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon> 
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About Us</SidebarLink>
                <SidebarLink to='menu' onClick={toggle}>Menu</SidebarLink>
                <SidebarLink to='locations' onClick={toggle}>Locations</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute href='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
