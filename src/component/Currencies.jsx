import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CurrenciesInput from "./Currencies-input";
import CurrenciesCard from "./Currencies-card";
import {fetchedCurrencies} from "../api/API"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const CurrenciesMain = () => {
    const classes = useStyles();

    const [fetcheCurrencies, setFetchedCurrencies] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCurrencies(await fetchedCurrencies())
        }
        fetchAPI()
    }, [setFetchedCurrencies])

    let humanDateFormat = null

    if (fetcheCurrencies.timestamp) {
        const dateObject = new Date(fetcheCurrencies.timestamp*1000)
        humanDateFormat = dateObject.toLocaleString()
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} >

                <Grid item xs={7}>
                    <Paper className={classes.paper}>
                        <CurrenciesInput CurrenciesList={fetcheCurrencies.rates}/>
                    </Paper>

                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant="h4" component="h1">
                      Currency converter
                        </Typography>
                            Last updated:  {humanDateFormat ? humanDateFormat :null}
                    </Paper>
                </Grid>
                <CurrenciesCard CurrenciesList={fetcheCurrencies.rates}/>
            </Grid>
        </div>
    )
}

export default CurrenciesMain