const actionType = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',
}

export const showModal = (payload) => ({ type: actionType.SHOW_MODAL, payload });
export const hideModal = (payload) => ({ type: actionType.HIDE_MODAL, payload });


const initState = [];

export default function reducer(state = initState, { type, payload }){
    switch (type) {
        case actionType.SHOW_MODAL:
            return [...state, payload]
        case actionType.HIDE_MODAL:
            return [...state, state.slice(1, -1)]
        default:
            return state;
    }

}