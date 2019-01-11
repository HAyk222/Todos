import React from 'react';
import {connect} from 'react-redux'
import Layout from './HOC/Layout';
import Todos from './Components/Todos';
import Filter from './Components/Filter';
import Loader from './Components/Loader'
import './App.css';

const App = (props) => {
  return (
    <Layout>
    	{props.fetch && <Loader />}
      <Todos />
      <Filter />
    </Layout>
  );
}

export default connect(
  (state) => ({fetch: state.todo.fetch})
)(App)
