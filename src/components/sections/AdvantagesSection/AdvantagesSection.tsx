import React from 'react';
import { Container } from './AdvantagesSection.styled';
import ContainerWrapper from '@/components/common/ContainerWrapper/ContainerWrapper';
import AdvantageItem from '@/components/blocks/AdvantageItem/AdvantageItem';

export interface AdvantagesSectionProps {

}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({  }) => {

    const data = [
        {
            icon: 'compact',
            title: 'Компактная установка',
            text: 'Для производства работ нам нужен стартовый котлован 160/100 см. Можем зайти с поверхности земли, без подготовки приямков.'
        },
        {
            icon: 'water',
            title: 'Водопровод под ключ',
            text: '<ul><li>Сделаем врезку в действующий водопровод</li><li>Заменим старый водопровод на ПНД</li><li>Установим ЖБ кольца</li><li>Заведем трубу в дом</li></ul>'
        },
        {
            icon: 'compact',
            title: 'Компактная установка',
            text: 'Для производства работ нам нужен стартовый котлован 160/100 см. Можем зайти с поверхности земли, без подготовки приямков.'
        },
        {
            icon: 'water',
            title: 'Водопровод под ключ',
            text: '<ul><li>Сделаем врезку в действующий водопровод</li><li>Заменим старый водопровод на ПНД</li><li>Установим ЖБ кольца</li><li>Заведем трубу в дом</li></ul>'
        }
    ]

    return (
        <ContainerWrapper title={'Преимущества'}>
            <Container>
                {data.map((advantage, index) =>
                    <AdvantageItem key={index} icon={advantage.icon} title={advantage.title} text={advantage.text} />
                )}
            </Container>
        </ContainerWrapper>
    );
};

export default AdvantagesSection;
