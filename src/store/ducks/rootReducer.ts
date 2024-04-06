import { combineReducers } from "redux";
import repositories from './repositories';
import singleRepositoryDetails  from './singleRepositoryDetails';


export default combineReducers({
    repositories,
    singleRepositoryDetails 
});