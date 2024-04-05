import { call, put } from 'redux-saga/effects';
import { searchForTermOnAPI } from '../../../services'; 
import { loadSuccess, loadFailure } from '../repositories/actions';

export function* load() : Generator<any, void, any> {
    try { 
        const response = yield fetch("https://api.github.com/users/diego3g/repos");
        console.log('response...', response)
        yield put(loadSuccess(response.data))
    } catch (err) {
        console.log('err', err)
        yield put(loadFailure());
    }
}
