import React, { useContext } from 'react';
import classes from './BottomPanel.module.css';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { BookContext } from '../../context/BookContext';
import { Modal } from '../Modal/Modal';


export const BottomPanel = () => {

    const { modal, changeModal } = useContext( BookContext );

    return (
            <div className={ classes.BottomPanel }>
                <div className={ classes.BottomPanelForm }>
                    <Icon className="fa fa-plus-circle" color="primary"></Icon>
                    <Button onClick={ () => changeModal() } color="primary">Lend a new book away</Button>
                    
                    { modal && <Modal /> }

                </div>
            </div>
    )
}