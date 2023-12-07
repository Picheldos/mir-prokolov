import React, { useEffect, useState } from 'react';
import { Container, HeaderLink, HeaderLinks, HeaderLogo } from './Header.styled';
import Logo from '@/components/blocks/Logo/Logo';
import { useRecoilValue } from 'recoil';
import { ScrollState } from '@/recoil/athom';


export interface HeaderProps {
    scrollDirection?: string
}

const Header: React.FC<HeaderProps> = ({scrollDirection}) => {
    const links = ['Преимущества', 'Услуги', 'Работы', 'Техника', 'Контакты']
    const [visible, setVisible] = useState(true);
    const [contrast, setContrast] = useState(false);

    const scrollState = useRecoilValue(ScrollState);

    useEffect(() => {
        scrollDirection && setVisible(scrollDirection === 'up');
    }, [scrollDirection]);

    useEffect(() => {
        const pageHeight = document.body.offsetHeight;
        const screenHeight = window.innerHeight;
        const triggerHeight = 100;

        setContrast(scrollState.top > pageHeight - (screenHeight + triggerHeight));
    } ,[scrollState.top])

    return (
        <Container contrast={contrast} visible={visible}>
            <HeaderLogo>
                <Logo />
            </HeaderLogo>
            <HeaderLinks>
                {links.map((link) => <HeaderLink key={link} dangerouslySetInnerHTML={{__html: link}} />)}
            </HeaderLinks>
        </Container>
    );
};

export default Header;
