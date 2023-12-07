import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import {
    Container,
    ContainerWrapperSection, ContainerWrapperTop, ContainerWrapperTopBtns,
    ContainerWrapperTopTitle
} from './ContainerWrapper.styled';
import DivideLine from '@/components/blocks/DivideLine/DivideLine';
import { useRecoilValue } from 'recoil';
import { ScrollState } from '@/recoil/athom';
import SwiperCore from 'swiper';
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';

export interface ContainerWrapperProps {
    title: string;
    swiper?: SwiperCore;
    grayBg?: boolean;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ title, swiper, grayBg, children }) => {

    const scroll = useRecoilValue(ScrollState);
    const [scrollProgress, setScrollProgress] = useState(0);
    const refContainer = useRef() as MutableRefObject<HTMLDivElement>;

    const btnNextClick = () => {
        swiper?.slideNext();
    };

    const btnPrevClick = () => {
        swiper?.slidePrev();
    };


    useEffect(() => {
        const scrollTop = refContainer.current.offsetTop - window.innerHeight / 1.15;
        const offsetHeight = refContainer.current.offsetHeight ;

        if (scroll.top - scrollTop > 0 && scroll.top - scrollTop - offsetHeight < 0) {
            setScrollProgress(100 / (offsetHeight / (scroll.top - scrollTop)));
        }
    }, [scroll.top])



    return (
        <Container ref={refContainer} swiper={!!swiper} grayBg={grayBg}>
            <DivideLine progress={scrollProgress} />
            <ContainerWrapperTop>
                <ContainerWrapperTopTitle dangerouslySetInnerHTML={{__html: title}} />
                {swiper &&
                    <ContainerWrapperTopBtns>
                        <ArrowButton onClick={btnPrevClick} />
                        <ArrowButton onClick={btnNextClick} />
                    </ContainerWrapperTopBtns>
                }
            </ContainerWrapperTop>
            <ContainerWrapperSection>
                {children}
            </ContainerWrapperSection>
        </Container>
    );
};

export default ContainerWrapper;
