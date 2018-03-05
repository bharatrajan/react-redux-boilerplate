import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './View4.css';

class View4 extends Component {
  render() {
    return (
      <div className="View4">
        View4
      </div>
    );
  }
}

View4.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(View4);
