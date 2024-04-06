import { all, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { RepositoriesTypes } from './repositories/types'
import { load } from './repositories/sagas'
import { loadRequest } from './repositories/actions'; // Importe a action LOAD_REQUEST

// Crie uma interface para representar a action LOAD_REQUEST
interface LoadRequestAction extends ActionType<typeof loadRequest> {
    payload: {
        searchTerm: string;
    };
}

// Use a ActionType para inferir o tipo correto da action
export default function* rootSaga(): Generator {
    return yield all([
        takeLatest<LoadRequestAction>(RepositoriesTypes.LOAD_REQUEST, (action) => load(action.payload.searchTerm)),
    ]);
}
