import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import { Parallax, Background } from 'react-parallax';
import background from "../background1.png"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const CoverPanel=() => {

    const large = useMediaQuery("(min-width:1210px)")

    return (

        <Grid item container xs={12} style={{height:"800px",
            backgroundColor:"transparent",
           
        }}
        alignContent="center" justify="center" direction="column">
        <Parallax 
         bgImage={background} 
         style={{width:"100%",height:"100%",zIndex:"-1",display:"flex",justifyContent:"center",alignItems:"center", color:"white"}} 
        strength={300}
        bgImageStyle={large?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}}
         bgStyle={{background:"cover"}}
         >
        
           <h1> Don't wait for a doctor.<br/> Relieve your back pain now.</h1>
         <p style={{fontSize:"1.2rem", width:"100%"}}> 
         Have you been suffering from back pain and unable to see a doctor ? <br /> 
          Our platform offers scientific-based solutions directly on your phone and helps you develop 
          long lasting habits to make a real change in your life. </p>
        </Parallax>
        </Grid>

    )
}

export default  CoverPanel


/*
 
backgroundImage:
            "url('https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize:"cover",
            backgroundPosition:"center center",

*/