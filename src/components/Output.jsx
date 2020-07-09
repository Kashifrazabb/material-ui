import React from 'react';
import Card from './Card';
import {Grid} from '@material-ui/core';


const Output = ({TotalConfirmed,TotalRecovered,TotalDeaths,date}) => {

    return (
        <Grid container justify='center'>
                    <Card color='red' type='Confirmed' number={TotalConfirmed} date={date} about='Number of Infected Cases by ' />
                    <Card color='blue' type='Recovered' number={TotalRecovered} date={date} about='Number of Recovered Cases from '/>
                    <Card color='green' type='Death' number={TotalDeaths} date={date} about='Number of Deaths caused by '/>
        </Grid>
    )
}

export default Output;
