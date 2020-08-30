import React from 'react';

function Burger({ isOpen, setIsOpen }) {
	let burger_class = '';

	if (isOpen) burger_class = 'burger-lines burger-open';
	else burger_class = 'burger-lines burger-closed';

	return (
		<>
			<div className='burger' onClick={() => setIsOpen(!isOpen)}>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
				<div className={burger_class}></div>
			</div>
		</>
	);
}

export default Burger;
