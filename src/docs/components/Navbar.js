import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
	const [colorChange, setColorChange] = useState(false);

	const changeNavbarColor = () => {
		// console.log(window.scrollY);
		// console.log(window.innerWidth); //800
		if (window.scrollY >= 250) {
			setColorChange(true);
		} else {
			setColorChange(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNavbarColor);
	});

	const [hamburger, setHamburger] = useState(false);
	const changeNavbarHam = () => {
		if (window.innerWidth < 800) {
			setHamburger(true);
		} else {
			setHamburger(false);
		}
	};

	return (
		<Wrapper>
			<Content>
				<NavItemsWrapper>
					<NavLink to="/">
						<NavItemBold>MoGo</NavItemBold>
					</NavLink>
					<NavItem style={{ marginLeft: "5rem" }}> </NavItem>
					<LinkScroll to="header" activeClass="active" spy={true} smooth={true}>
						<NavItem>Home</NavItem>
					</LinkScroll>
					<LinkScroll to="about" activeClass="active" spy={true} smooth={true}>
						<NavItem>About us</NavItem>
					</LinkScroll>
					<LinkScroll
						to="service"
						activeClass="active"
						spy={true}
						smooth={true}
					>
						<NavItem>Service</NavItem>
					</LinkScroll>

					<LinkScroll
						to="portfolio"
						activeClass="active"
						spy={true}
						smooth={true}
					>
						<NavItem>Portfolio</NavItem>
					</LinkScroll>
					<Link to="/">
						<NavItem>Blog</NavItem>
					</Link>
					<Link to="/">
						<NavItem>Contact</NavItem>
					</Link>
					<Link to="/">
						<NavItem>
							<FaShoppingCart></FaShoppingCart>
						</NavItem>
					</Link>
					<Link to="/">
						<NavItem>
							<FaSearch></FaSearch>
						</NavItem>
					</Link>
				</NavItemsWrapper>
			</Content>
		</Wrapper>
	);
};
export default Navbar;

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 70px;
	background: ${() =>
		window.scrollY >= 250 ? "rgba(10, 20, 30, 0.5)" : "transparent"};
`;

const Content = styled.div`
	padding: 0 80px;
	max-width: 1280px;
	margin: auto;
	display: flex;
	height: 100%;
`;

const NavItemsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: 139px;
	flex: 1;
	box-sizing: border-box;
	> * {
		text-decoration: none;
		height: 100%;
	}
`;

const NavItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 32px;
	height: 100%;
	font-family: serif;
	font-size: 0.8em;
	text-transform: uppercase;
	color: white;
	& :hover {
		color: sandybrown;
	}
`;

const NavItemBold = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 32px;
	height: 100%;
	font-size: larger;
	color: white;
	font-weight: bolder;
	& :hover {
		color: goldenrod;
	}
	& :active {
		color: goldenrod;
	}
`;
