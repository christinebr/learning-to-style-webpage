import React from "react";
import styled from "styled-components/macro";
import imgTopLeft from "../website-resources/ico-clock.jpg";
import imgTopMiddle from "../website-resources/ico-graph.jpg";
import imgTopRight from "../website-resources/ico-screen-check.jpg";
import imgBottomLeft from "../website-resources/ico-book.jpg";
import imgBottomMiddle from "../website-resources/ico-house.jpg";
import imgBottomRight from "../website-resources/ico-scan.jpg";
import imgBack from "../website-resources/unique-design-bg.jpg";
import imgIpad from "../website-resources/ipad-vertical.png";
import imgIphone from "../website-resources/iphone-vertical.png";
import imgDropdowns from "../website-resources/what-we-do-thumbnail.png";
import imgSpeech from "../website-resources/ico-speech-bubble-large.png";
import imgPerson1 from "../website-resources/team-person-1.png";
import imgPerson2 from "../website-resources/team-pesron-2.png";
import imgPerson3 from "../website-resources/team-person-3.png";
import imgIcon1 from "../website-resources/client-1.png";
import imgIcon2 from "../website-resources/client-2.png";
import imgIcon3 from "../website-resources/client-3.png";
import imgIcon4 from "../website-resources/client-4.png";
import imgIcon5 from "../website-resources/client-5.png";
import imgIcon6 from "../website-resources/client-6.png";

const Service = () => {
	return (
		<>
			<WhiteSection id="service">
				<BigText>We work woth</BigText>
				<UpperCase> amazing services</UpperCase>

				<ColorLine />
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
					faucibus semper. Fusce dictum lacus a rutrum ultrices. Duis feugiat
					ante risus, pellentesque laoreet nibh varius ut. Integer sodales et
					velit non bibendum. Maecenas nec ipsum sagittis, egestas massa ut,
					laoreet augue. Duis pretium egestas dignissim. Quisque maximus vitae
					diam non auctor. Nullam tempor leo vel orci hendrerit aliquet. Proin
					tempor tortor at imperdiet rhoncus. In hac habitasse platea dictumst.
					Suspendisse egestas mauris diam, id tincidunt libero ullamcorper nec.
				</Paragraph>
				<Grid>
					<Box>
						<img src={imgTopLeft} alt="" />
						Photography
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</Box>

					<Box>
						<img src={imgTopMiddle} alt="" />
						Web design
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</Box>
					<Box>
						<img src={imgTopRight} alt="" />
						Creativity
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</Box>
					<Box>
						<img src={imgBottomLeft} alt="" />
						SEO
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</Box>
					<Box>
						<img src={imgBottomMiddle} alt="" />
						CSS/HTML
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</Box>
					<Box>
						<img src={imgBottomRight} alt="" />
						DIGITAL
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</Box>
				</Grid>
			</WhiteSection>
			<WithBackgroundImage>
				<BigText>For all devices</BigText>
				<UpperCase> Unique design</UpperCase>
				<ColorLine />
				<TransparentDiv>
					<img src={imgIpad} alt="" />
					<img src={imgIphone} alt="" />
				</TransparentDiv>
			</WithBackgroundImage>
			<WhiteSection id="service">
				<BigText>Service</BigText>
				<UpperCase> What we do</UpperCase>
				<ColorLine />
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Paragraph>
				<TwoColumns>
					<img src={imgDropdowns} alt="" />
					<WrapperDropdown>
						<TitleDropdown>
							Photography
							<TextDropdown></TextDropdown>
						</TitleDropdown>
						<br />
						<TitleDropdown>
							creaticity
							<TextDropdown></TextDropdown>
						</TitleDropdown>
						<br />
						<TitleDropdown>
							webdesign
							<TextDropdown></TextDropdown>
						</TitleDropdown>
					</WrapperDropdown>
				</TwoColumns>
			</WhiteSection>
			<GraySpace>
				<img src={imgSpeech} alt="" />
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Paragraph>
			</GraySpace>
			<WhiteSection id="about">
				<BigText>Who we are</BigText>
				<UpperCase>Meet our team</UpperCase>

				<ColorLine />
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</Paragraph>
				<ThreeColumns>
					<img src={imgPerson1} alt="" />
					<img src={imgPerson2} alt="" />
					<img src={imgPerson3} alt="" />
				</ThreeColumns>
				<ThreeColumns>
					<p>
						MATHEA DIX <br />
						Graphic Design
					</p>

					<p>
						CHRISTOPHER CAMPBELL <br />
						Branding/UX design
					</p>
					<p>
						MICHAEL FERTIG <br />
						Developer
					</p>
				</ThreeColumns>
			</WhiteSection>
			<StripIcons>
				<img src={imgIcon1} alt="" />
				<img src={imgIcon2} alt="" />
				<img src={imgIcon3} alt="" />
				<img src={imgIcon4} alt="" />
				<img src={imgIcon5} alt="" />
				<img src={imgIcon6} alt="" />
			</StripIcons>
		</>
	);
};

export default Service;

const WhiteSection = styled.section`
	background-color: white;
	text-align: center;
	font-family: serif;
	color: gray;
	padding-top: 4em;
	padding-bottom: 4em;
`;

const Paragraph = styled.p`
	width: 65%;
	padding-left: 20%;
	color: gray;
	font-family: serif;
	text-align: center;
`;

const UpperCase = styled.h1`
	text-align: center;
	font-size: 1.8em;
	font-family: serif;
	font-weight: normal;
	text-transform: uppercase;
	border-top: 0em;
	color: black;
`;

const BigText = styled.p`
	color: gray;
	font-family: serif;
	font-size: 1.5em;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 2em;
	padding-left: 25em;
	padding-right: 25em;
	padding-top: 4em;
	padding-bottom: 3em;
`;

const Box = styled.div`
	width: 1fr;
`;

const ThreeColumns = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	padding-top: 4em;
	padding-bottom: 3em;
	align-items: center;
	grid-column-gap: 0em;
	padding-left: 20%;
	width: 65%;
	justify-items: center;
	align-items: center;
`;

const TwoColumns = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 0.2fr;
	padding-top: 4em;
	padding-bottom: 3em;
	align-items: center;
	width: 80%;
	justify-items: center;
	align-items: center;
`;

const WrapperDropdown = styled.div``;

const TitleDropdown = styled.button``;

const Dropdown = styled.div``;

const TextDropdown = styled.div``;

const WithBackgroundImage = styled.section`
	text-align: center;
	background-image: url(${imgBack});
	padding-top: 5em;
	width: 100%;
	height: 100%;
	background-size: cover;
`;

const TransparentDiv = styled.div`
	background: transparent;
	padding-top: 2em;
	padding-left: 20em;
	padding-right: 20em;
`;

const ColorLine = styled.hr`
	border: 1px solid tomato;
	width: 110px;
`;

const GraySpace = styled.div`
	background-color: whitesmoke;
	padding-top: 2em;
	padding-bottom: 2em;
	grid-gap: 0.1fr;
	grid-template-columns: repeat(2, 1fr);
	align-content: center;
`;

const StripIcons = styled.div`
	background-color: whitesmoke;
	padding-top: 4em;
	padding-bottom: 4em;
	padding-left: 10%;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 0.51fr;
	align-items: center;
	text-align: center;
`;
