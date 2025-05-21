import { v4 as uuid } from 'uuid';

const notesReducer = (state, action) => {
    switch (action.type){
        case 'TITLE':
            return {
                ...state,
                title: action.payload
            }
        case 'TEXT':
            return {
                ...state,
                text: action.payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, {title: state.title, text: state.text, id: uuid()}]
            }
        case 'CLEAR_NOTES':
            return {
                ...state,
                title: '',
                text: ''
            }
        default: return state;
    }
}
export default notesReducer;