import React from "react";
import styled from "styled-components/macro";

const Numbers = () => {
	return (
		<GreenSection>
			<Grid>
				<BigNumber>66</BigNumber>
				<BigNumber>142</BigNumber>
				<BigNumber>35</BigNumber>
				<BigNumber>76</BigNumber>
				<TextMembers>Members</TextMembers>
				<TextMembers>Members</TextMembers>
				<TextMembers>Members</TextMembers>
				<TextMembers>Members</TextMembers>
			</Grid>
		</GreenSection>
	);
};

export default Numbers;

const GreenSection = styled.section`
	background-color: lightseagreen;
	text-align: center;
	color: white;
	padding-top: 3em;
	padding-bottom: 3em;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 00.1fr);
	grid-area: auto;
	width: 80%;
	padding-left: 10%;
`;

const BigNumber = styled.h1`
	color: white;
	font-family: serif;
	text-align: center;
	font-weight: normal;
	font-size: 4em;
`;

const TextMembers = styled.h2`
	color: white;
	font-family: serif;
	text-align: center;
	font-size: 1.5em;
	font-weight: normal;
	text-transform: uppercase;
`;
