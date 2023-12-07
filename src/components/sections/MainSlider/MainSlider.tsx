import React from 'react';
import { Container, MainSliderButtons, MainSliderImage, MainSliderTitle } from './MainSlider.styled';
import Image from 'next/image';
import Button from '@/components/ui/Button/Button';

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
                <Button title={'Услуги'} onClick={() => console.log(123)} />
                <Button title={'Контакты'} onClick={() => console.log(123)} />
            </MainSliderButtons>
        </Container>
    );
};

export default MainSlider;
