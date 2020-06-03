import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import util from "../Utils/Utils";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '32ch',
        },
    },
}));

export default function CurrenciesInput({CurrenciesList}) {
    const classes = useStyles();
    const [currency, setCurrency] = useState('-');
    const [currencyValue, setCurrencyValue] = useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    useEffect(() => {
        if (currency==='-') return
        setCurrencyValue(util.formatCurrency(parseFloat(CurrenciesList[currency])))
    }, [currency])

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="one unit of currency"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {CurrenciesList && Object.entries(CurrenciesList).map(([key, value], i) =>(
                        <MenuItem key={key}
                                  value={key}>
                                  {/*value={util.formatCurrency(parseFloat(key))}>*/}
                            {`${key} `}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    disabled
                    label={`${currency} to one US Dollar`}
                    value={`   $1   =   ${currencyValue}`}
                >
                </TextField>
            </div>
        </form>
    );
}