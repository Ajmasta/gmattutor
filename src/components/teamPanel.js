import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const TeamPanel=() => {

    const height= useMediaQuery("(min-height:800px)")? "850px":"750px"

    return (
        <Grid item container xs={12} style={{minHeight:`${height}`,
        backgroundColor:"rgb(232,185,9)",
        paddingBottom:"50px"
  
    }} alignContent="space-around" alignItems="center" justify="center" direction="column" wrap="wrap" id="plans">

        <Grid container item  direction="column" >
            
            <h1 style={{fontSize:"3rem", letterSpacing:"5px", color:"white"}}> Our Plans</h1>
            
        </Grid>
        <Grid container item xs={10} style={{fontWeight:"600"}}>
             <Grid item xs={12} lg={4} container alignContent="center" justify="center" style={{color:"black"}}>
                        <Grid item xs={12}> 
                       <h1><span style={{color:"white"}}>GOLD  |</span> 250$/h</h1> </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                        <Grid item xs={10} style={{alignText:"center"}}> 
                        <p > The complete program, with mock exams, in-depth analyses, custom exercices etc.
                           </p>
                           </Grid>
                        
                     
            </Grid>
            <Grid   item xs={12} lg={4} container alignContent="center" alignItems="center" justify="center" style={{color:"black"}}>
                         
                        <h1> <span style={{color:"white"}}> SILVER | </span> 175$/h</h1> 
                        <Grid item xs={12}>
                           
                        </Grid>
                        <Grid item  xs={10} style={{alignText:"center"}}> 
                        <p> Follow our programs with a limited number of mock exams, and no custom exercices. 
                        
                           </p>
                           </Grid>
                        
                     
            </Grid>
            <Grid  item xs={12} lg={4} container alignContent="center" justify="center" style={{color:"black"}}>
                        
                        <Grid item xs={12}>
                        <h1 ><span style={{color:"white"}}>CUSTOM  </span></h1> 
                        </Grid>
                        <Grid item xs={12}>
                           
                        </Grid>
                        <Grid  item  xs={10} style={{alignText:"center"}}>
                        <p> 
                        If our rates are too high for you, we can try to work together and create a custom solution that will fit your needs.
                           </p>
                           </Grid>
                        
                     
            </Grid>
            <Grid  item xs={12} lg={12} container alignContent="center" justify="center" style={{color:"black"}}>
                        
                        <Grid item xs={12}>
                        <h1 ><span style={{color:"white", fontSize:"3rem"}}>Contact Us  </span></h1> 
                        </Grid>
                        <Grid item xs={12}>
                           
                        </Grid>
                        <Grid  item  xs={10} style={{alignText:"center"}}>
                        <p> 
                        <a href="mailto:gmattutorcanada@gmail.com" style={{color:"black"}}>Send us an email and book an appointment today. </a>
                           </p>
                           </Grid>
                        
                     
            </Grid>
             
                
        </Grid>
      
        
 
    </Grid>

    )
}

export default  TeamPanel