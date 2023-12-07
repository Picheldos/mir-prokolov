import React from 'react';
import { Container } from './ArrowButton.styled';
import Arrow from '@/icons/arrow.svg';

export interface ArrowButtonProps {
    onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({onClick}) => {
    return (
        <Container onClick={() => onClick()}>
            <Arrow />
        </Container>
    );
};

export default ArrowButton;
