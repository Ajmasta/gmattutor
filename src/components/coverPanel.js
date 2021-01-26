import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import { Parallax, Background } from 'react-parallax';
import background from "../background1.gif"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const CoverPanel=() => {

    const large = useMediaQuery("(min-width:1210px)")
  const height= useMediaQuery("(min-height:900px)")? "900px":"800px"
    return (

   
        <Parallax 
         bgImage={background} 
         style={{width:"100%",height:`${height}`,zIndex:"-1", color:"white", display:"flex", direction:"column", alignItems:"center", justifyContent:"center"}} 
        strength={200}
        bgImageStyle={large?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}}
         bgStyle={{background:"cover"}}
         >
        
           <h1 style={{width:"100%", margin:"auto", marginBottom:"30px",letterSpacing:"3px",fontSize:"3.5rem"}}>Invest in Your Future  <br/> Ace the GMAT</h1>
         <p style={{fontSize:"1.1rem", width:"50%", margin:"auto"}}> 
         We offer tutoring to help you reach your professional goals </p>
        
        </Parallax>
       

    )
}

export default  CoverPanel


/*
 
backgroundImage:
            "url('https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize:"cover",
            backgroundPosition:"center center",

*/