import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import dataImage from "../data.png"
import exerciceImage from "../exercice.png"
const FeaturesPanel=() => {


    return (
        <Grid item container xs={12} style={{minHeight:"700px", 
            backgroundColor:"white",
            padding:"50px 0 50px 0"
        }} direction="row"  id="features"
        alignContent="center" justify="space-around" >

        

            <Grid xs={12} sm={6} item container direction="column"  wrap="nowrap" alignItems="center" justify="center" style={{color:"black"}}>
                    <Grid item xs={12} sm={6} style={{maxHeight:"300px"}}>
                            <img src={exerciceImage} alt="smartphone with data tools"
                            width="auto" height="100%"></img>
                    </Grid>
                    
                    <Grid item xs={6} > 
                        <h3 > Follow our  science-based program </h3>
                        <p> Follow a scientific-based program to relieve your pain</p>
                    </Grid>
            </Grid>
            
            <Grid xs={12} sm={6} item container direction="column"  wrap="nowrap" alignItems="center" alignContent="center" justify="center" style={{color:"black"}}>
                    
                    <Grid item xs={12} sm={6} style={{maxHeight:"300px", alignSelf:"center"}}>
                        <img src={dataImage} alt="smartphone with data tools"
                        width="auto" height="100%"></img>
                    </Grid>

                    <Grid item xs={6} > 
                    <h3  >Track your pain and your progress</h3> 
                    <p> Track your workouts, meditations and pain seamlessly</p>
                    </Grid>

                 
        </Grid>
          
    
         
     
        </Grid>

    )
}

export default  FeaturesPanel