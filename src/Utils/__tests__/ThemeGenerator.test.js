import { createTheme, material } from '@utils/ThemeGenerator';

describe('ThemeGenerator ->', () => {
    describe('Create Theme ->', () => {
        it('When all variables are provided, a new theme is created #themeColors', () => {
            const theme = createTheme({ primary: 'indigo', accent: 'yellow', type: 'light' });
            expect(theme).toMatchSnapshot();
        })
        it('When variables are missing, an error occurs #themeColors', () => {
            expect(() => createTheme()).toThrowErrorMatchingSnapshot();
            expect(() => createTheme({})).toThrowErrorMatchingSnapshot();
        })
    })
    describe('Generate Material Palette ->', () => {
        it('When a color is passed, a palette is generated #themeColors', () => {
            expect(material('indigo')).toMatchSnapshot();
        })
        it('When a color is passed, a palette is generated #themeColors', () => {
            expect(material()).toThrowErrorMatchingSnapshot();
        })
    })
})