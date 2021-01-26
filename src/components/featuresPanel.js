import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import background2 from "../background2.jpg"

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Parallax, Background } from 'react-parallax';

const FeaturesPanel=() => {
    const height= useMediaQuery("(min-height:900px)")? "1000px":"900px"
    const large = useMediaQuery("(min-width:1210px)")
    return (
   

        <Parallax 
         bgImage={background2} 
         style={{width:"100%",minHeight:`${height}`,zIndex:"-1", color:"white", }} 
        strength={200}
        bgImageStyle={large?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}}
         bgStyle={{background:"cover"}}
         >
            
        <Grid item container xs={12} lg={6} style={{ 
            backgroundColor:"transparent",
            
            padding:"50px 0 50px 0"
        }} direction="row"  id="features"
        justify="center"
        alignItems="center"
        alignContent="center"

        >
         
       <Grid xs={12} lg={10} item container direction="column"  alignContent="center" wrap="nowrap" alignItems="center" justify="center" 
       style={{color:"white"}}>
                    
                    <Grid item xs={10} sm={8}  container justify="center" alignContent="center" style={{backgroundColor:"rgba(0,0,0,0.2)", padding:"10px", borderRadius:"2%",margin:"auto"}}> 
                        <h1 > A Sound Investment</h1>
                        <p style={{fontSize:"1.1rem", }}> 
                        Latest research has shown that going from a 700 to 730+ score on the GMAT will offer a return on investment of 500k+ in the long-term 
                </p>
                        <h1 > We Follow your Rhythm</h1>
                        <p style={{fontSize:"1.1rem",}}> Our goal is to help you develop good habits that will help you score high on the GMAT.
                         With our personalized programs, we make sure that you truly understand the material you see. We want you to develop a rational intuition for the GMAT.
                         We are very flexible, and we will create personalized programs to achieve that goal.  </p>
                         <h1 > Get Your Money Back If You Fail </h1>
                        <p style={{fontSize:"1.1rem",}}> 
                        We are very confident in our skills, and we have a long history of helping students scoring high on the GMAT. We are so confident that 
                        we promise to give you your money back if you do not get the score you hoped for. 
                          </p>
                    </Grid>
            </Grid>
            
            
          
    
         
     
        </Grid>
          
        </Parallax>
       


    )
}

export default  FeaturesPanel


// https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80