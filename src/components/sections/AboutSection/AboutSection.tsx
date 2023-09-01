import React from 'react';
import ContainerWrapper from "@/components/common/ContainerWrapper/ContainerWrapper";
import {AboutSectionText, Container} from "./AboutSection.styled"

export interface AboutSectionProps {
    // text: string;
}

const AboutSection: React.FC<AboutSectionProps> = () => {
    const text = [
        "<h3>Приветствуем вас в <span>Мире проколов</span> — экспертов по горизонтальному бурению грунта!</h3>",
        "<p>Наш опыт гарантирует надежные и точные результаты. Мы создаем успех в каждом проекте, обеспечивая эффективное прокладывание коммуникаций.</p>",
        "<p>Будь то прокладывание подземных коммуникаций, укрепление грунта или другие задачи, мы готовы взяться за любой вызов. Наша команда с гордостью предоставляет клиентам решения, которые сочетают в себе надежность и качество.</p>"
    ]
    return (
        <ContainerWrapper title={'About'}>
            <Container>
                {text.map((item) => <AboutSectionText dangerouslySetInnerHTML={{__html: item}}/>)}
            </Container>
        </ContainerWrapper>
    );
};

export default AboutSection;
