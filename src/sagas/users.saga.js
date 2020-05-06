import { takeEvery, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/users.action';
import * as api from '../api/users.api';

function* getUsers() {
	try {
		const result = yield call(api.getUsers);
		yield put(
			actions.getUsersSuccess({
				items: result.data.data,
			})
		);
	} catch (e) {}
}

function* watchGetUsersRequest() {
	yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
	yield call(api.createUser, { firstName: action.payload.firstName, lastName: action.payload.lastName });
	yield call(getUsers);
}

function* watchCreateUserRequest() {
	yield takeLatest(actions.Types.CREATE_USERS_REQUEST, createUser);
}

const usersSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)];

export default usersSagas;
