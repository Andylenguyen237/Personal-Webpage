import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px",
                marginBottom: "80px" }}>
		Hope you enjoy this portfolio
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About</Heading>
			<FooterLink href="/#about">Introduction</FooterLink>
			<FooterLink href="/#gallery">Gallery</FooterLink>
		</Column>
		<Column>
			<Heading>Projects</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Work</Heading>
			<FooterLink href="https://www.linkedin.com/in/dan-le-nguyen-0620aa246/"  target="_blank">Linkedln</FooterLink>
			<FooterLink href="https://github.com/Andylenguyen237" target="_blank">Github</FooterLink>
			<FooterLink href="">Email</FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/dan.le.100483/" target="_blank">Facebook</FooterLink>
			<FooterLink href="https://www.instagram.com/lnglh_dann/" target="_blank">Instagram</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
