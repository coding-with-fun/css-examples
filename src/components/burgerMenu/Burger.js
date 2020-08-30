import React, { useState } from 'react';
import RightNav from './RightNav';

function Burger() {
	const [isOpen, setIsOpen] = useState(false);

	let burger_class = '';

	if (isOpen) burger_class = 'burger-lines burger-open';
	else burger_class = 'burger-lines burger-closed';

	console.log(burger_class);
	return (
		<>
			<div className='burger' onClick={() => setIsOpen(!isOpen)}>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
			</div>

			<RightNav isOpen={isOpen} />
		</>
	);
}

export default Burger;
