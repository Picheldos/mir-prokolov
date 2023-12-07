import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import ContainerWrapper from '@/components/common/ContainerWrapper/ContainerWrapper';
import {
    Container
} from '@/components/sections/ProjectsSection/ProjectsSection.styled';

import ProjectCard from '@/components/blocks/ProjectCard/ProjectCard';
import OnlyScroll from 'only-scrollbar';

export interface ProjectsSectionProps {
    // text: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
    const data = [
        '/images/projects/image.jpg', '/images/projects/image.jpg', '/images/projects/image.jpg',
        '/images/projects/image.jpg', '/images/projects/image.jpg', '/images/projects/image.jpg',
        '/images/projects/image.jpg', '/images/projects/image.jpg', '/images/projects/image.jpg',
        '/images/projects/image.jpg', '/images/projects/image.jpg', '/images/projects/image.jpg',
    ]

    type ScrollBarContextType = OnlyScroll | null;

    const [scrollPos, setScrollPos] = useState(0);
    const [scrollBar, setScrollBar] = useState<ScrollBarContextType>(null);

    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        setScrollBar(new OnlyScroll(ref.current));
        return () => scrollBar?.destroy();
    }, []);

    useEffect(() => {
        const scrollHandler = () => setScrollPos(ref.current.scrollTop);
        ref.current.addEventListener('scroll', scrollHandler);

        return () => {
            ref.current.removeEventListener('scroll', scrollHandler)
        }
    }, [setScrollPos]);


    return (
        <ContainerWrapper title={'Работы'} grayBg>
            <Container ref={ref}>
                {data.map((img, index) =>
                    <ProjectCard key={index+img} img={img} scrollPos={scrollPos} />
                )}
            </Container>
        </ContainerWrapper>
    );
};

export default ProjectsSection;
