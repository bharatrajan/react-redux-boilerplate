import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import { Link, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { sampleActionDispatcher } from '../../actions/actions';
import { connect } from 'react-redux';

import './View2.css';

class View2 extends Component {
  render() {
    console.log(" this.props.bp_data View2: ", this.props.bp_data)
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

const mapStateToProps = (state, propsFromParent) => state;

const mapDispatchToProps = dispatch => ({
  dispatchSampleAction: () => dispatch(sampleActionDispatcher()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View2));
