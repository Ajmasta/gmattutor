import React, {useState} from "react"
import Grid from '@material-ui/core/Grid'
import logo from "../BacktoHealthLogo2.png"

const BottomBar=() => {

return (
<Grid container item xs={12} justify="center" alignContent="center" style={{height:"50px",backgroundColor:"rgb(1,159,222)"}}>

<img alt="company logo" src={logo} width="auto" height="100%"></img>

</Grid>


)}

export default BottomBar