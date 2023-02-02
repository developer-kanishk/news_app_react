import News from './News'
import Navbar from "./Navbar";

//new version (v6) of react router dom has new additions
//switch is replaced by routes and using element for passing components 
//and likewise
//in this react app using v4

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function app(){
  return (
    <div className="container">
      <Router>
      <Navbar />

        <Switch>
          <Route exact path="/">
            <News pagesize="4" category="general"/>
          </Route>
          <Route exact path="/business">
            <News pagesize="4" category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News pagesize="4" category="entertainment"/>
          </Route>
          <Route exact path="/sports">
            <News pagesize="4" category="sports"/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default app;