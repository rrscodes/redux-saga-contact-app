import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUsersRequest, deleteUserRequest, userError } from '../actions/users.action';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

function App({ getUsersRequest, createUsersRequest, deleteUserRequest, userError, users }) {
	useEffect(() => {
		getUsersRequest();
	}, [getUsersRequest]);

	const handleSubmit = ({ firstName, lastName }) => {
		createUsersRequest({ firstName, lastName });
	};

	const onDeleteUserHandler = (userId) => {
		deleteUserRequest({ userId });
	};

	const closeAlert = () => {
		userError('');
	};

	return (
		<div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
			<Alert color='danger' isOpen={!!users.error} toggle={closeAlert}>
				{users.error}
			</Alert>
			<NewUserForm onSubmit={handleSubmit} />
			<UsersList users={users.items} onDeleteUser={onDeleteUserHandler} />
		</div>
	);
}

export default connect(({ users }) => ({ users }), {
	getUsersRequest,
	createUsersRequest,
	deleteUserRequest,
	userError,
})(App);
