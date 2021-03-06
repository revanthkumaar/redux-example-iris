import React from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
//IMPORT ACTIONS 
import {startAction} from 'actions/startAction';
import { stopAction } from 'actions/stopAction';


class App extends React.Component {

  render(){
    console.log(this.props);

  return (

    <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              "App-logo" +
              (this.props.rotating ? "":" App-logo-paused")
            }
            alt="logo"
            onClick={
               this.props.rotating ? this.props.stopAction : this.props.startAction
            }
          />
        
        </header>
      </div>
  );

  }

} 


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);