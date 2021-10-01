import React from "react";
import styled from "styled-components/macro";
import imgLeft from "../website-resources/about-team-box-bg.png";
import imgMiddle from "../website-resources/about-team-box-gear.png";
import imgRight from "../website-resources/about-team-box-desk.png";

const About = () => {
	return (
		<>
			<WhiteSection id="about">
				<BigText>what we do?</BigText>
				<UpperCase>Story about us</UpperCase>

				<ColorLine />
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Paragraph>
				<ThreeColumns>
					<img src={imgLeft} alt="" />
					<img src={imgMiddle} alt="" />
					<img src={imgRight} alt="" />
				</ThreeColumns>
			</WhiteSection>
		</>
	);
};

export default About;

const WhiteSection = styled.section`
	background-color: white;
	text-align: center;
	padding-top: 4em;
	padding-bottom: 4em;
`;

const UpperCase = styled.h1`
	text-align: center;
	font-size: 1.8em;
	font-family: serif;
	font-weight: normal;
	text-transform: uppercase;
	border-top: 0em;
`;

const BigText = styled.p`
	color: gray;
	font-family: serif;
	font-size: 1.5em;
`;

const Paragraph = styled.p`
	width: 65%;
	padding-left: 20%;
	color: gray;
	font-family: serif;
	text-align: center;
`;

const ThreeColumns = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1px;
	justify-items: center;
	align-items: center;
	align-content: center;
	padding-left: 15%;
	padding-top: 4em;
	padding-bottom: 3em;
`;

const ColorLine = styled.hr`
	border: 1px solid tomato;
	width: 110px;
`;
