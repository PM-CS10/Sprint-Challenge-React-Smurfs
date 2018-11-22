import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink, Link} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    this.getTheSmurfs();
  }

  getTheSmurfs() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {this.setState({smurfs: res.data})})
      .catch(err => {console.log(err)})
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div>
        <nav class='nav'>
          <NavLink to='/' className='navlink' exact activeClassName='navLink-selected'>Smurfs</NavLink>
          <NavLink to='/smurf-form' className='navlink' activeClassName='navLink-selected'>Add Smurf</NavLink>
        </nav>
        <div className="App">
          <Route exact path='/smurf-form' component={SmurfForm} />
          <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>} />
        </div>

        
      </div>
    );
  }
}

export default App;
