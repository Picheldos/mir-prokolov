import React, { useEffect, useState } from 'react';
import { Container, HeaderLink, HeaderLinks, HeaderLogo } from './Header.styled';
import Logo from '@/components/blocks/Logo/Logo';
import { useRecoilValue } from 'recoil';
import { ScrollState } from '@/recoil/athom';
import { Link } from 'react-scroll';


export interface HeaderProps {
    scrollDirection?: string
}

const Header: React.FC<HeaderProps> = ({scrollDirection}) => {
    const links = [
        {
          title: 'О нас',
          link: 'about'
        },
        {
            title: 'Преимущества',
            link: 'advantages'
        },
        {
            title: 'Услуги',
            link: 'service'
        },
        {
            title: 'Работы',
            link: 'projects'
        },
        {
            title: 'Техника',
            link: 'equipment'
        },
        {
            title: 'Контакты',
            link: 'contacts'
        }
    ]
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
                {links.map((link) =>
                    <Link to={link.link} key={link.title} smooth={true} offset={-200} duration={800} >
                        <HeaderLink dangerouslySetInnerHTML={{__html: link.title}} />
                    </Link>
                )}
            </HeaderLinks>
        </Container>
    );
};

export default Header;
