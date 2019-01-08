import React, { Component } from 'react';
import Layout from './HOC/Layout';
import Todos from './Components/Todos';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Todos />
        <Filter />
      </Layout>
    );
  }
}

export default App;
