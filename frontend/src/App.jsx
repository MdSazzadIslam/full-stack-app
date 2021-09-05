import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact render={(props) => <Products {...props} />} />
          <Route
            path="/:id"
            exact
            render={(props) => <SingleProduct {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
