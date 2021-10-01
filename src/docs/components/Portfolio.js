import React from "react";
import styled from "styled-components/macro";
import imgGallery2 from "../website-resources/gallery-thumb-bridge.jpg";
import imgGallery5 from "../website-resources/gallery-thumb-building.jpg";
import imgGallery1 from "../website-resources/gallery-thumb-cloud-bridge.jpg";
import imgGallery7 from "../website-resources/gallery-thumb-driving.jpg";
import imgGallery6 from "../website-resources/gallery-thumb-man.jpg";
import imgGallery4 from "../website-resources/gallery-thumb-roof.jpg";
import imgGallery3 from "../website-resources/gallery-thumb-jelly.jpg";

const Portfolio = () => {
	return (
		<>
			<WhiteSection id="portfolio">
				<BigText>what we do?</BigText>
				<UpperCase>some of our work</UpperCase>

				<ColorLine />
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Paragraph>
			</WhiteSection>
			<GalleryWrapper>
				<img src={imgGallery6} alt="" />
				<img src={imgGallery2} alt="" />
				<img src={imgGallery3} alt="" />
				<img src={imgGallery4} alt="" />
				<img src={imgGallery5} alt="" />
				<img src={imgGallery1} alt="" />
				{/* <img src={imgGallery7} alt="" /> */}
				<GalleryImage image={imgGallery1}></GalleryImage>
			</GalleryWrapper>
		</>
	);
};

export default Portfolio;

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
	width: 80%;
	padding-left: 10%;
	color: gray;
	font-family: serif;
	text-align: center;
`;

const ColorLine = styled.hr`
	border: 1px solid tomato;
	width: 110px;
`;

const GalleryWrapper = styled.div`
	display: grid;
	width: 100%;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(4, 1fr);
	resize: horizontal;
`;

const GalleryImage = styled.img((image) => ({
	src: image,
}));
