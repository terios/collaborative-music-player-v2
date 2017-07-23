import React, {Component} from 'react';

import {HomePage, ContactPage} from 'components'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/contact" component={ContactPage}/>
    </div>
  )
}

export default App;
