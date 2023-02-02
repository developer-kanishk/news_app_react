import News from './News'
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function app(){
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Switch>
        <Route exact path="/">
            <News pagesize="10" category="general"/>
          </Route>
          <Route exact path="/business">
            <News pagesize="10" category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News pagesize="10" category="entertainment"/>
          </Route>
          <Route exact path="/sports">
            <News pagesize="10" category="sports"/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default app;