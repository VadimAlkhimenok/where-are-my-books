import React, { useContext } from 'react';
import classes from './CardBook.module.css';
import { BookContext } from '../../context/BookContext';

export const CardBook = () => {

    const { books } = useContext( BookContext );
    
    return (
        <>
            {
                books.map( (item, index) => (
                    <div key={ index } className={ classes.CardBook }>
                        <div style={{ 
                            height: '150px', 
                            width: '25px', 
                            borderRight: '1px solid grey', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            background: 'blueviolet', 
                            color: 'white',
                            padding: '5px'
                        }}>{ index + 1 }</div>
                        
                        <div style={{
                            textAlign: 'start',
                            padding: '10px',
                            background: 'white',
                            width: '100%',
                            height: '150px', 
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}>
                            <div style={{ fontSize: '15px', color: 'blueviolet' }}>{ item.titleBook }</div>
                            
                            <div style={{ color: 'grey' }}>{ item.lentFriend }</div>
                        </div>
                        
                        <div style={{
                            width: '200px',
                            height: '150px',
                            background: 'lightgrey',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                        }}>
                            <div style={{ color: 'blueviolet', fontSize: '17px' }}>{ item.author }</div>
            
                            <div style={{ color: 'grey', paddingTop: '10px' }}>{ item.until }</div>
                        </div>
                    </div>
                    
                ) )
            }
        </>
    )
}