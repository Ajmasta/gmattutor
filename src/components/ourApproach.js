import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import image from "../biopsychosociallogo.png"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const OurApproach=() => {

    const height= useMediaQuery("(min-height:800px)")? "850px":"750px"
    return (
        <Grid item container xs={12} style={{minHeight:`${height}`,
            backgroundColor:"rgb(1,159,222)",
            paddingBottom:"50px",
        }} alignContent="center" justify="center" direction="row" wrap="wrap" id="approach">
            <Grid container item xs={12} sm={8}>
                 <Grid item xs={12} sm={6} container alignContent="center" justify="center" alignItems="center" style={{color:"black",textAlign:"center"}}>
                            <Grid item container xs={10} alignContent="center" justify="center" alignItems="center"> 
                            <h1 style={{color:"antiquewhite",letterSpacing:"3px", textAlign:"center"}}>Biopsychosocial Approach</h1> 
                            <p style={{color:"antiquewhite",fontSize:"1.1rem"}}>  The latest research has shown that for chronic back pain, medication and surgeries are often ineffective.
                                Studies have shown that the best approach needs to be holistic and encompass not only the physical, but also the mental.
                                Through various psychological exercices, such as meditation, and physical exercices, patients become more and more able to manage their pain
                                and regain their autonomy. The approach requires continuous effort, and the development of long lasting habits to truly work. 
                             </p>
                            </Grid>
                         
                </Grid>
                <Grid item xs={12} sm={6} container alignContent="center" justify="center" alignItems="center" style={{maxHeight:"600px", maxWidth:"800px", boxSizing:"border-box"}}>
                        <img src={image} alt="brain representing biopsychosocial approach"
                        width="100%" style={{maxWidth:"450px"}} height="auto"></img>
                </Grid>
                 
                    
            </Grid>
          
            
     
        </Grid>

    )
}

export default  OurApproach