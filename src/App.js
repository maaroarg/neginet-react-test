import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import Results from './components/Results';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results:[]
    }
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(res){
    this.setState({
      results:[res,...this.state.results]
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Calculator!</h1>
        <Results
          results={this.state.results}
        />
        <UserInput
          handleResults = {this.handleResults}
        />
      </div>
    );
  }
}

export default App;
