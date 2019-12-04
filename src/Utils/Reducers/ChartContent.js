import chartContent from '@json/chartContent.json';

export const initialState = {
    chartContent: [...chartContent]
}

function chartContentReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default chartContentReducer;