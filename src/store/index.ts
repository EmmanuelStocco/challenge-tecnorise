import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { RepositoriesState } from "./ducks/repositories/types";
import { SingleRepositoryDetailsState } from "./ducks/singleRepositoryDetails/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga"

export interface ApplicationState {
    repositories: RepositoriesState,
    singleRepositoryDetails: SingleRepositoryDetailsState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;
