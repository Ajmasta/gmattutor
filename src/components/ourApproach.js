import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'

const OurApproach=() => {


    return (
        <Grid item container xs={12} style={{height:"700px",
            backgroundColor:"rgb(129,206,255)",
      
        }} alignContent="center" justify="center" direction="row" wrap="wrap">
            <Grid container item xs={8}>
                 <Grid item xs={12} sm={6} container alignContent="center" justify="center" style={{color:"black"}}>
                            <Grid item xs={12}> 
                            <h3>Biopsychosocial Approach</h3> 
                            <p> The latest research has shown that for chronic back pain, medication and surgeries are often ineffective. The best approach instead is to develop long lasting healthy habits both for the body and the mind  </p>
                            </Grid>
                         
                </Grid>
                <Grid xs={12} sm={6} style={{maxHeight:"600px", maxWidth:"800px",boxShadow:"1px 1px 1px black", boxSizing:"border-box"}}>
                        <img src="https://cdn.pixabay.com/photo/2020/11/07/10/25/machine-learning-5720531_960_720.png" alt="smartphone with data tools"
                        width="100%" height="auto"></img>
                </Grid>
                 
                    
            </Grid>
          
            
     
        </Grid>

    )
}

export default  OurApproach