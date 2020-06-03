import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import {makeStyles} from "@material-ui/core/styles";
import util from "../Utils/Utils";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CurrenciesCard({CurrenciesList}) {
    const classes = useStyles();
    return (
        <>
            {
                CurrenciesList && Object.entries(CurrenciesList).map(([key, value], i) =>
            <Grid item xs={1} key={i}>
                <Paper className={classes.paper} elevation={0}>
                {key}
                </Paper>
                <Paper className={classes.paper}>
                {util.formatCurrency(parseFloat(value))}
                </Paper>
            </Grid>)
            }

        </>
    );
}