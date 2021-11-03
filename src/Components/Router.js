import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home/index";
import Search from "Routes/Search/index";
import TV from "Routes/TV/index";
import Header from "Components/Header";
import Detail from "Routes/Detail/index"

const AppRouter = () => (
    <Router>      
        <> 
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/tv" exact component={TV} />
                <Route path="/movie/:id" component={Detail}/>
                <Route path="/tv/:id" component={Detail}/>
                <Redirect from="*" to="/" />
            </Switch>
        </> 
    </Router>
)

export default AppRouter;
