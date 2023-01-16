import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import CarLogoImg from '../../assets/images/logo.png';

const LogoContainer = styled.div`
	${tw`
        flex
        items-center 
    `};
`;

const LogoText = styled.div`
	${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1 
        italic
    `};
`;

const Image = styled.div`
	width: auto;

	${tw`h-6 md:h-9 mt-2 mr-2`}
	img {
		width: auto;
		height: 100%;
	}
`;

export function Logo() {
	return (
		<LogoContainer>
			<Image>
				<img src={CarLogoImg} title='car logo' alt='car logo' />
			</Image>
			<LogoText>Tail Wind Car</LogoText>
		</LogoContainer>
	);
}
