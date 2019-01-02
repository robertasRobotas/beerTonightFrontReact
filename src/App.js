import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import styles from './App.module.css';
import Router from './hoc/Router';



class App extends Component {
  render() {
    return (
        <div>

            <div className={styles.App}>BeerToday</div>
            <div className={styles.BlankSpace}></div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
        </div>
    );
  }
}

export default App;
