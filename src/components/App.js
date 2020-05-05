import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users.action';

function App({ getUsersRequest }) {
	useEffect(() => {
		getUsersRequest();
	});
	return (
		<div>
			<p>Test</p>
		</div>
	);
}

export default connect(null, { getUsersRequest })(App);
