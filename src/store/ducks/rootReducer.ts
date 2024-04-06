import { combineReducers } from "redux";
import repositories from './repositories';
import singleRepositoryReducer from './singleRepositoryDetails'; // Certifique-se do nome correto do diretório e do arquivo


export default combineReducers({
    repositories,
    singleRepositoryReducer
});