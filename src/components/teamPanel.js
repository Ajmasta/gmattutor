import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'

const TeamPanel=() => {


    return (
        <Grid item container xs={12} style={{ minHeight:"700px",
        backgroundColor:"rgb(232,185,9)",
        }}   alignContent="center" justify="space-around" direction="row"
        id="team">
         
         <Grid container item  direction="column"  >
                
                <h1 style={{fontSize:"3rem", letterSpacing:"5px", color:"black"}}> <a style={{color:"black"}} href="mailto:gmattutorcanada@gmail.com">Book an appointment</a></h1>
                
            </Grid>
    
                
                            
    
        </Grid>

    )
}

export default  TeamPanel