import React, { useContext } from 'react';
import classes from './Main.module.css';
import Container from '@material-ui/core/Container';
import { CardBook } from '../CardBook/CardBook';
import { BookContext } from '../../context/BookContext';


export const Main = () => {

    const { books } = useContext( BookContext );

    return (
        <div className={ classes.Main }>
            <Container maxWidth='sm'>
                <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '5px', fontStyle: 'italic', fontSize: '15px' }}>
                    <div style={{ color: 'grey'  }}>You have lent { books.length } books to friend</div>
                    <div style={{ color: 'blueviolet', fontWeight: 'bold' }}>Lent to:</div>
                </div>
                {
                    books.length ? <CardBook /> : <h1 style={{ color: 'blueviolet', fontSize: '50px' }} >Please, add new books!</h1>
                }
            </Container>
        </div>
    )
}