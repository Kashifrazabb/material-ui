import React from 'react';
import Card from './Card';
import {Grid} from '@material-ui/core';
import confirmed from '../images/confirmed.svg';
import death from '../images/death.svg';
import recovered from '../images/recovered.svg';


const Output = ({TotalConfirmed,TotalRecovered,TotalDeaths,date}) => {

    return (
        <Grid container justify='center'>
                    <Card color='1' type='Confirmed' number={TotalConfirmed} date={date} about='Number of Infected Cases by ' source={confirmed}/>
                    <Card color='2' type='Recovered' number={TotalRecovered} date={date} about='Number of Recovered Cases from ' source={recovered}/>
                    <Card color='3' type='Death' number={TotalDeaths} date={date} about='Number of Deaths caused by ' source={death}/>
        </Grid>
    )
}

export default Output;
