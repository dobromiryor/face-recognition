import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style = {{
        padding : '0',
        margin : '0'
      }}>
        <p 
        onClick = { () => onRouteChange ('signout')}
        className="pointer" 
        style = {{
          padding : '0',
          margin : '1rem'
        }}>Sign Out</p>
      </nav>
    );
  } else {
    return(
      <nav className="flex" style = {{
        padding : '0',
        margin : '0'
      }}>
        <p 
        onClick = { () => onRouteChange ('signup')}
        className="pointer" 
        style = {{
          padding : '0',
          margin : '1rem'
        }}>Sign Up</p>
                <p 
        onClick = { () => onRouteChange ('signin')}
        className="pointer" 
        style = {{
          padding : '0',
          margin : '1rem'
        }}>Sign In</p>
      </nav>
    );
  }
}

export default Navigation;