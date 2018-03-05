import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './View3.css';

class View3 extends Component {
  render() {
    return (
      <div className="View3">
        View3
      </div>
    );
  }
}

View3.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(View3);
