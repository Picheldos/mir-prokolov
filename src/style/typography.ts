import { css, FlattenSimpleInterpolation } from 'styled-components';
import variables from '@/style/variables';

export const rem: (size: number, rootFontSize?: number) => string = (size, rootFontSize = 16) => {
    return `${size / rootFontSize}rem`;
};

export const remFluidMiddle: (
    property: string,
    minSize: number,
    tabletSize: number,
    smallDeskSize: number,
    maxSize: number,
    rootFontSize?: number
) => FlattenSimpleInterpolation = (property, minSize, tabletSize, smallDeskSize, maxSize, rootFontSize = 16) => {
    const minSizeRem = rem(minSize);
    const tabletSizeRem = rem(tabletSize);
    const smallDeskSizeRem = rem(smallDeskSize);
    const maxSizeRem = rem(maxSize);

    return css`
        //mobile
        ${property}: ${rem(minSize * 0.8)};

        @media (min-width: 370px) {
            ${property}: ${minSizeRem};
        }


        @media (min-width: 500px) {
            ${property}: calc(${minSizeRem} + ( ${tabletSize / rootFontSize} - ${minSize / rootFontSize}) * 
                            ((100vw - ${rem(370)}) / (767 - 370)));
        }

        // tablet
        @media (min-width: 767px) {
            ${property}: calc(${tabletSizeRem} + (${smallDeskSize / rootFontSize} - ${tabletSize / rootFontSize}) *
                            ((100vw - ${rem(767)}) / (1280 - 767)));


            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1280 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1280 - 767)));
            }
        }

        //min desk
        @media (min-width: 1280px) {
            ${property}: calc(${smallDeskSizeRem} + (${maxSize / rootFontSize} - ${smallDeskSize / rootFontSize}) * 
                ((100vw - ${rem(1280)}) / (1920 - 1280)));


            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }
                
        }

        // больше 1920
        @media (min-width: 1920px) {
            ${property}: ${maxSizeRem};

            @media (max-height: 500px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.6} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }

            @media (max-height: 750px) {
                ${property}: calc(${minSizeRem} + (${(maxSize / rootFontSize) * 0.7} - ${minSize / rootFontSize}) *
                ((100vw - ${rem(767)}) / (1920 - 767)));
            }
        }

        @media (min-width: 2000px) {
            ${property}: ${(maxSize / 1920) * 100}vw;
        }
    
    `;
};
export const remAdaptiveFont = (minSize: number, tabletSize: number, smallDeskSize: number, maxSize: number): FlattenSimpleInterpolation => {
    return remFluidMiddle('font-size', minSize, tabletSize, smallDeskSize, maxSize, 16);
}

const typography = {
    title: css`
        ${remAdaptiveFont(28, 40, 48, 64)};
        line-height: 1.2;
        font-weight: 700;
    `,
    title2: css`
        ${remAdaptiveFont(28, 36, 40, 48)};
        line-height: 1;
        font-weight: 700;
    `,
    title3: css`
        ${remAdaptiveFont(20, 22, 32, 36)};
        line-height: 1.2;
        font-weight: 700;
    `,
    bigText: css`
        ${remAdaptiveFont(20, 28, 35, 46)};
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: 1px;
    `,
    text: css`
        ${remAdaptiveFont(14, 22, 26, 32)};  
        line-height: 1.4;
        font-weight: 400;
        letter-spacing: 0.64px;
        text-align: justify;
    `,
    text2: css`
        ${remAdaptiveFont(12, 16, 20, 24)};  
        line-height: 1.2;
        font-weight: 400;
    `,
    text5: css`
        ${remAdaptiveFont(20, 20, 24, 24)};  
        line-height: 1.2;
        font-weight: 600;
    `,
    link: css`
        ${remAdaptiveFont(12, 14, 18, 20)};
        line-height: 1.2;
        font-weight: 400;
    `,
    logo: css`
        ${remAdaptiveFont(24, 24, 24, 24)};
        line-height: 1;
        font-weight: 600;
        font-family: ${variables.fonts.rubik};
    `,
};

export type Typography = keyof typeof typography;

export default typography;
