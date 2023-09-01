import React from 'react';
import {Container, ContainerWrapperSection, ContainerWrapperTitle} from './ContainerWrapper.styled';

export interface ContainerWrapperProps {
    title: string;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ title, children }) => {
    return (
        <Container>
            <ContainerWrapperTitle dangerouslySetInnerHTML={{__html: title}} />
            <ContainerWrapperSection>
                {children}
            </ContainerWrapperSection>
        </Container>
    );
};

export default ContainerWrapper;
