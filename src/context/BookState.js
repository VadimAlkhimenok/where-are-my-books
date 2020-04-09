import React, { useReducer } from 'react';
import { MODAL, SUBMIT, TITLE_OF_THE_BOOK, LENT_TO_FRIEND, AUTHOR, UNTIL } from './types';
import { BookReducer } from './BookReducer';
import { BookContext } from './BookContext';

export const BookState = ({ children }) => {

    const initialState = {
        modal: false,
        submit: false,
        titleBook: '',
        lentFriend: '',
        author: '',
        until: '',
        books: [],
    }

    const [state, dispatch] = useReducer( BookReducer, initialState );
    const { modal, submit, titleBook, lentFriend, author, books, until } = state;


    const changeModal = () => dispatch({ type: MODAL });
    const changeTitle = event => dispatch({ type: TITLE_OF_THE_BOOK, payload: event.target.value });
    const changeLent = event => dispatch({ type: LENT_TO_FRIEND, payload: event.target.value });
    const changeAuthor = event => dispatch({ type: AUTHOR, payload: event.target.value });
    const changeUntil = event => dispatch({ type: UNTIL, payload: event.target.value });
    const onSubmit = event => {
        dispatch({ type: SUBMIT, payload: books.push({
            titleBook: titleBook,
            lentFriend: lentFriend,
            author: author,
            until: until,
        }) });

        changeModal();
    }


    return (
        <BookContext.Provider value={{
            modal, submit, titleBook, lentFriend, author, state, books,
            changeModal, onSubmit, changeTitle, changeLent, changeAuthor, changeUntil
        }} >
            { children }
        </BookContext.Provider>
    )
}