// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import User from "./User";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">
              <Switch>
                <UserProvider>
                  <Route path="/" component={Dashboard} exact={true}></Route>
                  <Route path="/user" component={User} exact={true}></Route>
                  <Route
                    path="/product"
                    component={Product}
                    exact={true}
                  ></Route>
                  <Route
                    path="/create-user"
                    component={CreateUser}
                    exact={true}
                  ></Route>
                  <Route
                    path="/user/edit/:id"
                    component={EditUser}
                    exact={true}
                  ></Route>
                </UserProvider>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;