import React from 'react';
import Logo from '@/components/blocks/Logo/Logo';
import { useRecoilState } from 'recoil';
import { MenuState } from '@/recoil/athom';
import { Link } from 'react-scroll';
import { Container, MobileMenuLinks } from '@/components/common/MobileMenu/MobileMenu.styled';


export interface MobileMenuProps {

}

const MobileMenu: React.FC<MobileMenuProps> = ({}) => {
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

    const [showed, setShowed] = useRecoilState(MenuState);

    return (
        <Container showed={showed}>
            <Logo />
            <MobileMenuLinks>
                {links.map((link) =>
                    <Link
                        to={link.link}
                        key={link.title}
                        smooth={true}
                        offset={-200}
                        duration={800}
                        onClick={() => setShowed(false)}
                    >
                        {link.title}
                    </Link>
                )}
            </MobileMenuLinks>
        </Container>
    );
};

export default MobileMenu;
