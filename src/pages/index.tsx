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
                title: 'Title',
                description: 'description',
                keywords: 'keywords'
            },
            header: {},
            sandwich: {}
        },
        revalidate: 1
    };
};

export default Index;
