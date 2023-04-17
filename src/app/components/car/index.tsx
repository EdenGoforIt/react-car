import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../typings/car';
import { Button } from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faFillDrip, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

export interface ICarProps extends ICar {
  theme?: 'filled' | 'outlined';
  buttonText?: string;
  className?: string;
}

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

const CarThumbnail = styled.div`
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

const SmallText = styled.p`
  color: inherit;
  ${tw`
    text-xs
    font-thin
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

const Separator = styled.div`
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

export function Car(props: ICarProps) {
  const { name, thumbnailSrc, dailyPrice, monthlyPrice: monthPrice, mileage, gearType, gas } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img alt='car thumbnail' src={thumbnailSrc} />
      </CarThumbnail>
      <PricesContainer>
        <DailyPrice>
          {dailyPrice} <SmallText>/day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          {monthPrice} <SmallText>/month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>

        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>

        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text='Rent Now' />
    </CarContainer>
  );
}
