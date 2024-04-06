import { all, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';
import { loadRequest } from './repositories/actions';

import { SingleRepositoryDetailsTypes } from './singleRepositoryDetails/types';
import { loadSingleRepositoryDetails } from './singleRepositoryDetails/sagas';
import { loadSingleRepositoryRequest } from './singleRepositoryDetails/actions';


 interface LoadRequestAction extends ActionType<typeof loadRequest> {
    payload: {
        searchTerm: string;
    };
}

 interface LoadSingleRepositoryRequestAction extends ActionType<typeof loadSingleRepositoryRequest> {
    payload: {
        repoName: string;
        repoUser: string;
    };
} 

export default function* rootSaga(): Generator {
    return yield all([
        takeLatest<LoadRequestAction>(RepositoriesTypes.LOAD_REQUEST, (action) => load(action.payload.searchTerm)),
        takeLatest<LoadSingleRepositoryRequestAction>(SingleRepositoryDetailsTypes.LOAD_REQUEST, (action) => loadSingleRepositoryDetails(action.payload.repoName, action.payload.repoUser)),
    ]);
}
