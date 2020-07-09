import React from 'react';
import { Grid, Select, MenuItem} from '@material-ui/core';
import { UseStyles } from './UseStyles';


const Input = ({ countries, CountryCode, selectValue, handleSelect }) => {
    const classes = UseStyles();
    return (
            <Grid container direction='column'>

                <Grid container item>
                    <Grid item xs={1} md={3} />
                    <Grid item xs={10} md={6}>
                        <Select onChange={handleSelect} value={selectValue} fullWidth className={classes.root}>
                            <MenuItem value="Global">Global</MenuItem>
                            {countries.map(country => <MenuItem value={country}>{country}</MenuItem>)}
                        </Select>
                    </Grid>
                    <Grid item xs={1} md={3} />
                </Grid>

                <Grid container item justify='center' style={{margin:'20px 0'}}>
                    {CountryCode ?
                        <img src={`https://www.countryflags.io/${CountryCode}/flat/64.png`} alt='Flag' />
                        : null}
                </Grid>

            </Grid>
    )
}

export default Input;
