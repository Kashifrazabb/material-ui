import React from 'react';
import ResultCard from './ResultCard';
import {Grid} from '@material-ui/core';


const Result = ({TotalConfirmed,TotalRecovered,TotalDeaths,date}) => {

    return (
        <Grid container justify='center' spacing={10}>
                    <ResultCard color='red' type='Confirmed' number={TotalConfirmed} date={date} about='Number of Infected Cases by ' />
                    <ResultCard color='blue' type='Recovered' number={TotalRecovered} date={date} about='Number of Recovered Cases from '/>
                    <ResultCard color='green' type='Death' number={TotalDeaths} date={date} about='Number of Deaths caused by '/>
        </Grid>
    )
}

export default Result;
