import React, { useEffect, useState } from 'react';
import { Container } from '@/components/ui/MobileMenuButton/MobileMenuButton.styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MenuState, ScrollState } from '@/recoil/athom';

export interface MobileMenuButtonProps {

}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({}) => {

    const [showedMenu, setShowedMenu] = useRecoilState(MenuState)
    const [contrast, setContrast] = useState(false);

    const scrollState = useRecoilValue(ScrollState);

    useEffect(() => {
        const pageHeight = document.body.offsetHeight;
        const screenHeight = window.innerHeight;
        const triggerHeight = 30;

        setContrast(scrollState.top > pageHeight - (screenHeight + triggerHeight));
    } ,[scrollState.top])

    return (
        <Container contrast={contrast} showed={showedMenu} onClick={() => setShowedMenu(!showedMenu)}>
            <span />
            <span />
            <span />
        </Container>
    );
};

export default MobileMenuButton;
