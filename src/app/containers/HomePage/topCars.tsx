import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `}
`;

const Title = styled.h2`
  ${tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
    `}
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`;

export function TopCars() {
    return <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        <CarsContainer>  </CarsContainer>
    </TopCarsContainer>
}