import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'

const TeamPanel=() => {


    return (
        <Grid item container xs={12} style={{ height:"700px",
            backgroundColor:"white",
        }}   alignContent="space-around" justify="space-around" direction="row"
        id="team">
         


            <Grid item xs={5} style={{borderLeft:"2px solid black",borderTop:"2px solid black",  padding:"0 5px 0 5px"}}>
                <h3> Who are we?</h3>
                <p> A team of geeks and health specialists trying to tackle one of the most common physical problem of our day and age</p>
            
             </Grid>
            <Grid item xs={5} style={{color:"black", borderRight:"2px solid black",borderTop:"2px solid black", padding:"0 5px 0 5px"}}>
                <h3> What is our mission?</h3>
                <p> We want to make the treatment of chronic back pain affordable and easy to access</p>
            </Grid>
            <Grid item xs={5} style={{borderLeft:"2px solid black",borderBottom:"2px solid black", padding:"0 5px 0 5px"}}> 
                <h3> Who do we work with?</h3>
                <p> We work both with the general public and healthcare specialists, such as clinics and hospitals</p>
            </Grid>
            <Grid item xs={5} style={{borderRight:"2px solid black",borderBottom:"2px solid black", padding:"0 5px 0 5px"}}>
                <h3> How do I contact you? </h3>
                <p> You can send us an email at @@@</p>
             </Grid>

        
        </Grid>

    )
}

export default  TeamPanel