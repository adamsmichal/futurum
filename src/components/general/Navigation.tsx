import React, { useState } from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { useSpring, animated } from "react-spring";

const NavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.main};
  padding: ${({ theme }) => theme.space.xs};
  z-index: ${({ theme }) => theme.zIndex.level3};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    padding: ${({ theme }) => theme.space.sm};
    height: 65px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.space.l};
  }
`;

const Logo = styled(Link)`
  margin: 0;
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  z-index: ${({ theme }) => theme.zIndex.level3};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 3.5rem;
  }
`;

const Btn = styled.div`
  height: 16px;
  width: 22px;
  position: relative;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: 20px;
    width: 30px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    display: none;
  }
`;

interface IBurgerPorps {
  clicked: boolean;
  position: string;
}

const BtnBars = styled.div<IBurgerPorps>`
  position: absolute;
  top: ${props =>
    (props.position === "top" && !props.clicked && 0) ||
    (props.position === "top" && props.clicked && "50%") ||
    (props.position === "middle" && "50%") ||
    (props.position === "low" && !props.clicked && "100%") ||
    (props.position === "low" && props.clicked && "50%")};
  display: ${props => props.clicked && props.position === "middle" && "none"};
  width: 100%;
  height: 3px;
  transform: ${props =>
    (props.position === "top" && props.clicked && "rotate(45deg)") ||
    (props.position === "low" && props.clicked && "rotate(-45deg)")};
  transition-duration: 0.2s;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.black};
  z-index: ${({ theme }) => theme.zIndex.level3};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: 4px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    display: none;
  }
`;

interface IMenuProps {
  clicked: boolean;
}

const Menu = styled(animated.div)<IMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20vh 5vw 30vh 55vw;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.level2};
`;

const NavLink = styled(Link)`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  text-transform: uppercase;

  & :hover {
    color: ${({ theme }) => theme.colors.greeyFooter};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

const DesktopNavLink = styled.div`
  display: none;
  width: 40%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuAnimation = useSpring({
    display: isOpen ? "flex" : "none",
    left: isOpen ? "0" : "100vw",
  });

  return (
    <>
      <NavigationWrapper>
        <Logo to="/">Futurum</Logo>
        <DesktopNavLink>
          <NavLink to="/localization">Lokalizacja</NavLink>
          <NavLink to="/details">Szczegóły</NavLink>
          <NavLink to="/houseList">Domy</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </DesktopNavLink>
        <Btn onClick={() => setIsOpen(!isOpen)}>
          <BtnBars position="top" clicked={isOpen} />
          <BtnBars position="middle" clicked={isOpen} />
          <BtnBars position="low" clicked={isOpen} />
        </Btn>
        <Menu style={menuAnimation} clicked={isOpen}>
          <NavLink to="/localization">Lokalizacja</NavLink>
          <NavLink to="/details">Szczegóły</NavLink>
          <NavLink to="/houseList">Domy</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </Menu>
      </NavigationWrapper>
    </>
  );
};

export default Navigation;
