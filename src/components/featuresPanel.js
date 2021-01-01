import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import background2 from "../background2.gif"

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Parallax, Background } from 'react-parallax';

const FeaturesPanel=() => {
    const height= useMediaQuery("(min-height:900px)")? "1100px":"1000px"
    const large = useMediaQuery("(min-width:1210px)")
    return (
   

        <Parallax 
         bgImage="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80" 
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
         
       <Grid xs={12} lg={10} item container direction="column"  wrap="nowrap" alignItems="center" justify="center" 
       style={{color:"white"}}>
                    
                    <Grid item xs={10} sm={8}  container justify="center" alignContent="center" style={{backgroundColor:"rgba(0,0,0,0.2)", padding:"10px", borderRadius:"2%"}}> 
                        <h1 > Science-based</h1>
                        <p style={{fontSize:"1.1rem", }}> Latest scientific findings demonstate 
                        that the treatment of chronic pain requires an holistic solution that encompasses both the physical and the mental.
                        Our biopsychosoial program offers both physical and psychological exercices to help you control your pain. 
                </p>
                        <h1 > Progressive </h1>
                        <p style={{fontSize:"1.1rem",}}> Our goal is to help you develop long lasting habits that will enhance your quality of life.
                        After evaluating your degree of pain, and your freedom of movement, our algorithms will determine the best physical and mental exercices
                        for you. As you progress, the exercices also evolve to continuously help you regain your autonomy</p>
                        <h1> Accessible </h1>
                        <p style={{fontSize:"1.1rem"}}>
                            Chronic back pain is treatable, and the treatment can start today. Too many people who suffer 
                            have been waiting for a very long time to see specialists and are still waiting.  Even after seeing one, 
                            you will need continuous support to help relieve your pain. Our platform is easy to use and effective, and will help you
                            continuously to monitor and relieve your pain.
                        </p>
                    </Grid>
            </Grid>
            
            
          
    
         
     
        </Grid>
          
        </Parallax>
       


    )
}

export default  FeaturesPanel


// https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80