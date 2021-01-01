import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'

const TeamPanel=() => {


    return (
        <Grid item container xs={12} style={{ minHeight:"700px",
        background:"url(https://images.unsplash.com/photo-1575540576545-3db8561c29e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1251&q=80)",
        backgroundRepeat:"norepeat", backgroundSize:"cover",
        }}   alignContent="space-around" justify="space-around" direction="row"
        id="team">
         


            <Grid item xs={12} md={5} container direction="column" alignContent="center" style={{color:"white",borderTop:"1px solid white",  padding:"0 5px 0 5px", backgroundColor:"rgba(0,0,0,0.6"}}>
                <h3> Who are we?</h3>
                <p style={{width:"80%" }}> A team of geeks and health specialists trying to tackle one of the most common physical problem of our day and age. We are based in Montreal, Canada.</p>
            
             </Grid>
            <Grid item xs={12} md={5} container direction="column" alignContent="center" style={{color:"white", borderTop:"1px solid white", padding:"0 5px 0 5px", backgroundColor:"rgba(0,0,0,0.6"}}>
                <h3> What is our mission?</h3>
                <p style={{width:"80%" }}> We want to make the treatment of chronic back pain affordable and accessible. 
                Back pain is the number one reason for missing work, and can be a physical, mental and financial burden for patients.
                We want patients to have clear methods to gain back their autonomy.
                </p>
            </Grid>
            <Grid item xs={12} md={5} container direction="column" alignContent="center" style={{color:"white",borderTop:"1px solid white", padding:"0 5px 0 5px", backgroundColor:"rgba(0,0,0,0.6"}}> 
                <h3> Who do we work with?</h3>
                <p style={{width:"80%" }}> We work both with the general public and healthcare specialists, such as clinics and hospitals
                Our goal is to offer a solution that will both help patients get better, but also helps specialists. By giving detailed data
                on the patients' pain and progress, health specialists will be able to be more informed on the condition of each patient.
                </p>
            </Grid>
            <Grid item xs={12}  md={5} container direction="column" alignContent="center" style={{color:"white",borderTop:"1px solid white", padding:"0 5px 0 5px", backgroundColor:"rgba(0,0,0,0.6"}}>
                <h3> How do I contact you? </h3>
                <p style={{width:"80%" }}> You can send us an <a style={{color:"white"}} href="mailto:adrien.moevus@gmail.com">email</a> </p>
             </Grid>

        
        </Grid>

    )
}

export default  TeamPanel