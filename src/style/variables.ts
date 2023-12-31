const variables = {
    col: 100 / 24,
    offset: {
        mobile: 30,
        tablet: 40,
        desktop: 40
    },
    videoRatio: (9 / 16) * 100,
    fonts: {
        default: 'Montserrat, Arial',
        rubik: 'Rubik, sans-serif'
    }
};

export type FontFamily = keyof typeof variables.fonts;

export type Offset = keyof typeof variables.offset;

export default variables;
