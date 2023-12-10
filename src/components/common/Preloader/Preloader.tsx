import React, { useEffect, useState } from 'react';
import { Container } from './Preloader.styled';
import Logo from '@/components/blocks/Logo/Logo';

interface PreloaderProps {
    /* Component props */
}

const Preloader: React.FC<PreloaderProps> = () => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
            console.log(123);
        }, 2000)
    }, [])

    return (
        <Container hidden={hidden}>
            <Logo />
        </Container>
    );
};

export default Preloader;
