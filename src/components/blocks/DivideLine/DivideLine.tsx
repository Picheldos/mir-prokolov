import React from 'react';
import { Container, DivideLineGray, DivideLineOrange } from './DivideLine.styled';

export interface DivideLineProps {
    progress: number;
}

const DivideLine: React.FC<DivideLineProps> = ({progress}) => {
    return (
        <Container>
            <DivideLineOrange width={progress / 1.07} />
            <DivideLineGray width={progress} />
        </Container>
    );
};

export default DivideLine;
