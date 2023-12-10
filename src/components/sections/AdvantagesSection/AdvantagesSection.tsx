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
            title: 'Прокол из колодца',
            text: 'Установка УПКТ 20 позволяет делать прокол из ЖБ колодца. Этот метод актуален для устройства самотёчной канализации или замены труб методом разрушения.'
        },
        {
            icon: 'water',
            title: 'Исполнительная документация',
            text: '<ul><li>Все специалисты компании имеют удостоверения.</li><li>Сдаем документы во время</li></ul>'
        },
        {
            icon: 'compact',
            title: 'Сварка ПНД труб',
            text: 'В штате компании имеются аттестованные сварщики НАКС. Сварщики работают на высоком уровне.'
        },
        {
            icon: 'compact',
            title: 'Заключаем договор',
            text: 'Выполняем обязательства в срок. Гарантия 2 года на все проложенные нами коммуникации. Работаем за безналичный расчет (С НДС). Есть ЭДО'
        }
    ]

    return (
        <ContainerWrapper title={'Преимущества'}>
            <Container id={'advantages'}>
                {data.map((advantage) =>
                    <AdvantageItem key={advantage.title} icon={advantage.icon} title={advantage.title} text={advantage.text} />
                )}
            </Container>
        </ContainerWrapper>
    );
};

export default AdvantagesSection;
