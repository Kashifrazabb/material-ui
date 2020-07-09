import React from 'react';
import CountUp from 'react-countup';
import {Grid} from '@material-ui/core';

const Card = ({color,type,about,number,date}) => {

    return (         
            <Grid item xs={10} md={3} xl={2} className={`result-card-color-${color}`} style={{margin:'0 10px 10px 0',borderRadius:'10px',padding:'30px'}}>
                <h3>{type}</h3>
                <h1>{number && <CountUp end={number} separator=','/>}</h1>
                <div>
                    <p><b>Updated:</b> {date && new Date(date).toDateString()}</p>
                    <p>{about}<b>COVID-19</b></p>
                </div>
            </Grid>
    )
}

export default Card;
