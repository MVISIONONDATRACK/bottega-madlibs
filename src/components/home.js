import React, { Component } from 'react';

import Header from './header';

class Home extends Component {
  render() {
    return (
      <div className="home">
          { Header("Bottega Madlibs", "Fill out the fields below and click the generate button to see the Mad Lib story.")}
          { Header('User Profile Settings')}
      </div> 
    );
  }
}

export default Home;