import React, { useState } from 'react';
import { Container, ServiceSliderSlide, ServiceSliderSlideText } from './ServiceSlider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { SwiperOptions } from 'swiper';
import ContainerWrapper from '@/components/common/ContainerWrapper/ContainerWrapper';
import Image from 'next/image';

export interface ServiceSliderProps {
    // title: string;
}

const ServiceSlider: React.FC<ServiceSliderProps> = ({  }) => {
    const data = [
        {
            img: '/images/main.jpg',
            title: 'Прокол под дорогой 1',
            descr: 'Выполняем прокол подземных переходов для инженерных коммуникаций методом ГНБ. Это самый простой и быстрый способ прокладки трубопроводов с сохранением целостности асфальтных дорог.',
            price: 'от 25 000 руб'
        },
        {
            img: '/images/main.jpg',
            title: 'Прокол под дорогой 2',
            descr: 'Выполняем прокол подземных переходов для инженерных коммуникаций методом ГНБ. Это самый простой и быстрый способ прокладки трубопроводов с сохранением целостности асфальтных дорог.',
            price: 'от 25 000 руб'
        },
        {
            img: '/images/main.jpg',
            title: 'Прокол под дорогой 3',
            descr: 'Выполняем прокол подземных переходов для инженерных коммуникаций методом ГНБ. Это самый простой и быстрый способ прокладки трубопроводов с сохранением целостности асфальтных дорог.',
            price: 'от 25 000 руб'
        },
        {
            img: '/images/main.jpg',
            title: 'Прокол под дорогой 4',
            descr: 'Выполняем прокол подземных переходов для инженерных коммуникаций методом ГНБ. Это самый простой и быстрый способ прокладки трубопроводов с сохранением целостности асфальтных дорог.',
            price: 'от 25 000 руб'
        }
    ]

    const [swiperInst, setSwiperInst] = useState<SwiperCore>();

    const COOMMON_SWIPER_OPTIONS: SwiperOptions = {
        slidesPerView: 'auto',
        speed: 1100,
        preventInteractionOnTransition: true,
        nested: true,
        resistanceRatio: 0,
        observeParents: true,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1440: {
                spaceBetween: 48,
                slidesPerView: 2,
            },
            1920: {
                spaceBetween: 72,
                slidesPerView: 2,
            }
        }
    };



    return (
        <ContainerWrapper title={'Услуги'} swiper={swiperInst} grayBg>
            <Container>
                <Swiper {...COOMMON_SWIPER_OPTIONS} onSwiper={setSwiperInst}>
                    {data.map((slide, index) =>
                        <SwiperSlide key={slide.title+index}>
                            <ServiceSliderSlide>
                                <Image src={slide.img} layout={'fill'} objectFit={'cover'} />
                                <ServiceSliderSlideText>
                                    <h3 dangerouslySetInnerHTML={{__html: slide.title}}/>
                                    <p dangerouslySetInnerHTML={{__html: slide.descr}} />
                                    <h3 dangerouslySetInnerHTML={{__html: slide.price}} />
                                </ServiceSliderSlideText>
                            </ServiceSliderSlide>
                        </SwiperSlide>
                    )}

                </Swiper>
            </Container>
        </ContainerWrapper>

    );
};

export default ServiceSlider;
