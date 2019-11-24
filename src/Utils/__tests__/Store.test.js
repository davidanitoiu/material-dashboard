import store from '@utils/Store';
import { setPrimaryColor, setAccentColor, toggleDark, changeMode } from '@reducers/ThemeColor';

describe('Redux Store ->', () => {
    it('Store initializes properly #reduxStore', () => {
        expect(store).toMatchSnapshot();
    });
    describe('Theme Color Reducer ->', () => {
        it('When setPrimaryColor dispatch is sent, an action item is generated #reduxStore', () => {
            expect(store.dispatch(setPrimaryColor('green'))).toMatchSnapshot()
        });
        it('When setAccentColor dispatch is sent, an action item is generated #reduxStore', () => {
            expect(store.dispatch(setAccentColor('red'))).toMatchSnapshot()
        });
        it('When toggleDark dispatch is sent, an action item is generated #reduxStore', () => {
            expect(store.dispatch(toggleDark())).toMatchSnapshot();
        });
    })
})