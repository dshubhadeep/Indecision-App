import React, { Component } from 'react';

// Stateless functional component
const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  
  Header.defaultProps = {
    title: 'Indecison'
  };

  export default Header;