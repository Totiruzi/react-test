import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Component just got rendered
    componentDidMount() {
      this.authorizeNavigation();
    }

    componentDidUpdate() {
      this.authorizeNavigation();
    }

    authorizeNavigation = () => {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    };
    render() {
      return <ChildComponent {...this.props}/>;
    }
  }
  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };
  return connect(mapStateToProps)(ComposedComponent);
};
