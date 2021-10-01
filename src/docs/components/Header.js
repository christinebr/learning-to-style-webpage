import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import headerimage from "../website-resources/header.png";
import { ImDiamonds } from "react-icons";

const Myheader = () => {
	const [currentPage, setCurrentPage] = useState(0);
	return (
		<HeaderwithBackground id="header">
			<Title>Creative Template</Title>
			<UpperCase>
				Welcome <br></br> to mogo
			</UpperCase>
			<Link to="/">
				<Button>LEARN MORE</Button>
			</Link>
			<p>
				<br></br>
			</p>
		</HeaderwithBackground>
	);
};
export default Myheader;

const HeaderwithBackground = styled.section`
	padding-top: 10em;
	position: initial;
	width: 100%;
	height: 100%;
	background-image: url(${headerimage});
	opacity: 1.5;
	background-size: cover;
`;

const Title = styled.h1`
	color: white;
	text-align: center;
	font-size: 5em;
	font-family: serif;
	font-weight: lighter;
`;

const UpperCase = styled.h1`
	color: white;
	text-align: center;
	font-size: 8em;
	font-family: serif;
	font-weight: normal;
	text-transform: uppercase;
`;

const Button = styled.button`
	color: white;
	border: 1px solid;
	background: transparent;
	text-transform: uppercase;
	font-size: 1.5em;
	font-family: serif;
	margin: auto;
	padding: 0.25em 1em;
	border-radius: 1px;
	display: block;
	text-decoration: none;
	& :hover {
		background-color: orange;
		border-color: transparent;
	}
`;
