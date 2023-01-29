import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import KiaCar from '../../assets/images/kia-car.png';
import BlobImage from '../../assets/images/blob.svg';
import { SCREENS } from '../../components/responsive';
import { Button } from '../../components/button';

const TopSectionContainer = styled.div`
	min-height: 400px;
	margin-top: 8em;

	${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between 
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col
        pl-3
    `}
`;
const RightContainer = styled.div`
	${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
	${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
        mb-4
        text-black

    `}
`;
const Description = styled.div`
	${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`;

const BlobContainer = styled.div`
	width: 20em;
	height: 10em;
	position: absolute;
	right: 3em;
	top: -9em;
	z-index: -1;
	transform: rotate(-30deg);

	@media (min-width: ${SCREENS.sm}) {
		width: 40em;
		max-height: 10em;
		right: -9em;
		top: -16em;
		transform: rotate(-25deg);
	}
	@media (min-width: ${SCREENS.lg}) {
		width: 20em;
		max-height: 30em;
		right: -7em;
		top: -15em;
		transform: rotate(-25deg);
	}
	@media (min-width: ${SCREENS.xl}) {
		width: 70em;
		max-height: 10em;
		right: -5em;
		top: -25em;
		transform: rotate(-20deg);
	}
`;

const StandaloneCar = styled.div`
	right: 3em;
	top: -5em;
	position: absolute;

	img {
		width: 100%;
		max-width: fit-content;
		height: 100%;
	}

	@media (min-width: ${SCREENS.sm}) {
		img {
			height: 16em;
			right: -6em;
			top: -6em;
		}
	}
	@media (min-width: ${SCREENS.lg}) {
		img {
			height: 16em;
			right: -6em;
			top: -6em;
		}
	}
`;

const ButtonContainer = styled.div`
	${tw`
		flex
		flex-wrap
		mt-4
	`}
`;
export function TopSection() {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Slogan>Rent a best quality car from us</Slogan>
				<Description>
					Choose the best car from our local stores. We provide a full insurance
					coverage as well as premium customer service
				</Description>
				<ButtonContainer>
					<Button text='Book Your Ride' theme='outlined' />
					<Button text='Sell Your Car' theme='filled' />
				</ButtonContainer>
			</LeftContainer>
			<RightContainer>
				<BlobContainer>
					<img src={BlobImage} />
				</BlobContainer>
				<StandaloneCar>
					<img src={KiaCar} />
				</StandaloneCar>
			</RightContainer>
		</TopSectionContainer>
	);
}
