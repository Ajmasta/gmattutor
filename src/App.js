import logo from './logo.svg';
import './App.css';
import ReactGA from "react-ga"
import Grid from '@material-ui/core/Grid'
import NavBar from './components/navbar';
import CoverPanel from "./components/coverPanel"
import TeamPanel from './components/teamPanel';
import FeaturesPanel from './components/featuresPanel';
import OurApproach from './components/ourApproach';
import Solution from './components/solution';
import BottomBar from './components/bottomBar';

ReactGA.initialize("UA-180293375-2")
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <div className="App" >
  
      <Grid container direction="row" alignContent="space-between"> 
      <NavBar />
      <CoverPanel />
      <Solution />
      <FeaturesPanel id="features"/>
      <OurApproach id="approach"  />
      <TeamPanel id="team" />
      <BottomBar />
      </Grid>
    </div>
  );
}

export default App;
