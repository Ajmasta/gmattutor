import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import phoneData from "../phone.jpg"
import phoneExo from "../phoneExo.jpg"
const FeaturesPanel=() => {
    const [picture, setPicture] = useState(phoneExo)

    return (
        <Grid item container xs={12} style={{height:"700px",
            backgroundColor:"white",
            padding:"50px 0 50px 0"
        }} direction="row" wrap="wrap">


        <Grid item container xs={12} alignContent="center" justify="center" >

            <Grid xs={12} sm={6} container alignContent="center" justify="center" style={{color:"black"}}>
                    <Grid item xs={5}> 
                    <h3  onMouseEnter={()=>setPicture(phoneExo)}>Track your pain and your progress</h3> 
                    <p> Track your workouts, meditations and pain seamlessly</p>
                    </Grid>
                    <Grid item xs={5} > 
                    <h3 onMouseEnter={()=>setPicture(phoneData)}> Follow our  program based on the latest scientific studies </h3>
                    <p> Follow a scientific-based program to relieve your pain</p>
                    </Grid>
            </Grid>


           <Grid item xs={12} sm={6} style={{maxHeight:"400px"}}>
                <img src={picture} alt="smartphone with data tools"
                 width="auto" height="100%"></img>
            </Grid>
          
            </Grid>
      
          
            
     
        </Grid>

    )
}

export default  FeaturesPanel