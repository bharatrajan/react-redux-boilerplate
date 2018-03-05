import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import { Link, Route, withRouter } from 'react-router-dom';

import { sampleActionDispatcher } from '../../actions/actions';
import { connect } from 'react-redux';

import './View1.css';

class View1 extends Component {
  render() {
    console.log(" this.props.bp_data View1: ", this.props.bp_data) 
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

const mapStateToProps = (state, propsFromParent) => state;

const mapDispatchToProps = dispatch => ({
  dispatchSampleAction: () => dispatch(sampleActionDispatcher()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View1));
