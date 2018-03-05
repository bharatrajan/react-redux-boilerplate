import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, withRouter } from 'react-router-dom';

import View1 from '../View1/View1';
import View2 from '../View2/View2';
import View3 from '../View3/View3';
import View4 from '../View4/View4';
import './MainContainer.css';

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">React Redux Boilerplate</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">View1</Link></li>
              <li><Link to="/View2">View2</Link></li>
              <li><Link to="/View3">View3</Link></li>
              <li><Link to="/View4">View4</Link></li>
            </ul>
          </div>
        </nav>    
        <div className="container">
            <Route path="/" exact render={(windowCtx) =>
              (<View1
                match
                location={windowCtx.location}
                history={windowCtx.history}>
                >
              </View1>
              )}>
          </Route>

          <Route path="/View2" exact render={(windowCtx) =>
              (<View2
                match
                location={windowCtx.location}
                history={windowCtx.history}>
                >
              </View2>
              )}>
          </Route>

          <Route path="/View3" exact render={(windowCtx) =>
            (<View3
              match
              location={windowCtx.location}
              history={windowCtx.history}>
              >
            </View3>
            )}>
        </Route>

          <Route path="/View4" exact render={(windowCtx) =>
            (<View4
              match
              location={windowCtx.location}
              history={windowCtx.history}>
              >
            </View4>
            )}>
        </Route>
        </div>
      </div>
    );
  }
}

export default withRouter(MainContainer);
