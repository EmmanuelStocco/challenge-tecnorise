import { call, put } from 'redux-saga/effects';
import { searchForTermOnAPI } from '../../../services'; 
import { loadSuccess, loadFailure } from '../repositories/actions';

export function* load(searchTerm: string) : Generator<any, void, any> {
    try {   
        const response = yield call(searchForTermOnAPI, searchTerm);
        yield put(loadSuccess(response))
    } catch (err) {
        console.log('err', err)
        yield put(loadFailure());
    }
}
