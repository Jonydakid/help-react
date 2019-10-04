import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuThree from './MenuThree'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
        
    },
    menuButton: {
        float: 'right',
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#434343',
        textAllign: 'center',
        padding: '10px'
    },
    appbar:{
        display:'block',
        width: '100%',
        zIndex: '10',
        background: 'linear-gradient(0deg, rgba(97,172,64,0.43601190476190477) 0%, rgba(255,255,255,0.41360294117647056) 100%)',
        padding:'0px 0px 10px 0px'
        ,margin:'0px 0px 1% 0px'
    }
}));

export default function TopNav() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar>

                        <Typography variant="h6" className={classes.title}>
                            Servicio de Rescate Médico
                        </Typography>

                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuThree/>
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>

    );
}