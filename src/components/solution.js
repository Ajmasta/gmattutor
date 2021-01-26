import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import teacher from "../teacher.png"
import calendar from "../calendar.png"
import chart from "../chart.png"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Solution=() => {

    const height= useMediaQuery("(min-height:800px)")? "850px":"750px"
    return (
        <Grid item container xs={12} style={{minHeight:`${height}`,
            backgroundColor:"rgb(232,185,9)",
            paddingBottom:"50px"
      
        }} alignContent="space-around" alignItems="center" justify="center" direction="column" wrap="wrap" id="solution">

            <Grid container item  direction="column" >
                
                <h1 style={{fontSize:"3rem", letterSpacing:"5px", color:"white"}}> Our Solution</h1>
                
            </Grid>
            <Grid container item xs={10} style={{fontWeight:"600"}}>
                 <Grid item xs={12} lg={4} container alignContent="center" justify="center" style={{color:"black"}}>
                            <Grid item xs={12}> 
                           <h1><span style={{color:"antiquewhite"}}>1 |</span> Book</h1> </Grid>
                            <Grid item xs={12}>
                                <img alt="checklist" height="150px" src={calendar}></img>
                            </Grid>
                            <Grid item xs={10} style={{alignText:"center"}}> 
                            <p > Book an appointment and start your tutoring. 
                               </p>
                               </Grid>
                            
                         
                </Grid>
                <Grid   item xs={12} lg={4} container alignContent="center" alignItems="center" justify="center" style={{color:"black"}}>
                             
                            <h1> <span style={{color:"antiquewhite"}}> 2 | </span> Start</h1> 
                            <Grid item xs={12}>
                                <img alt="checklist" height="150px" src={teacher}></img>
                            </Grid>
                            <Grid item  xs={10} style={{alignText:"center"}}> 
                            <p> Our tutors are trained to adapt to all types of students. 
                            
                               </p>
                               </Grid>
                            
                         
                </Grid>
                <Grid  item xs={12} lg={4} container alignContent="center" justify="center" style={{color:"black"}}>
                            
                            <Grid item xs={12}>
                            <h1 ><span style={{color:"antiquewhite"}}>3 | </span>Progress</h1> 
                            </Grid>
                            <Grid item xs={12}>
                                <img alt="checklist" height="150px" src={chart}></img>
                            </Grid>
                            <Grid  item  xs={10} style={{alignText:"center"}}>
                            <p> 
                            Start seeing improvements quickly.
                               </p>
                               </Grid>
                            
                         
                </Grid>
                 
                    
            </Grid>
          
            
     
        </Grid>

    )
}

export default  Solution