import { MODAL, SUBMIT, TITLE_OF_THE_BOOK, LENT_TO_FRIEND, AUTHOR, UNTIL } from './types';

export const BookReducer = ( state, action ) => {
    switch ( action.type ) {
        case MODAL:
            return { ...state, modal: !state.modal };
        case SUBMIT:
            return { ...state };
        case TITLE_OF_THE_BOOK:
            return { ...state, titleBook: action.payload };
        case LENT_TO_FRIEND:
            return { ...state, lentFriend: action.payload };
        case AUTHOR:
            return { ...state, author: action.payload };
        case UNTIL: 
            return { ...state, until: action.payload };
        default: return state;
    }
} 