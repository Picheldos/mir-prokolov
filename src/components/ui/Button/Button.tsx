import React from 'react';
import { Container } from './Button.styled';

export interface ButtonProps {
    title: string
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, title}) => {
    return (
        <Container onClick={() => onClick()}>
            {title}
        </Container>
    );
};

export default Button;
