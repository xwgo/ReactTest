import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import {QUERY_SUCCESS, QUERY_KEYVALUEITEMS} from '../action/actions';

/*const visibility = (state, action) => {
 if(state === undefined || state === null)
 state = ALL_TODOS;

 switch(action.type) {
 case SET_VISIBILITY:
 return action.payload;
 }

 return state;
 };*/

const columns = (state, action) => {
    if(state === undefined || state === null)
        state = Immutable.Map();
    return state
};

const query = (state, action) => {
    if(state === undefined || state === null)
        state = Immutable.Map();
    switch(action.type) {
        case QUERY_SUCCESS :
            let data = state.setIn(['dataSource'], Immutable.fromJS(action.json));
            if(action.files.Code){
                state= state.setIn(['dataSource'], Immutable.fromJS(action.json.filter(s=>s.Code === action.files.Code)))
                            .setIn(['filter'], Immutable.fromJS(action.files));
                return state;
            }
            return state = data;
        default:
            return state;
    }
    return state;
};

const keyValueItems = (state, action) => {
    if(state === undefined || state === null)
        state = Immutable.Map();

    switch(action.type) {
        case QUERY_KEYVALUEITEMS :
            state = state.setIn(['repairTypes'], Immutable.fromJS(action.keyValueItems.repairTypes));
        default:
            return state;
    }
    return state;
};

export default (combineReducers({
    management: combineReducers({
        columns,
        query,
        keyValueItems
    })
}));