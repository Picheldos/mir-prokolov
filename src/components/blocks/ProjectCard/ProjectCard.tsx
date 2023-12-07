import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { Container } from '@/components/blocks/ProjectCard/ProjectCard.styled';

export interface ProjectCardProps {
    img: string;
    scrollPos: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({img, scrollPos}) => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const inViewTrigger = 2.2;
        setInView(scrollPos > ref.current.offsetTop - ref.current.offsetHeight * inViewTrigger);
    }, [scrollPos])

    return (
        <Container ref={ref} inView={inView}>
            <Image src={img} layout={'fill'} objectFit={'cover'} />
        </Container>
    );
};

export default ProjectCard;
