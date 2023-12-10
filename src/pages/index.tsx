import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import Layout from '@/components/common/Layout/Layout';
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import MainSlider from '@/components/sections/MainSlider/MainSlider';
import ServiceSlider from '@/components/sections/ServiceSlider/ServiceSlider';
import AdvantagesSection from '@/components/sections/AdvantagesSection/AdvantagesSection';
import ProjectsSection from '@/components/sections/ProjectsSection/ProjectsSection';
import EquipmentSlider from '@/components/sections/EquipmentSlider/EquipmentSlider';
import ContactsSection from '@/components/sections/ContactsSection/ContactsSection';

const Index: React.FC = ({ meta, header }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <Layout meta={meta} header={header} >
            <MainSlider />
            <AboutSection />
            <ServiceSlider />
            <AdvantagesSection />
            <ProjectsSection />
            <EquipmentSlider />
            <ContactsSection />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            meta: {
                title: 'Мир проколов',
                description: 'Приветствуем вас в Мире проколов — экспертов по горизонтальному бурению грунта!',
                keywords: 'Прокол грунта, горизонтальный прокол грунта, ГНБ,' +
                    ' прокол грунта в санкт-петербурге, прокол грунта спб,' +
                    ' метод горизонтального прокола, гнб спб,' +
                    'Прокол под дорогой, Бестраншейная прокладка коммуникаций, Прокладка коммуникаций методом ГНБ,' +
                    'Прокол из колодца, Прокладка коммуникаций, прокол грунта недорого, прокол грунта дешево, прокол,' +
                    'грунт, коммуникации, траншеи, траншея, бурение скважин, бурение, прокол, проколы, мир проколов,' +
                    'Прокол грунта, прокол из колодца, монтаж колодцев, ГНБ, прокладка коммуникаций, ' +
                    'прокол под дорогой, Санкт-Петербург, СПБ, сварка пнд труб, врезка под давлением'
            },
            header: {},
            sandwich: {}
        },
        revalidate: 1
    };
};

export default Index;
