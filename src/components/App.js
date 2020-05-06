import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUsersRequest } from '../actions/users.action';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

function App({ getUsersRequest, createUsersRequest, users }) {
	useEffect(() => {
		getUsersRequest();
	}, [getUsersRequest]);

	const handleSubmit = ({ firstName, lastName }) => {
		createUsersRequest({ firstName, lastName });
	};

	return (
		<div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
			<NewUserForm onSubmit={handleSubmit} />
			<UsersList users={users.items} />
		</div>
	);
}

export default connect(({ users }) => ({ users }), { getUsersRequest, createUsersRequest })(App);
