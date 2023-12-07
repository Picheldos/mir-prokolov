import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container } from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BasePageProps } from '@/interfaces';
import Sandwich from '@/components/common/Sandwich/Sandwich';
import { ScrollDirectionState, ScrollState, SizesState } from '@/recoil/athom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import useResize from '@/hooks/useResize';
import OnlyScroll from 'only-scrollbar';



interface LayoutProps extends BasePageProps {
    /* Layout props */
}

const Layout: React.FC<LayoutProps> = ({ children, meta, header, sandwich }) => {

    const [{ isMobile }, setSizesState] = useRecoilState(SizesState);
    const setScrollState = useSetRecoilState(ScrollState);
    const [scrollDirection, setScrollDirection] = useState('');

    const sizes = useResize();

    useEffect(() => {
        if (sizes?.w && sizes.h) {
            const mobile = sizes.w < 1023 || (sizes.w < 900 && sizes.h <= 450);
            setSizesState((prev) => ({ ...prev, sizes, isMobile: mobile }));
        }
    }, [sizes, setSizesState]);

    useEffect(() => {
        const scrollHandler = () => {
            setScrollState({ top: window.scrollY, left: scrollX });
            const direction = document.querySelector('html')?.dataset.scrollDirection;
            direction && setScrollDirection(direction)
        };
        window.addEventListener('scroll', scrollHandler);


        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [setScrollState]);

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="og:title" content={meta.title} />
                <meta name="og:description" content={meta.description} />
            </Head>

            <Header {...header} scrollDirection={scrollDirection}/>

            <Sandwich {...sandwich} />

            <Container>
                {children}
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
