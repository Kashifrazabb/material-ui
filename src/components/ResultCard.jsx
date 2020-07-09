import React from 'react';
import CountUp from 'react-countup';
import {Grid} from '@material-ui/core';

const ResultCard = ({color,type,about,number,date}) => {

    return (         
            <Grid item xs={10} md={3} xl={2}  className={`result-card-color-${color}`} style={{margin:'50px 0 0 10px',borderRadius:'10px'}}>
                <h3>{type}</h3>
                <h1>{number && <CountUp end={number} separator=','/>}</h1>
                <div>
                    <p><b>Updated:</b> {date && new Date(date).toDateString()}</p>
                    <p>{about}<b>COVID-19</b></p>
                </div>
            </Grid>
    )
}

export default ResultCard;
