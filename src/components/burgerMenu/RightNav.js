import React from 'react';

function RightNav({ isOpen }) {
	let nav_class = '';

	if (isOpen) nav_class = 'right-nav nav-open';
	else nav_class = 'right-nav nav-closed';

	return (
		<ul className={nav_class}>
			<li>A</li>
			<li>B</li>
			<li>C</li>
			<li>D</li>
			<li>E</li>
		</ul>
	);
}

export default RightNav;
