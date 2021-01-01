import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import NavBar from './components/navbar';
import CoverPanel from "./components/coverPanel"
import TeamPanel from './components/teamPanel';
import FeaturesPanel from './components/featuresPanel';
import OurApproach from './components/ourApproach';
function App() {
  return (
    <div className="App" >
  
      <Grid container direction="row" alignContent="space-between"> 
      <NavBar />
      <CoverPanel />
     
      <OurApproach id="approach"  />
      <FeaturesPanel id="features"/>
    
      <TeamPanel id="team" />
      </Grid>
    </div>
  );
}

export default App;
