import { call, put } from 'redux-saga/effects';
import { searchSingleRepositoryDetailsById } from '../../../services'; 
import { loadSingleRepositorySuccess, loadSingleRepositoryFailure } from '../singleRepositoryDetails/actions';

export function* loadSingleRepositoryDetails(repoName: string, repoUser: string) : Generator<any, void, any> {
    try {   
        const response = yield call(searchSingleRepositoryDetailsById, repoName, repoUser);
        yield put(loadSingleRepositorySuccess(response))
    } catch (err) {
        console.log('err', err)
        yield put(loadSingleRepositoryFailure());
    }
}
