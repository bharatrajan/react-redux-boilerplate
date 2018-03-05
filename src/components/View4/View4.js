import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { sampleActionDispatcher } from '../../actions/actions';
import { connect } from 'react-redux';

import './View4.css';

class View4 extends Component {
  render() {
    console.log(" this.props.bp_data View4: ", this.props.bp_data)
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

const mapStateToProps = (state, propsFromParent) => state;

const mapDispatchToProps = dispatch => ({
  dispatchSampleAction: () => dispatch(sampleActionDispatcher()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View4));
