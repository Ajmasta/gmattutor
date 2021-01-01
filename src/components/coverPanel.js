import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import { Parallax, Background } from 'react-parallax';
import background from "../background1.png"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const CoverPanel=() => {

    const large = useMediaQuery("(min-width:1210px)")
  const height= useMediaQuery("(min-height:900px)")? "900px":"800px"
    return (

   
        <Parallax 
         bgImage={background} 
         style={{width:"100%",height:`${height}`,zIndex:"-1", color:"white", display:"flex", direction:"column", alignItems:"center", justifyContent:"center"}} 
        strength={300}
        bgImageStyle={large?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}}
         bgStyle={{background:"cover"}}
         >
         
           <h1 style={{width:"90%", margin:"auto", marginBottom:"30px"}}> Don't wait for a doctor.<br/> Relieve your back pain now.</h1>
         <p style={{fontSize:"1.1rem", width:"50%", margin:"auto"}}> 
         Have you been suffering from back pain and unable to see a doctor ? <br /> 
          Our platform offers scientific-based solutions directly on your phone and helps you develop 
          long lasting habits to help you regain your autonomy. </p>
        
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