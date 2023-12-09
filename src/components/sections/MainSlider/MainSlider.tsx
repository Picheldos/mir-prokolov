import React from 'react';
import { Container, MainSliderButtons, MainSliderImage, MainSliderTitle } from './MainSlider.styled';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import { Link } from 'react-scroll';

export interface MainSliderProps {
    // text: string;
}

const MainSlider: React.FC<MainSliderProps> = () => {

    return (
        <Container>
            <MainSliderImage>
                <Image src={'/images/main.jpg'} layout={'fill'} objectFit={'cover'} />
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
