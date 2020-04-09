import React, { useContext } from 'react';
import classes from './Modal.module.css';
import {Buttons} from '../../UI/Button';
import { Inputs } from '../../UI/Inputs';
import { BookContext } from '../../context/BookContext';

export const Modal = () => {

    const { changeModal, onSubmit, changeTitle, changeLent, changeAuthor, changeUntil } = useContext( BookContext );

    return (
        <form onSubmit={ event => onSubmit( event ) } className={ classes.Modal } noValidate autoComplete="off">
            <div className={ classes.ModalBody }>
                
                <div className={ classes.Panel }>
                    <h3>Lending a book away</h3>
                </div>

                <div className={ classes.Inputs }>
                    <div>
                        <Inputs changeInput={ changeTitle } label={ 'Title of the book:' } width={ '120%' } />
                        <Inputs changeInput={ changeLent } label={ 'Lent to friend:' } width={ '120%' } />
                    </div>

                    <div>
                        <Inputs changeInput={ changeAuthor } label={ 'Author:' } />
                        <Inputs changeInput={ changeUntil } label={ 'Until:' } /> 
                    </div>
                </div>

                <div className={ classes.Buttons }>
                    <Buttons handlerChange={ changeModal } type={ 'button' } name={ 'Cancel' } />
                    <Buttons handlerChange={ onSubmit } type={ 'submit' } name={ 'Save' } />
                </div>

            </div>
        </form>
    )
}
