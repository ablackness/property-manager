import React from 'react';
import PropertySearch from './components/PropertySearch/index'

export default class App extends React.Component {
  constructor(){
    super();
  }

  render() {
      return(
        <div>
            <PropertySearch />
        </div>
      )
  }
}