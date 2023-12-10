import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { Container } from '@/components/blocks/ProjectCard/ProjectCard.styled';
import { useRecoilValue } from 'recoil';
import { SizesState } from '@/recoil/athom';

export interface ProjectCardProps {
    img: string;
    scrollPos: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({img, scrollPos}) => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const [inView, setInView] = useState(false);

    const size = useRecoilValue(SizesState);

    useEffect(() => {
        const inViewTrigger = () => {
            switch (true) {
                case (size.sizes.w < 577):
                    return 2.5;
                case (size.sizes.w < 769):
                    return 3.5;
                case (size.sizes.w < 1025):
                    return 2.3;
                case (size.sizes.w < 1441):
                    return 2.6;
                default:
                    return 2.2;
            }
        }

        setInView(scrollPos > ref.current.offsetTop - ref.current.offsetHeight * inViewTrigger());
    }, [scrollPos])

    return (
        <Container ref={ref} inView={inView}>
            <Image src={img} layout={'fill'} objectFit={'cover'} />
        </Container>
    );
};

export default ProjectCard;
