import { call, put } from 'redux-saga/effects';
import { loadSuccess, loadFailure } from '../repositories/actions';
import { searchForTermOnAPI } from '../../../services'; 

export function* load(searchTerm: string) : Generator<any, void, any> {
    try {   
        const response = yield call(searchForTermOnAPI, searchTerm);
        yield put(loadSuccess(response))
    } catch (err) {
        console.log('err', err)
        yield put(loadFailure());
    }
}
