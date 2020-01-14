import React from 'react';
import {Link} from 'react-router-dom';
import {ContainerWrap, PageHeader, ImageContent, StyledImg, BttnRegister, BttnStudent, BttnHelper, Paragraph} from '../Components/Styles';
import welcomeImg from '../../src/SVG/homePage.svg';

function HomePage() {
	return (
		<ContainerWrap>
			<PageHeader>Welcome to the Development Desk Home Page</PageHeader>
			
			<Paragraph>
				Thank you for visiting our site. If this is your first time here, please click the Register button and sign up for an account. If you already have one, click your role and login. Thank you.
			</Paragraph>
			
			<ImageContent>
				<StyledImg src={welcomeImg} alt="Welcome to Our Page"/>
			</ImageContent>
			
			<Link to='/SignUp'>
				<BttnRegister>Register</BttnRegister>
			</Link>
			
			<Link to='/studentLogin'>
				<BttnStudent>Student</BttnStudent>
			</Link>
			
			<Link to="/loginHelper">
				<BttnHelper>Helper</BttnHelper>
			</Link>
		</ContainerWrap>
	)
}

export default HomePage;