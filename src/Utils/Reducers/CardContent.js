import cardContent from '@json/cardContent.json';

export const initialState = {
    cardContent: [...cardContent]
}

function cardContentReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default cardContentReducer;