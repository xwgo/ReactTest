import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, createStore} from 'redux';
import reducers from './reducer/reducers';
import utils from './reducer/utils';
import RepairOrderManagement from './component/RepairOrderManagement';
import Immutable from 'immutable';
//const STORE_NAMESPACE = 'redux-demo';


 const middlewares = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f);
 const store = createStore(reducers, Immutable.fromJS(utils), middlewares);
/*
 store.subscribe(() => {
 const state = store.getState();
 utils.store(STORE_NAMESPACE, state);
 });
 */

// ReactDOM.render(<Provider store = {store}><RepairOrderManagement/></Provider> , document.getElementById('personnelManagement'));
ReactDOM.render(<Provider store = {store}><RepairOrderManagement/></Provider>, document.getElementById('personnelManagement'));