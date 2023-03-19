import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../typings/car';
import { Button } from '../button';

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  min-width: 16.5em;
  min-height: 22.2em;
  max-height: 22.2em;
  box-shadow: 0 1.3px 15px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `}
`;

const CarThumbnal = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.div`
  ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
        
    `}
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
    `}
`;
const DailyPrice = styled.h5`
  ${tw`
        text-red-500
        font-bold
        text-sm
        mr-3
    `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
        text-gray-500
        font-bold
        text-sm
    `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `}
`;

const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `}
`;

const CarInfo = styled.h5`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

const Sperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `}
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;

export function Car() {}
