import React from 'react';
import {
    Container, EquipmentSlideDescription, EquipmentSlideDescriptionBlock,
    EquipmentSlideImage,
    EquipmentSlideTitle
} from '@/components/blocks/EquipmentSlide/EquipmentSlide.styled';
import Image from 'next/image';

export interface EquipmentSlideProps {
    title: string,
    img: string,
    text: string[]
}

const EquipmentSlide: React.FC<EquipmentSlideProps> = ({ title, img, text }) => {
    return (
        <Container>
            <EquipmentSlideImage>
                <Image src={img} layout={'fill'} objectFit={'cover'} />
            </EquipmentSlideImage>
            <EquipmentSlideTitle dangerouslySetInnerHTML={{__html: title}} />
            <EquipmentSlideDescription>
                {text.map((item) => <EquipmentSlideDescriptionBlock key={item} dangerouslySetInnerHTML={{__html: item}}/>)}
            </EquipmentSlideDescription>
        </Container>
    );
};

export default EquipmentSlide;
