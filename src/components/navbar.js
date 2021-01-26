import React, {useEffect, useState} from "react"
import Grid from '@material-ui/core/Grid'
import logo from "../gmatlogo.png"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const NavBar=()=>{
    const[scroll,setScroll] = useState(false)
    document.addEventListener("scroll",()=>{
        window.scrollY >0 ? setScroll(true): setScroll(false)})

        const small = useMediaQuery("(max-width:600px)")

    
    return(
        <Grid item container xs={12} 
        style={{borderBottom: scroll?"2px solid black":"",backgroundColor:scroll?"rgb(253,206,9)":"transparent",
        position:"fixed", height:"54px", width:"100%", transition: "all 1.2s cubic-bezier(.165,.84,.44,1)"}}>
        
        <Grid item xs={3} style={{maxHeight:"54px"}}>
        <img width="auto" height="100%" alt="logo" style={{maxHeight:"54px"}} src={logo}></img>

        </Grid>
        {!small? <Grid container  item xs={8} style={{color:"black", fontWeight:"700"}} display="row" justifycontent="center">
            <Grid item  xs={4} onClick={()=> {document.getElementById("solution").scrollIntoView(true)}}><p>Our Solution </p></Grid>
            <Grid item xs={4} onClick={()=> {document.getElementById("features").scrollIntoView(true)}}><p>Features</p></Grid>
            <Grid item  xs={4} onClick={()=> {document.getElementById("team").scrollIntoView(true)}}><p>Who are We? </p></Grid>
            
        </Grid> : "" 
        
         }
       
        </Grid>


    )
}

export default NavBar