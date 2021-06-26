import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Steps from './components/Steps'
function App() {
  
  return (
    <Router>
    <body className="leading-normal tracking-normal text-white gradient">
    <div className="App">
      <Navbar/>
      <header className="App-header">
       <Switch>
         <Route exact path ="/">
           <Home/>
         </Route>
         <Route exact path ="/about-us">
           <AboutUs/>
         </Route>
         <Route exact path ="/step1">
           <Step1/>
         </Route>
         <Route exact path ="/step2">
           <Step2/>
         </Route>
         <Route exact path ="/step3">
           <Step3/>
         </Route>
         <Route exact path ="/steps">
           <Steps/>
         </Route>
       </Switch>
      </header>
      <Footer/>
    </div>
    </body>
    </Router>
    
  );
}

export default App;
