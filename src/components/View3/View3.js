import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { sampleActionDispatcher } from '../../actions/actions';
import { connect } from 'react-redux';

import './View3.css';

class View3 extends Component {
  render() {
    console.log(" this.props.bp_data View3: ", this.props.bp_data)
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

const mapStateToProps = (state, propsFromParent) => state;

const mapDispatchToProps = dispatch => ({
  dispatchSampleAction: () => dispatch(sampleActionDispatcher()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View3));
