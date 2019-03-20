import React, { Component } from 'react';
import { render } from "react-dom"
import { Provider } from "react-redux";
import store from "./store/index";
import List from './components/List';
import Form from './components/Form';
import Post from './components/Posts';


const App = () => (
  <Provider store={store}>
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
      <h3>Articles</h3>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h3>Add a new article</h3>
        <Form />
      </div>
      <div className="col-md-4 offset-md-1">
      <h3>API posts</h3>
      <Post />
    </div>
    </div>
  </Provider>
)

export default App;
