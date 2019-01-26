import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return(
      <header>
        <h1>{this.props.children}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
