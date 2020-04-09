import React from 'react';
import classes from './TopPanel.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



export const TopPanel = () => {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={ classes.TopPanel }>
                    <h3>Books that I have lent to friends</h3>
                </Toolbar>
            </AppBar>
        </div>
    )
}