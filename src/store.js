import {createStore} from 'redux-store';
import rotateReducer from 'reducers/rotateReducer'


function configureStore(state = {rotating:true}){
    return createStore(rotateReducer,state)
}

export default configureStore;