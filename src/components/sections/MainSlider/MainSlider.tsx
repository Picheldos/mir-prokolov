import React from 'react';
import { Container, MainSliderButtons, MainSliderImage, MainSliderTitle } from './MainSlider.styled';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import { Link } from 'react-scroll';
import { useRecoilValue } from 'recoil';
import { SizesState } from '@/recoil/athom';

export interface MainSliderProps {
    // text: string;
}

const MainSlider: React.FC<MainSliderProps> = () => {

    const {isMobile} = useRecoilValue(SizesState);

    return (
        <Container>
            <MainSliderImage>
                <Image src={'/images/main-slider/vermeer.png'} layout={'fill'} objectFit={'cover'} />
            </MainSliderImage>
            <MainSliderTitle>
                Прокол грунта <br /> в Санкт-Петербурге
            </MainSliderTitle>
            <MainSliderButtons>
                <Link to={'service'} smooth={true} offset={-150} duration={800} >
                    <Button title={'Услуги'} onClick={() => console.log(123)} />
                </Link>
                <Link to={'contacts'} smooth={true} offset={-150} duration={800} >
                    <Button title={'Контакты'} onClick={() => console.log(123)} />
                </Link>
            </MainSliderButtons>
        </Container>
    );
};

export default MainSlider;
