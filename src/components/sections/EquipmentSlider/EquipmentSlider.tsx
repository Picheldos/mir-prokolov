import React, { useState } from 'react';
import ContainerWrapper from '@/components/common/ContainerWrapper/ContainerWrapper';
import { Container } from '@/components/sections/EquipmentSlider/EquipmentSlider.styled';
import EquipmentSlide from '@/components/blocks/EquipmentSlide/EquipmentSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { SwiperOptions, EffectFade } from 'swiper'
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';
import "swiper/css/effect-fade";


export interface EquipmentSliderProps {

}

const EquipmentSlider: React.FC<EquipmentSliderProps> = ({  }) => {
    const data = [
        {
            title: 'Vermeer D24X40 ser.2',
            img: '/images/equipment/image.jpg',
            text: [
                '<h3>Отличительные особенности:</h3><p>Длина перехода: до 300 м. без выхода на поверхность.</p>',
                '<h3>Ключевые особенности:</h3><ul><li>Управляемый прокол грунта на расстояние до 300 метров.</li><li>Расширение скважины до 600 м.</li><li>Максимальное время развертывания на объекте: 60 мин.</li></ul>',
                '<span>Применение: Установка предназначена для управляемой прокладки подземных коммуникаций и трубопроводов различного назначения методом Горизонтально-направленного бурения грунта</span>'
            ]
        },
        {
            title: 'УПКТ-30',
            img: '/images/equipment/image2.jpg',
            text: [
                '<h3>Отличительные особенности:</h3><p>Длина перехода: до 300 м. без выхода на поверхность.</p>',
                '<h3>Ключевые особенности:</h3><ul><li>Управляемый прокол грунта на расстояние до 300 метров.</li><li>Расширение скважины до 600 м.</li><li>Максимальное время развертывания на объекте: 60 мин.</li></ul>',
                '<span>Применение: Установка предназначена для управляемой прокладки подземных коммуникаций и трубопроводов различного назначения методом Горизонтально-направленного бурения грунта</span>'
            ]
        },
    ]

    const [swiperInst, setSwiperInst] = useState<SwiperCore>();

    const btnNextClick = () => {
        swiperInst?.slideNext();
    };

    const COMMON_SWIPER_OPTIONS: SwiperOptions = {
        slidesPerView: 1,
        speed: 1100,
        effect: 'fade',
        modules: [EffectFade],

        preventInteractionOnTransition: true,
        nested: true,
        resistanceRatio: 0,
        observeParents: true,
        spaceBetween: 0,
        loop: true,
    };



    return (
        <ContainerWrapper title={'Техника'}>
            <Container id={'equipment'}>
                <ArrowButton onClick={btnNextClick} />
                <Swiper onSwiper={setSwiperInst} {...COMMON_SWIPER_OPTIONS}>
                    {data.map((slide) =>
                        <SwiperSlide key={slide.title}>
                            <EquipmentSlide title={slide.title} img={slide.img} text={slide.text} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </Container>
        </ContainerWrapper>
    );
};

export default EquipmentSlider;
