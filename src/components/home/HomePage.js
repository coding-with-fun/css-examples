import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
	const history = useHistory();
	return (
		<div className='home-page'>
			<button onClick={() => history.push('flexbox')}>Flex box</button>
		</div>
	);
}

export default HomePage;
