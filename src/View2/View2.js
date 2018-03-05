import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './View2.css';

class View2 extends Component {
  render() {
    return (
      <div className="View2">
        View2
      </div>
    );
  }
}

View2.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(View2);
