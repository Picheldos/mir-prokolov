import React from 'react';
import ContainerWrapper from "@/components/common/ContainerWrapper/ContainerWrapper";
import { AboutSectionText, AboutSectionTitle, Container } from './AboutSection.styled';
import AdvantageItem from '@/components/blocks/AdvantageItem/AdvantageItem';

export interface AboutSectionProps {
    // text: string;
}

const AboutSection: React.FC<AboutSectionProps> = () => {
    const data = {
        title: '<h3>Приветствуем вас в <span>Мире проколов</span> — экспертов по горизонтальному бурению грунта!</h3>',
        text: [
            '<p>Наш опыт гарантирует надежные и точные результаты. Мы создаем успех в каждом проекте, обеспечивая эффективное прокладывание коммуникаций.</p>',
            '<p>Будь то прокладывание подземных коммуникаций, укрепление грунта или другие задачи, мы готовы взяться за любой вызов. Наша команда с гордостью предоставляет клиентам решения, которые сочетают в себе надежность и качество.</p>'
        ]
    }


    return (
        <ContainerWrapper title={'О нас'}>
            <Container id={'about'}>
                <AboutSectionTitle dangerouslySetInnerHTML={{__html: data.title}} />
                <AboutSectionText>
                    {data.text.map((item) => <AdvantageItem text={item} key={item} />)}
                </AboutSectionText>
            </Container>
        </ContainerWrapper>
    );
};

export default AboutSection;
