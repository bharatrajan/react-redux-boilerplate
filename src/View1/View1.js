import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, withRouter } from 'react-router-dom';

import './View1.css';

class View1 extends Component {
  render() {
    console.log("this.props : ", this.props)

    return (
      <div className="View1">
        View1
      </div>
    );
  }
}

View1.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(View1);
